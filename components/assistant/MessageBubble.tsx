import React from "react";
import { CivixIcon } from "../Icons";
import { ActionIcon } from "../ActionIcon";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
}

export function MessageBubble({ role, content }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
      {/* Avatar/Icon Row */}
      <div className={`mb-2 flex items-center ${isUser ? "justify-end" : "justify-start"}`}>
        {isUser ? (
          <div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center text-[10px] text-white font-bold">U</div>
        ) : (
          <CivixIcon size={18} />
        )}
      </div>

      {/* Message Bubble */}
      <div
        className={`max-w-[85%] md:max-w-[80%] px-5 py-3 rounded-2xl text-[15px] leading-relaxed ${
          isUser ? "bg-[#171717] text-white" : "bg-[#F3F4F6] text-neutral-800"
        }`}
      >
        {content}
      </div>

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
    <div className="flex flex-col items-start animate-pulse">
      <div className="mb-2"><CivixIcon size={18} /></div>
      <div className="bg-[#F3F4F6] px-5 py-3 rounded-2xl">
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce"></div>
          <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce delay-150"></div>
          <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
}
