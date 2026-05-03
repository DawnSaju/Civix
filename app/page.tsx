"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingIntro } from "../components/landing/LoadingIntro";
import { Navbar } from "../components/landing/Navbar";
import Link from "next/link";

export default function LandingPage() {
  const [showUI, setShowUI] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#F7F4EF] text-neutral-900">
      {/* Intro Sequence */}
      <LoadingIntro onComplete={() => setShowUI(true)} />

      {/* Main Landing UI */}
      <AnimatePresence>
        {showUI && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10 flex flex-col min-h-screen grid-background"
          >
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center px-6 grid-background shrink-0">
              <motion.div
                initial={{ scale: 0.98, opacity: 0, filter: "blur(10px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col items-center gap-12"
              >
                {/* Logo and Wordmark Container */}
                <div className="flex items-center" role="img" aria-label="Civix logo" style={{ gap: "18px" }}>
                  <svg width="80" height="102" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M8.38886 9.71168C10.2463 9.56689 12.2436 9.7746 14.0823 9.65765C18.2 9.39577 22.1049 10.9269 24.0009 14.843C27.4057 21.8753 21.4822 27.5044 15.6511 30.3952C12.1672 31.8742 12.3904 31.7841 12.5397 28.343C9.20837 28.356 6.54303 28.5678 3.67828 26.3915C1.68021 24.8793 0.380251 22.6224 0.0749447 20.1358C-0.241472 17.6784 0.452399 15.1977 1.99813 13.2607C3.60243 11.2134 5.83051 10.0322 8.38886 9.71168Z" fill="#FE3DD5"></path>
                    <path d="M15.9902 15.4456C18.3293 15.3138 18.8161 17.1756 18.7247 19.1468C18.6478 20.8069 18.4887 21.7284 16.9339 22.4167C13.8368 22.5424 13.9538 18.9991 14.5592 16.8394C14.7695 16.0894 15.3236 15.7584 15.9902 15.4456Z" fill="#FBFAF9"></path>
                    <path d="M8.01994 15.4527C11.1246 15.2444 11.0341 18.8467 10.4598 20.9794C10.2435 21.7826 9.6761 22.1012 8.96975 22.4261C5.84152 22.5093 5.99801 18.9931 6.60602 16.7776C6.80023 16.0701 7.39177 15.7358 8.01994 15.4527Z" fill="#FBFAF9"></path>
                    <path d="M12.2241 0C12.5166 0.046617 12.6272 0.0933736 12.9075 0.195382C13.6912 0.924938 13.5671 4.59863 12.9199 5.44706C12.5165 5.42005 12.4566 5.41566 12.0898 5.24948C11.3387 4.48153 11.4678 0.901353 12.2241 0Z" fill="#FE3DD5"></path>
                    <path d="M3.95646 2.17864C4.10624 2.20346 4.34503 2.27613 4.49987 2.31753C5.35504 3.06313 6.62989 4.9843 6.96331 6.10434C6.87306 6.57229 6.86579 6.45493 6.42127 6.83458L5.98334 6.78248C5.31457 6.3303 3.63717 4.01261 3.46243 3.08342C3.39166 2.70678 3.70972 2.4641 3.95646 2.17864Z" fill="#FE3DD5"></path>
                    <path d="M20.6709 2.06389C21.0805 2.28313 21.3043 2.35374 21.4959 2.78577C21.5907 3.84123 19.7679 5.99549 19.0576 6.94839C17.2831 6.17455 18.5401 5.01283 19.2757 3.85659C19.6479 3.27141 20.2285 2.61685 20.6709 2.06389Z" fill="#FE3DD5"></path>
                  </svg>
                  <span className="civix-wordmark">Civix</span>
                </div>

                {/* Subtext and Action */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center gap-12"
                >
                  <p className="text-[19px] text-neutral-500 font-medium tracking-[-0.02em] max-w-md text-center leading-[1.6]">
                    The interactive election navigation assistant built for modern civic participation.
                  </p>

                  <Link
                    href="/assistant"
                    className="flex items-center justify-center no-underline"
                    style={{
                      width: '154px',
                      height: '48px',
                      backgroundImage: 'linear-gradient(to top, #FE3DD5 0%, #ff5fd9 80%, #ff7eec 100%)',
                      borderRadius: '30px',
                      border: 'none',
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'white',
                      textShadow: 'rgba(0,0,0,0.1) 0px 1px',
                      transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                      boxShadow: '0 4px 6px -1px rgba(254, 61, 213, 0.2), 0 2px 4px -1px rgba(254, 61, 213, 0.1)'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(254, 61, 213, 0.3), 0 4px 6px -2px rgba(254, 61, 213, 0.2)')}
                    onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(254, 61, 213, 0.2), 0 2px 4px -1px rgba(254, 61, 213, 0.1)')}
                    onMouseDown={(e) => {
                      e.currentTarget.style.transform = 'scale(0.96)';
                      e.currentTarget.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1)';
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(254, 61, 213, 0.3), 0 4px 6px -2px rgba(254, 61, 213, 0.2)';
                    }}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </section>

            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />


            <section className="relative min-h-screen flex items-center justify-center px-6 py-24 grid-background shrink-0">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ backgroundColor: 'rgb(39, 35, 35)', width: '100%', maxWidth: '1200px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative', borderRadius: '48px', boxShadow: '0 40px 100px -20px rgba(0,0,0,0.3)' }}
              >
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <svg aria-hidden="true" width="290" height="302" viewBox="0 0 290 302" fill="none" style={{ position: 'absolute', top: '-28px', right: '-32px', pointerEvents: 'none', zIndex: 0 }}>
                    <ellipse cx="145" cy="151" rx="126" ry="138" stroke="#6b4e52" strokeWidth="1.6" strokeDasharray="6 5"></ellipse>
                  </svg>
                  <div aria-hidden="true" style={{ position: 'absolute', top: '-12px', right: '46px', width: '44px', height: '11px', backgroundColor: 'rgb(223, 187, 192)', borderRadius: '99px', transform: 'rotate(-10deg)', zIndex: 2 }}></div>
                  <div aria-hidden="true" style={{ position: 'absolute', bottom: '12px', right: '-4px', width: '46px', height: '11px', backgroundColor: 'rgb(237, 87, 168)', borderRadius: '99px', zIndex: 2 }}></div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 1 }}>
                    <svg width="54" height="54" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0, display: 'block' }}>
                      <path d="M8.38886 9.71168C10.2463 9.56689 12.2436 9.7746 14.0823 9.65765C18.2 9.39577 22.1049 10.9269 24.0009 14.843C27.4057 21.8753 21.4822 27.5044 15.6511 30.3952C12.1672 31.8742 12.3904 31.7841 12.5397 28.343C9.20837 28.356 6.54303 28.5678 3.67828 26.3915C1.68021 24.8793 0.380251 22.6224 0.0749447 20.1358C-0.241472 17.6784 0.452399 15.1977 1.99813 13.2607C3.60243 11.2134 5.83051 10.0322 8.38886 9.71168Z" fill="#FE3DD5"></path>
                      <path d="M15.9902 15.4456C18.3293 15.3138 18.8161 17.1756 18.7247 19.1468C18.6478 20.8069 18.4887 21.7284 16.9339 22.4167C13.8368 22.5424 13.9538 18.9991 14.5592 16.8394C14.7695 16.0894 15.3236 15.7584 15.9902 15.4456Z" fill="#FBFAF9"></path>
                      <path d="M8.01994 15.4527C11.1246 15.2444 11.0341 18.8467 10.4598 20.9794C10.2435 21.7826 9.6761 22.1012 8.96975 22.4261C5.84152 22.5093 5.99801 18.9931 6.60602 16.7776C6.80023 16.0701 7.39177 15.7358 8.01994 15.4527Z" fill="#FBFAF9"></path>
                      <path d="M12.2241 0C12.5166 0.046617 12.6272 0.0933736 12.9075 0.195382C13.6912 0.924938 13.5671 4.59863 12.9199 5.44706C12.5165 5.42005 12.4566 5.41566 12.0898 5.24948C11.3387 4.48153 11.4678 0.901353 12.2241 0Z" fill="#FE3DD5"></path>
                      <path d="M3.95646 2.17864C4.10624 2.20346 4.34503 2.27613 4.49987 2.31753C5.35504 3.06313 6.62989 4.9843 6.96331 6.10434C6.87306 6.57229 6.86579 6.45493 6.42127 6.83458L5.98334 6.78248C5.31457 6.3303 3.63717 4.01261 3.46243 3.08342C3.39166 2.70678 3.70972 2.4641 3.95646 2.17864Z" fill="#FE3DD5"></path>
                      <path d="M20.6709 2.06389C21.0805 2.28313 21.3043 2.35374 21.4959 2.78577C21.5907 3.84123 19.7679 5.99549 19.0576 6.94839C17.2831 6.17455 18.5401 5.01283 19.2757 3.85659C19.6479 3.27141 20.2285 2.61685 20.6709 2.06389Z" fill="#FE3DD5"></path>
                    </svg>
                    <span style={{ fontFamily: 'Lora, Georgia, serif', fontSize: 'clamp(38px, 4.6vw, 68px)', fontWeight: 400, color: 'rgb(242, 239, 238)', lineHeight: 1.08, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
                      Civix brings
                    </span>
                    <svg viewBox="1126 326 75 123" width="58" height="95" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0, display: 'block' }}>
                      <path d="M1146.14 366.435C1148.5 359.196 1164.26 330.597 1169.82 326.954C1174.3 326.054 1192.48 335.197 1193.32 339.042C1190.84 347.06 1173.56 368.133 1172.7 376.615L1172.84 378.546L1165.3 378.586L1161.84 376.184C1155.99 372.017 1152.46 369.881 1146.14 366.435Z" fill="#DFBBC0"></path>
                      <path d="M1182.91 396.422L1183.67 397.296C1182.18 401.13 1163.23 420.515 1159.38 424.555L1147.28 412.685C1147.07 412.448 1146.4 411.14 1146.27 410.904L1147.26 410.327C1151.17 413.096 1155.82 418.095 1159.3 421.599C1167.18 413.215 1174.91 404.699 1182.91 396.422Z" fill="#DFBBC0"></path>
                      <path d="M1191.55 369.802C1188.43 369.785 1184.47 370.108 1181.83 368.657V367.637C1189.76 364.341 1196.05 371.075 1199.79 376.998C1198.9 382.504 1198.83 427.678 1199.95 432.18C1200.29 446.852 1191.45 445.241 1178.76 444.68C1167.56 444.185 1136.13 447.058 1128.81 440.778C1126.43 434.73 1127.5 387.475 1127.54 377.567C1131.54 371.404 1135.65 365.962 1144.11 367.531L1144.88 368.732C1142.56 370.312 1138.81 369.94 1135.82 369.966C1134.07 371.78 1131.95 374.466 1130.27 376.469C1140.8 376.279 1151.31 376.184 1161.84 376.184L1165.3 378.586L1129.91 378.547C1129.87 387.176 1128.67 435.593 1131.32 439.765C1138.67 445.132 1169.96 441.074 1180.64 442.397C1192.42 443.857 1198.45 442.929 1198.31 430.025C1198.13 412.844 1198.86 395.633 1197.86 378.604L1172.84 378.546L1172.7 376.615C1179.87 375.917 1189.68 376.288 1197.07 376.367C1195.19 373.908 1193.78 371.968 1191.55 369.802Z" fill="#F2EFEE"></path>
                    </svg>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '6px', position: 'relative', zIndex: 1 }}>
                    <span style={{ fontFamily: 'Lora, Georgia, serif', fontSize: 'clamp(38px, 4.6vw, 68px)', fontWeight: 400, color: 'rgb(242, 239, 238)', lineHeight: 1.08, letterSpacing: '-0.02em', whiteSpace: 'nowrap', border: '2px solid rgb(223, 187, 192)', borderRadius: '9999px', padding: '3px clamp(18px, 2vw, 28px) 6px', display: 'inline-block' }}>
                      clarity
                    </span>
                    <span style={{ fontFamily: 'Lora, Georgia, serif', fontSize: 'clamp(38px, 4.6vw, 68px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
                      <span style={{ color: 'rgb(242, 239, 238)' }}>to voting</span>
                      <span style={{ color: 'rgb(254, 61, 213)' }}>.</span>
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '18px', paddingLeft: 'clamp(100px, 22%, 210px)', position: 'relative', zIndex: 1 }}>
                    <svg viewBox="763 586 224 72" width="148" height="47" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block' }}>
                      <path d="M833.355 588.821C842.376 586.884 851.267 592.62 853.218 601.64C855.169 610.66 849.454 619.557 840.433 621.524C831.387 623.496 822.464 617.759 820.505 608.717C818.545 599.675 824.301 590.762 833.355 588.821ZM841.258 619.154C846.311 617.57 850.107 613.375 851.185 608.191C852.263 603.008 850.45 597.648 846.442 594.183C842.441 590.719 836.874 589.693 831.893 591.503C824.431 594.216 820.513 602.388 823.052 609.904C825.599 617.421 833.681 621.528 841.258 619.154Z" fill="#DFBBC0"></path>
                      <path d="M789.524 604.985C796.55 603.649 803.347 608.203 804.779 615.208C806.211 622.213 801.747 629.069 794.76 630.595C790.155 631.601 785.365 630.051 782.223 626.539C779.081 623.028 778.073 618.097 779.584 613.633C781.096 609.171 784.894 605.867 789.524 604.985ZM793.674 628.692C799.533 627.792 803.631 622.422 802.952 616.535C802.272 610.649 797.057 606.354 791.147 606.813C787.123 607.125 783.591 609.611 781.94 613.295C780.29 616.977 780.786 621.267 783.232 624.478C785.678 627.688 789.685 629.305 793.674 628.692Z" fill="#DFBBC0"></path>
                      <path d="M879.465 605.052C886.454 603.775 893.173 608.334 894.569 615.296C895.957 622.257 891.507 629.05 884.568 630.557C879.98 631.555 875.204 629.999 872.085 626.487C868.958 622.975 867.979 618.053 869.505 613.612C871.04 609.17 874.845 605.898 879.465 605.052ZM882.919 628.746C888.846 628.142 893.206 622.908 892.732 616.967C892.25 611.026 887.115 606.557 881.155 606.908C877.196 607.142 873.669 609.502 871.938 613.077C870.207 616.65 870.55 620.88 872.828 624.132C875.106 627.383 878.967 629.149 882.919 628.746Z" fill="#DFBBC0"></path>
                      <path d="M835.371 627.825C838.368 627.798 841.364 628.181 844.254 628.961C853.651 631.555 858.533 636.833 863.137 645.027C872.869 634.226 886.021 630.552 897.786 642.212C900.758 645.16 902.954 650.033 902.717 654.314C899.712 652.466 900.904 644.006 890.854 639.326C885.458 636.817 879.278 636.603 873.726 638.733C861.725 643.443 865.848 651.63 864.452 654.795C858.255 650.075 864.272 632.961 837.184 629.554C826.954 630.165 817.802 634.982 813.326 644.868C812.086 647.608 811.244 653.491 809.392 655.275C808.46 653.345 809.365 649.209 809.681 646.856C786.457 618.843 771.999 654.654 770.939 655.282C765.949 647.13 788.566 621.299 810.597 645.021C811.574 643.172 812.689 641.401 813.935 639.722C819.737 631.805 825.991 629.247 835.371 627.825Z" fill="#DFBBC0"></path>
                      <path d="M966.233 603.448C970.479 602.941 972.503 602.451 976.193 604.882L977.989 606.044C980.047 607.364 979.598 605.129 983.01 606.065C982.88 608.768 978.969 608.39 978.692 609.296C978.022 611.446 978.022 612.448 976.414 614.821C971.074 618.107 957.767 617.739 950.917 617.981C945.17 618.608 942.264 618.65 936.516 618.527C934.785 616.778 932.458 613.645 930.866 611.628L935.838 605.562C943.39 604.515 958.183 604.022 966.233 603.448Z" fill="#ED57A8"></path>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
