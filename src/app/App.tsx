import { useState, useEffect, useRef, useMemo } from "react";
import { Home, MapPin, Calendar, Clock, Copy, Check, Instagram, Facebook, Heart, ChevronDown, Send, Music, X } from "lucide-react";
import openinggSvg from "./components/gambar/openingg.svg";
import musicTrack from "./components/Musik/nadin.mp3";
import bungaOpeningKananSvg from "./components/gambar/bunga_opening_kanan.svg";
import bungaOpeningKiriSvg from "./components/gambar/bungan_opening_kiri.svg";
import gerbangTertutupPng from "./components/gambar/gerbang/gerbang_tertutup.png";
import gerbangTerbukaPng from "./components/gambar/gerbang/gerbsng_terbuka.png";
import burung01Png from "./components/gambar/burung/burung01.png";
import burung02Png from "./components/gambar/burung/burung02.png";
import burungBaru1Png from "./components/gambar/burung/burungbaru1.png";
import burungBaru2Png from "./components/gambar/burung/burungbaru2.png";
import burungBaru3Png from "./components/gambar/burung/burungbaru3.png";
import burungBaru4Png from "./components/gambar/burung/burungbaru4.png";
import hitungMundurSvg from "./components/gambar/hitungmundur.svg";
import bunga1Svg from "./components/gambar/1.svg";
import kiriAtasSvg from "./components/gambar/kiriatas.svg";
import kananAtasSvg from "./components/gambar/kananatas.svg";
import kiriBawahSvg from "./components/gambar/kiribawah.svg";
import kananBawahSvg from "./components/gambar/kananbawah.svg";
import bunga2Svg from "./components/gambar/2.svg";
import rumahSvg from "./components/gambar/rumah.svg";
import bg80Svg from "./components/gambar/80.svg";
import bg85Svg from "./components/gambar/85.svg";
import bunga2Png from "./components/gambar/bunga/bunga2.png";
import bunga8Png from "./components/gambar/bunga/bunga8.png";
import bunga9Png from "./components/gambar/bunga/bunga9.png";
import bunga10Png from "./components/gambar/bunga/bunga10.png";
import bunga11Png from "./components/gambar/bunga/bunga11.png";
import bunga3Png from "./components/gambar/bunga/bunga3.png";
import bunga5Png from "./components/gambar/bunga/bunga5.png";
import pohon1Png from "./components/gambar/pohon/pohon1.png";
import pohon2Png from "./components/gambar/pohon/pohon2.png";

import frame17Png from "./components/gambar/frames/frame17.png";
import frame16Png from "./components/gambar/frames/frame16.png";
import frame10Png from "./components/gambar/frames/frame10.png";
import frame1Png from "./components/gambar/frames/frame1.png";
import frame2Png from "./components/gambar/frames/frame2.png";
import frame4Png from "./components/gambar/frames/frame4.png";
import frame5Png from "./components/gambar/frames/frame5.png";
import frame8Png from "./components/gambar/frames/frame8.png";
import frame9Png from "./components/gambar/frames/frame9.png";

import pohonPng from "./components/gambar/pohon/pohon.png";
import pohon6Png from "./components/gambar/pohon/pohon6.png";
import pohon7Png from "./components/gambar/pohon/pohon7.png";
import pohon8Png from "./components/gambar/pohon/pohon8.png";
import pohon9Png from "./components/gambar/pohon/pohon9.png";
import pohon10Png from "./components/gambar/pohon/pohon10.png";

/* ─── Background Photo Overlays & Floral Assets ─── */
import bg1Png from "./components/gambar/bg/bg1.png";
import bg2Png from "./components/gambar/bg/bg2.png";
import bg3Png from "./components/gambar/bg/bg3.png";
import bg4Png from "./components/gambar/bg/bg4.png";
import bg5Png from "./components/gambar/bg/bg5.png";
import daun1Png from "./components/gambar/Daun/daun1.png";
import daun2Png from "./components/gambar/Daun/daun2.png";
import daun7Png from "./components/gambar/Daun/daun7.png";
import daun10Png from "./components/gambar/Daun/daun10.png";
import tanaman1Png from "./components/gambar/tanaman/tanaman1.png";
import tanaman5Png from "./components/gambar/tanaman/tanaman5.png";
import bunga1Png from "./components/gambar/bunga/bunga1.png";
import bunga6Png from "./components/gambar/bunga/bunga6.png";
import bunga7Png from "./components/gambar/bunga/bunga7.png";

/* ─── Side Trees Framing Component (Continuous Organic Swaying Animation) ─── */
function SideTrees({
  leftTree = pohon7Png,
  rightTree = pohon8Png,
  opacity = 0.85,
  scale = 1.4,
  top = "50%"
}: {
  leftTree?: string;
  rightTree?: string;
  opacity?: number;
  scale?: number;
  top?: string;
}) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      {leftTree && (
        <div
          className="absolute -left-[45%] sm:-left-[35%] w-[85%] max-w-[340px] h-auto pointer-events-none"
          style={{ top, opacity, transform: `translateY(-50%) scale(${scale})` }}
        >
          <img
            src={leftTree}
            alt=""
            className="w-full h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(74,58,50,0.18)] animate-living-tree-left pointer-events-none"
          />
        </div>
      )}
      {rightTree && (
        <div
          className="absolute -right-[45%] sm:-right-[35%] w-[85%] max-w-[340px] h-auto pointer-events-none"
          style={{ top, opacity, transform: `translateY(-50%) scale(${scale}) scaleX(-1)` }}
        >
          <img
            src={rightTree}
            alt=""
            className="w-full h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(74,58,50,0.18)] animate-living-tree-right pointer-events-none"
          />
        </div>
      )}
    </div>
  );
}

/* ─── Top Corner Floral Decoration (kiriatas.svg & kananatas.svg) ─── */
function CornerFloralDecor({
  position = "both",
  opacity = 0.9,
  className = "",
}: {
  position?: "left" | "right" | "both";
  opacity?: number;
  className?: string;
}) {
  const { ref, visible } = useInView(0.08);

  return (
    <div ref={ref} className={`absolute inset-x-0 top-0 pointer-events-none z-20 overflow-hidden ${className}`}>
      {(position === "left" || position === "both") && (
        <div
          className={`absolute top-0 left-0 w-28 xs:w-36 sm:w-48 max-w-[200px] transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-6 scale-90"
          }`}
          style={{ opacity: visible ? opacity : 0 }}
        >
          <img
            src={kiriAtasSvg}
            alt="Floral Corner Left"
            className="w-full h-auto object-contain filter drop-shadow-[0_6px_14px_rgba(74,58,50,0.14)] animate-flower-sway-tl pointer-events-none"
          />
        </div>
      )}
      {(position === "right" || position === "both") && (
        <div
          className={`absolute top-0 right-0 w-28 xs:w-36 sm:w-48 max-w-[200px] transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-6 scale-90"
          }`}
          style={{ opacity: visible ? opacity : 0, transitionDelay: "150ms" }}
        >
          <img
            src={kananAtasSvg}
            alt="Floral Corner Right"
            className="w-full h-auto object-contain filter drop-shadow-[0_6px_14px_rgba(74,58,50,0.14)] animate-flower-sway-tr pointer-events-none"
          />
        </div>
      )}
    </div>
  );
}

/* ─── Top Section Floral Cluster Header (bunga8, bunga10, bunga9) ─── */
function TopFloralHeaderCluster({ opacity = 0.95 }: { opacity?: number }) {
  const { ref, visible } = useInView(0.08);

  return (
    <div ref={ref} className="relative w-full flex items-center justify-center pt-2 -mb-4 pointer-events-none select-none z-20">
      <div
        className={`flex items-end justify-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-6 scale-90"
        }`}
        style={{ opacity: visible ? opacity : 0 }}
      >
        {/* Bunga 8 - Left Accent */}
        <img
          src={bunga8Png}
          alt="Floral Top Left"
          className="w-16 xs:w-20 sm:w-28 h-auto object-contain -mr-5 sm:-mr-7 transform -rotate-12 filter drop-shadow-[0_4px_10px_rgba(74,58,50,0.12)] animate-flower-sway-tl"
        />

        {/* Bunga 10 - Center Main Bloom */}
        <img
          src={bunga10Png}
          alt="Floral Top Center"
          className="w-20 xs:w-24 sm:w-34 h-auto object-contain z-10 transform scale-105 filter drop-shadow-[0_6px_14px_rgba(74,58,50,0.15)] animate-flower-sway-center"
        />

        {/* Bunga 9 - Right Accent */}
        <img
          src={bunga9Png}
          alt="Floral Top Right"
          className="w-16 xs:w-20 sm:w-28 h-auto object-contain -ml-5 sm:-ml-7 transform rotate-12 scale-x-[-1] filter drop-shadow-[0_4px_10px_rgba(74,58,50,0.12)] animate-flower-sway-tr"
        />
      </div>
    </div>
  );
}

/* ─── Framed Photo Component (Using Frame PNGs like frame17.png) ─────── */
function FramedPhoto({
  src,
  alt,
  frameSrc = frame17Png,
  aspectRatio = "aspect-[3/4]",
  className = "",
  imgClassName = ""
}: {
  src: string;
  alt: string;
  frameSrc?: string;
  aspectRatio?: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={`relative p-3.5 sm:p-5 flex items-center justify-center ${className}`}>
      <div className={`w-full h-full relative overflow-hidden rounded-2xl z-0 ${aspectRatio}`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${imgClassName}`}
        />
      </div>
      {frameSrc && (
        <img
          src={frameSrc}
          alt="Ornate Frame"
          className="absolute inset-0 w-full h-full object-fill pointer-events-none z-10 filter drop-shadow-md"
        />
      )}
    </div>
  );
}

/* ─── Animated Flying Birds Component ─────────────────── */
function FlappingBird({
  frameA,
  frameB,
  size = 36,
  flapSpeed = 250,
  flipX = false,
  style = {},
  className = "",
}: {
  frameA: string;
  frameB: string;
  size?: number;
  flapSpeed?: number;
  flipX?: boolean;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((prev) => (prev === 0 ? 1 : 0));
    }, flapSpeed);
    return () => clearInterval(timer);
  }, [flapSpeed]);

  const transformStyle = flipX ? "scaleX(-1)" : "none";

  return (
    <div className={`relative pointer-events-none select-none ${className}`} style={{ width: size, height: size, transform: transformStyle, ...style }}>
      <img
        src={frameA}
        alt="Bird frame A"
        className="absolute inset-0 w-full h-full object-contain filter drop-shadow-[0_3px_6px_rgba(0,0,0,0.18)]"
        style={{ opacity: frame === 0 ? 1 : 0 }}
      />
      <img
        src={frameB}
        alt="Bird frame B"
        className="absolute inset-0 w-full h-full object-contain filter drop-shadow-[0_3px_6px_rgba(0,0,0,0.18)]"
        style={{ opacity: frame === 1 ? 1 : 0 }}
      />
    </div>
  );
}

function FlyingBirdsFlock() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-25">
      {/* Flock 1: Flying Left to Right across upper gate */}
      <div
        className="absolute top-[18vh] left-0"
        style={{ animation: "flyAcrossLTR 13s linear infinite 0.5s" }}
      >
        <FlappingBird frameA={burung01Png} frameB={burung02Png} size={44} flapSpeed={230} flipX={false} />
      </div>

      <div
        className="absolute top-[15vh] left-0"
        style={{ animation: "flyAcrossLTR 13s linear infinite 1.2s" }}
      >
        <FlappingBird frameA={burungBaru1Png} frameB={burungBaru2Png} size={34} flapSpeed={270} flipX={true} />
      </div>

      <div
        className="absolute top-[22vh] left-0"
        style={{ animation: "flyAcrossLTR 13s linear infinite 1.9s" }}
      >
        <FlappingBird frameA={burungBaru3Png} frameB={burungBaru4Png} size={28} flapSpeed={210} flipX={true} />
      </div>

      {/* Flock 2: Flying Right to Left across lower/mid gate */}
      <div
        className="absolute top-[28vh] right-0"
        style={{ animation: "flyAcrossRTL 16s linear infinite 5.5s" }}
      >
        <FlappingBird frameA={burungBaru1Png} frameB={burungBaru2Png} size={48} flapSpeed={220} flipX={false} />
      </div>

      <div
        className="absolute top-[24vh] right-0"
        style={{ animation: "flyAcrossRTL 16s linear infinite 6.3s" }}
      >
        <FlappingBird frameA={burung01Png} frameB={burung02Png} size={38} flapSpeed={260} flipX={true} />
      </div>

      <div
        className="absolute top-[32vh] right-0"
        style={{ animation: "flyAcrossRTL 16s linear infinite 7.1s" }}
      >
        <FlappingBird frameA={burungBaru3Png} frameB={burungBaru4Png} size={30} flapSpeed={200} flipX={false} />
      </div>
    </div>
  );
}

/* ─── Section Background Photo Overlay Component ─── */
function SectionBackgroundPhoto({ src, opacity = 0.14 }: { src: string; opacity?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover filter saturate-[0.8] contrast-[1.05] animate-bg-wind pointer-events-none"
        style={{ opacity }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(248,245,240,0.55) 0%, rgba(248,245,240,0.92) 100%)"
        }}
      />
    </div>
  );
}

/* ─── Section Birds Flock Component for content sections ─── */
function SectionBirdsFlock({ delay = 0, top = "12vh" }: { delay?: number; top?: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      <div
        className="absolute left-0"
        style={{ top, animation: `flyAcrossLTR 15s linear infinite ${delay}s` }}
      >
        <FlappingBird frameA={burung01Png} frameB={burung02Png} size={36} flapSpeed={240} flipX={false} />
      </div>
      <div
        className="absolute left-0"
        style={{ top: `calc(${top} + 4vh)`, animation: `flyAcrossLTR 15s linear infinite ${delay + 1.6}s` }}
      >
        <FlappingBird frameA={burungBaru1Png} frameB={burungBaru2Png} size={28} flapSpeed={280} flipX={true} />
      </div>
      <div
        className="absolute right-0"
        style={{ top: `calc(${top} + 8vh)`, animation: `flyAcrossRTL 18s linear infinite ${delay + 6}s` }}
      >
        <FlappingBird frameA={burungBaru3Png} frameB={burungBaru4Png} size={32} flapSpeed={220} flipX={true} />
      </div>
    </div>
  );
}

/* ─── Floral Background Decorations ─────────────────────── */

// Scattered petals & leaves across the full section
function FloralScatter({ tint = "#C8A96A", opacity = 0.07 }: { tint?: string; opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }} preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800" fill="none">
      {/* Top-left branch */}
      <path d="M0 80 Q60 40 120 70 Q180 100 240 60" stroke={tint} strokeWidth="1.2" fill="none"/>
      <path d="M60 40 Q80 10 110 25" stroke={tint} strokeWidth="1" fill="none"/>
      <path d="M140 65 Q150 38 172 42" stroke={tint} strokeWidth="1" fill="none"/>
      <ellipse cx="110" cy="25" rx="9" ry="14" fill={tint} opacity="0.8" transform="rotate(-30 110 25)"/>
      <ellipse cx="172" cy="40" rx="8" ry="13" fill={tint} opacity="0.7" transform="rotate(20 172 40)"/>
      <ellipse cx="240" cy="58" rx="10" ry="15" fill={tint} opacity="0.75" transform="rotate(-15 240 58)"/>
      <ellipse cx="200" cy="48" rx="7" ry="11" fill={tint} opacity="0.65" transform="rotate(-40 200 48)"/>
      <circle cx="68" cy="42" r="4" fill={tint} opacity="0.6"/>

      {/* Top-right cluster */}
      <path d="M1200 0 Q1120 50 1060 30 Q1000 10 950 55" stroke={tint} strokeWidth="1.2" fill="none"/>
      <path d="M1120 50 Q1100 20 1080 28" stroke={tint} strokeWidth="1" fill="none"/>
      <ellipse cx="1080" cy="26" rx="9" ry="14" fill={tint} opacity="0.75" transform="rotate(25 1080 26)"/>
      <ellipse cx="950" cy="53" rx="11" ry="16" fill={tint} opacity="0.7" transform="rotate(-20 950 53)"/>
      <ellipse cx="1000" cy="18" rx="8" ry="13" fill={tint} opacity="0.65" transform="rotate(10 1000 18)"/>
      <circle cx="1130" cy="22" r="4" fill={tint} opacity="0.55"/>
      <circle cx="970" cy="38" r="3" fill={tint} opacity="0.5"/>

      {/* Left-mid scattered leaves */}
      <ellipse cx="30" cy="300" rx="8" ry="22" fill={tint} opacity="0.5" transform="rotate(-55 30 300)"/>
      <ellipse cx="55" cy="340" rx="7" ry="18" fill={tint} opacity="0.45" transform="rotate(-30 55 340)"/>
      <ellipse cx="15" cy="380" rx="6" ry="16" fill={tint} opacity="0.4" transform="rotate(-70 15 380)"/>
      <path d="M8 280 Q45 310 35 360" stroke={tint} strokeWidth="1" fill="none" opacity="0.6"/>

      {/* Right-mid scattered leaves */}
      <ellipse cx="1170" cy="280" rx="8" ry="22" fill={tint} opacity="0.5" transform="rotate(55 1170 280)"/>
      <ellipse cx="1145" cy="320" rx="7" ry="18" fill={tint} opacity="0.45" transform="rotate(30 1145 320)"/>
      <ellipse cx="1185" cy="360" rx="6" ry="16" fill={tint} opacity="0.4" transform="rotate(70 1185 360)"/>
      <path d="M1192 260 Q1155 290 1165 340" stroke={tint} strokeWidth="1" fill="none" opacity="0.6"/>

      {/* Bottom-left branch */}
      <path d="M0 720 Q80 680 160 710 Q220 730 280 700" stroke={tint} strokeWidth="1.2" fill="none"/>
      <path d="M90 682 Q100 655 125 662" stroke={tint} strokeWidth="1" fill="none"/>
      <ellipse cx="125" cy="660" rx="9" ry="14" fill={tint} opacity="0.7" transform="rotate(-20 125 660)"/>
      <ellipse cx="200" cy="695" rx="10" ry="14" fill={tint} opacity="0.65" transform="rotate(15 200 695)"/>
      <ellipse cx="280" cy="698" rx="8" ry="13" fill={tint} opacity="0.6" transform="rotate(-10 280 698)"/>
      <circle cx="158" cy="708" r="3.5" fill={tint} opacity="0.5"/>

      {/* Bottom-right branch */}
      <path d="M1200 750 Q1120 710 1060 730 Q1000 750 940 720" stroke={tint} strokeWidth="1.2" fill="none"/>
      <path d="M1110 712 Q1090 685 1070 692" stroke={tint} strokeWidth="1" fill="none"/>
      <ellipse cx="1070" cy="690" rx="9" ry="14" fill={tint} opacity="0.7" transform="rotate(20 1070 690)"/>
      <ellipse cx="1000" cy="720" rx="10" ry="14" fill={tint} opacity="0.65" transform="rotate(-15 1000 720)"/>
      <ellipse cx="940" cy="718" rx="8" ry="13" fill={tint} opacity="0.6" transform="rotate(10 940 718)"/>

      {/* Center scattered small petals */}
      <ellipse cx="350" cy="150" rx="6" ry="9" fill={tint} opacity="0.3" transform="rotate(-25 350 150)"/>
      <ellipse cx="580" cy="90" rx="5" ry="8" fill={tint} opacity="0.28" transform="rotate(15 580 90)"/>
      <ellipse cx="820" cy="130" rx="6" ry="9" fill={tint} opacity="0.3" transform="rotate(-10 820 130)"/>
      <ellipse cx="440" cy="680" rx="5" ry="8" fill={tint} opacity="0.28" transform="rotate(30 440 680)"/>
      <ellipse cx="750" cy="700" rx="6" ry="9" fill={tint} opacity="0.28" transform="rotate(-20 750 700)"/>
      <ellipse cx="620" cy="750" rx="5" ry="7" fill={tint} opacity="0.25" transform="rotate(10 620 750)"/>

      {/* Tiny dot accents */}
      <circle cx="310" cy="200" r="3" fill={tint} opacity="0.25"/>
      <circle cx="900" cy="180" r="2.5" fill={tint} opacity="0.22"/>
      <circle cx="680" cy="650" r="3" fill={tint} opacity="0.25"/>
      <circle cx="420" cy="580" r="2" fill={tint} opacity="0.2"/>
    </svg>
  );
}

// Thin botanical line art — elegant stems & blooms
function FloralLineart({ tint = "#A8B8A5", opacity = 0.09 }: { tint?: string; opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }} preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 700" fill="none">
      {/* Long sweeping stem left */}
      <path d="M-20 600 Q100 400 80 200 Q70 100 150 50" stroke={tint} strokeWidth="1.5" fill="none"/>
      <path d="M80 200 Q20 160 10 120" stroke={tint} strokeWidth="1" fill="none"/>
      <path d="M100 300 Q150 270 160 230" stroke={tint} strokeWidth="1" fill="none"/>
      <path d="M90 400 Q30 380 20 340" stroke={tint} strokeWidth="1" fill="none"/>
      {/* Leaves on left stem */}
      <ellipse cx="10" cy="120" rx="10" ry="28" fill={tint} opacity="0.9" transform="rotate(-50 10 120)"/>
      <ellipse cx="160" cy="228" rx="9" ry="24" fill={tint} opacity="0.85" transform="rotate(30 160 228)"/>
      <ellipse cx="20" cy="338" rx="9" ry="22" fill={tint} opacity="0.8" transform="rotate(-40 20 338)"/>
      <ellipse cx="148" cy="50" rx="8" ry="20" fill={tint} opacity="0.85" transform="rotate(-15 148 50)"/>
      {/* Flower bud left */}
      <ellipse cx="150" cy="52" rx="7" ry="12" fill="#C8A96A" opacity="0.5" transform="rotate(-20 150 52)"/>
      <ellipse cx="138" cy="58" rx="6" ry="10" fill="#D4B87A" opacity="0.45" transform="rotate(-55 138 58)"/>
      <circle cx="145" cy="56" r="5" fill="#E8D09A" opacity="0.5"/>

      {/* Long sweeping stem right */}
      <path d="M1220 600 Q1100 400 1120 200 Q1130 100 1050 50" stroke={tint} strokeWidth="1.5" fill="none"/>
      <path d="M1120 200 Q1180 160 1190 120" stroke={tint} strokeWidth="1" fill="none"/>
      <path d="M1100 300 Q1050 270 1040 230" stroke={tint} strokeWidth="1" fill="none"/>
      <path d="M1110 400 Q1170 380 1180 340" stroke={tint} strokeWidth="1" fill="none"/>
      <ellipse cx="1190" cy="120" rx="10" ry="28" fill={tint} opacity="0.9" transform="rotate(50 1190 120)"/>
      <ellipse cx="1040" cy="228" rx="9" ry="24" fill={tint} opacity="0.85" transform="rotate(-30 1040 228)"/>
      <ellipse cx="1180" cy="338" rx="9" ry="22" fill={tint} opacity="0.8" transform="rotate(40 1180 338)"/>
      <ellipse cx="1052" cy="50" rx="8" ry="20" fill={tint} opacity="0.85" transform="rotate(15 1052 50)"/>
      <ellipse cx="1050" cy="52" rx="7" ry="12" fill="#C8A96A" opacity="0.5" transform="rotate(20 1050 52)"/>
      <ellipse cx="1062" cy="58" rx="6" ry="10" fill="#D4B87A" opacity="0.45" transform="rotate(55 1062 58)"/>
      <circle cx="1055" cy="56" r="5" fill="#E8D09A" opacity="0.5"/>

      {/* Horizontal vine bottom */}
      <path d="M200 680 Q400 640 600 660 Q800 680 1000 645" stroke={tint} strokeWidth="1.2" fill="none"/>
      <path d="M300 642 Q310 615 330 622" stroke={tint} strokeWidth="0.9" fill="none"/>
      <path d="M550 658 Q555 630 575 636" stroke={tint} strokeWidth="0.9" fill="none"/>
      <path d="M800 648 Q808 620 828 628" stroke={tint} strokeWidth="0.9" fill="none"/>
      <ellipse cx="330" cy="620" rx="7" ry="18" fill={tint} opacity="0.75" transform="rotate(-15 330 620)"/>
      <ellipse cx="575" cy="634" rx="7" ry="18" fill={tint} opacity="0.7" transform="rotate(10 575 634)"/>
      <ellipse cx="828" cy="626" rx="7" ry="17" fill={tint} opacity="0.7" transform="rotate(-8 828 626)"/>
    </svg>
  );
}

// Watercolor-style soft blobs + rose silhouettes
function FloralWatercolor({ opacity = 0.055 }: { opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }} preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800" fill="none">
      {/* Soft blobs */}
      <circle cx="100"  cy="200" r="120" fill="#C8A96A"/>
      <circle cx="1100" cy="600" r="100" fill="#A8B8A5"/>
      <circle cx="600"  cy="750" r="90"  fill="#C8A96A"/>
      <circle cx="200"  cy="700" r="70"  fill="#A8B8A5"/>
      <circle cx="1000" cy="100" r="80"  fill="#D4B87A"/>
      <circle cx="500"  cy="50"  r="60"  fill="#A8B8A5"/>
      {/* Rose silhouettes */}
      <circle cx="100"  cy="200" r="45"  fill="#D4B87A"/>
      <circle cx="1100" cy="600" r="38"  fill="#C8A96A"/>
      <circle cx="600"  cy="750" r="35"  fill="#D4B87A"/>
      {/* Petal rings */}
      {[0,45,90,135,180,225,270,315].map(angle => (
        <ellipse
          key={angle}
          cx={100 + Math.cos(angle * Math.PI / 180) * 38}
          cy={200 + Math.sin(angle * Math.PI / 180) * 38}
          rx="14" ry="22"
          fill="#E8D09A"
          transform={`rotate(${angle + 90} ${100 + Math.cos(angle * Math.PI / 180) * 38} ${200 + Math.sin(angle * Math.PI / 180) * 38})`}
        />
      ))}
      {[0,45,90,135,180,225,270,315].map(angle => (
        <ellipse
          key={angle}
          cx={1100 + Math.cos(angle * Math.PI / 180) * 32}
          cy={600 + Math.sin(angle * Math.PI / 180) * 32}
          rx="12" ry="19"
          fill="#D4B87A"
          transform={`rotate(${angle + 90} ${1100 + Math.cos(angle * Math.PI / 180) * 32} ${600 + Math.sin(angle * Math.PI / 180) * 32})`}
        />
      ))}
    </svg>
  );
}

/* ─── Floating Petal ─────────────────────────────────────── */
function FloatingPetal({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: 12,
        height: 18,
        borderRadius: "50% 50% 50% 0",
        background: "linear-gradient(135deg, #E8D09A, #C8A96A)",
        opacity: 0.4,
        ...style,
      }}
    />
  );
}

/* ─── Premium Frame Card ─────────────────────────────────── */
function PremiumFrame({
  children,
  className = "",
  style = {},
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  dark?: boolean;
}) {
  return (
    <div
      className={`mx-4 md:mx-auto max-w-4xl rounded-[32px] p-2 relative overflow-hidden ${className}`}
      style={{
        background: dark
          ? "linear-gradient(145deg, #1C160E, #2A2014)"
          : "linear-gradient(145deg, #FFFDF9, #FAF7F2)",
        boxShadow: dark
          ? "0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,169,106,0.2)"
          : "0 16px 40px rgba(44,36,22,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
        border: dark
          ? "1px solid rgba(200, 169, 106, 0.28)"
          : "1px solid rgba(200, 169, 106, 0.35)",
        ...style,
      }}
    >
      {/* Inner border */}
      <div
        className="rounded-[24px] p-5 sm:p-7 md:p-10 border relative z-10"
        style={{
          borderColor: dark ? "rgba(200,169,106,0.18)" : "rgba(200,169,106,0.22)",
        }}
      >
        {/* Gold corners */}
        <div
          className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 pointer-events-none rounded-tl-sm"
          style={{ borderColor: "#C8A96A" }}
        />
        <div
          className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 pointer-events-none rounded-tr-sm"
          style={{ borderColor: "#C8A96A" }}
        />
        <div
          className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 pointer-events-none rounded-bl-sm"
          style={{ borderColor: "#C8A96A" }}
        />
        <div
          className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 pointer-events-none rounded-br-sm"
          style={{ borderColor: "#C8A96A" }}
        />

        {children}
      </div>
    </div>
  );
}

/* ─── Background Ornament (1.svg) ────────────────────────── */
function BackgroundOrnament({
  position = "top-right",
  opacity = 0.95,
  scale = 1,
  style = {},
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  opacity?: number;
  scale?: number;
  style?: React.CSSProperties;
}) {
  const { ref, visible } = useInView({ threshold: 0.01, rootMargin: "0px" });

  const getSrc = () => {
    switch (position) {
      case "top-left":
      case "top-right":
      case "bottom-left":
      case "bottom-right":
        return kananAtasSvg;
      default:
        return bunga1Svg;
    }
  };

  const getTransform = () => {
    switch (position) {
      case "top-left":
        return "scaleX(-1)";
      case "bottom-left":
        return "scale(-1, -1)";
      case "bottom-right":
        return "scaleY(-1)";
      default:
        return "none";
    }
  };

  const getPositionStyles = (): React.CSSProperties => {
    const offset = "0px";
    switch (position) {
      case "top-left":
        return { top: offset, left: offset };
      case "top-right":
        return { top: offset, right: offset };
      case "bottom-left":
        return { bottom: offset, left: offset };
      case "bottom-right":
        return { bottom: offset, right: offset };
      case "center":
        return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
      default:
        return {};
    }
  };

  const getEntranceClass = () => {
    if (!visible) return "opacity-0 scale-75";
    switch (position) {
      case "top-left":
        return "animate-flower-enter-tl";
      case "top-right":
        return "animate-flower-enter-tr";
      case "bottom-left":
        return "animate-flower-enter-bl";
      case "bottom-right":
        return "animate-flower-enter-br";
      default:
        return "animate-flower-enter-center";
    }
  };

  const getSwayClass = () => {
    switch (position) {
      case "top-left":
        return "animate-flower-sway-tl";
      case "top-right":
        return "animate-flower-sway-tr";
      case "bottom-left":
        return "animate-flower-sway-bl";
      case "bottom-right":
        return "animate-flower-sway-br";
      default:
        return "animate-flower-sway-center";
    }
  };

  return (
    <div
      ref={ref}
      className={`absolute pointer-events-none select-none overflow-visible transition-all duration-1000 ${getEntranceClass()}`}
      style={{
        width: position === "center" ? "200px" : "clamp(160px, 35vw, 340px)",
        height: position === "center" ? "200px" : "clamp(160px, 35vw, 340px)",
        zIndex: 25,
        opacity: visible ? opacity : 0,
        transformOrigin: position === "top-left" ? "top left" :
                         position === "top-right" ? "top right" :
                         position === "bottom-left" ? "bottom left" :
                         position === "bottom-right" ? "bottom right" : "center",
        ...getPositionStyles(),
        ...style,
      }}
    >
      <div className={visible ? getSwayClass() : ""} style={{ width: "100%", height: "100%", transform: `scale(${scale})` }}>
        <img
          src={getSrc()}
          className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(44,36,22,0.14)]"
          style={{ transform: getTransform() }}
          alt=""
        />
      </div>
    </div>
  );
}

/* ─── Section Divider ────────────────────────────────────── */
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C8A96A]" />
      <div className="w-2 h-2 rotate-45 bg-[#C8A96A]" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C8A96A]" />
    </div>
  );
}

/* ─── Countdown Hook ─────────────────────────────────────── */
function useCountdown(targetMs: number) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = targetMs - Date.now();
      if (diff <= 0) return setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetMs]);
  return time;
}

/* ─── Intersection Observer Hook ────────────────────────── */
function useInView(options: number | { threshold?: number; rootMargin?: string } = { threshold: 0.1, rootMargin: "0px 0px -33% 0px" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { threshold, rootMargin } = typeof options === "number"
    ? { threshold: options, rootMargin: "0px 0px -33% 0px" }
    : { threshold: options.threshold ?? 0.1, rootMargin: options.rootMargin ?? "0px 0px -33% 0px" };

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { setVisible(e.isIntersecting); },
      { threshold, rootMargin }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);
  return { ref, visible };
}

/* backward-compat alias */
function useFadeIn(threshold = 0.1) { return useInView(threshold); }

/* ─── FadeSection — entrance animation wrapper ───────────── */
type AnimVariant = "up" | "left" | "right" | "zoom" | "popIn" | "center" | "fade";

function FadeSection({
  children, className = "", variant = "up", delay = 0,
}: {
  children: React.ReactNode; className?: string; variant?: AnimVariant; delay?: number;
}) {
  const { ref, visible } = useInView();

  const style: React.CSSProperties = (() => {
    if (variant === "popIn") {
      return {
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "scale(0.75) translateY(20px)",
        transition: `opacity 0.6s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms,
                     transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`,
      };
    }
    const init: Record<string, string> = {
      up: "translateY(34px)", left: "translateX(-45px)",
      right: "translateX(45px)", zoom: "scale(0.92)", center: "translateY(28px) scale(0.98)", fade: "none",
    };
    return {
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : init[variant] ?? "translateY(34px)",
      transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms,
                   transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    };
  })();

  return <div ref={ref} className={className} style={style}>{children}</div>;
}

function SectionReveal({
  children, className = "", delay = 0,
}: {
  children: React.ReactNode; className?: string; delay?: number;
}) {
  const { ref, visible } = useInView(0.15);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px) scale(0.985)",
        transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/* ─── StaggerChildren ────────────────────────────────────── */
function StaggerChildren({
  children, className = "", staggerMs = 100, baseDelay = 0, variant = "up" as AnimVariant,
}: {
  children: React.ReactNode; className?: string;
  staggerMs?: number; baseDelay?: number; variant?: AnimVariant;
}) {
  const { ref, visible } = useInView(0.07);
  const arr = Array.isArray(children) ? children : [children];

  const getStyle = (i: number): React.CSSProperties => {
    const d = baseDelay + i * staggerMs;
    if (variant === "popIn") return {
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "scale(0.65) translateY(28px)",
      transition: `opacity 0.55s cubic-bezier(0.34,1.56,0.64,1) ${d}ms,
                   transform 0.55s cubic-bezier(0.34,1.56,0.64,1) ${d}ms`,
    };
    const init: Record<string, string> = {
      up: "translateY(44px)", left: "translateX(-50px)",
      right: "translateX(50px)", zoom: "scale(0.88)", fade: "none",
    };
    return {
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : (init[variant] ?? "translateY(44px)"),
      transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${d}ms,
                   transform 0.7s cubic-bezier(0.22,1,0.36,1) ${d}ms`,
    };
  };

  return (
    <div ref={ref} className={className}>
      {arr.map((child, i) => <div key={i} style={getStyle(i)}>{child}</div>)}
    </div>
  );
}

/* ─── RevealText — clip-mask text slide-up ───────────────── */
function RevealText({
  children, delay = 0, className = "",
}: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, visible } = useInView(0.2);
  return (
    <div ref={ref} style={{ overflow: "hidden", display: "inline-block" }} className={className}>
      <div style={{
        transform: visible ? "translateY(0)" : "translateY(110%)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     opacity 0.6s ease ${delay}ms`,
      }}>
        {children}
      </div>
    </div>
  );
}

/* ─── SectionHeader — animated label + title + divider ──── */
function SectionHeader({
  label, title, description, light = false,
}: {
  label: string; title: string; description?: string; light?: boolean;
}) {
  const { ref, visible } = useInView(0.15);
  const gold = "#C7A86D";
  const titleColor = "#4A3A32";
  const descColor = "#8A7560";

  return (
    <div ref={ref} className="text-center mb-14">
      {/* Badge */}
      <div style={{
        overflow: "hidden", display: "inline-block", marginBottom: "0.75rem",
      }}>
        <p className="text-xs tracking-[0.45em] uppercase" style={{
          color: gold, fontWeight: 300,
          transform: visible ? "translateY(0)" : "translateY(120%)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1) 0ms, opacity 0.5s ease 0ms",
        }}>
          {label}
        </p>
      </div>

      {/* Title */}
      <div style={{ overflow: "hidden" }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          color: titleColor,
          fontWeight: 300,
          transform: visible ? "translateY(0)" : "translateY(110%)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1) 80ms, opacity 0.6s ease 80ms",
        }}>
          {title}
        </h2>
      </div>

      {/* Divider — lines extend from center */}
      <div className="flex items-center justify-center gap-4 my-6">
        <div style={{
          height: 1, width: 64,
          background: `linear-gradient(to right, transparent, ${gold})`,
          transformOrigin: "right",
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1) 200ms",
        }}/>
        <div style={{
          width: 7, height: 7, rotate: "45deg",
          background: gold,
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0)",
          transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 350ms, opacity 0.4s ease 350ms",
        }}/>
        <div style={{
          height: 1, width: 64,
          background: `linear-gradient(to left, transparent, ${gold})`,
          transformOrigin: "left",
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1) 200ms",
        }}/>
      </div>

      {/* Optional description */}
      {description && (
        <p style={{
          color: descColor, lineHeight: 1.85, fontSize: "0.9rem",
          maxWidth: 420, margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease 400ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) 400ms",
        }}>
          {description}
        </p>
      )}
    </div>
  );
}

/* ─── Falling Flower Petals ──────────────────────────────── */
const PETAL_DATA = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left:     `${3 + ((i * 4.3 + i * i * 0.2) % 93)}%`,
  width:    7  + (i * 2)   % 10,
  height:   11 + (i * 3)   % 13,
  duration: 13 + (i * 1.7) % 12,
  delay:    -((i * 2.1)    % 20),       // negative = starts mid-fall
  color:    ["#E8D09A","#C8A96A","#D4B87A","#F5ECD8","#A8B8A5","#EFE7DD","#F0E4C8","#B8C8B5"][i % 8],
  drift:    -35 + (i * 13) % 70,
  spin:     200 + (i * 53) % 520,
  shape:    i % 5,
  opacity:  0.35 + (i * 0.025) % 0.35,
}));

function FallingPetals() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 15 }}>
      {PETAL_DATA.map(p => {
        const borderRadius = [
          "50% 0 50% 50%",
          "50% 50% 0 50%",
          "60% 40% 60% 40% / 70% 30% 70% 30%",
          "30% 70% 70% 30% / 50% 50% 50% 50%",
          "50% 50% 40% 60%",
        ][p.shape];
        return (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: p.left,
              top: -30,
              width: p.width,
              height: p.height,
              background: p.color,
              borderRadius,
              opacity: p.opacity,
              filter: "blur(0.4px)",
              willChange: "transform, opacity",
              animationName: "petalFall",
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              animationTimingFunction: "ease-in",
              animationIterationCount: "infinite",
              animationFillMode: "both",
              // CSS custom props for keyframe
              ["--drift" as string]: `${p.drift}px`,
              ["--spin"  as string]: `${p.spin}deg`,
              ["--petal-opacity" as string]: String(p.opacity),
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
}

/* Helper to scroll a container to center a specific child element without scrolling the page/parents */
function scrollContainerToChild(container: HTMLElement | null, child: HTMLElement | null | undefined) {
  if (!container || !child) return;
  const containerRect = container.getBoundingClientRect();
  const childRect = child.getBoundingClientRect();
  const relativeLeft = childRect.left - containerRect.left + container.scrollLeft;
  const targetScrollLeft = relativeLeft - (containerRect.width / 2) + (childRect.width / 2);
  container.scrollTo({
    left: targetScrollLeft,
    behavior: "smooth",
  });
}

/* ─── Love Story Section (Revamped Aksara Style with Framed Photos & Descriptions Underneath) ─── */
interface StoryItemData {
  year: string;
  date: string;
  title: string;
  desc: string;
  photo: string;
}

function LoveStorySection({ timeline }: { timeline?: any[] }) {
  const storyTimeline: StoryItemData[] = [
    {
      year: "2021",
      date: "15 April 2021",
      title: "Pertama Bertemu",
      photo: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=450&fit=crop&auto=format",
      desc: "Pandangan kami pertama kali bertemu di sebuah acara alumni kampus. Berawal dari percakapan hangat mengenai impian masa depan, kami menyadari ada getaran manis yang menyatukan hati."
    },
    {
      year: "2023",
      date: "20 Agustus 2023",
      title: "Mengikat Janji",
      photo: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=450&fit=crop&auto=format",
      desc: "Setelah dua tahun saling mengenal dan menguatkan dalam suka dan duka, kami memutuskan untuk melangkah lebih serius sebagai pasangan yang siap tumbuh dan melengkapi bersama."
    },
    {
      year: "2025",
      date: "10 Januari 2025",
      title: "Momen Lamaran",
      photo: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=450&fit=crop&auto=format",
      desc: "Di hadapan keluarga besar yang kami cintai, sebuah cincin tersemat indah. Suasana haru dan kebahagiaan menyelimuti saat pinangan resmi diterima dengan senyuman terbaik."
    },
    {
      year: "2026",
      date: "20 September 2026",
      title: "Menuju Pernikahan",
      photo: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=450&fit=crop&auto=format",
      desc: "Hari yang kami tunggu akhirnya tiba. Bersama doa dan rida orang tua serta kehangatan keluarga tercinta, kami mengucap janji ikatan pernikahan suci untuk selamanya."
    }
  ];

  const [active, setActive] = useState(0);

  return (
    <section id="story" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#F8F5F0] text-[#4A3A32]">
      <SectionBackgroundPhoto src={bg3Png} opacity={0.16} />
      <SectionBirdsFlock delay={1} top="8vh" />
      <SideTrees leftTree={pohon10Png} rightTree={pohon9Png} opacity={0.85} />

      <div className="relative z-20 max-w-md mx-auto">
        <SectionHeader label="Our Journey Together" title="Our Love Story" light={false} />

        {/* Milestone Navigation Tabs */}
        <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {storyTimeline.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                active === idx
                  ? "bg-[#C7A86D] text-white font-semibold shadow-md shadow-[#C7A86D]/20 scale-105"
                  : "bg-[#F3DDD7]/80 text-[#4A3A32] hover:bg-[#F3DDD7] border border-[#D8B6B0]/50"
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>

        {/* Story Card (Framed Photo + Description Underneath) */}
        <div className="space-y-6">
          {storyTimeline.map((item, idx) => {
            if (idx !== active) return null;
            return (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-[#C7A86D]/30 shadow-[0_12px_32px_rgba(74,58,50,0.1)] transition-all duration-500"
              >
                {/* Framed Photo on top */}
                <div className="relative mb-5 max-w-[320px] mx-auto">
                  <FramedPhoto
                    src={item.photo}
                    alt={item.title}
                    frameSrc={frame17Png}
                    aspectRatio="aspect-[4/3]"
                  />
                </div>

                {/* Title & Date badge below photo */}
                <div className="text-center mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase bg-[#F3DDD7] text-[#4A3A32] border border-[#D8B6B0]">
                    {item.date}
                  </span>
                  <h3 className="font-serif text-2xl text-[#4A3A32] mt-2 font-normal">
                    {item.title}
                  </h3>
                </div>

                {/* Story Description Text Underneath Photo */}
                <p className="text-[#4A3A32]/85 text-sm leading-relaxed text-center font-light px-2">
                  {item.desc}
                </p>

                {/* Bottom Navigation Controls */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#D8B6B0]/40">
                  <button
                    onClick={() => setActive(Math.max(0, active - 1))}
                    disabled={active === 0}
                    className="text-xs uppercase tracking-widest text-[#C7A86D] disabled:opacity-30 hover:underline font-semibold"
                  >
                    ← Prev
                  </button>
                  <div className="flex gap-1.5">
                    {storyTimeline.map((_, di) => (
                      <span
                        key={di}
                        onClick={() => setActive(di)}
                        className={`h-2 rounded-full cursor-pointer transition-all ${
                          di === active ? "w-6 bg-[#C7A86D]" : "w-2 bg-[#D8B6B0]"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setActive(Math.min(storyTimeline.length - 1, active + 1))}
                    disabled={active === storyTimeline.length - 1}
                    className="text-xs uppercase tracking-widest text-[#C7A86D] disabled:opacity-30 hover:underline font-semibold"
                  >
                    Next →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery Section (Matching Exact Screenshot Grid & Scroll Reveal Animation) ─── */
interface GalleryPhotoItem {
  id: number;
  src: string;
  aspect: string;
  isWide?: boolean;
}

function GalleryScrollCard({
  photo,
  index,
  onSelect
}: {
  photo: GalleryPhotoItem;
  index: number;
  onSelect: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onSelect}
      className={`relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-700 ease-out transform ${
        photo.isWide ? "col-span-2" : "col-span-1"
      } ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{
        transitionDelay: `${(index % 3) * 90}ms`,
        boxShadow: "0 6px 20px rgba(74, 58, 50, 0.12)",
      }}
    >
      <div className={`w-full ${photo.aspect} relative overflow-hidden group`}>
        <img
          src={photo.src}
          alt={`Gallery item ${index + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#4A3A32]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#C7A86D] text-white flex items-center justify-center shadow-lg">
            <Heart size={14} fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
}

function GallerySection({ photos }: { photos?: any[] }) {
  const galleryItems: GalleryPhotoItem[] = [
    // Row 1 (3 vertical photos)
    { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop&auto=format", aspect: "aspect-[3/4]" },
    { id: 2, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop&auto=format", aspect: "aspect-[3/4]" },
    { id: 3, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=800&fit=crop&auto=format", aspect: "aspect-[3/4]" },
    // Row 2 (1 vertical photo left, 1 wide horizontal photo span-2 right)
    { id: 4, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=800&fit=crop&auto=format", aspect: "aspect-[3/4]" },
    { id: 5, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1000&h=650&fit=crop&auto=format", aspect: "aspect-[16/10]", isWide: true },
    // Row 3 (3 vertical photos)
    { id: 6, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=800&fit=crop&auto=format", aspect: "aspect-[3/4]" },
    { id: 7, src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=800&fit=crop&auto=format", aspect: "aspect-[3/4]" },
    { id: 8, src: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=600&h=800&fit=crop&auto=format", aspect: "aspect-[3/4]" },
    // Row 4 (3 vertical photos)
    { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=800&fit=crop&auto=format", aspect: "aspect-[3/4]" },
    { id: 10, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=800&fit=crop&auto=format", aspect: "aspect-[3/4]" },
    { id: 11, src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=800&fit=crop&auto=format", aspect: "aspect-[3/4]" },
  ];

  const [activeLightbox, setActiveLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#FAF7F2] text-[#4A3A32]">
      <SectionBackgroundPhoto src={bg5Png} opacity={0.15} />
      <SectionBirdsFlock delay={3} top="12vh" />
      <SideTrees leftTree={pohon7Png} rightTree={pohon8Png} opacity={0.85} />

      <div className="relative z-20 max-w-md mx-auto">
        <SectionHeader label="Captured Moments" title="Our Gallery" light={false} />

        {/* 3-Column Grid matching Screenshot */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mt-6">
          {galleryItems.map((photo, index) => (
            <GalleryScrollCard
              key={photo.id}
              photo={photo}
              index={index}
              onSelect={() => setActiveLightbox(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#F8F5F0]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
          onClick={() => setActiveLightbox(null)}
        >
          <button
            onClick={() => setActiveLightbox(null)}
            className="absolute top-5 right-5 text-[#4A3A32] hover:text-[#C7A86D] p-2 z-50"
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-lg w-full max-h-[85vh] overflow-hidden rounded-2xl border border-[#C7A86D]/40 shadow-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[activeLightbox].src}
              alt="Gallery Lightbox"
              className="w-full h-full object-contain max-h-[75vh] mx-auto rounded-t-xl"
            />
            <div className="flex justify-between items-center px-4 py-3 bg-[#FAF7F2] border-t border-[#D8B6B0]/40 text-[#4A3A32] text-xs font-medium">
              <span>{activeLightbox + 1} / {galleryItems.length}</span>
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveLightbox((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : 0))}
                  className="hover:underline uppercase tracking-wider text-[#C7A86D] font-semibold"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setActiveLightbox((prev) => (prev !== null ? (prev + 1) % galleryItems.length : 0))}
                  className="hover:underline uppercase tracking-wider text-[#C7A86D] font-semibold"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── QR Code SVG placeholder ───────────────────────────── */
function QRCode() {
  const pattern = [
    1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,
    1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,
    1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,
    1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,
    1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,
    1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,
    1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,
    1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,
    0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,
    1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,
    0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,
    1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,
    1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,
    1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,
    1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,
    1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,
    1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,
    1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,
  ];
  const size = 19;
  const cell = 8;
  return (
    <svg width={size * cell} height={size * cell} viewBox={`0 0 ${size * cell} ${size * cell}`}>
      {pattern.map((v, i) => v ? (
        <rect
          key={i}
          x={(i % size) * cell}
          y={Math.floor(i / size) * cell}
          width={cell}
          height={cell}
          fill="#4A3A32"
          rx="1"
        />
      ) : null)}
    </svg>
  );
}

/* ─── Gift Section with Envelope reveal ─────────────────── */
function GiftSection({ copied, handleCopy }: { copied: string | null; handleCopy: (t: string, k: string) => void }) {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [qrisOpen, setQrisOpen] = useState(false);

  const handleOpenEnvelope = () => {
    setEnvelopeOpen(true);
    setTimeout(() => setQrisOpen(true), 600);
  };

  return (
    <section id="gift" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#F8F5F0] text-[#4A3A32]">
      <SectionBackgroundPhoto src={bg5Png} opacity={0.16} />
      <SideTrees leftTree={pohon10Png} rightTree={pohon9Png} opacity={0.85} />
      <div className="relative z-20 max-w-md mx-auto">
        <SectionReveal className="relative z-10">
          <SectionHeader
            label="Your Blessings Mean The World"
            title="Wedding Gift"
            light={false}
          />

          <div className="space-y-6">

            {/* ── Envelope / QRIS card ── */}
            <div className="rounded-3xl overflow-hidden bg-white/95 backdrop-blur-md border border-[#C7A86D]/30 shadow-[0_12px_32px_rgba(74,58,50,0.1)]">
              {/* Envelope closed state */}
              {!envelopeOpen && (
                <div className="flex flex-col items-center text-center px-6 py-10">
                  {/* Envelope illustration */}
                  <div className="relative mb-5" style={{ width: 110, height: 80 }}>
                    <svg viewBox="0 0 120 88" fill="none" className="w-full h-full drop-shadow-md">
                      <rect x="2" y="20" width="116" height="66" rx="6" fill="#F8F5F0" stroke="#C7A86D" strokeWidth="1.5"/>
                      <path d="M2 20 L60 54 L118 20 Z" fill="#F3DDD7" stroke="#C7A86D" strokeWidth="1.5" strokeLinejoin="round"/>
                      <circle cx="60" cy="52" r="11" fill="#C7A86D" opacity="0.9"/>
                      <circle cx="60" cy="52" r="8" fill="#B39358"/>
                      <text x="60" y="55" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="bold">A&R</text>
                    </svg>
                  </div>

                  <p className="text-[10px] tracking-[0.35em] uppercase mb-1 text-[#C7A86D] font-semibold">
                    Digital Envelope
                  </p>
                  <h3 className="font-serif text-xl text-[#4A3A32]">
                    Ada hadiah untuk kami?
                  </h3>
                  <p className="text-xs mt-2 mb-6 text-[#4A3A32]/80 font-light leading-relaxed max-w-xs">
                    Sentuh amplop ini untuk melihat info rekening dan kode QRIS kami. Terima kasih atas kebaikan hatimu. 🌸
                  </p>
                  <button
                    onClick={handleOpenEnvelope}
                    className="flex items-center gap-2.5 px-6 py-3 rounded-full uppercase tracking-widest text-xs font-semibold bg-gradient-to-r from-[#C7A86D] to-[#B39358] text-white shadow-md hover:scale-105 transition-transform"
                  >
                    <span>💌</span>
                    <span>Buka Amplop</span>
                  </button>
                </div>
              )}

              {/* Envelope opening animation + QRIS revealed */}
              {envelopeOpen && (
                <div style={{ animation: "envelopeReveal 0.5s ease both" }}>
                  <div className="flex justify-center pt-6 pb-2">
                    <div className="relative" style={{ width: 100, height: 70 }}>
                      <svg viewBox="0 0 120 88" fill="none" className="w-full h-full drop-shadow-md">
                        <rect x="2" y="20" width="116" height="66" rx="6" fill="#F8F5F0" stroke="#C7A86D" strokeWidth="1.5"/>
                        <path d="M2 20 L60 2 L118 20 Z" fill="#F3DDD7" stroke="#C7A86D" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div
                    className="px-6 pb-8"
                    style={{
                      opacity: qrisOpen ? 1 : 0,
                      transform: qrisOpen ? "translateY(0)" : "translateY(15px)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                  >
                    <div className="text-center mb-4">
                      <p className="text-[10px] tracking-[0.35em] uppercase mb-0.5 text-[#C7A86D] font-semibold">
                        QRIS Payment
                      </p>
                      <h4 className="font-serif text-lg text-[#4A3A32]">
                        Scan & Kirim Hadiahmu
                      </h4>
                      <p className="text-[11px] text-[#4A3A32]/70 mt-0.5">
                        Bisa digunakan di semua aplikasi mobile banking & e-wallet
                      </p>
                    </div>

                    {/* QR code */}
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-2xl bg-[#F8F5F0] border border-[#C7A86D]/30 shadow-md">
                        <QRCode />
                        <p className="text-center text-[11px] mt-2 tracking-widest text-[#4A3A32] font-semibold">
                          Aisyah & Rizky
                        </p>
                      </div>
                    </div>

                    <p className="text-center text-[11px] text-[#C7A86D]">
                      Terima kasih banyak atas kebaikan dan cinta kalian 🌸
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bank accounts */}
            {[
              { bank: "Bank BCA", account: "0987654321", name: "Aisyah Yusuf" },
              { bank: "Bank Mandiri", account: "1234567890", name: "Rizky Ramadhan" },
            ].map((b) => (
              <div
                key={b.bank}
                className="rounded-2xl p-4 flex items-center justify-between gap-3 bg-white/95 border border-[#C7A86D]/30 shadow-md"
              >
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#C7A86D] font-semibold">{b.bank}</p>
                  <p className="font-serif text-lg text-[#4A3A32] tracking-wider mt-0.5 font-medium">{b.account}</p>
                  <p className="text-[11px] text-[#8A7560]">a.n. {b.name}</p>
                </div>
                <button
                  onClick={() => handleCopy(b.account, b.bank)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium tracking-wider uppercase transition-all bg-[#F3DDD7] border border-[#D8B6B0] text-[#4A3A32] hover:bg-[#C7A86D] hover:text-white"
                >
                  {copied === b.bank ? <Check size={13}/> : <Copy size={13}/>}
                  {copied === b.bank ? "Copied" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─── Main App ───────────────────────────────────────────── */
export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [openingStage, setOpeningStage] = useState<'closed' | 'opening_gate' | 'zooming_in' | 'revealing' | 'opened'>('closed');
  const [copied, setCopied] = useState<string | null>(null);
  const [wishes, setWishes] = useState([
    { name: "Sarah & James", message: "Semoga kalian berdua dikaruniai seumur hidup yang penuh cinta, tawa, dan kebahagiaan yang tak berujung!", date: "2 hari lalu" },
    { name: "Amelia Thompson", message: "Semoga kisah cinta kalian terus dituliskan dengan penuh kebahagiaan, petualangan, dan kasih sayang yang mendalam.", date: "3 hari lalu" },
    { name: "Robert & Diana", message: "Selamat! Cinta kalian adalah inspirasi bagi kami semua. Semoga pernikahan kalian indah dan penuh berkah!", date: "5 hari lalu" },
  ]);
  const [rsvpForm, setRsvpForm] = useState({ name: "", attendance: "yes", guests: "1", wishes: "" });
  const [rsvpSent, setRsvpSent] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const weddingDateMs = useMemo(() => new Date("2026-06-20T10:00:00").getTime(), []);
  const countdown = useCountdown(weddingDateMs);

  const handleStartOpening = () => {
    if (openingStage !== 'closed') return;

    if (audioRef.current && !isMuted) {
      void audioRef.current.play().catch(() => {});
    }

    // Step 1: Open gate doors (gerbang_tertutup -> gerbsng_terbuka) & slide side floral doors
    setOpeningStage('opening_gate');

    // Step 2: Camera zooms in slowly & gracefully into center hole of gerbsng_terbuka.png (scale 85)
    setTimeout(() => {
      setOpeningStage('zooming_in');
    }, 1000);

    // Step 3: As camera enters deep through the gate hole, reveal the main invitation landing page
    setTimeout(() => {
      setIsOpened(true);
      setOpeningStage('revealing');
    }, 4500);

    // Step 4: Complete transition and remove overlay
    setTimeout(() => {
      setOpeningStage('opened');
    }, 5600);
  };

  // Scroll locking & touch/wheel opening detection
  useEffect(() => {
    if (openingStage === 'closed') {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else if (openingStage === 'opened') {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && openingStage === 'closed') {
        handleStartOpening();
      }
    };

    let touchStart = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStart = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touchEnd = e.touches[0].clientY;
      if (touchStart - touchEnd > 30 && openingStage === 'closed') {
        handleStartOpening();
      }
    };

    if (openingStage === 'closed') {
      window.addEventListener("wheel", handleWheel, { passive: true });
      window.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [openingStage]);

  // Load background music once and keep it ready
  useEffect(() => {
    const audio = new Audio(musicTrack);
    audio.loop = true;
    audio.volume = 0.75;
    audio.muted = isMuted;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = isMuted;
    if (isOpened) {
      void audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isOpened, isMuted]);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    if (rsvpForm.wishes.trim()) {
      setWishes(prev => [{ name: rsvpForm.name || "Anonim", message: rsvpForm.wishes, date: "Baru saja" }, ...prev]);
    }
    setRsvpSent(true);
  };

  const photos = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=800&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=800&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=600&h=600&fit=crop&auto=format",
  ];

  const timeline = [
    { year: "2019", title: "First Meeting", desc: "Pandangan kami bertemu di sebuah pesta kebun yang penuh bunga. Sebuah tawa yang tulus menjadi percakapan yang tak terlupakan.", icon: "✦" },
    { year: "2020", title: "First Date", desc: "Makan malam romantis dengan cahaya lilin di tepi sungai. Bintang-bintang berbaris, dan kami tahu sesuatu yang ajaib telah dimulai.", icon: "✦" },
    { year: "2022", title: "Official Couple", desc: "Melewati berbagai musim dan cerita, kami menjadi rumah satu sama lain. Cinta semakin dalam di setiap harinya.", icon: "✦" },
    { year: "2024", title: "The Proposal", desc: "Di bawah hujan bunga mawar dan cahaya keemasan, ia mengajukan pertanyaan itu — dan jawabannya adalah selamanya.", icon: "✦" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Poppins', sans-serif", background: "#FAF7F2", minHeight: "100svh" }}>

      <FallingPetals />

      {/* ── LUXURY OPENING COVER & GATE ANIMATION OVERLAY ──── */}
      {openingStage !== 'opened' && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-between overflow-hidden select-none"
          style={{
            background: "linear-gradient(180deg, #FDFBF7 0%, #F7F2E9 50%, #FDFBF7 100%)",
            opacity: openingStage === 'revealing' ? 0 : 1,
            transition: openingStage === 'revealing' ? "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
            pointerEvents: openingStage === 'closed' ? "auto" : "none",
          }}
        >
          {/* Animated Flying Flock of Birds across Gate */}
          {(openingStage === 'closed' || openingStage === 'opening_gate') && (
            <FlyingBirdsFlock />
          )}

          {/* Left Floral Door/Frame (bungan_opening_kiri.svg) - Overlaps center, slides left on opening */}
          <div
            className="absolute inset-y-0 left-0 w-[58%] h-full pointer-events-none z-16"
            style={{
              transform: (openingStage === 'closed') ? "translateX(0)" : "translateX(-120%)",
              opacity: (openingStage === 'revealing') ? 0 : 0.98,
              transition: "transform 2.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.2s ease-in-out",
            }}
          >
            <img
              src={bungaOpeningKiriSvg}
              alt="Left Opening Floral Frame"
              className="w-full h-full object-cover object-left filter drop-shadow-[4px_4px_16px_rgba(44,36,22,0.18)]"
            />
          </div>

          {/* Right Floral Door/Frame (bunga_opening_kanan.svg) - Overlaps center, slides right on opening */}
          <div
            className="absolute inset-y-0 right-0 w-[58%] h-full pointer-events-none z-15"
            style={{
              transform: (openingStage === 'closed') ? "translateX(0)" : "translateX(120%)",
              opacity: (openingStage === 'revealing') ? 0 : 0.98,
              transition: "transform 2.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.2s ease-in-out",
            }}
          >
            <img
              src={bungaOpeningKananSvg}
              alt="Right Opening Floral Frame"
              className="w-full h-full object-cover object-right filter drop-shadow-[-4px_4px_16px_rgba(44,36,22,0.18)]"
            />
          </div>

          {/* Center Content Container: Couple Names ABOVE Gate + Gate Graphic */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full my-auto py-2">
            
            {/* Wedding Couple Name Title Overlay (ABOVE THE GATE) */}
            <div
              className="relative z-20 text-center pointer-events-none mb-2 sm:mb-4 px-4 flex flex-col items-center justify-center"
              style={{
                opacity: openingStage === 'closed' ? 1 : 0,
                transform: openingStage === 'closed' ? "scale(1) translateY(0)" : "scale(1.15) translateY(-20px)",
                transition: "opacity 0.8s ease-in-out, transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            >
              <p
                className="text-[0.65rem] xs:text-xs sm:text-sm tracking-[0.25em] text-[#5C4A38] uppercase font-medium mb-1 drop-shadow-sm"
                style={{ fontFamily: "'Cormorant Garamond', 'Poppins', serif" }}
              >
                The Wedding of
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2">
                <h1
                  className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-[#2C2416] font-serif leading-tight tracking-wide drop-shadow-sm"
                  style={{ fontFamily: "'Great Vibes', 'Cormorant Garamond', cursive", fontWeight: 600 }}
                >
                  Aisyah Yusuf
                </h1>
                <span
                  className="text-xs sm:text-lg text-[#8A7560] font-serif italic my-0"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  &
                </span>
                <h1
                  className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-[#2C2416] font-serif leading-tight tracking-wide drop-shadow-sm"
                  style={{ fontFamily: "'Great Vibes', 'Cormorant Garamond', cursive", fontWeight: 600 }}
                >
                  Rizky Ramadhan
                </h1>
              </div>
            </div>

            {/* Gate Graphic Container: Zoom smoothly into the archway hole of gerbsng_terbuka.png */}
            <div
              className="relative w-[280px] xs:w-[340px] sm:w-[460px] md:w-[560px] lg:w-[640px] aspect-[711/837] max-h-[50vh] sm:max-h-[56vh] lg:max-h-[60vh] flex items-center justify-center pointer-events-none"
              style={{
                transformOrigin: "50% 50%",
                transform: (openingStage === 'zooming_in' || openingStage === 'revealing')
                  ? "scale(85) translateY(0%)"
                  : "scale(1) translateY(0)",
                transition: (openingStage === 'zooming_in' || openingStage === 'revealing')
                  ? "transform 3.5s cubic-bezier(0.33, 1, 0.68, 1)"
                  : "transform 1.0s ease-out",
                willChange: "transform",
              }}
            >
              {/* Layer 1: Open Gate (gerbsng_terbuka.png) */}
              <img
                src={gerbangTerbukaPng}
                alt="Gerbang Terbuka"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-1000 ease-in-out"
                style={{
                  opacity: openingStage === 'closed' ? 0 : 1,
                }}
              />

              {/* Layer 2: Closed Gate (gerbang_tertutup.png) */}
              <img
                src={gerbangTertutupPng}
                alt="Gerbang Tertutup"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-1000 ease-in-out"
                style={{
                  opacity: openingStage === 'closed' ? 1 : 0,
                }}
              />
            </div>
          </div>

          {/* Bottom Controls: Subtitle, Button, Click Pointer */}
          <div
            className="relative z-20 flex flex-col items-center text-center pb-8 sm:pb-12 px-4 transition-all duration-500"
            style={{
              opacity: openingStage === 'closed' ? 1 : 0,
              transform: openingStage === 'closed' ? "translateY(0)" : "translateY(25px)",
              pointerEvents: openingStage === 'closed' ? "auto" : "none",
            }}
          >
            <p className="text-xs sm:text-sm tracking-[0.2em] text-[#6E5B48] font-light mb-3">
              ✦ Buka pintu awal kisah kami ✦
            </p>

            <button
              onClick={handleStartOpening}
              className="group relative px-8 py-3.5 rounded-full text-xs sm:text-sm font-light tracking-[0.25em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer shadow-lg"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 240, 228, 0.92))",
                backdropFilter: "blur(10px)",
                border: "1.5px solid #C8A96A",
                color: "#4A3E31",
                boxShadow: "0 10px 30px rgba(200, 169, 106, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <span>BUKA UNDANGAN</span>
              <span className="text-[#C8A96A] text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">›</span>
            </button>

            <div className="mt-3 animate-bounce flex flex-col items-center opacity-75">
              <svg className="w-5 h-5 text-[#C8A96A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V6m-6 6H2.25m19.5 0H18" />
              </svg>
            </div>
          </div>

          {/* Bottom Overlapping Flower PNG Garden Cluster (bunga8, bunga9, bunga10, bunga11, bunga2) */}
          <div
            className="absolute bottom-0 inset-x-0 pointer-events-none z-15 overflow-hidden flex items-end justify-between transition-opacity duration-500 px-0"
            style={{
              opacity: openingStage === 'closed' ? 1 : 0,
            }}
          >
            {/* Left Overlapping Flowers Cluster */}
            <div className="relative flex items-end -ml-4 sm:-ml-8 -mb-2 sm:-mb-5">
              {/* Bunga 8 - Base Layer Left */}
              <img
                src={bunga8Png}
                alt="Flower 8"
                className="w-24 sm:w-36 md:w-44 h-auto object-contain transform -rotate-12 translate-y-2 filter drop-shadow(0 6px 12px rgba(61,46,30,0.15)) animate-flower-sway-bl"
              />
              {/* Bunga 9 - Overlapping Layer Left */}
              <img
                src={bunga9Png}
                alt="Flower 9"
                className="w-28 sm:w-40 md:w-48 h-auto object-contain -ml-10 sm:-ml-16 transform rotate-6 -translate-y-2 filter drop-shadow(0 8px 16px rgba(61,46,30,0.18))"
              />
              {/* Bunga 2 - Front Accent Left */}
              <img
                src={bunga2Png}
                alt="Flower 2"
                className="w-18 sm:w-28 md:w-34 h-auto object-contain -ml-8 sm:-ml-12 transform -rotate-6 translate-y-1 opacity-95"
              />
            </div>

            {/* Center Bottom Floral Hedge Accent (Between Left & Right) */}
            <div className="relative flex items-end justify-center -mb-3 opacity-90 hidden xs:flex">
              <img
                src={bunga10Png}
                alt="Flower 10 Center"
                className="w-32 sm:w-44 md:w-52 h-auto object-contain transform scale-95 -translate-y-1 filter drop-shadow(0 6px 14px rgba(61,46,30,0.14))"
              />
            </div>

            {/* Right Overlapping Flowers Cluster */}
            <div className="relative flex items-end -mr-4 sm:-mr-8 -mb-2 sm:-mb-5">
              {/* Bunga 2 - Front Accent Right */}
              <img
                src={bunga2Png}
                alt="Flower 2 Right"
                className="w-18 sm:w-28 md:w-34 h-auto object-contain -mr-8 sm:-mr-12 transform rotate-12 scale-x-[-1] translate-y-1 opacity-95"
              />
              {/* Bunga 10 - Overlapping Layer Right */}
              <img
                src={bunga10Png}
                alt="Flower 10"
                className="w-28 sm:w-40 md:w-48 h-auto object-contain -mr-10 sm:-mr-16 transform -rotate-6 filter drop-shadow(0 8px 16px rgba(61,46,30,0.18))"
              />
              {/* Bunga 11 - Base Layer Right */}
              <img
                src={bunga11Png}
                alt="Flower 11"
                className="w-26 sm:w-38 md:w-46 h-auto object-contain transform rotate-12 translate-y-2 filter drop-shadow(0 6px 12px rgba(61,46,30,0.15)) animate-flower-sway-br"
              />
            </div>
          </div>
        </div>
      )}

      {isOpened && (
        <button
          onClick={() => setIsMuted(prev => !prev)}
          className="fixed left-4 z-50 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4A3A32] shadow-lg border border-[#C7A86D]/35 backdrop-blur-xl transition hover:scale-105"
          style={{ bottom: "calc(env(safe-area-inset-bottom, 1rem) + 1.5rem)" }}
        >
          <Music size={16} className="text-[#C7A86D]" />
          <span>{isMuted ? "Muted" : "Sound"}</span>
        </button>
      )}

      {/* Main Landing Page Content Container at Normal Scale (1.0) */}
      {/* Main Landing Page Content Container (Responsive Aksara Mobile Container) */}
      <div className="invitation-wrapper shadow-2xl relative bg-[#F8F5F0] text-[#4A3A32]">

        {/* ── WELCOME ─────────────────────────────────────────── */}
        <section id="welcome" className="py-20 px-6 text-center relative overflow-hidden bg-[#F8F5F0] text-[#4A3A32]">
          <CornerFloralDecor position="both" />
          <SectionBackgroundPhoto src={bg1Png} opacity={0.18} />
          <SectionBirdsFlock delay={0} top="8vh" />
          <SideTrees leftTree={pohon7Png} rightTree={pohon8Png} opacity={0.85} />
          <div className="relative z-20 max-w-sm mx-auto">
            <SectionReveal className="relative z-10">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-[#C7A86D]/30 shadow-[0_12px_32px_rgba(74,58,50,0.1)]">
                <SectionHeader label="With Joy We Announce" title="Welcome, Dear Guests" light={false} />
                <p className="font-serif italic text-[#4A3A32]/90 text-sm leading-relaxed mb-4">
                  "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."
                </p>
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#C7A86D] font-semibold">— Surah Ar-Rum: 21 —</p>
                <p className="mt-6 text-xs leading-relaxed text-[#4A3A32]/80 font-light">
                  Dengan penuh cinta dan rasa syukur yang melimpah, kami dengan bahagia mengundang kalian untuk merayakan bersatunya dua hati kami. Kehadiran kalian akan membuat hari istimewa kami menjadi sempurna — dan selalu terkenang dalam ingatan kami.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ── BRIDE & GROOM ───────────────────────────────────── */}
        <section id="couple" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#FAF7F2] text-[#4A3A32]">
          <CornerFloralDecor position="both" />
          <SectionBackgroundPhoto src={bg2Png} opacity={0.15} />
          <SectionBirdsFlock delay={2} top="12vh" />
          <SideTrees leftTree={pohon10Png} rightTree={pohon9Png} opacity={0.85} />

          <div className="relative z-20 max-w-md mx-auto">
            <SectionHeader label="The Happy Couple" title="Bride & Groom" light={false} />

            <div className="space-y-12">
              {/* Bride */}
              <FadeSection variant="left" delay={100} className="flex flex-col items-center text-center">
                <div className="w-56 h-72 relative mb-4">
                  <FramedPhoto
                    src="https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=500&h=700&fit=crop&auto=format"
                    alt="Aisyah Yusuf - Bride"
                    frameSrc={frame17Png}
                    aspectRatio="aspect-[3/4]"
                  />
                </div>
                <span className="px-4 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[#F3DDD7] text-[#4A3A32] border border-[#D8B6B0] mb-2">
                  The Bride
                </span>
                <h3 className="font-script text-4xl text-[#4A3A32]" style={{ fontFamily: "'Great Vibes', cursive" }}>
                  Aisyah Yusuf, S.Ked
                </h3>
                <p className="text-[#8A7560] font-serif italic text-xs mt-1">Putri dari</p>
                <p className="text-[#4A3A32] text-xs font-medium mt-0.5">Bpk. Ahmad Yusuf & Ibu Fatima Yusuf</p>
                <div className="flex gap-3 mt-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-white border border-[#C7A86D]/40 text-[#C7A86D] flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                    <Instagram size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white border border-[#C7A86D]/40 text-[#C7A86D] flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                    <Facebook size={14} />
                  </a>
                </div>
              </FadeSection>

              {/* Heart connector */}
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C7A86D]/60" />
                <Heart size={22} className="text-[#C7A86D] fill-[#C7A86D] animate-pulse" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C7A86D]/60" />
              </div>

              {/* Groom */}
              <FadeSection variant="right" delay={200} className="flex flex-col items-center text-center">
                <div className="w-56 h-72 relative mb-4">
                  <FramedPhoto
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop&auto=format"
                    alt="Rizky Ramadhan - Groom"
                    frameSrc={frame17Png}
                    aspectRatio="aspect-[3/4]"
                  />
                </div>
                <span className="px-4 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[#F3DDD7] text-[#4A3A32] border border-[#D8B6B0] mb-2">
                  The Groom
                </span>
                <h3 className="font-script text-4xl text-[#4A3A32]" style={{ fontFamily: "'Great Vibes', cursive" }}>
                  Rizky Ramadhan, S.T.
                </h3>
                <p className="text-[#8A7560] font-serif italic text-xs mt-1">Putra dari</p>
                <p className="text-[#4A3A32] text-xs font-medium mt-0.5">Bpk. Ibrahim Ramadhan & Ibu Khadijah Ramadhan</p>
                <div className="flex gap-3 mt-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-white border border-[#C7A86D]/40 text-[#C7A86D] flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                    <Instagram size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white border border-[#C7A86D]/40 text-[#C7A86D] flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                    <Facebook size={14} />
                  </a>
                </div>
              </FadeSection>
            </div>
          </div>
        </section>

      {/* ── LOVE STORY ──────────────────────────────────────── */}
      <LoveStorySection timeline={timeline} />

      {/* ── COUNTDOWN ───────────────────────────────────────── */}
      <section id="countdown" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#F5F0E8] text-[#4A3A32]">
        <TopFloralHeaderCluster />
        <SectionBackgroundPhoto src={bg4Png} opacity={0.16} />
        <SideTrees leftTree={pohon6Png} rightTree={pohon1Png} opacity={0.8} />
        <div className="relative z-20 max-w-md mx-auto text-center">
          <SectionReveal className="relative z-10">
            <SectionHeader label="The Big Day" title="Counting Down With Joy" light={false} />
            <StaggerChildren className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8" variant="zoom" staggerMs={120} baseDelay={100}>
              {[
                { label: "Hari", value: countdown.days },
                { label: "Jam", value: countdown.hours },
                { label: "Menit", value: countdown.minutes },
                { label: "Detik", value: countdown.seconds },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center w-20 sm:w-24 h-22 sm:h-26 rounded-2xl bg-white/95 backdrop-blur-md border border-[#C7A86D]/30 shadow-[0_8px_24px_rgba(74,58,50,0.08)]"
                >
                  <span className="font-serif text-3xl sm:text-4xl text-[#4A3A32] font-semibold leading-none">
                    {String(value).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase mt-1 text-[#8A7560] font-semibold">
                    {label}
                  </span>
                </div>
              ))}
            </StaggerChildren>
          </SectionReveal>
        </div>
      </section>

      {/* ── EVENTS ──────────────────────────────────────────── */}
      <section id="events" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#F8F5F0] text-[#4A3A32]">
        <CornerFloralDecor position="both" />
        <SectionBackgroundPhoto src={bg4Png} opacity={0.16} />
        <SectionBirdsFlock delay={4} top="10vh" />
        <SideTrees leftTree={pohon2Png} rightTree={pohon7Png} opacity={0.85} />
        <div className="relative z-20 max-w-md mx-auto">
          <SectionReveal className="relative z-10">
            <SectionHeader label="Save The Date" title="Wedding Events" light={false} />
            <StaggerChildren className="space-y-6" variant="up" staggerMs={150} baseDelay={80}>
              {[
                {
                  title: "Akad Nikah",
                  subtitle: "Ijab Kabul",
                  date: "Sabtu, 20 September 2026",
                  time: "08:00 – 11:00 WIB",
                  location: "Al-Ikhlas Grand Mosque",
                  address: "Jl. Sudirman No. 12, Jakarta Pusat",
                  icon: "✦",
                },
                {
                  title: "Reception",
                  subtitle: "Resepsi Pernikahan",
                  date: "Sabtu, 20 September 2026",
                  time: "12:00 – 21:00 WIB",
                  location: "The Ivory Palace Grand Ballroom",
                  address: "Jl. Gatot Subroto No. 88, Jakarta Selatan",
                  icon: "✦",
                },
              ].map((ev) => (
                <div
                  key={ev.title}
                  className="rounded-3xl p-6 relative overflow-hidden bg-white/95 backdrop-blur-md border border-[#C7A86D]/30 shadow-[0_12px_32px_rgba(74,58,50,0.1)]"
                >
                  <div className="absolute top-4 right-4 opacity-20 text-4xl text-[#C7A86D] font-serif">
                    {ev.icon}
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase mb-1 text-[#C7A86D] font-semibold">{ev.subtitle}</p>
                  <h3 className="font-serif text-2xl text-[#4A3A32] font-normal">{ev.title}</h3>
                  <div className="mt-5 space-y-3">
                    <div className="flex items-start gap-3 text-[#4A3A32]/85 text-xs">
                      <Calendar size={15} className="text-[#C7A86D] mt-0.5 flex-shrink-0" />
                      <span>{ev.date}</span>
                    </div>
                    <div className="flex items-start gap-3 text-[#4A3A32]/85 text-xs">
                      <Clock size={15} className="text-[#C7A86D] mt-0.5 flex-shrink-0" />
                      <span>{ev.time}</span>
                    </div>
                    <div className="flex items-start gap-3 text-[#4A3A32]/85 text-xs">
                      <MapPin size={15} className="text-[#C7A86D] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-[#4A3A32] text-sm">{ev.location}</p>
                        <p className="text-[11px] text-[#8A7560] mt-0.5">{ev.address}</p>
                      </div>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-2.5 rounded-full text-xs uppercase tracking-widest bg-[#F3DDD7] border border-[#C7A86D]/40 text-[#4A3A32] font-semibold hover:bg-[#C7A86D] hover:text-white transition-all">
                    Add to Calendar
                  </button>
                </div>
              ))}
            </StaggerChildren>
          </SectionReveal>
        </div>
      </section>

      {/* ── LOCATION ────────────────────────────────────────── */}
      <section id="location" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#FAF7F2] text-[#4A3A32]">
        <CornerFloralDecor position="both" />
        <SectionBackgroundPhoto src={bg5Png} opacity={0.15} />
        <SideTrees leftTree={pohon8Png} rightTree={pohon9Png} opacity={0.85} />
        <div className="relative z-20 max-w-md mx-auto">
          <SectionReveal className="relative z-10">
            <SectionHeader label="How to Find Us" title="Location" light={false} />
            <div className="rounded-3xl overflow-hidden bg-white/95 border border-[#C7A86D]/30 shadow-[0_12px_32px_rgba(74,58,50,0.1)]">
              <div className="relative w-full aspect-[4/3] bg-[#F8F5F0] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1944491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20Sudirman%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "brightness(0.95) contrast(1.05)" }}
                  allowFullScreen
                  loading="lazy"
                  title="Wedding Location Map"
                />
              </div>
              <div className="p-5 text-center bg-white">
                <p className="font-serif text-lg text-[#4A3A32] font-medium">The Ivory Palace Grand Ballroom</p>
                <p className="text-xs text-[#8A7560] mt-1">Jl. Gatot Subroto No. 88, Jakarta Selatan 12710</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs tracking-widest uppercase bg-gradient-to-r from-[#C7A86D] to-[#B39358] text-white font-semibold shadow-md hover:scale-105 transition-all"
                >
                  <MapPin size={14} />
                  Get Directions
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────── */}
      <GallerySection photos={photos} />

      {/* ── WEDDING GIFT ────────────────────────────────────── */}
      <GiftSection copied={copied} handleCopy={handleCopy} />

      {/* ── RSVP ────────────────────────────────────────────── */}
      <section id="rsvp" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#F8F5F0] text-[#4A3A32]">
        <TopFloralHeaderCluster />
        <SectionBackgroundPhoto src={bg5Png} opacity={0.16} />
        <SectionBirdsFlock delay={1} top="10vh" />
        <SideTrees leftTree={pohon10Png} rightTree={pohon1Png} opacity={0.8} />
        <div className="relative z-20 max-w-md mx-auto">
          <SectionReveal className="relative z-10">
            <SectionHeader label="Will You Join Us?" title="RSVP" light={false} />
            {rsvpSent ? (
              <div className="text-center py-10 px-6 rounded-3xl bg-white/95 border border-[#C7A86D]/30 shadow-md">
                <Heart size={36} className="text-[#C7A86D] fill-[#C7A86D] mx-auto mb-3" />
                <h3 className="font-script text-3xl text-[#4A3A32]" style={{ fontFamily: "'Great Vibes', cursive" }}>Terima Kasih!</h3>
                <p className="mt-2 text-xs text-[#4A3A32]/80">Konfirmasi kehadiran kalian telah kami terima. Kami tidak sabar untuk merayakan bersama kalian!</p>
              </div>
            ) : (
              <form onSubmit={handleRsvp} className="space-y-4 rounded-3xl p-6 bg-white/95 backdrop-blur-md border border-[#C7A86D]/30 shadow-[0_12px_32px_rgba(74,58,50,0.1)]">
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#C7A86D] font-semibold mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={rsvpForm.name}
                    onChange={e => setRsvpForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="Nama kamu"
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#F8F5F0] border border-[#D8B6B0] text-[#4A3A32] placeholder-[#8A7560]/60 outline-none focus:border-[#C7A86D]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#C7A86D] font-semibold mb-1">Kehadiran</label>
                  <div className="flex gap-2">
                    {["yes", "no", "maybe"].map(opt => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setRsvpForm(p => ({ ...p, attendance: opt }))}
                        className={`flex-1 py-2.5 rounded-xl text-[11px] font-semibold uppercase tracking-wider transition-all ${
                          rsvpForm.attendance === opt
                            ? "bg-gradient-to-r from-[#C7A86D] to-[#B39358] text-white shadow-md"
                            : "bg-[#F3DDD7] text-[#4A3A32] border border-[#D8B6B0]"
                        }`}
                      >
                        {opt === "yes" ? "Hadir" : opt === "no" ? "Absen" : "Ragu"}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#C7A86D] font-semibold mb-1">Jumlah Tamu</label>
                  <select
                    value={rsvpForm.guests}
                    onChange={e => setRsvpForm(p => ({ ...p, guests: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#F8F5F0] border border-[#D8B6B0] text-[#4A3A32] outline-none focus:border-[#C7A86D]"
                  >
                    {["1","2","3","4","5+"].map(n => <option key={n} value={n}>{n} Tamu</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#C7A86D] font-semibold mb-1">Ucapan & Doa</label>
                  <textarea
                    rows={3}
                    value={rsvpForm.wishes}
                    onChange={e => setRsvpForm(p => ({ ...p, wishes: e.target.value }))}
                    placeholder="Tuliskan doa dan ucapan terbaikmu..."
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#F8F5F0] border border-[#D8B6B0] text-[#4A3A32] placeholder-[#8A7560]/60 outline-none resize-none focus:border-[#C7A86D]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-[#C7A86D] to-[#B39358] text-white shadow-md hover:opacity-95 transition-all"
                >
                  <Send size={14} />
                  Kirim RSVP
                </button>
              </form>
            )}
          </SectionReveal>
        </div>
      </section>

      {/* ── WISHES ──────────────────────────────────────────── */}
      <section id="wishes" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#FAF7F2] text-[#4A3A32]">
        <CornerFloralDecor position="both" />
        <SectionBackgroundPhoto src={bg5Png} opacity={0.15} />
        <SideTrees leftTree={pohon7Png} rightTree={pohon8Png} opacity={0.8} />
        <div className="relative z-20 max-w-md mx-auto">
          <SectionReveal className="relative z-10">
            <SectionHeader label="Kind Words" title="Guest Wishes" light={false} />
            <StaggerChildren className="space-y-4" variant="zoom" staggerMs={100}>
              {wishes.map((w, i) => (
                <div key={i} className="rounded-2xl p-4 bg-white/95 border border-[#C7A86D]/25 shadow-md relative">
                  <p className="text-xs leading-relaxed text-[#4A3A32]/90 font-light mb-3">"{w.message}"</p>
                  <div className="flex items-center gap-2.5 pt-2 border-t border-[#D8B6B0]/30">
                    <div className="w-7 h-7 rounded-full bg-[#F3DDD7] border border-[#D8B6B0] text-[#4A3A32] text-xs font-semibold flex items-center justify-center">
                      {w.name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#4A3A32]">{w.name}</p>
                      <p className="text-[10px] text-[#8A7560]">{w.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerChildren>
          </SectionReveal>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="relative py-16 px-6 text-center overflow-hidden bg-[#F4EFEA] text-[#4A3A32] border-t border-[#C7A86D]/30">
        <TopFloralHeaderCluster />
        <SectionBackgroundPhoto src={bg5Png} opacity={0.18} />
        <SideTrees leftTree={pohon10Png} rightTree={pohon9Png} opacity={0.7} />
        <div className="relative z-20 max-w-sm mx-auto">
          <SectionReveal className="relative z-10">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C7A86D] font-semibold mb-2">
              With All Our Love
            </p>
            <h2 className="font-script text-4xl sm:text-5xl text-[#4A3A32]" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Aisyah & Rizky
            </h2>
            <div className="flex items-center justify-center gap-3 my-4">
              <div className="h-px w-10 bg-[#C7A86D]/50" />
              <Heart size={14} className="text-[#C7A86D] fill-[#C7A86D]" />
              <div className="h-px w-10 bg-[#C7A86D]/50" />
            </div>
            <p className="font-serif italic text-[#8A7560] text-xs">
              20 September 2026 · Jakarta, Indonesia
            </p>
            <div className="flex justify-center gap-3 mt-6">
              {[Instagram, Facebook, Music].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-white border border-[#C7A86D]/40 text-[#C7A86D] flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                  <Icon size={14} />
                </a>
              ))}
            </div>
            <p className="mt-8 text-[10px] text-[#8A7560] tracking-widest">
              Dibuat dengan cinta · #AisyahRizky2026
            </p>
          </SectionReveal>
        </div>
      </footer>

      {isOpened && (
        <nav className="fixed left-1/2 z-50 -translate-x-1/2 w-[min(92vw,440px)] rounded-full border border-[#C7A86D]/35 bg-[#F8F5F0]/90 px-2 py-2 shadow-[0_10px_30px_rgba(74,58,50,0.15)] backdrop-blur-xl"
          style={{ bottom: "calc(env(safe-area-inset-bottom, 1rem) + 0.75rem)" }}
        >
          <div className="flex items-center justify-between gap-1">
            {[
              { href: "#welcome", label: "Home", Icon: Home },
              { href: "#couple", label: "Couple", Icon: Heart },
              { href: "#events", label: "Events", Icon: Calendar },
              { href: "#location", label: "Location", Icon: MapPin },
              { href: "#rsvp", label: "RSVP", Icon: Send },
            ].map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                className="flex min-w-[48px] flex-1 items-center justify-center rounded-3xl px-2 py-1.5 text-center text-[9px] font-semibold uppercase tracking-wider text-[#4A3A32] transition-all duration-200 hover:bg-[#F3DDD7] hover:text-[#C7A86D]"
                aria-label={label}
              >
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <Icon size={15} />
                  <span>{label}</span>
                </div>
              </a>
            ))}
          </div>
        </nav>
      )}
      </div>

      <style>{`
        /* Background Wind Sway */
        @keyframes bgWindSway {
          0%, 100% {
            transform: scale(1.02) translate(0px, 0px) rotate(0deg);
          }
          50% {
            transform: scale(1.06) translate(6px, -4px) rotate(0.3deg);
          }
        }
        .animate-bg-wind {
          transform-origin: center;
          animation: bgWindSway 25s ease-in-out infinite alternate;
        }

        /* Flower Corner Animations */
        @keyframes flowerEnterTL {
          0% {
            transform: translate(-30px, -30px) rotate(-35deg) scale(0.65);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        @keyframes flowerEnterTR {
          0% {
            transform: translate(30px, -30px) rotate(35deg) scale(0.65);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        @keyframes flowerEnterBL {
          0% {
            transform: translate(-30px, 30px) rotate(-35deg) scale(0.65);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        @keyframes flowerEnterBR {
          0% {
            transform: translate(30px, 30px) rotate(35deg) scale(0.65);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        @keyframes flowerEnterCenter {
          0% {
            transform: scale(0.5) rotate(-15deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes flowerSwayTL {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(2px, 3px) rotate(2deg); }
        }
        @keyframes flowerSwayTR {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-2px, 3px) rotate(-2deg); }
        }
        @keyframes flowerSwayBL {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(2px, -3px) rotate(-2deg); }
        }
        @keyframes flowerSwayBR {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-2px, -3px) rotate(2deg); }
        }
        @keyframes flowerSwayCenter {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(0px, -4px) scale(1.02); }
        }

        .animate-flower-enter-tl {
          animation: flowerEnterTL 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-flower-enter-tr {
          animation: flowerEnterTR 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-flower-enter-bl {
          animation: flowerEnterBL 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-flower-enter-br {
          animation: flowerEnterBR 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-flower-enter-center {
          animation: flowerEnterCenter 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-flower-sway-tl {
          animation: flowerSwayTL 8s ease-in-out infinite alternate;
        }
        .animate-flower-sway-tr {
          animation: flowerSwayTR 8s ease-in-out infinite alternate;
        }
        .animate-flower-sway-bl {
          animation: flowerSwayBL 8s ease-in-out infinite alternate;
        }
        .animate-flower-sway-br {
          animation: flowerSwayBR 8s ease-in-out infinite alternate;
        }
        .animate-flower-sway-center {
          animation: flowerSwayCenter 7s ease-in-out infinite alternate;
        }

        @keyframes windSwayLeft {
          0%, 100% {
            transform: rotate(0deg) scale(1.05) translate(0px, 0px);
          }
          50% {
            transform: rotate(0.8deg) scale(1.07) translate(6px, -3px);
          }
        }
        @keyframes windSwayRight {
          0%, 100% {
            transform: rotate(0deg) scale(1.05) translate(0px, 0px);
          }
          50% {
            transform: rotate(-0.8deg) scale(1.07) translate(-6px, -3px);
          }
        }
        @keyframes backgroundSway {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.3deg); }
        }
        @keyframes petalFall {
          0%   { transform: translateY(-30px) translateX(0px) rotate(0deg) scale(1);     opacity: 0; }
          6%   { opacity: var(--petal-opacity, 0.5); }
          92%  { opacity: var(--petal-opacity, 0.4); }
          100% { transform: translateY(110vh) translateX(var(--drift, 40px)) rotate(var(--spin, 400deg)) scale(0.6); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200,169,106,0); }
          50%       { box-shadow: 0 0 0 8px rgba(200,169,106,0.18); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(15deg); }
        }
        @keyframes windSwayLeft {
          0%, 100% { transform: rotate(0deg) translateX(0px); }
          50% { transform: rotate(0.9deg) translateX(3px); }
        }
        @keyframes windSwayRight {
          0%, 100% { transform: rotate(0deg) translateX(0px); }
          50% { transform: rotate(-0.9deg) translateX(-3px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @keyframes fadeImg {
          from { opacity: 0; transform: scale(1.03); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes floralFloat {
          0% { transform: translate(0px, 0px) rotate(0deg) scale(1.13); }
          50% { transform: translate(6px, -10px) rotate(1deg) scale(1.13); }
          100% { transform: translate(0px, 0px) rotate(0deg) scale(1.13); }
        }
        @keyframes slideInRight {
          from { transform: translateX(6%); opacity: 0; }
          to   { transform: translateX(0);  opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-6%); opacity: 0; }
          to   { transform: translateX(0);   opacity: 1; }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0);   opacity: 1; }
          to   { transform: translateX(-6%); opacity: 0; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0);  opacity: 1; }
          to   { transform: translateX(6%); opacity: 0; }
        }
        @keyframes envelopeReveal {
          0%   { opacity: 0; transform: scale(0.94) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes flapOpen {
          0%   { transform: rotateX(0deg); }
          100% { transform: rotateX(-160deg); }
        }
        @keyframes flyAcrossLTR {
          0% {
            transform: translate(-120px, 20px) scale(0.7) rotate(-3deg);
            opacity: 0;
          }
          8% {
            opacity: 0.9;
          }
          50% {
            transform: translate(calc(50vw - 30px), -25px) scale(1) rotate(2deg);
            opacity: 1;
          }
          92% {
            opacity: 0.9;
          }
          100% {
            transform: translate(calc(100vw + 100px), -50px) scale(0.8) rotate(-4deg);
            opacity: 0;
          }
        }
        @keyframes flyAcrossRTL {
          0% {
            transform: translate(calc(100vw + 100px), -20px) scale(0.8) rotate(4deg);
            opacity: 0;
          }
          8% {
            opacity: 0.95;
          }
          50% {
            transform: translate(calc(50vw - 40px), 30px) scale(1.05) rotate(-2deg);
            opacity: 1;
          }
          92% {
            opacity: 0.9;
          }
          100% {
            transform: translate(-120px, 40px) scale(0.75) rotate(3deg);
            opacity: 0;
          }
        }
        * { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(200,169,106,0.3); border-radius: 4px; }
        input:focus, select:focus, textarea:focus { outline: none; border-color: #C8A96A !important; box-shadow: 0 0 0 2px rgba(200,169,106,0.15); }
      `}</style>
    </div>
  );
}
