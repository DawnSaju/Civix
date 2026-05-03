"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export async function getGeminiResponse(
  userPrompt: string, 
  history: { role: "user" | "model"; parts: { text: string }[] }[],
  useSearch: boolean = false
) {
  if (!genAI) {
    return JSON.stringify({ thought: "Configuration error", answer: "Error: GEMINI_API_KEY is not set." });
  }

  const MAX_RETRIES = 3;
  let retryCount = 0;

  while (retryCount < MAX_RETRIES) {
    try {
      const tools: any[] = [];
      if (useSearch) {
        tools.push({ googleSearchRetrieval: {} });
      }

      const model = genAI.getGenerativeModel({
        model: "gemini-3.1-flash-lite-preview",
        tools: tools,
        systemInstruction: `You are Civix, a helpful election assistant. 
        IMPORTANT: You must respond in a valid JSON format with three keys:
        1. "thought": A list of short, professional bullet points describing your reasoning.
        2. "answer": Your final response in markdown.
        3. "sources": If search was used, provide an array of objects with "title" and "url".
        
        If you use search, ensure your answer is grounded in the latest official election data.`,
      });

      const chat = model.startChat({
        history: history,
      });

      const result = await chat.sendMessage(userPrompt);
      const response = await result.response;
      
      const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
      let groundedSources: { title: string; url: string }[] = [];

      if (groundingMetadata?.groundingChunks) {
        groundedSources = groundingMetadata.groundingChunks
          .filter((chunk: any) => chunk.web)
          .map((chunk: any) => ({
            title: chunk.web.title || "Source",
            url: chunk.web.uri || "#"
          }));
      } else if (groundingMetadata?.searchEntryPoint?.renderedContent) {
        groundedSources = [{ title: "Google Search Results", url: "https://google.com/search?q=" + encodeURIComponent(userPrompt) }];
      }

      groundedSources = Array.from(new Map(groundedSources.map(s => [s.url, s])).values());
      const text = response.text();
      
      try {
        const cleaned = text.replace(/```json\n?|\n?```/g, "").trim();
        const parsed = JSON.parse(cleaned);
        const finalSources = groundedSources.length > 0 ? groundedSources : (parsed.sources || []);
        
        return JSON.stringify({
          ...parsed,
          sources: finalSources
        });
      } catch (e) {
        return JSON.stringify({
          thought: ["Direct response generated"],
          answer: text,
          sources: groundedSources
        });
      }
    } catch (error: any) {
      console.error(`Gemini API Attempt ${retryCount + 1} Error:`, error);
      
      const isRateLimit = error.status === 429 || error.message?.includes("429") || error.message?.includes("quota");
      
      if (isRateLimit && retryCount < MAX_RETRIES - 1) {
        retryCount++;
        const waitTime = Math.pow(2, retryCount) * 1000; // 2s, 4s, 8s
        console.log(`Rate limited. Retrying in ${waitTime}ms...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }

      if (isRateLimit) {
        return JSON.stringify({
          thought: ["Quota exceeded"],
          answer: "You've been rate limited. Search grounding has strict limits on the free tier. Please try again in a few minutes or disable search mode.",
          sources: []
        });
      }

      return JSON.stringify({ 
        thought: ["Internal error occurred"], 
        answer: "I'm sorry, I encountered an error while processing your request.",
        sources: []
      });
    }
  }
}
