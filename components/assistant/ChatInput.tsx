import React from "react";

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e?: React.FormEvent) => void;
  compact?: boolean;
  useSearch?: boolean;
  onToggleSearch?: () => void;
}

export function ChatInput({ 
  value, 
  onChange, 
  onSubmit, 
  compact = false,
  useSearch = false,
  onToggleSearch
}: ChatInputProps) {
  return (
    <div className={`relative z-10 w-full transition-all duration-500 ${compact ? "max-w-full" : "max-w-2xl"}`}>
      <form
        onSubmit={onSubmit}
        className={`rounded-2xl bg-white/95 backdrop-blur-sm border border-neutral-200/70 px-5 pt-5 pb-4 md:px-6 md:pt-6 md:pb-5 transition-all duration-300 focus-within:ring-4 focus-within:ring-[#FF48C4]/5 focus-within:border-[#FF48C4]/20 shadow-[0_1px_2px_rgba(40,30,30,0.04),0_12px_32px_-8px_rgba(60,45,45,0.12),0_30px_60px_-20px_rgba(60,45,45,0.18)]`}
      >
        <label htmlFor="civix-input" className="sr-only">Ask Civix</label>
        <input
          id="civix-input"
          value={value}
          onChange={onChange}
          placeholder="Need help with election dates, registration, or voting?"
          className="w-full bg-transparent text-[15px] md:text-base text-neutral-800 placeholder:text-neutral-400 focus:outline-none py-1"
          type="text"
          autoComplete="off"
        />
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Attachment Icon */}
            <button
              type="button"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#E6E6E6] hover:bg-neutral-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600">
                <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />
              </svg>
            </button>

            {/* Google Search Toggle (Moved Here) */}
            {onToggleSearch && (
              <button
                type="button"
                onClick={onToggleSearch}
                className={`flex items-center gap-2 px-3 h-9 rounded-full text-[12px] font-medium transition-all duration-300 border ${
                  useSearch 
                    ? "bg-[#FF48C4]/10 border-[#FF48C4]/30 text-[#FF48C4] shadow-sm" 
                    : "bg-white border-neutral-200 text-neutral-500 hover:border-neutral-300"
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${useSearch ? "bg-[#FF48C4] animate-pulse" : "bg-neutral-300"}`}></div>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden sm:inline">Search</span>
              </button>
            )}
          </div>

          <button
            type="submit"
            disabled={!value.trim()}
            className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
              value.trim() ? "bg-black hover:bg-neutral-800 scale-100 shadow-md" : "bg-neutral-200 scale-95 opacity-50 cursor-not-allowed"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
