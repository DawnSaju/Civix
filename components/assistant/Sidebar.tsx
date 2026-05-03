import React from "react";
import { CivixIcon } from "../Icons";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-[60] w-72 bg-white/95 backdrop-blur-xl border-r border-neutral-200/30 shadow-[1px_0_10px_rgba(0,0,0,0.02)] transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full p-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <CivixIcon size={24} />
            <span className="text-xl font-medium serif tracking-tight">Civix</span>
          </div>
          <button onClick={onClose} className="p-2 text-neutral-400 hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 space-y-8">
          <div>
            <h3 className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-4">Recent Chats</h3>
            <div className="space-y-1.5">
              <SidebarItem label="Election 2024 Dates" active />
              <SidebarItem label="Registration Guide" />
              <SidebarItem label="Local Polling Stations" />
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-4">Resources</h3>
            <div className="space-y-1.5">
              <SidebarItem label="Voter Bill of Rights" />
              <SidebarItem label="Am I Registered?" />
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-100">
          <button className="w-full flex items-center justify-between group">
            <div className="flex items-center gap-3 text-sm text-neutral-500 group-hover:text-black transition-colors">
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-[10px] font-bold">N</div>
              Settings
            </div>
            <svg className="w-4 h-4 text-neutral-300 group-hover:text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-300 ${
        active ? "bg-[#FF48C4]/10 text-[#FF48C4] font-semibold" : "text-neutral-500 hover:bg-neutral-50 hover:text-black"
      }`}
    >
      <svg
        className={`w-4 h-4 ${active ? "text-[#FF48C4]" : "text-neutral-400 opacity-60"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
      <span className="truncate">{label}</span>
    </button>
  );
}
