import React, { useState } from "react";

interface ThoughtStep {
  label: string;
  content?: string;
}

interface ThoughtProcessProps {
  thoughts: string;
}

export function ThoughtProcess({ thoughts }: ThoughtProcessProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Parse the thoughts into steps. Expecting simple lines or bullet points.
  const steps: ThoughtStep[] = thoughts
    .split("\n")
    .map((line) => line.trim().replace(/^[*-]\s*/, ""))
    .filter((line) => line.length > 0)
    .map((line) => ({ label: line }));

  if (steps.length === 0) return null;

  return (
    <div className="mb-6 w-full max-w-xl animate-in fade-in duration-700">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-[13px] font-medium text-neutral-400 hover:text-neutral-600 transition-colors group"
      >
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
        <span>Reasoning Process</span>
      </button>

      {isExpanded && (
        <div className="mt-4 ml-2 pl-4 border-l-2 border-[#F3D9E3]/30 space-y-4 animate-in slide-in-from-top-2 duration-500">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connection Dot */}
              <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#F3D9E3]/50" />
              
              <div className="flex flex-col gap-1">
                <span className="text-[14px] text-neutral-500 leading-tight">
                  {step.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
