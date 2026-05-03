"use client";

import React, { useState, useEffect, useRef } from "react";
import { CivixIcon, StarIcon } from "../../components/Icons";
import { Sidebar } from "../../components/assistant/Sidebar";
import { ChatInput } from "../../components/assistant/ChatInput";
import { MessageBubble, TypingIndicator } from "../../components/assistant/MessageBubble";
import { HeroIllustration } from "../../components/assistant/HeroIllustration";

type Message = {
  role: "user" | "assistant";
  content: string;
};

/**
 * Civix Assistant Chat Page
 * Refactored into modular components.
 */
export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isChatting = messages.length > 0;

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { role: "user", content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: getMockResponse(userMessage.content),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getMockResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("date")) return "The general election is scheduled for November 5, 2024. Early voting dates vary by state—would you like me to check yours?";
    if (lowerInput.includes("register")) return "You can usually register online, by mail, or in person at your local election office. I can help you find the specific link for your state!";
    if (lowerInput.includes("vote")) return "Voting is your voice! You can vote in person on election day, or via mail-in ballot in most jurisdictions. What's your zip code?";
    return "That's a great question about our civic process. I'm here to help you navigate it. Could you tell me a bit more about what you're looking for?";
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#F7F4EF] font-sans text-neutral-900">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.6)_0%,rgba(247,244,239,0.2)_45%,rgba(230,220,215,0.45)_100%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_55%,rgba(120,90,80,0.08)_100%)]"></div>

      {/* Sidebar Overlay */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Sidebar Toggle */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-8 left-8 z-[55] p-3 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200/50 shadow-sm hover:shadow-md transition-all duration-300 group"
        >
          <svg className="w-5 h-5 text-neutral-500 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      )}

      {/* Main Content Area */}
      <main className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {!isChatting ? (
          /* Landing State */
          <div className="w-full max-w-3xl flex flex-col items-center text-center px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex items-center gap-3 mb-10">
              <CivixIcon size={30} />
              <span className="text-[2.25rem] leading-none tracking-tight serif font-medium">Civix</span>
            </div>
            <p className="text-sm md:text-[15px] text-neutral-500 tracking-wide mb-3">Your election guide, made simple.</p>
            <div className="mb-10"><StarIcon size={10} /></div>
            <div className="relative w-full flex items-center justify-center">
              <HeroIllustration />
              <ChatInput
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onSubmit={handleSendMessage}
              />
            </div>
            <div className="mt-16 md:mt-20 max-w-md">
              <p className="text-neutral-800 leading-relaxed serif text-[15px] md:text-base">
                Civix is here to help you make sense of elections.<br />Ask anything. We’ve got you.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="block h-px w-10 bg-neutral-300/80"></span>
                <StarIcon size={12} />
                <span className="block h-px w-10 bg-neutral-300/80"></span>
              </div>
            </div>
          </div>
        ) : (
          /* Chatting State */
          <div className="w-full h-full flex flex-col max-w-3xl mx-auto">
            {/* Messages Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-6 py-12 space-y-12 scrollbar-hide"
            >
              {messages.map((msg, idx) => (
                <MessageBubble key={idx} role={msg.role} content={msg.content} />
              ))}

              {isTyping && <TypingIndicator />}
            </div>

            {/* Bottom Input Area */}
            <div className="px-6 pb-10 pt-4">
              <div className="max-w-2xl mx-auto">
                <ChatInput
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onSubmit={handleSendMessage}
                  compact
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
