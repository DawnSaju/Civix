import React from "react";

export function HeroIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 animate-in zoom-in-95 duration-1000">
      <div className="w-[520px] h-[520px] md:w-[620px] md:h-[620px] opacity-90">
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="petalGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F7B8D1" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#F3D9E3" stopOpacity="0.4" />
            </radialGradient>
            <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          <g filter="url(#softBlur)" opacity="0.95">
            <ellipse cx="400" cy="280" rx="70" ry="140" fill="url(#petalGrad)" />
            <ellipse cx="400" cy="520" rx="70" ry="140" fill="url(#petalGrad)" />
            <ellipse cx="400" cy="340" rx="55" ry="110" fill="#F09BC0" opacity="0.55" transform="rotate(-15 400 340)" />
            <ellipse cx="400" cy="460" rx="55" ry="110" fill="#F09BC0" opacity="0.55" transform="rotate(15 400 460)" />
            <ellipse cx="280" cy="400" rx="100" ry="38" fill="#D9CFC2" opacity="0.75" transform="rotate(-25 280 400)" />
            <ellipse cx="520" cy="400" rx="100" ry="38" fill="#D9CFC2" opacity="0.75" transform="rotate(25 520 400)" />
            <ellipse cx="270" cy="470" rx="90" ry="32" fill="#C9BCAA" opacity="0.55" transform="rotate(25 270 470)" />
            <ellipse cx="530" cy="470" rx="90" ry="32" fill="#C9BCAA" opacity="0.55" transform="rotate(-25 530 470)" />
            <path d="M210 380 Q280 400 350 415" stroke="#A89B86" strokeWidth="1" opacity="0.4" fill="none" />
            <path d="M590 380 Q520 400 450 415" stroke="#A89B86" strokeWidth="1" opacity="0.4" fill="none" />
            <path d="M210 490 Q280 470 350 460" stroke="#A89B86" strokeWidth="1" opacity="0.35" fill="none" />
            <path d="M590 490 Q520 470 450 460" stroke="#A89B86" strokeWidth="1" opacity="0.35" fill="none" />
          </g>
          <g opacity="0.7">
            <circle cx="240" cy="340" r="4" fill="#D9CFC2" />
            <circle cx="560" cy="340" r="4" fill="#D9CFC2" />
            <circle cx="220" cy="520" r="3" fill="#D9CFC2" />
            <circle cx="580" cy="520" r="3" fill="#D9CFC2" />
            <circle cx="320" cy="240" r="2.5" fill="#E8B8CC" />
            <circle cx="480" cy="240" r="2.5" fill="#E8B8CC" />
            <circle cx="320" cy="560" r="2.5" fill="#E8B8CC" />
            <circle cx="480" cy="560" r="2.5" fill="#E8B8CC" />
            <circle cx="180" cy="400" r="3" fill="#D9CFC2" />
            <circle cx="620" cy="400" r="3" fill="#D9CFC2" />
          </g>
          <g fill="#FF48C4" opacity="0.55">
            <path d="M260 250 L262 256 L268 258 L262 260 L260 266 L258 260 L252 258 L258 256 Z" />
            <path d="M540 250 L542 256 L548 258 L542 260 L540 266 L538 260 L532 258 L538 256 Z" />
            <path d="M260 550 L262 556 L268 558 L262 560 L260 566 L258 560 L252 558 L258 556 Z" />
            <path d="M540 550 L542 556 L548 558 L542 560 L540 566 L538 560 L532 558 L538 556 Z" />
          </g>
        </svg>
      </div>
    </div>
  );
}
