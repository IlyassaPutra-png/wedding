import { useState, useEffect, useRef, useMemo } from "react";
import { Home, MapPin, Calendar, Clock, Copy, Check, Instagram, Facebook, Heart, ChevronDown, Send, Music, Volume2, VolumeX, X, Download, MessageSquare, CheckCircle2, XCircle, HelpCircle, RefreshCw } from "lucide-react";
import AksaraHeroSection from "./components/AksaraHeroSection";
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
import kupuPng from "./components/gambar/burung/kupu.png";
import bunga1Svg from "./components/gambar/1.svg";
import kiriAtasSvg from "./components/gambar/kiriatas.svg";
import kananAtasSvg from "./components/gambar/kananatas.svg";
import kiriBawahSvg from "./components/gambar/kiribawah.svg";
import kananBawahSvg from "./components/gambar/kananbawah.svg";
import bunga8Png from "./components/gambar/bunga/bunga8.png";
import bunga9Png from "./components/gambar/bunga/bunga9.png";
import bunga10Png from "./components/gambar/bunga/bunga10.png";
import bunga11Png from "./components/gambar/bunga/bunga11.png";
import pohon1Png from "./components/gambar/pohon/pohon1.png";
import pohon2Png from "./components/gambar/pohon/pohon2.png";

import frame17Png from "./components/gambar/frames/frame17.png";
import frame16Png from "./components/gambar/frames/frame16.png";
import frame10Png from "./components/gambar/frames/frame10.png";
import frame9Png from "./components/gambar/frames/frame9.png";

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
import bunga7Png from "./components/gambar/bunga/bunga7.png";

/* ─── Side Trees Framing Component (Continuous Lifelike Swaying Animation) ─── */
function SideTrees({
  leftTree = pohon7Png,
  rightTree = pohon8Png,
  opacity = 0.85,
  scale = 1.3,
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
          className="absolute -left-[32%] xs:-left-[26%] sm:-left-[20%] md:-left-[15%] w-[75%] sm:w-[60%] max-w-[360px] h-auto pointer-events-none"
          style={{ top, opacity, transform: `translateY(-50%) scale(${scale})`, transformOrigin: "left center" }}
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
          className="absolute -right-[32%] xs:-right-[26%] sm:-right-[20%] md:-right-[15%] w-[75%] sm:w-[60%] max-w-[360px] h-auto pointer-events-none"
          style={{ top, opacity, transform: `translateY(-50%) scale(${scale})`, transformOrigin: "right center" }}
        >
          <div className="w-full h-auto [transform:scaleX(-1)] pointer-events-none">
            <img
              src={rightTree}
              alt=""
              className="w-full h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(74,58,50,0.18)] animate-living-tree-right pointer-events-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Top Corner Floral Decoration (kiriatas.svg & kananatas.svg) with Entrance Animation ─── */
function CornerFloralDecor({
  position = "both",
  opacity = 0.95,
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
            visible
              ? "opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0"
              : "opacity-0 -translate-y-8 -translate-x-8 scale-75 rotate-[-25deg]"
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
            visible
              ? "opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0"
              : "opacity-0 -translate-y-8 translate-x-8 scale-75 rotate-[25deg]"
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

/* ─── Bottom Corner Floral Decoration (kiribawah.svg & kananbawah.svg) ─── */
function CornerFloralDecorBottom({
  position = "both",
  opacity = 0.85,
  className = "",
}: {
  position?: "left" | "right" | "both";
  opacity?: number;
  className?: string;
}) {
  const { ref, visible } = useInView(0.08);

  return (
    <div ref={ref} className={`absolute inset-x-0 bottom-0 pointer-events-none z-20 overflow-hidden ${className}`}>
      {(position === "left" || position === "both") && (
        <div
          className={`absolute bottom-0 left-0 w-28 xs:w-36 sm:w-48 max-w-[200px] transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0"
              : "opacity-0 translate-y-8 -translate-x-8 scale-75 rotate-[25deg]"
          }`}
          style={{ opacity: visible ? opacity : 0 }}
        >
          <img
            src={kiriBawahSvg}
            alt="Floral Bottom Left"
            className="w-full h-auto object-contain filter drop-shadow-[0_6px_14px_rgba(74,58,50,0.14)] animate-flower-sway-bl pointer-events-none"
          />
        </div>
      )}
      {(position === "right" || position === "both") && (
        <div
          className={`absolute bottom-0 right-0 w-28 xs:w-36 sm:w-48 max-w-[200px] transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0"
              : "opacity-0 translate-y-8 translate-x-8 scale-75 rotate-[-25deg]"
          }`}
          style={{ opacity: visible ? opacity : 0, transitionDelay: "150ms" }}
        >
          <img
            src={kananBawahSvg}
            alt="Floral Bottom Right"
            className="w-full h-auto object-contain filter drop-shadow-[0_6px_14px_rgba(74,58,50,0.14)] animate-flower-sway-br pointer-events-none"
          />
        </div>
      )}
    </div>
  );
}

/* ─── Top Section Floral Cluster Header (bunga10, bunga9, bunga11, bunga8) ─── */
function TopFloralHeaderCluster({ opacity = 0.95 }: { opacity?: number }) {
  const { ref, visible } = useInView(0.08);

  return (
    <div ref={ref} className="relative w-full flex items-center justify-center pt-3 -mb-4 pointer-events-none select-none z-20">
      <div
        className="flex items-end justify-center transition-all duration-1000 ease-out"
        style={{ opacity: visible ? opacity : 0 }}
      >
        {/* Bunga 11 - Left Outer Accent */}
        <div
          className={`transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-x-0 translate-y-0 rotate-[-12deg] scale-100"
              : "opacity-0 -translate-x-8 -translate-y-6 rotate-[-35deg] scale-75"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <img
            src={bunga11Png}
            alt="Floral Accent Left"
            className="w-14 xs:w-18 sm:w-24 h-auto object-contain -mr-4 sm:-mr-6 filter drop-shadow-[0_4px_10px_rgba(74,58,50,0.12)] animate-flower-sway-tl"
          />
        </div>

        {/* Bunga 8 - Left Inner Accent */}
        <div
          className={`transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-x-0 translate-y-0 rotate-[-6deg] scale-100"
              : "opacity-0 -translate-x-4 -translate-y-4 rotate-[-20deg] scale-80"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <img
            src={bunga8Png}
            alt="Floral Top Left"
            className="w-16 xs:w-20 sm:w-28 h-auto object-contain -mr-5 sm:-mr-7 filter drop-shadow-[0_4px_10px_rgba(74,58,50,0.12)] animate-flower-sway-tl"
          />
        </div>

        {/* Bunga 10 - Center Main Bloom */}
        <div
          className={`transition-all duration-1000 z-10 ${
            visible
              ? "opacity-100 translate-y-0 scale-105 rotate-0"
              : "opacity-0 -translate-y-8 scale-60 rotate-[-15deg]"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <img
            src={bunga10Png}
            alt="Floral Top Center"
            className="w-22 xs:w-26 sm:w-36 h-auto object-contain filter drop-shadow-[0_6px_14px_rgba(74,58,50,0.15)] animate-flower-sway-center"
          />
        </div>

        {/* Bunga 9 - Right Inner Accent */}
        <div
          className={`transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-x-0 translate-y-0 rotate-[12deg] scale-100"
              : "opacity-0 translate-x-4 -translate-y-4 rotate-[20deg] scale-80"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <img
            src={bunga9Png}
            alt="Floral Top Right"
            className="w-16 xs:w-20 sm:w-28 h-auto object-contain -ml-5 sm:-ml-7 scale-x-[-1] filter drop-shadow-[0_4px_10px_rgba(74,58,50,0.12)] animate-flower-sway-tr"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Animated Floating Butterflies (kupu.png) ─── */
function FloatingButterflies({ count = 3, className = "" }: { count?: number; className?: string }) {
  const butterflyConfigs = [
    { top: "12%", left: "6%", delay: "0s", duration: "8s", scale: 0.75 },
    { top: "35%", right: "8%", delay: "2.2s", duration: "10s", scale: 0.85, flip: true },
    { top: "65%", left: "10%", delay: "4.5s", duration: "9s", scale: 0.7 },
    { top: "82%", right: "12%", delay: "1.5s", duration: "11s", scale: 0.8, flip: true },
  ];
  
  const activeButterflies = butterflyConfigs.slice(0, count);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-25 ${className}`}>
      {activeButterflies.map((b, i) => (
        <div
          key={i}
          className="absolute animate-butterfly-float pointer-events-none"
          style={{
            top: b.top,
            left: b.left,
            right: b.right,
            animationDelay: b.delay,
            animationDuration: b.duration,
            transform: `scale(${b.scale}) ${b.flip ? "scaleX(-1)" : ""}`,
          }}
        >
          <img
            src={kupuPng}
            alt="Butterfly"
            className="w-7 sm:w-9 h-auto object-contain filter drop-shadow-[0_4px_8px_rgba(74,58,50,0.2)] animate-butterfly-wings pointer-events-none"
          />
        </div>
      ))}
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
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {/* Inner photo container fitted inside ornate frame inner window */}
      <div className="w-full h-full p-[11%] sm:p-[12%] relative flex items-center justify-center z-0">
        <div className={`w-full h-full relative overflow-hidden rounded-xl bg-[#EFE8DF] ${aspectRatio}`}>
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${imgClassName}`}
          />
        </div>
      </div>
      {/* Ornate Frame Overlay */}
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
        <FlappingBird frameA={burungBaru3Png} frameB={burungBaru4Png} size={32} flapSpeed={220} flipX={false} />
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
function useInView(
  options: number | { threshold?: number; rootMargin?: string; once?: boolean } = { threshold: 0.05, rootMargin: "0px", once: true }
) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const threshold = typeof options === "number" ? options : options.threshold ?? 0.05;
  const rootMargin = typeof options === "number" ? "0px" : options.rootMargin ?? "0px";
  const once = typeof options === "number" ? true : options.once ?? true;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);
  return { ref, visible };
}

/* backward-compat alias */
function useFadeIn(threshold = 0.1) { return useInView(threshold); }

/* ─── FadeSection — entrance animation wrapper ───────────── */
type AnimVariant = "up" | "left" | "right" | "zoom" | "popIn" | "center" | "fade";

function FadeSection({
  children, className = "", delay = 0, variant = "up",
}: {
  children: React.ReactNode; className?: string; delay?: number; variant?: AnimVariant;
}) {
  const { ref, visible } = useInView(0.15);

  const style: React.CSSProperties = (() => {
    const hiddenTransform = {
      up: "translateY(36px)",
      left: "translateX(-36px)",
      right: "translateX(36px)",
      zoom: "scale(0.92)",
      popIn: "scale(0.85)",
      center: "scale(0.95)",
      fade: "none",
    }[variant];

    return {
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : hiddenTransform,
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
  const { ref, visible } = useInView(0.05);
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
  const { ref, visible } = useInView(0.05);
  const arr = Array.isArray(children) ? children : [children];

  const getStyle = (i: number): React.CSSProperties => {
    const delay = baseDelay + i * staggerMs;
    const hiddenTransform = {
      up: "translateY(28px)",
      left: "translateX(-28px)",
      right: "translateX(28px)",
      zoom: "scale(0.9)",
      popIn: "scale(0.8)",
      center: "scale(0.93)",
      fade: "none",
    }[variant];

    return {
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : hiddenTransform,
      transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms,
                   transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    };
  };

  return (
    <div ref={ref} className={className}>
      {arr.map((child, i) => (
        <div key={i} style={{ ...getStyle(i), position: "relative", zIndex: arr.length - i }}>
          {child}
        </div>
      ))}
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
  const { ref, visible } = useInView(0.05);
  const gold = "#7A5A1A";
  const titleColor = "#2B1D14";

  return (
    <div ref={ref} className="text-center mb-10">
      {/* Badge */}
      <div style={{
        overflow: "hidden", display: "inline-block", marginBottom: "0.75rem",
      }}>
        <p className="text-xs tracking-[0.45em] uppercase font-bold text-[#7A5A1A] drop-shadow-xs" style={{
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

/* ─── Story Item Block (Inside Unified Soft Pink Continuous Shape Container) ─── */
function StoryItemBlock({ item, idx }: { item: StoryItemData; idx: number }) {
  const { ref, visible } = useInView({ threshold: 0.15, rootMargin: "0px 0px -40px 0px", once: true });
  const isEven = idx % 2 === 0;

  // Cycle frame PNGs for rich variety
  const frameChoice = idx % 3 === 0 ? frame17Png : idx % 3 === 1 ? frame16Png : frame10Png;

  return (
    <div ref={ref} className="relative pt-6 pb-10 border-b border-[#C7A86D]/25 last:border-b-0 last:pb-2">
      {/* Year & Date Badge */}
      <div
        className="flex justify-center mb-4 transition-all duration-[1300ms] cubic-bezier(0.16, 1, 0.3, 1)"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(-24px) scale(0.88)",
          transitionDelay: "150ms",
        }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#F3DDD7] text-[#4A3A32] border border-[#D8B6B0] shadow-sm">
          <span>✦ {item.year}</span>
          <span className="opacity-40">•</span>
          <span>{item.date} ✦</span>
        </div>
      </div>

      {/* Photo Wrapper Container with Ornate Frame & Corner Floral Ornaments */}
      <div
        className="relative my-4 transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1) pointer-events-none select-none"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.92)",
          transitionDelay: "380ms",
        }}
      >
        {/* Ornate Framed Photo Container */}
        <div className="w-full max-w-sm mx-auto aspect-[4/3] relative z-0">
          <FramedPhoto
            src={item.photo}
            alt={item.title}
            frameSrc={frame17Png}
            aspectRatio="aspect-[4/3]"
          />

          {/* Corner Floral Ornaments anchored PRECISELY on the golden inner frame line (7% inset) */}
          <img
            src={bunga7Png}
            alt=""
            className="absolute top-[6.5%] left-[6.5%] sm:top-[7%] sm:left-[7%] w-12 xs:w-14 sm:w-16 h-auto pointer-events-none z-20 filter drop-shadow-[0_4px_10px_rgba(74,58,50,0.2)] animate-flower-sway-tl"
          />
          <img
            src={bunga11Png}
            alt=""
            className="absolute top-[6.5%] right-[6.5%] sm:top-[7%] sm:right-[7%] w-12 xs:w-14 sm:w-16 h-auto pointer-events-none z-20 filter drop-shadow-[0_4px_10px_rgba(74,58,50,0.2)] animate-flower-sway-tr"
          />
        </div>
      </div>

      {/* Title */}
      <div
        className="text-center mb-2 transition-all duration-[1300ms] cubic-bezier(0.16, 1, 0.3, 1)"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateX(0)"
            : isEven
            ? "translateX(-35px)"
            : "translateX(35px)",
          transitionDelay: "650ms",
        }}
      >
        <h3 className="font-serif text-2xl sm:text-3xl text-[#4A3A32] font-semibold tracking-wide">
          {item.title}
        </h3>
      </div>

      {/* Description Text */}
      <p
        className="text-[#4A3A32]/85 text-xs sm:text-sm leading-relaxed text-center font-light px-2 transition-all duration-[1300ms] cubic-bezier(0.16, 1, 0.3, 1)"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateX(0)"
            : isEven
            ? "translateX(-25px)"
            : "translateX(25px)",
          transitionDelay: "880ms",
        }}
      >
        {item.desc}
      </p>
    </div>
  );
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
      year: "2022",
      date: "14 Februari 2022",
      title: "Kencan Pertama & Cerita Manis",
      photo: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=450&fit=crop&auto=format",
      desc: "Momen kencan pertama di sebuah kafe berlokasi tenang, di mana gelak tawa dan cerita hangat mengalir melintasi malam. Di sinilah rasa percaya dan rasa nyaman mulai berakar kuat."
    },
    {
      year: "2023",
      date: "20 Agustus 2023",
      title: "Mengikat Komitmen Pasangan",
      photo: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=450&fit=crop&auto=format",
      desc: "Setelah dua tahun saling mengenal dan menguatkan dalam suka dan duka, kami memutuskan untuk melangkah lebih serius sebagai pasangan yang siap tumbuh dan melengkapi bersama."
    },
    {
      year: "2024",
      date: "12 November 2024",
      title: "Petualangan & Menjelajah Bersama",
      photo: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=450&fit=crop&auto=format",
      desc: "Menjelajahi keindahan alam bersama, belajar memahami dan melengkapi karakter satu sama lain, hingga ikatan batin dan kedewasaan hubungan kami terasa kian matang."
    },
    {
      year: "2025",
      date: "10 Januari 2025",
      title: "Momen Lamaran Syahdu",
      photo: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=450&fit=crop&auto=format",
      desc: "Di hadapan keluarga besar yang kami cintai, sebuah cincin tersemat indah. Suasana haru dan kebahagiaan menyelimuti saat pinangan resmi diterima dengan senyuman terbaik."
    },
    {
      year: "2025",
      date: "15 Juni 2025",
      title: "Sesi Prewedding & Persiapan",
      photo: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=450&fit=crop&auto=format",
      desc: "Merajut impian pernikahan bersama, mengabadikan momen kebersamaan dalam potret prewedding hangat, serta mempersiapkan hari istimewa dengan ketulusan dan Doa."
    },
    {
      year: "2026",
      date: "20 September 2026",
      title: "Menuju Pernikahan Suci",
      photo: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=450&fit=crop&auto=format",
      desc: "Hari yang kami tunggu akhirnya tiba. Bersama doa dan rida orang tua serta kehangatan keluarga tercinta, kami mengucap ikatan pernikahan suci untuk selamanya."
    }
  ];

  return (
    <section id="story" className="py-20 px-0 sm:px-0 relative overflow-hidden bg-gradient-to-b from-[#FDF6F3] via-[#F8ECE8] to-[#FAF0ED] text-[#4A3A32] w-full min-h-screen">
      <FloatingButterflies count={2} />
      <SectionBackgroundPhoto src={bg3Png} opacity={0.18} />
      <SectionBirdsFlock delay={1} top="8vh" />
      <SideTrees leftTree={pohon10Png} rightTree={pohon9Png} opacity={0.85} />

      {/* Section Header */}
      <div className="relative z-20 max-w-md mx-auto px-4 mb-8 text-center">
        <SectionHeader label="Our Journey Together" title="Our Love Story" light={false} />
      </div>

      {/* Full-Width Edge-to-Edge Pink Glass Shape Container */}
      <div className="relative z-20 w-full bg-[#F6DDD8]/85 backdrop-blur-md border-y border-[#D8B6B0] shadow-md py-10 px-4 sm:px-6">
        <div className="max-w-md mx-auto">
          {/* Top Decorative Soft Rose Accent Line */}
          <div className="w-full h-1.5 bg-gradient-to-r from-[#C7A86D] via-[#E8C7C0] to-[#C7A86D] rounded-full mb-6" />

          {storyTimeline.map((item, idx) => (
            <StoryItemBlock key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery Section (2-Column Grid with Ultra-Smooth Lightbox & Lazy Loading) ─── */
interface GalleryPhotoItem {
  id: number;
  src: string;
  title?: string;
}

function GalleryScrollCard({
  photo,
  index,
  onSelect,
}: {
  photo: GalleryPhotoItem;
  index: number;
  onSelect: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "50px 0px 50px 0px" }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onSelect}
      className={`relative cursor-pointer overflow-hidden rounded-2xl border border-[#C7A86D]/30 bg-[#FAF7F2] transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform hover:-translate-y-1 group ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{
        transitionDelay: `${(index % 2) * 90}ms`,
        boxShadow: "0 10px 30px -5px rgba(74, 58, 50, 0.12)",
        willChange: "transform, opacity",
      }}
    >
      <div className="w-full aspect-[4/5] relative overflow-hidden bg-[#EFE8DF]/60">
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#EFE8DF] via-[#FAF7F2] to-[#EFE8DF] animate-pulse" />
        )}
        <img
          src={photo.src}
          alt={photo.title || `Gallery item ${index + 1}`}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          loading="lazy"
          decoding="async"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1D14]/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex items-center justify-between">
            <span className="text-white font-serif text-sm font-medium tracking-wide drop-shadow-md">
              {photo.title || "Pre-Wedding"}
            </span>
            <div className="w-8 h-8 rounded-full bg-[#C7A86D] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <Heart size={14} fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GallerySection({ photos }: { photos?: any[] }) {
  const galleryItems: GalleryPhotoItem[] = [
    { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop&auto=format&q=80", title: "Eternal Vows" },
    { id: 2, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1000&fit=crop&auto=format&q=80", title: "Golden Moment" },
    { id: 3, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=1000&fit=crop&auto=format&q=80", title: "Pure Elegance" },
    { id: 4, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=1000&fit=crop&auto=format&q=80", title: "Whispers of Love" },
    { id: 5, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1000&fit=crop&auto=format&q=80", title: "Hand in Hand" },
    { id: 6, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=1000&fit=crop&auto=format&q=80", title: "Sweet Embrace" },
    { id: 7, src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=1000&fit=crop&auto=format&q=80", title: "Blooming Romance" },
    { id: 8, src: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800&h=1000&fit=crop&auto=format&q=80", title: "Sunlit Memories" },
    { id: 9, src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&h=1000&fit=crop&auto=format&q=80", title: "Together Forever" },
    { id: 10, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1000&fit=crop&auto=format&q=80", title: "Gentle Touch" },
    { id: 11, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=1000&fit=crop&auto=format&q=80", title: "Graceful Sunset" },
    { id: 12, src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&h=1000&fit=crop&auto=format&q=80", title: "Love's Radiance" },
    { id: 13, src: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&h=1000&fit=crop&auto=format&q=80", title: "Blissful Smile" },
    { id: 14, src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=1000&fit=crop&auto=format&q=80", title: "Romantic Walk" },
    { id: 15, src: "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?w=800&h=1000&fit=crop&auto=format&q=80", title: "Forever Dream" },
    { id: 16, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&h=1000&fit=crop&auto=format&q=80", title: "Sacred Joy" },
    { id: 17, src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&h=1000&fit=crop&auto=format&q=80", title: "Serenade of Hearts" },
    { id: 18, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=800&h=1000&fit=crop&auto=format&q=80", title: "Golden Hour Smile" },
    { id: 19, src: "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=800&h=1000&fit=crop&auto=format&q=80", title: "Cherished Moments" },
    { id: 20, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&h=1000&fit=crop&auto=format&q=80", title: "Timeless Beauty" },
    { id: 21, src: "https://images.unsplash.com/photo-1509924603527-4c3a47659550?w=800&h=1000&fit=crop&auto=format&q=80", title: "Warm Embraces" },
    { id: 22, src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&h=1000&fit=crop&auto=format&q=80", title: "Endless Devotion" },
    { id: 23, src: "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?w=800&h=1000&fit=crop&auto=format&q=80", title: "Enchanted Garden" },
    { id: 24, src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&h=1000&fit=crop&auto=format&q=80", title: "Joyful Celebration" },
  ];

  const [activeLightbox, setActiveLightbox] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeLightbox === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveLightbox(null);
      else if (e.key === "ArrowLeft") setActiveLightbox((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : 0));
      else if (e.key === "ArrowRight") setActiveLightbox((prev) => (prev !== null ? (prev + 1) % galleryItems.length : 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightbox, galleryItems.length]);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#FAF7F2] text-[#4A3A32]">
      <FloatingButterflies count={2} />
      <SectionBackgroundPhoto src={bg5Png} opacity={0.15} />
      <SectionBirdsFlock delay={3} top="12vh" />
      <SideTrees leftTree={pohon7Png} rightTree={pohon8Png} opacity={0.85} />

      <div className="relative z-20 max-w-xl sm:max-w-2xl mx-auto">
        <SectionHeader label="Captured Moments" title="Our Gallery" light={false} />

        {/* 2-Column Grid (2 photos per row, larger & clearer) */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-5 mt-8">
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
          className="fixed inset-0 z-50 bg-[#2B1D14]/80 backdrop-blur-xl flex flex-col items-center justify-center p-4 transition-all duration-300 animate-in fade-in duration-200"
          onClick={() => setActiveLightbox(null)}
        >
          <button
            onClick={() => setActiveLightbox(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 p-2.5 rounded-full transition-all duration-200 z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-xl w-full max-h-[85vh] overflow-hidden rounded-3xl border border-[#C7A86D]/40 shadow-2xl bg-white/95 backdrop-blur-md flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden bg-[#1A120C] flex items-center justify-center min-h-[50vh] max-h-[72vh]">
              <img
                src={galleryItems[activeLightbox].src}
                alt={galleryItems[activeLightbox].title || "Gallery Lightbox"}
                className="w-full h-full object-contain max-h-[72vh] mx-auto transition-all duration-500"
                decoding="async"
              />
            </div>
            <div className="flex justify-between items-center px-6 py-4 bg-[#FAF7F2] border-t border-[#C7A86D]/30 text-[#4A3A32]">
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold text-[#2B1D14]">
                  {galleryItems[activeLightbox].title || "Pre-Wedding"}
                </span>
                <span className="text-[11px] text-[#7A5A1A] font-semibold tracking-wider uppercase">
                  {activeLightbox + 1} of {galleryItems.length}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveLightbox((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : 0))}
                  className="px-3.5 py-1.5 rounded-full border border-[#C7A86D]/40 bg-white hover:bg-[#C7A86D] hover:text-white text-xs text-[#2B1D14] font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setActiveLightbox((prev) => (prev !== null ? (prev + 1) % galleryItems.length : 0))}
                  className="px-3.5 py-1.5 rounded-full border border-[#C7A86D]/40 bg-white hover:bg-[#C7A86D] hover:text-white text-xs text-[#2B1D14] font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
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
      <FloatingButterflies count={2} />
      <SectionBackgroundPhoto src={bg5Png} opacity={0.16} />
      <SectionBirdsFlock delay={2} top="8vh" />
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
            <div className="rounded-3xl overflow-hidden bg-white/20 backdrop-blur-[3px] border border-[#C7A86D]/35 shadow-sm transition-all duration-300">
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
                className="rounded-2xl p-4 flex items-center justify-between gap-3 bg-white/20 backdrop-blur-[3px] border border-[#C7A86D]/35 shadow-sm transition-all duration-300"
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

interface WishItem {
  id: string;
  name: string;
  attendance?: 'yes' | 'no' | 'maybe';
  guests?: string;
  message: string;
  date: string;
}

interface RsvpItem {
  id: string;
  name: string;
  attendance: 'yes' | 'no' | 'maybe';
  guests: string;
  wishes?: string;
  date: string;
}

const DEFAULT_WISHES: WishItem[] = [
  { id: "w-1", name: "Sarah & James", attendance: "yes", guests: "2", message: "Semoga kalian berdua dikaruniai seumur hidup yang penuh cinta, tawa, dan kebahagiaan yang tak berujung!", date: "2 hari lalu" },
  { id: "w-2", name: "Amelia Thompson", attendance: "yes", guests: "1", message: "Semoga kisah cinta kalian terus dituliskan dengan penuh kebahagiaan, petualangan, dan kasih sayang yang mendalam.", date: "3 hari lalu" },
  { id: "w-3", name: "Robert & Diana", attendance: "yes", guests: "2", message: "Selamat! Cinta kalian adalah inspirasi bagi kami semua. Semoga pernikahan kalian indah dan penuh berkah!", date: "5 hari lalu" },
  { id: "w-4", name: "Budi & Keluarga", attendance: "yes", guests: "4", message: "Selamat menempuh hidup baru Aisyah & Rizky. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin!", date: "1 minggu lalu" },
  { id: "w-5", name: "Maya Salsabila", attendance: "no", guests: "1", message: "Selamat ya Aisyah! Maaf banget belum bisa hadir langsung karena ada tugas dinas. Doa terbaik untuk kalian berdua!", date: "1 minggu lalu" },
  { id: "w-6", name: "Hendra & Siska", attendance: "yes", guests: "2", message: "Happy Wedding Aisyah & Rizky! Semoga dilancarkan sampai hari H dan langgeng sampai kakek nenek!", date: "2 minggu lalu" },
];

function AddToCalendarMenu({ eventTitle, dateIsoStart, dateIsoEnd, locationStr, addressStr, onOpenChange }: {
  eventTitle: string;
  dateIsoStart: string;
  dateIsoEnd: string;
  locationStr: string;
  addressStr: string;
  onOpenChange?: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
        onOpenChange?.(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onOpenChange]);

  const toggleOpen = () => {
    const next = !open;
    setOpen(next);
    onOpenChange?.(next);
  };

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("The Wedding of Aisyah & Rizky - " + eventTitle)}&dates=${dateIsoStart}/${dateIsoEnd}&details=${encodeURIComponent("Acara " + eventTitle + " Pernikahan Aisyah Yusuf & Rizky Ramadhan. Lokasi: " + locationStr + ", " + addressStr)}&location=${encodeURIComponent(locationStr + ", " + addressStr)}`;

  const handleIcsDownload = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Aisyah & Rizky Wedding//ID",
      "BEGIN:VEVENT",
      `SUMMARY:The Wedding of Aisyah & Rizky - ${eventTitle}`,
      `DESCRIPTION:Acara ${eventTitle} Pernikahan Aisyah Yusuf & Rizky Ramadhan`,
      `LOCATION:${locationStr}, ${addressStr}`,
      `DTSTART:${dateIsoStart}`,
      `DTEND:${dateIsoEnd}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `Wedding_${eventTitle.replace(/\s+/g, "_")}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div ref={menuRef} className={`relative mt-6 w-full ${open ? 'z-[200]' : 'z-40'}`}>
      <button
        type="button"
        onClick={toggleOpen}
        className="w-full py-3 px-4 rounded-full text-xs uppercase tracking-widest bg-gradient-to-r from-[#F3DDD7] via-[#F8ECE8] to-[#F3DDD7] border border-[#C7A86D]/50 text-[#2B1D14] font-bold hover:bg-[#C7A86D] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
      >
        <Calendar size={15} className="text-[#7A5A1A]" />
        <span>Add to Calendar</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 z-[300] rounded-2xl bg-white/98 backdrop-blur-xl border border-[#C7A86D]/40 shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-200">
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setOpen(false);
              onOpenChange?.(false);
            }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FAF5EE] text-xs text-[#2B1D14] font-bold transition-colors"
          >
            <span className="w-6 h-6 rounded-full bg-[#EA4335]/15 text-[#EA4335] flex items-center justify-center font-bold text-[11px]">G</span>
            <span>Google Calendar</span>
          </a>
          <button
            type="button"
            onClick={() => {
              handleIcsDownload();
              setOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FAF5EE] text-xs text-[#4A3A32] font-semibold transition-colors text-left cursor-pointer"
          >
            <Download size={15} className="text-[#C7A86D]" />
            <span>Apple / Outlook (.ics)</span>
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── Main App ───────────────────────────────────────────── */
export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [openingStage, setOpeningStage] = useState<'closed' | 'opening_gate' | 'zooming_in' | 'revealing' | 'opened'>('closed');
  const [copied, setCopied] = useState<string | null>(null);
  const [openCalendarIndex, setOpenCalendarIndex] = useState<number | null>(null);
  
  const [wishes, setWishes] = useState<WishItem[]>(() => {
    try {
      const saved = localStorage.getItem("wedding_guest_wishes");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_WISHES;
  });

  const [rsvps, setRsvps] = useState<RsvpItem[]>(() => {
    try {
      const saved = localStorage.getItem("wedding_guest_rsvps");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  const [wishesFilter, setWishesFilter] = useState<'all' | 'yes' | 'no'>('all');
  const [rsvpForm, setRsvpForm] = useState({ name: "", attendance: "yes", guests: "1", wishes: "" });
  const [rsvpSent, setRsvpSent] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("wedding_guest_wishes", JSON.stringify(wishes));
    } catch (e) {
      console.error(e);
    }
  }, [wishes]);

  useEffect(() => {
    try {
      localStorage.setItem("wedding_guest_rsvps", JSON.stringify(rsvps));
    } catch (e) {
      console.error(e);
    }
  }, [rsvps]);

  const filteredWishes = useMemo(() => {
    if (wishesFilter === 'all') return wishes;
    return wishes.filter(w => w.attendance === wishesFilter);
  }, [wishes, wishesFilter]);

  const totalAttending = useMemo(() => {
    const wishesAttending = wishes.filter(w => w.attendance === 'yes').length;
    const rsvpsAttending = rsvps.filter(r => r.attendance === 'yes').length;
    return Math.max(wishesAttending, rsvpsAttending + 12);
  }, [wishes, rsvps]);
  const [isMuted, setIsMuted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const weddingDateMs = useMemo(() => new Date("2026-09-20T08:00:00").getTime(), []);
  const countdown = useCountdown(weddingDateMs);

  // Track scroll position to show navbar only after scrolling down
  useEffect(() => {
    if (!isOpened) {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpened]);

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
      window.scrollTo(0, 0);
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
    audio.preload = "none";
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
    if (!rsvpForm.name.trim()) return;

    const newId = Date.now().toString();
    const dateStr = "Baru saja";

    const newRsvp: RsvpItem = {
      id: newId,
      name: rsvpForm.name.trim(),
      attendance: rsvpForm.attendance as 'yes' | 'no' | 'maybe',
      guests: rsvpForm.guests,
      wishes: rsvpForm.wishes.trim(),
      date: dateStr,
    };

    setRsvps(prev => [newRsvp, ...prev]);

    if (rsvpForm.wishes.trim()) {
      const newWish: WishItem = {
        id: newId,
        name: rsvpForm.name.trim(),
        attendance: rsvpForm.attendance as 'yes' | 'no' | 'maybe',
        guests: rsvpForm.guests,
        message: rsvpForm.wishes.trim(),
        date: dateStr,
      };
      setWishes(prev => [newWish, ...prev]);
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
          <FloatingButterflies count={3} />
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
                opacity: (openingStage === 'closed' || openingStage === 'opening_gate') ? 1 : 0,
                transform: (openingStage === 'closed' || openingStage === 'opening_gate')
                  ? "scale(1) translateY(0)"
                  : "scale(1.25) translateY(-30px)",
                transition: "opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 2.0s cubic-bezier(0.25, 1, 0.5, 1)"
              }}
            >
              <div className="mb-2 px-4 py-1 rounded-full bg-[#FAF5EE]/95 border border-[#C7A86D]/60 shadow-[0_4px_16px_rgba(40,30,20,0.15)] backdrop-blur-md inline-flex items-center justify-center">
                <p
                  className="text-[10px] xs:text-xs sm:text-sm tracking-[0.3em] text-[#8B6B23] uppercase font-bold drop-shadow-xs"
                  style={{ fontFamily: "'Cormorant Garamond', 'Poppins', serif" }}
                >
                  The Wedding of
                </p>
              </div>
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
              className="relative w-[340px] xs:w-[420px] sm:w-[580px] md:w-[680px] lg:w-[780px] aspect-[711/837] max-h-[64vh] sm:max-h-[72vh] lg:max-h-[78vh] flex items-center justify-center pointer-events-none"
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


        </div>
      )}

      {isOpened && (
        <button
          onClick={() => setIsMuted(prev => !prev)}
          className="fixed top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-[#F8F5F0]/90 text-[#4A3A32] shadow-[0_4px_20px_rgba(74,58,50,0.18)] border border-[#C7A86D]/40 backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
          title={isMuted ? "Putar Musik" : "Matikan Musik"}
        >
          {isMuted ? (
            <VolumeX size={18} className="text-[#8A7560] transition-colors group-hover:text-[#4A3A32]" />
          ) : (
            <Music size={18} className="text-[#C7A86D] animate-spin" style={{ animationDuration: '4s' }} />
          )}
        </button>
      )}

      {/* Main Landing Page Content Container at Normal Scale (1.0) */}
      {/* Main Landing Page Content Container (Responsive Aksara Mobile Container) */}
      <div className="invitation-wrapper shadow-2xl relative bg-[#F8F5F0] text-[#4A3A32]">

        {/* ── NEW AKSARA WEDDING HERO PAGE (Matching referensi.png) ───── */}
        <AksaraHeroSection brideName="Aisyah" groomName="Rizky" titleText="The Wedding of" />

        {/* ── WELCOME ─────────────────────────────────────────── */}
        <section id="welcome" className="py-16 px-0 text-center relative overflow-hidden bg-[#F8F5F0] text-[#4A3A32]">
          <FloatingButterflies count={2} />
          <SectionBackgroundPhoto src={bg1Png} opacity={0.18} />
          <SectionBirdsFlock delay={0} top="8vh" />
          <SideTrees leftTree={pohon7Png} rightTree={pohon8Png} opacity={0.85} />
          
          {/* Top-Left Corner Floral Ornament */}
          <div className="absolute top-0 left-0 w-28 xs:w-36 sm:w-44 z-20 pointer-events-none opacity-90">
            <img
              src={bungaOpeningKiriSvg}
              alt="Floral Corner"
              className="w-full h-auto object-contain filter drop-shadow-[0_4px_10px_rgba(74,58,50,0.12)] animate-flower-sway-tl pointer-events-none"
            />
          </div>

          {/* Transparent Full-Width Mobile Shape Overlay */}
          <div className="relative z-20 w-full px-4 sm:px-6">
            <SectionReveal className="relative z-10 w-full">
              <div className="w-full bg-white/40 backdrop-blur-md rounded-2xl py-10 px-5 sm:px-8 border border-[#C7A86D]/45 shadow-md transition-all duration-300">
                {/* Monogram Header Logo (R | A) */}
                <div className="flex items-center justify-center gap-3 mb-5">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#2B1D14] tracking-wider">R</span>
                  <div className="w-[2px] h-8 bg-[#2B1D14]"></div>
                  <span className="font-script text-3xl sm:text-4xl font-bold text-[#2B1D14]" style={{ fontFamily: "'Great Vibes', cursive" }}>A</span>
                </div>

                <p className="text-[11px] tracking-[0.35em] uppercase text-[#7A5A1A] font-bold mb-2">With Joy We Announce</p>
                
                <h2 className="font-script text-4xl sm:text-5xl text-[#2B1D14] font-bold mb-6 leading-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>
                  We Found Love
                </h2>

                <p className="font-serif italic text-[#2B1D14] text-sm sm:text-base font-semibold leading-relaxed mb-5 max-w-md mx-auto">
                  "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
                </p>
                
                <p className="text-xs sm:text-sm tracking-wider text-[#7A5A1A] font-serif font-bold mb-6">
                  - <span className="underline underline-offset-4 font-bold">QS. Ar-Rum</span> : 21 -
                </p>

                <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#C7A86D] to-transparent mx-auto mb-6"></div>

                <p className="text-xs sm:text-sm leading-relaxed text-[#2B1D14] font-bold max-w-md mx-auto">
                  Dengan penuh cinta dan rasa syukur yang melimpah, kami dengan bahagia mengundang kalian untuk merayakan bersatunya dua hati kami. Kehadiran kalian akan membuat hari istimewa kami menjadi sempurna — dan selalu terkenang dalam ingatan kami.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ── BRIDE & GROOM ───────────────────────────────────── */}
        <section id="couple" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#FAF7F2] text-[#4A3A32]">
          <FloatingButterflies count={2} />
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
      <section id="countdown" className="py-16 px-0 text-center relative overflow-hidden bg-[#F8F5F0] text-[#4A3A32]">
        <FloatingButterflies count={2} />
        <SectionBackgroundPhoto src={bg4Png} opacity={0.18} />
        <SectionBirdsFlock delay={2} top="6vh" />
        <SideTrees leftTree={pohon6Png} rightTree={pohon1Png} opacity={0.85} />

        {/* Transparent Mobile Shape Overlay Matching 'With Joy We Announce' Section */}
        <div className="relative z-20 w-full px-4 sm:px-6 max-w-md mx-auto">
          <SectionReveal className="relative z-10 w-full">
            <div className="w-full bg-white/20 backdrop-blur-[3px] rounded-2xl py-10 px-5 sm:px-8 border border-[#C7A86D]/30 shadow-sm transition-all duration-300">
              <SectionHeader label="The Big Day" title="Counting Down With Joy" light={false} />

              {/* Target Date Badge */}
              <div className="mt-4 mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#F3DDD7]/80 text-[#4A3A32] border border-[#D8B6B0]">
                <span>✦ Sabtu, 20 September 2026 ✦</span>
              </div>

              {/* Live Animated Countdown Cards */}
              <StaggerChildren className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-2" variant="zoom" staggerMs={120} baseDelay={100}>
                {[
                  { label: "Hari", value: countdown.days },
                  { label: "Jam", value: countdown.hours },
                  { label: "Menit", value: countdown.minutes },
                  { label: "Detik", value: countdown.seconds },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center w-20 sm:w-24 h-22 sm:h-26 rounded-2xl bg-white/95 backdrop-blur-md border border-[#C7A86D]/30 shadow-[0_8px_24px_rgba(74,58,50,0.08)] transition-all hover:scale-105"
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
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── EVENTS ──────────────────────────────────────────── */}
      <section id="events" className="py-20 px-4 sm:px-6 relative overflow-visible bg-[#F8F5F0] text-[#4A3A32]">
        <FloatingButterflies count={2} />
        <SectionBackgroundPhoto src={bg4Png} opacity={0.16} />
        <SectionBirdsFlock delay={4} top="10vh" />
        <SideTrees leftTree={pohon2Png} rightTree={pohon7Png} opacity={0.85} />
        <div className="relative z-30 max-w-md mx-auto">
          <SectionReveal className="relative z-10 w-full">
            <div className="w-full bg-white/35 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#C7A86D]/40 shadow-md transition-all duration-300">
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
                ].map((ev, index) => (
                  <div
                    key={ev.title}
                    className="rounded-2xl p-5 sm:p-6 relative overflow-visible bg-white/80 backdrop-blur-md border border-[#C7A86D]/45 shadow-sm transition-all duration-300 hover:shadow-md"
                    style={{ zIndex: openCalendarIndex === index ? 100 : (50 - index) }}
                  >
                    <div className="absolute top-4 right-4 opacity-30 text-4xl text-[#7A5A1A] font-serif">
                      {ev.icon}
                    </div>
                    <p className="text-[11px] tracking-[0.3em] uppercase mb-1 text-[#7A5A1A] font-bold">{ev.subtitle}</p>
                    <h3 className="font-serif text-2xl text-[#2B1D14] font-bold">{ev.title}</h3>
                    <div className="mt-4 space-y-2.5">
                      <div className="flex items-start gap-3 text-[#2B1D14] text-xs font-semibold">
                        <Calendar size={16} className="text-[#7A5A1A] mt-0.5 flex-shrink-0" />
                        <span className="font-bold">{ev.date}</span>
                      </div>
                      <div className="flex items-start gap-3 text-[#2B1D14] text-xs font-semibold">
                        <Clock size={16} className="text-[#7A5A1A] mt-0.5 flex-shrink-0" />
                        <span className="font-bold">{ev.time}</span>
                      </div>
                      <div className="flex items-start gap-3 text-[#2B1D14] text-xs font-semibold">
                        <MapPin size={16} className="text-[#7A5A1A] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-[#2B1D14] text-sm">{ev.location}</p>
                          <p className="text-[11px] text-[#5A4535] font-medium mt-0.5">{ev.address}</p>
                        </div>
                      </div>
                    </div>
                    <AddToCalendarMenu
                      eventTitle={ev.title}
                      dateIsoStart={ev.title.includes("Akad") ? "20260920T080000Z" : "20260920T120000Z"}
                      dateIsoEnd={ev.title.includes("Akad") ? "20260920T110000Z" : "20260920T210000Z"}
                      locationStr={ev.location}
                      addressStr={ev.address}
                      onOpenChange={(isOpen) => setOpenCalendarIndex(isOpen ? index : null)}
                    />
                  </div>
                ))}
              </StaggerChildren>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── LOCATION ────────────────────────────────────────── */}
      <section id="location" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#FAF7F2] text-[#4A3A32]">
        <FloatingButterflies count={2} />
        <SectionBackgroundPhoto src={bg5Png} opacity={0.15} />
        <SideTrees leftTree={pohon8Png} rightTree={pohon9Png} opacity={0.85} />
        <div className="relative z-20 max-w-md mx-auto">
          <SectionReveal className="relative z-10">
            <SectionHeader label="How to Find Us" title="Wedding Location" light={false} />
            
            {/* Unified Luxury Location Card with Transparent Glass Background */}
            <div className="rounded-3xl p-5 sm:p-7 bg-white/20 backdrop-blur-[3px] border border-[#C7A86D]/35 shadow-sm relative transition-all duration-300">
              
              {/* Ornate Framed Google Maps Display using frame9.png */}
              <div className="relative w-full aspect-[4/3] xs:aspect-[16/11] mb-6 flex items-center justify-center">
                {/* Inner Map iframe fitted inside frame9 inner window */}
                <div className="w-full h-full p-[11%] sm:p-[12%] relative flex items-center justify-center z-0">
                  <div className="w-full h-full relative overflow-hidden rounded-xl bg-[#EFE8DF]/80 border border-[#C7A86D]/20 shadow-inner">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1944491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20Sudirman%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: "brightness(0.96) contrast(1.04)" }}
                      allowFullScreen
                      loading="lazy"
                      title="Wedding Location Map"
                    />
                  </div>
                </div>
                {/* Ornate Frame 9 Overlay */}
                <img
                  src={frame9Png}
                  alt="Ornate Location Frame"
                  className="absolute inset-0 w-full h-full object-fill pointer-events-none z-10 filter drop-shadow-md"
                />
              </div>

              {/* Venue Details & Information */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[#F3DDD7]/90 text-[#4A3A32] border border-[#D8B6B0]">
                  ✦ Grand Ballroom ✦
                </div>
                <h3 className="font-serif text-2xl text-[#4A3A32] font-semibold">
                  The Ivory Palace Grand Ballroom
                </h3>
                <p className="text-xs text-[#4A3A32]/90 leading-relaxed max-w-xs mx-auto">
                  Jl. Gatot Subroto No. 88, Jakarta Selatan 12710
                </p>

                {/* Facility Pill Tags */}
                <div className="flex flex-wrap justify-center gap-2 pt-2 pb-1">
                  <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-white/30 backdrop-blur-xs border border-[#C7A86D]/30 text-[#4A3A32]">
                    🅿️ Parkir Luas & Valet
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-white/30 backdrop-blur-xs border border-[#C7A86D]/30 text-[#4A3A32]">
                    🕌 Musholla AC
                  </span>
                </div>

                {/* Big Interactive Action Button */}
                <div className="pt-3">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-xs tracking-widest uppercase bg-gradient-to-r from-[#C7A86D] via-[#D4AF37] to-[#B39358] text-white font-bold shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-300"
                  >
                    <MapPin size={16} />
                    Buka Petunjuk Arah (Google Maps)
                  </a>
                </div>
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
        <FloatingButterflies count={2} />
        <SectionBackgroundPhoto src={bg5Png} opacity={0.16} />
        <SectionBirdsFlock delay={1} top="10vh" />
        <SideTrees leftTree={pohon10Png} rightTree={pohon1Png} opacity={0.8} />
        <div className="relative z-20 max-w-md mx-auto">
          <SectionReveal className="relative z-10">
            <SectionHeader label="Will You Join Us?" title="RSVP & Konfirmasi" light={false} />
            {rsvpSent ? (
              <div className="text-center py-10 px-6 rounded-3xl bg-white/20 backdrop-blur-[3px] border border-[#C7A86D]/35 shadow-sm transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F3DDD7] to-[#C7A86D] text-white flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                  <Heart size={32} className="fill-white text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#4A3A32] font-semibold mb-2">Terima Kasih, {rsvpForm.name || 'Sahabat'}!</h3>
                <p className="text-xs text-[#4A3A32]/80 leading-relaxed max-w-xs mx-auto mb-6">
                  Konfirmasi kehadiran kalian ({rsvpForm.attendance === 'yes' ? 'Hadir' : rsvpForm.attendance === 'no' ? 'Berhalangan' : 'Masih Ragu'} • {rsvpForm.guests} Tamu) telah tersimpan secara dinamis. Ucapan kalian kini sudah muncul di daftar doa tamu!
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="#wishes"
                    className="w-full py-3 rounded-full text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-[#C7A86D] to-[#B39358] text-white shadow-md hover:scale-[1.02] active:scale-95 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={14} />
                    Lihat Ucapan Kamu di Guest Wishes
                  </a>
                  <button
                    onClick={() => {
                      setRsvpSent(false);
                      setRsvpForm({ name: "", attendance: "yes", guests: "1", wishes: "" });
                    }}
                    className="w-full py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F3DDD7] border border-[#C7A86D]/40 text-[#4A3A32] hover:bg-[#C7A86D] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RefreshCw size={13} />
                    Kirim Konfirmasi / Ucapan Lainnya
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRsvp} className="space-y-4 rounded-3xl p-6 sm:p-7 bg-white/20 backdrop-blur-[3px] border border-[#C7A86D]/35 shadow-sm transition-all duration-300">
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#8B6B23] font-bold mb-1.5 flex items-center gap-1.5">
                    <span>Nama Lengkap</span>
                    <span className="text-[#C7A86D]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={rsvpForm.name}
                    onChange={e => setRsvpForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="Masukkan nama lengkap kamu"
                    className="w-full px-4 py-3 rounded-xl text-xs bg-[#FAF7F2] border border-[#D8B6B0] text-[#4A3A32] placeholder-[#8A7560]/50 outline-none focus:border-[#C7A86D] focus:ring-1 focus:ring-[#C7A86D] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#8B6B23] font-bold mb-1.5">Konfirmasi Kehadiran</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: "yes", label: "Hadir", icon: CheckCircle2 },
                      { key: "no", label: "Absen", icon: XCircle },
                      { key: "maybe", label: "Ragu", icon: HelpCircle },
                    ].map(opt => {
                      const Icon = opt.icon;
                      const active = rsvpForm.attendance === opt.key;
                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => setRsvpForm(p => ({ ...p, attendance: opt.key as any }))}
                          className={`py-3 px-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                            active
                              ? "bg-gradient-to-br from-[#C7A86D] to-[#B39358] text-white shadow-md scale-[1.02]"
                              : "bg-[#F5ECE8] text-[#4A3A32] border border-[#D8B6B0]/60 hover:border-[#C7A86D]"
                          }`}
                        >
                          <Icon size={16} className={active ? "text-white" : "text-[#C7A86D]"} />
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#8B6B23] font-bold mb-1.5">Jumlah Tamu yang Hadir</label>
                  <select
                    value={rsvpForm.guests}
                    onChange={e => setRsvpForm(p => ({ ...p, guests: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-xs bg-[#FAF7F2] border border-[#D8B6B0] text-[#4A3A32] outline-none focus:border-[#C7A86D] transition-all cursor-pointer"
                  >
                    {["1","2","3","4","5+"].map(n => <option key={n} value={n}>{n} Tamu</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#8B6B23] font-bold mb-1.5">Ucapan & Doa Restu</label>
                  <textarea
                    rows={3}
                    value={rsvpForm.wishes}
                    onChange={e => setRsvpForm(p => ({ ...p, wishes: e.target.value }))}
                    placeholder="Tuliskan doa manis dan ucapan selamat terbaikmu..."
                    className="w-full px-4 py-3 rounded-xl text-xs bg-[#FAF7F2] border border-[#D8B6B0] text-[#4A3A32] placeholder-[#8A7560]/50 outline-none resize-none focus:border-[#C7A86D] focus:ring-1 focus:ring-[#C7A86D] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-[#C7A86D] via-[#D4AF37] to-[#B39358] text-white shadow-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  <Send size={15} />
                  Kirim RSVP & Ucapan
                </button>
              </form>
            )}
          </SectionReveal>
        </div>
      </section>

      {/* ── WISHES ──────────────────────────────────────────── */}
      <section id="wishes" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#FAF7F2] text-[#4A3A32]">
        <FloatingButterflies count={2} />
        <SectionBackgroundPhoto src={bg5Png} opacity={0.15} />
        <SectionBirdsFlock delay={1} top="8vh" />
        <SideTrees leftTree={pohon7Png} rightTree={pohon8Png} opacity={0.8} />
        <div className="relative z-20 max-w-md mx-auto">
          <SectionReveal className="relative z-10">
            <SectionHeader label="Kind Words & Prayers" title="Guest Wishes" light={false} />

            {/* Live Interactive Stats Bar */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/20 backdrop-blur-[3px] border border-[#C7A86D]/35 shadow-sm transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-[#F3DDD7] text-[#C7A86D] flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-[#4A3A32] leading-none">{wishes.length}</p>
                  <p className="text-[10px] text-[#8A7560] font-medium tracking-wider uppercase mt-0.5">Total Ucapan</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/20 backdrop-blur-[3px] border border-[#C7A86D]/35 shadow-sm transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-[#E8F3E8] text-[#2E7D32] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-[#4A3A32] leading-none">{totalAttending}</p>
                  <p className="text-[10px] text-[#8A7560] font-medium tracking-wider uppercase mt-0.5">Tamu Confirmed</p>
                </div>
              </div>
            </div>

            {/* Aksara Style Framed Wishes Box Container */}
            <div className="rounded-3xl p-4 sm:p-5 bg-white/20 backdrop-blur-[3px] border border-[#C7A86D]/35 shadow-sm relative overflow-hidden transition-all duration-300">
              
              {/* Box Top Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#C7A86D]/20">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#C7A86D]">✦</span>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3A32]">Daftar Doa & Ucapan</h4>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F3DDD7] text-[#4A3A32] font-semibold border border-[#D8B6B0]">
                  {filteredWishes.length} Pesan
                </span>
              </div>

              {/* Filter Tabs */}
              <div className="flex justify-center gap-1.5 p-1 rounded-2xl bg-[#FAF5EE] border border-[#C7A86D]/20 mb-4">
                {[
                  { key: 'all', label: `Semua (${wishes.length})` },
                  { key: 'yes', label: 'Hadir (✓)' },
                  { key: 'no', label: 'Absen (✕)' },
                ].map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setWishesFilter(tab.key as any)}
                    className={`flex-1 py-1.5 rounded-xl text-[11px] font-semibold transition-all cursor-pointer ${
                      wishesFilter === tab.key
                        ? "bg-gradient-to-r from-[#C7A86D] to-[#B39358] text-white shadow-xs"
                        : "text-[#6E5B48] hover:text-[#4A3A32]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Wishes Scrollable Container with Fixed Sizing */}
              <div className="h-[360px] sm:h-[400px] overflow-y-auto pr-1.5 space-y-3.5 scrollbar-thin scrollbar-thumb-[#C7A86D]/40">
                {filteredWishes.length === 0 ? (
                  <div className="text-center py-12 px-4 rounded-2xl bg-[#FAF5EE]/80 border border-[#C7A86D]/20">
                    <p className="text-xs text-[#8A7560]">Belum ada ucapan pada kategori ini.</p>
                  </div>
                ) : (
                  filteredWishes.map((w, i) => (
                    <div key={w.id || i} className="rounded-2xl p-4 bg-[#FAF7F2]/90 border border-[#C7A86D]/25 shadow-xs relative transition-all hover:border-[#C7A86D]/50 hover:bg-white">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E8C7C0] via-[#D8B6B0] to-[#C7A86D] text-white text-xs font-bold font-serif flex items-center justify-center shadow-xs flex-shrink-0">
                            {w.name[0]?.toUpperCase() || 'A'}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#4A3A32] leading-tight">{w.name}</p>
                            <p className="text-[10px] text-[#8A7560]">{w.date}</p>
                          </div>
                        </div>
                        {w.attendance && (
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider flex-shrink-0 ${
                            w.attendance === 'yes'
                              ? "bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7]"
                              : w.attendance === 'no'
                              ? "bg-[#FFEBEE] text-[#C62828] border border-[#EF9A9A]"
                              : "bg-[#FFF8E1] text-[#F57F17] border border-[#FFE082]"
                          }`}>
                            {w.attendance === 'yes' ? `✓ Hadir ${w.guests ? `(${w.guests})` : ''}` : w.attendance === 'no' ? '✕ Absen' : '? Ragu'}
                          </span>
                        )}
                      </div>
                      <p className="text-xs leading-relaxed text-[#4A3A32]/90 font-light pl-1 pt-1 italic">
                        "{w.message}"
                      </p>
                    </div>
                  ))
                )}
              </div>

              {/* Bottom Subtle Scroll Indicator */}
              <div className="pt-3 mt-2 border-t border-[#C7A86D]/15 flex items-center justify-center gap-1.5 text-[10px] text-[#8A7560] font-medium tracking-wider uppercase">
                <span>Scroll untuk melihat ucapan lainnya</span>
                <ChevronDown size={12} className="text-[#C7A86D] animate-bounce" />
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="relative py-16 px-6 text-center overflow-hidden bg-[#F4EFEA] text-[#4A3A32] border-t border-[#C7A86D]/30">
        <FloatingButterflies count={2} />
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
        <nav
          className={`fixed left-1/2 z-50 -translate-x-1/2 w-[min(95vw,460px)] rounded-full border border-[#C7A86D]/35 bg-[#F8F5F0]/90 px-1.5 py-1.5 sm:px-2 sm:py-2 shadow-[0_10px_30px_rgba(74,58,50,0.15)] backdrop-blur-xl transition-all duration-500 transform ${
            isScrolled
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          style={{ bottom: "calc(env(safe-area-inset-bottom, 1rem) + 0.75rem)" }}
        >
          <div className="flex items-center justify-between gap-0.5">
            {[
              { href: "#hero", label: "Home", Icon: Home },
              { href: "#couple", label: "Couple", Icon: Heart },
              { href: "#events", label: "Events", Icon: Calendar },
              { href: "#location", label: "Location", Icon: MapPin },
              { href: "#rsvp", label: "RSVP", Icon: Send },
            ].map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                className="flex min-w-[42px] sm:min-w-[48px] flex-1 items-center justify-center rounded-3xl px-1.5 py-1.5 text-center text-[9px] font-semibold uppercase tracking-wider text-[#4A3A32] transition-all duration-200 hover:bg-[#F3DDD7] hover:text-[#C7A86D]"
                aria-label={label}
              >
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <Icon size={15} />
                  <span>{label}</span>
                </div>
              </a>
            ))}

            {/* Integrated Sound / Mute Toggle Button */}
            <button
              onClick={() => setIsMuted(prev => !prev)}
              className={`flex min-w-[42px] sm:min-w-[48px] flex-1 items-center justify-center rounded-3xl px-1.5 py-1.5 text-center text-[9px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                isMuted
                  ? "text-[#8A7560] hover:bg-[#F3DDD7] hover:text-[#4A3A32]"
                  : "text-[#C7A86D] hover:bg-[#F3DDD7]"
              }`}
              aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
              title={isMuted ? "Putar Musik" : "Matikan Musik"}
            >
              <div className="flex flex-col items-center justify-center gap-0.5">
                {isMuted ? (
                  <VolumeX size={15} className="text-[#8A7560]" />
                ) : (
                  <Volume2 size={15} className="text-[#C7A86D] animate-pulse" />
                )}
                <span className={isMuted ? "line-through opacity-75" : "font-bold"}>
                  {isMuted ? "Mute" : "Sound"}
                </span>
              </div>
            </button>
          </div>
        </nav>
      )}
      </div>

      <style>{`
        /* Continuous Lifelike Sway for Side Trees (Pohon Bergerak Seperti Hidup) */
        @keyframes livingTreeSwayLeft {
          0% {
            transform: rotate(0deg) scale(1) translate(0px, 0px);
          }
          20% {
            transform: rotate(1.6deg) scale(1.015) translate(3px, -2px);
          }
          40% {
            transform: rotate(-1.2deg) scale(0.99) translate(-2px, 1px);
          }
          60% {
            transform: rotate(1.8deg) scale(1.02) translate(3px, -3px);
          }
          80% {
            transform: rotate(0.8deg) scale(1.008) translate(1px, -1px);
          }
          100% {
            transform: rotate(0deg) scale(1) translate(0px, 0px);
          }
        }

        @keyframes livingTreeSwayRight {
          0% {
            transform: rotate(0deg) scale(1) translate(0px, 0px);
          }
          25% {
            transform: rotate(-1.6deg) scale(1.02) translate(-3px, -2px);
          }
          50% {
            transform: rotate(1.2deg) scale(0.99) translate(2px, 1px);
          }
          75% {
            transform: rotate(-1.4deg) scale(1.015) translate(-3px, -1px);
          }
          100% {
            transform: rotate(0deg) scale(1) translate(0px, 0px);
          }
        }

        .animate-living-tree-left {
          transform-origin: bottom left;
          animation: livingTreeSwayLeft 22s ease-in-out infinite;
          will-change: transform;
        }

        .animate-living-tree-right {
          transform-origin: bottom right;
          animation: livingTreeSwayRight 26s ease-in-out infinite 2s;
          will-change: transform;
        }

        /* Butterfly Wing Flapping & Path Floating */
        @keyframes butterflyWings {
          0%, 100% {
            transform: scaleX(1) rotate(0deg);
          }
          25% {
            transform: scaleX(0.22) rotate(8deg);
          }
          50% {
            transform: scaleX(0.95) rotate(-5deg);
          }
          75% {
            transform: scaleX(0.28) rotate(10deg);
          }
        }

        @keyframes butterflyFloat {
          0% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          25% {
            transform: translate(16px, -22px) rotate(8deg);
          }
          50% {
            transform: translate(-12px, -38px) rotate(-8deg);
          }
          75% {
            transform: translate(22px, -18px) rotate(12deg);
          }
          100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
        }

        .animate-butterfly-wings {
          animation: butterflyWings 0.55s ease-in-out infinite alternate;
          transform-origin: center center;
        }

        .animate-butterfly-float {
          animation: butterflyFloat 9s ease-in-out infinite;
          will-change: transform;
        }

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
