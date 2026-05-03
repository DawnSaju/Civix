"use client";

import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-[#F7F4EF] flex flex-col items-center">
      {/* 1. Cinematic Brand Section */}
      <div
        className="relative w-full overflow-hidden min-h-[520px]"
      >
        {/* Background Track Pattern */}
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <pattern id="civix-track-bg" x="0" y="0" width="250" height="136" patternUnits="userSpaceOnUse">
              <rect x="5" y="10" width="240" height="48" rx="24" fill="none" stroke="#E0D3CB" strokeWidth="1.5"></rect>
              <rect x="130" y="78" width="240" height="48" rx="24" fill="none" stroke="#E0D3CB" strokeWidth="1.5"></rect>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="#F7F4EF"></rect>
        </svg>

        {/* Central Connecting Line */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '50%',
            height: 0,
            borderTop: '1.5px dashed rgba(254, 61, 213, 0.38)',
            zIndex: 1
          }}
        ></div>

        {/* Left Accent Bar */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '4.5%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '26px',
            height: '8px',
            background: 'rgb(254, 61, 213)',
            borderRadius: '4px',
            zIndex: 4
          }}
        ></div>

        {/* "Guidance" Badge */}
        <div
          style={{
            position: 'absolute',
            right: 'calc(50% + 278px)',
            top: '50%',
            transform: 'translateY(-50%)',
            background: '#F7F4EF',
            border: '1px solid rgba(254, 61, 213, 0.44)',
            borderRadius: '3px',
            padding: '5px 13px',
            zIndex: 4
          }}
        >
          <span className="civix-badge-label">Guidance</span>
        </div>

        {/* Main Brand Logo Pill */}
        <div
          role="img"
          aria-label="Civix logo"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '478px',
            height: '106px',
            background: 'rgb(255, 255, 255)',
            border: '1.5px dashed rgba(254, 61, 213, 0.52)',
            borderRadius: '53px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '18px',
            zIndex: 5,
            boxShadow: 'rgba(0, 0, 0, 0.04) 0px 1px 4px'
          }}
        >
          <svg width="52" height="66" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
            <path d="M8.38886 9.71168C10.2463 9.56689 12.2436 9.7746 14.0823 9.65765C18.2 9.39577 22.1049 10.9269 24.0009 14.843C27.4057 21.8753 21.4822 27.5044 15.6511 30.3952C12.1672 31.8742 12.3904 31.7841 12.5397 28.343C9.20837 28.356 6.54303 28.5678 3.67828 26.3915C1.68021 24.8793 0.380251 22.6224 0.0749447 20.1358C-0.241472 17.6784 0.452399 15.1977 1.99813 13.2607C3.60243 11.2134 5.83051 10.0322 8.38886 9.71168Z" fill="#FE3DD5"></path>
            <path d="M15.9902 15.4456C18.3293 15.3138 18.8161 17.1756 18.7247 19.1468C18.6478 20.8069 18.4887 21.7284 16.9339 22.4167C13.8368 22.5424 13.9538 18.9991 14.5592 16.8394C14.7695 16.0894 15.3236 15.7584 15.9902 15.4456Z" fill="#FBFAF9"></path>
            <path d="M8.01994 15.4527C11.1246 15.2444 11.0341 18.8467 10.4598 20.9794C10.2435 21.7826 9.6761 22.1012 8.96975 22.4261C5.84152 22.5093 5.99801 18.9931 6.60602 16.7776C6.80023 16.0701 7.39177 15.7358 8.01994 15.4527Z" fill="#FBFAF9"></path>
            <path d="M12.2241 0C12.5166 0.046617 12.6272 0.0933736 12.9075 0.195382C13.6912 0.924938 13.5671 4.59863 12.9199 5.44706C12.5165 5.42005 12.4566 5.41566 12.0898 5.24948C11.3387 4.48153 11.4678 0.901353 12.2241 0Z" fill="#FE3DD5"></path>
            <path d="M3.95646 2.17864C4.10624 2.20346 4.34503 2.27613 4.49987 2.31753C5.35504 3.06313 6.62989 4.9843 6.96331 6.10434C6.87306 6.57229 6.86579 6.45493 6.42127 6.83458L5.98334 6.78248C5.31457 6.3303 3.63717 4.01261 3.46243 3.08342C3.39166 2.70678 3.70972 2.4641 3.95646 2.17864Z" fill="#FE3DD5"></path>
            <path d="M20.6709 2.06389C21.0805 2.28313 21.3043 2.35374 21.4959 2.78577C21.5907 3.84123 19.7679 5.99549 19.0576 6.94839C17.2831 6.17455 18.5401 5.01283 19.2757 3.85659C19.6479 3.27141 20.2285 2.61685 20.6709 2.06389Z" fill="#FE3DD5"></path>
          </svg>
          <span className="civix-wordmark">Civix</span>
        </div>

        {/* "At Every Step" Badge */}
        <div
          style={{
            position: 'absolute',
            left: 'calc(50% + 278px)',
            top: '50%',
            transform: 'translateY(-50%)',
            background: '#F7F4EF',
            border: '1px solid rgba(254, 61, 213, 0.44)',
            borderRadius: '3px',
            padding: '5px 13px',
            zIndex: 4
          }}
        >
          <span className="civix-badge-label">At Every Step</span>
        </div>

        {/* Right Accent Bar */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '4.5%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '26px',
            height: '8px',
            background: 'rgb(254, 61, 213)',
            borderRadius: '4px',
            zIndex: 4
          }}
        ></div>
      </div>

      <div className="w-full bg-[#F7F4EF] py-18 px-8 flex flex-col gap-12 border-t border-black/[0.03]">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-10">

          {/* Social Row */}
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-8">
              <a target="_blank" rel="me" href="https://linkedin.com/in/dawnsaju" title="LinkedIn" aria-label="LinkedIn" className="text-black/40 hover:text-black/70 transition-all hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
              <a target="_blank" rel="me" href="https://x.com/DawnSaju" title="X" aria-label="X (formerly Twitter)" className="text-black/40 hover:text-black/70 transition-all hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                </svg>
              </a>
              <a target="_blank" rel="me" href="https://github.com/DawnSaju" title="GitHub" aria-label="GitHub" className="text-black/40 hover:text-black/70 transition-all hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Signature Line */}
          <div className="flex w-full items-center justify-center pt-12 border-t border-black/5">
            <span className="text-black/30 font-medium text-xs md:text-sm whitespace-nowrap flex items-center gap-3 transition-opacity hover:opacity-100">
              Made with
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block text-[#FE3DD5]">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              by
              <span className="text-black/70 font-semibold tracking-wide ml-0.5">Dawn Saju</span>
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .civix-wordmark {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-size: 64px;
          font-weight: 400;
          line-height: 1;
          color: #100C0A;
          letter-spacing: -0.012em;
          white-space: nowrap;
          display: block;
        }

        .civix-badge-label {
          font-family: 'Space Mono', 'Courier New', Courier, monospace;
          font-size: 10.5px;
          font-weight: 400;
          letter-spacing: 0.155em;
          text-transform: uppercase;
          color: #FE3DD5;
          white-space: nowrap;
          line-height: 1;
          display: block;
        }
      `}</style>
    </footer>
  );
}
