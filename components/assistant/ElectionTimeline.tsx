import React, { useState } from "react";

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  status: "completed" | "active" | "upcoming";
}

interface ElectionTimelineProps {
  events: TimelineEvent[];
}

export function ElectionTimeline({ events }: ElectionTimelineProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!events || events.length === 0) return null;

  return (
    <div className="mt-4 w-full animate-in fade-in duration-700">
      {/* View Toggle Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
          isOpen 
            ? "bg-[#1A1818] text-white border-black shadow-md" 
            : "bg-white text-neutral-600 border-neutral-100 hover:border-[#FF48C4]/30 hover:text-black shadow-sm"
        }`}
      >
        <div className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-[#FF48C4]" : "bg-neutral-300"}`} />
        <span className="text-[12px] font-bold tracking-tight">
          {isOpen ? "Hide Election Roadmap" : "View Election Roadmap"}
        </span>
        <svg 
          className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded Timeline Content */}
      {isOpen && (
        <div className="mt-6 ml-2 space-y-6 animate-in zoom-in-95 slide-in-from-top-2 duration-500 origin-top">
          <div className="relative space-y-6">
            {/* Minimalist Vertical Path */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-neutral-100" />

            {events.map((event, idx) => (
              <div key={idx} className="relative pl-8 group">
                {/* Simple Dot */}
                <div 
                  className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-[3px] border-[#F7F4EF] z-10 transition-all duration-500 ${
                    event.status === "active" 
                      ? "bg-[#FF48C4] shadow-[0_0_10px_rgba(255,72,196,0.3)]" 
                      : "bg-neutral-200"
                  }`}
                />

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-black uppercase tracking-widest ${
                      event.status === "active" ? "text-[#FF48C4]" : "text-neutral-400"
                    }`}>
                      {event.date}
                    </span>
                    {event.status === "active" && (
                      <div className="w-1 h-1 rounded-full bg-[#FF48C4] animate-pulse" />
                    )}
                  </div>
                  
                  <div className="bg-white rounded-2xl p-4 border border-neutral-100/50 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.03)]">
                    <h4 className="text-[15px] font-bold text-neutral-800 leading-tight mb-1.5">
                      {event.title}
                    </h4>
                    <p className="text-[13px] text-neutral-500 leading-relaxed font-medium">
                      {event.description}
                    </p>
                    
                    {event.status === "active" && (
                      <button className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-50 border border-neutral-100 text-[11px] font-bold text-neutral-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                        </svg>
                        Add to Calendar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
