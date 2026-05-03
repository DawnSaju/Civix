import React from "react";
import ReactMarkdown from "react-markdown";
import { CivixIcon } from "../Icons";
import { ActionIcon } from "../ActionIcon";

interface Source {
  title: string;
  url: string;
}

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
}

export function MessageBubble({ role, content, sources = [] }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
      {/* Avatar/Icon Row */}
      <div className={`mb-2 flex items-center ${isUser ? "justify-end" : "justify-start"}`}>
        {isUser ? (
          <div className="w-6 h-6 rounded-full bg-[#1A1818] flex items-center justify-center text-[10px] text-white font-bold">U</div>
        ) : (
          <CivixIcon size={18} />
        )}
      </div>

      {/* Message Bubble */}
      <div
        className={`max-w-[85%] md:max-w-[80%] px-5 py-3 rounded-2xl text-[15px] leading-relaxed ${
          isUser ? "bg-[#1A1818] text-white shadow-sm" : "bg-[#FFFBF7] border border-[#F3D9E3]/40 text-neutral-800 markdown-content shadow-[0_2px_10px_rgba(120,90,80,0.03)]"
        }`}
      >
        {isUser ? (
          content
        ) : (
          <ReactMarkdown>{content}</ReactMarkdown>
        )}
      </div>

      {/* Sources (Assistant Only) */}
      {!isUser && sources.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-1 duration-700">
          {sources.slice(0, 6).map((source, idx) => (
            <div key={idx} className="group relative">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFFBF7] border border-[#F3D9E3]/30 text-[11px] text-neutral-500 hover:border-[#FF48C4]/40 hover:text-black hover:scale-[1.02] transition-all duration-300 shadow-sm"
              >
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${new URL(source.url).hostname}&sz=32`} 
                  alt="" 
                  className="w-3.5 h-3.5 rounded-sm grayscale group-hover:grayscale-0 opacity-80"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://www.google.com/s2/favicons?domain=google.com&sz=32";
                  }}
                />
                <span className="truncate max-w-[140px] font-medium">{new URL(source.url).hostname}</span>
              </a>
              
              {/* Source Preview Card on Hover */}
              <div className="absolute bottom-full left-0 mb-3 w-64 p-4 rounded-xl bg-white border border-neutral-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-300 z-[100] pointer-events-none">
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src={`https://www.google.com/s2/favicons?domain=${new URL(source.url).hostname}&sz=32`} 
                    className="w-4 h-4 rounded-sm"
                    alt=""
                  />
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{new URL(source.url).hostname}</span>
                </div>
                <p className="text-[13px] font-semibold text-neutral-800 leading-tight mb-2 line-clamp-2">
                  {source.title}
                </p>
                <p className="text-[11px] text-neutral-500 truncate">
                  {source.url}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Action Icons (Assistant Only) */}
      {!isUser && (
        <div className="mt-2 flex items-center gap-3 px-1">
          <ActionIcon type="refresh" />
          <ActionIcon type="like" />
          <ActionIcon type="dislike" />
          <ActionIcon type="copy" />
          <ActionIcon type="share" />
        </div>
      )}
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex flex-col items-start gap-3 animate-in fade-in duration-500">
      <div className="mb-1"><CivixIcon size={18} /></div>
      <div className="flex items-center gap-4 bg-[#FFFBF7] border border-[#F3D9E3]/40 px-5 py-3 rounded-2xl shadow-sm">
        {/* Wave Animation */}
        <div className="flex items-center gap-[3px] h-4">
          <div className="w-[3px] bg-[#FF48C4] rounded-full animate-wave" style={{ animationDelay: "0ms" }}></div>
          <div className="w-[3px] bg-[#FF48C4] rounded-full animate-wave" style={{ animationDelay: "150ms" }}></div>
          <div className="w-[3px] bg-[#FF48C4] rounded-full animate-wave" style={{ animationDelay: "300ms" }}></div>
          <div className="w-[3px] bg-[#FF48C4] rounded-full animate-wave" style={{ animationDelay: "450ms" }}></div>
        </div>
        
        {/* Shimmer Text */}
        <span className="text-[13px] font-medium shimmer-text">Thinking...</span>
      </div>
    </div>
  );
}
