import { useState, useEffect, useRef, useMemo } from "react";
import { Home, MapPin, Calendar, Clock, Copy, Check, Instagram, Facebook, Heart, ChevronDown, Send, Music, X } from "lucide-react";
import openinggSvg from "./components/gambar/openingg.svg";
import musicTrack from "./components/Musik/nadin.mp3";
import bungaOpeningKananSvg from "./components/gambar/bunga_opening_kanan.svg";
import bungaOpeningKiriSvg from "./components/gambar/bungan_opening_kiri.svg";
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
        return kiriAtasSvg;
      case "top-right":
        return kananAtasSvg;
      case "bottom-left":
        return kiriBawahSvg;
      case "bottom-right":
        return kananBawahSvg;
      default:
        return bunga1Svg;
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
        width: position === "center" ? "200px" : "clamp(120px, 30vw, 260px)",
        height: position === "center" ? "200px" : "clamp(120px, 30vw, 260px)",
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
  const gold = light ? "rgba(232,208,154,0.75)" : "#C8A96A";
  const titleColor = light ? "#FAF7F2" : "#2C2416";
  const descColor = light ? "rgba(255,255,255,0.55)" : "#8A7560";

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

/* ─── Love Story Section ────────────────────────────────── */
type StoryItem = { year: string; title: string; desc: string; icon: string };

function LoveStorySection({ timeline }: { timeline: StoryItem[] }) {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState<number | null>(null);
  const [dir, setDir] = useState<1 | -1>(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const touchX = useRef(0);
  const touchY = useRef(0);

  const go = (idx: number) => {
    if (idx === active) return;
    setDir(idx > active ? 1 : -1);
    setPrevActive(active);
    setActive(idx);
    // scroll step indicator into view on mobile
    setTimeout(() => {
      const dots = trackRef.current?.querySelectorAll<HTMLElement>("[data-dot]");
      const dot = dots?.[idx];
      scrollContainerToChild(trackRef.current, dot);
    }, 50);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchX.current = e.touches[0].clientX;
      touchY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const dx = Math.abs(e.touches[0].clientX - touchX.current);
      const dy = Math.abs(e.touches[0].clientY - touchY.current);
      if (dx > 10 && dx > dy) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const dx = touchX.current - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 40) {
        go(Math.max(0, Math.min(timeline.length - 1, active + (dx > 0 ? 1 : -1))));
      }
    };

    section.addEventListener("touchstart", handleTouchStart, { passive: false });
    section.addEventListener("touchmove", handleTouchMove, { passive: false });
    section.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchmove", handleTouchMove);
      section.removeEventListener("touchend", handleTouchEnd);
    };
  }, [active, go, timeline.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
    touchY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const dx = Math.abs(e.touches[0].clientX - touchX.current);
    const dy = Math.abs(e.touches[0].clientY - touchY.current);
    if (dx > 10 && dx > dy) {
      e.preventDefault();
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) {
      go(Math.max(0, Math.min(timeline.length - 1, active + (dx > 0 ? 1 : -1))));
    }
  };

  const iconMap = ["🌸", "🕯️", "💑", "💍"];
  const colorMap = ["#E8D09A", "#D4B87A", "#A8B8A5", "#C8A96A"];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "#FAF7F2", touchAction: "pan-y", overscrollBehaviorX: "contain" }}
    >
      <BackgroundOrnament position="top-left" opacity={0.95} />
      <BackgroundOrnament position="bottom-right" opacity={0.95} />
      <div className="relative z-10">
        <PremiumFrame>
          <SectionHeader label="Our Journey Together" title="Our Love Story" />

          {/* ── Step tabs ──────────────────────────────────────── */}
          <div ref={trackRef} className="flex justify-center gap-3 mb-10 px-6 overflow-x-auto" style={{ scrollbarWidth: "none", touchAction: "pan-y", overscrollBehaviorX: "contain" }}>
            {timeline.map((item, i) => (
              <button
                key={i}
                data-dot="1"
                onClick={() => go(i)}
                className="flex flex-col items-center gap-1 flex-shrink-0 transition-all duration-300"
                style={{ opacity: i === active ? 1 : 0.45 }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-base transition-all duration-500"
                  style={{
                    background: i === active ? colorMap[i % 4] : "transparent",
                    border: `1.5px solid ${colorMap[i % 4]}`,
                    transform: i === active ? "scale(1.15)" : "scale(1)",
                    boxShadow: i === active ? `0 4px 16px ${colorMap[i % 4]}50` : "none",
                  }}
                >
                  {iconMap[i % 4]}
                </div>
                <span
                  className="text-xs tracking-[0.25em] uppercase whitespace-nowrap transition-all duration-300"
                  style={{
                    color: i === active ? "#C8A96A" : "#B0967A",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: i === active ? 500 : 300,
                  }}
                >
                  {item.year}
                </span>
              </button>
            ))}
          </div>

          {/* ── Progress line ──────────────────────────────────── */}
          <div className="max-w-md mx-auto px-10 mb-10">
            <div className="relative h-px" style={{ background: "rgba(200,169,106,0.2)" }}>
              <div
                className="absolute top-0 left-0 h-full transition-all duration-500"
                style={{
                  width: `${((active) / (timeline.length - 1)) * 100}%`,
                  background: "linear-gradient(to right, #C8A96A, #E8D09A)",
                }}
              />
            </div>
          </div>

          {/* ── Story card ─────────────────────────────────────── */}
          <div
            className="max-w-xl mx-auto px-2"
            style={{ touchAction: "pan-y" }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {timeline.map((item, i) => (
              <div
                key={i}
                style={{
                  display: i === active ? "block" : "none",
                  animation: i === active
                    ? `storyIn${dir > 0 ? "R" : "L"} 0.55s cubic-bezier(0.22,1,0.36,1) both`
                    : undefined,
                }}
              >
                <div
                  className="rounded-3xl p-6 md:p-10 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, #FFFDF9 0%, #FAF7F2 100%)",
                    border: "1px solid rgba(200,169,106,0.22)",
                    boxShadow: "0 20px 60px rgba(44,36,22,0.08), 0 4px 20px rgba(200,169,106,0.1)",
                  }}
                >
                  {/* Background year watermark */}
                  <div
                    className="absolute right-6 top-4 select-none pointer-events-none"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "6rem",
                      fontWeight: 700,
                      color: colorMap[i % 4],
                      opacity: 0.07,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {item.year}
                  </div>

                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{
                    background: `linear-gradient(to right, ${colorMap[i % 4]}, transparent)`,
                  }} />

                  {/* Icon + year row */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{
                        background: `${colorMap[i % 4]}18`,
                        border: `1px solid ${colorMap[i % 4]}40`,
                      }}
                    >
                      {iconMap[i % 4]}
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.35em] uppercase" style={{ color: colorMap[i % 4], fontWeight: 400 }}>
                        {item.year}
                      </p>
                      <p className="text-xs" style={{ color: "#B0967A", fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
                        Chapter {i + 1} of {timeline.length}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.7rem, 5vw, 2.3rem)",
                      color: "#2C2416",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px flex-1" style={{ background: `linear-gradient(to right, ${colorMap[i % 4]}60, transparent)` }} />
                    <div className="w-1.5 h-1.5 rotate-45 flex-shrink-0" style={{ background: colorMap[i % 4] }} />
                  </div>

                  {/* Description */}
                  <p
                    className="leading-relaxed"
                    style={{ color: "#6B5A45", fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.9 }}
                  >
                    {item.desc}
                  </p>

                  {/* Bottom nav arrows */}
                  <div className="flex items-center justify-between mt-8">
                    <button
                      onClick={() => go(Math.max(0, active - 1))}
                      disabled={active === 0}
                      className="flex items-center gap-2 text-xs tracking-widest uppercase transition-all duration-200 hover:gap-3 disabled:opacity-20"
                      style={{ color: "#C8A96A", fontFamily: "'Poppins', sans-serif" }}
                    >
                      ← Prev
                    </button>
                    <div className="flex gap-1.5">
                      {timeline.map((_, di) => (
                        <button
                          key={di}
                          onClick={() => go(di)}
                          className="transition-all duration-300"
                          style={{
                            width: di === active ? 20 : 6,
                            height: 6,
                            borderRadius: 3,
                            background: di === active ? "#C8A96A" : "rgba(200,169,106,0.3)",
                          }}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => go(Math.min(timeline.length - 1, active + 1))}
                      disabled={active === timeline.length - 1}
                      className="flex items-center gap-2 text-xs tracking-widest uppercase transition-all duration-200 hover:gap-3 disabled:opacity-20"
                      style={{ color: "#C8A96A", fontFamily: "'Poppins', sans-serif" }}
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hint text */}
          <p className="text-center mt-6 text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(200,169,106,0.4)" }}>
            Tap to explore · Swipe on mobile
          </p>
        </PremiumFrame>
      </div>

      <style>{`
        @keyframes storyInR {
          from { opacity: 0; transform: translateX(48px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes storyInL {
          from { opacity: 0; transform: translateX(-48px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
      `}</style>
    </section>
  );
}

/* ─── Gallery Section ───────────────────────────────────── */
function GallerySection({ photos }: { photos: string[] }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [prevActive, setPrevActive] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const sectionRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const go = (idx: number, dir: "left" | "right") => {
    setDirection(dir);
    setPrevActive(active);
    setActive(idx);
    setTimeout(() => setPrevActive(null), 400);
    // scroll thumbnail into view
    const el = thumbsRef.current?.children[idx] as HTMLElement;
    scrollContainerToChild(thumbsRef.current, el);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
      const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
      if (dx > 10 && dx > dy) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
      if (Math.abs(dx) > 40 && Math.abs(dx) > dy) {
        dx < 0 ? next() : prev();
      }
    };

    section.addEventListener("touchstart", handleTouchStart, { passive: false });
    section.addEventListener("touchmove", handleTouchMove, { passive: false });
    section.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchmove", handleTouchMove);
      section.removeEventListener("touchend", handleTouchEnd);
    };
  }, [active]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
    if (dx > 10 && dx > dy) {
      e.preventDefault();
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    if (Math.abs(dx) > 40 && Math.abs(dx) > dy) {
      dx < 0 ? next() : prev();
    }
  };

  const prev = () => go((active - 1 + photos.length) % photos.length, "left");
  const next = () => go((active + 1) % photos.length, "right");

  // layout: photos in a 3-col mosaic (featured large + 2 small + 2 small)
  const featured = photos[active];
  const sideTop = photos[(active + 1) % photos.length];
  const sideMid = photos[(active + 2) % photos.length];
  const sideBot1 = photos[(active + 3) % photos.length];
  const sideBot2 = photos[(active + 4) % photos.length];

  return (
    <section
      ref={sectionRef}
      className="py-24 overflow-hidden relative"
      style={{ background: "#FAF7F2", touchAction: "pan-y", overscrollBehaviorX: "contain" }}
    >
      <BackgroundOrnament position="top-right" opacity={0.95} />
      <BackgroundOrnament position="bottom-left" opacity={0.95} />
      <FadeSection>
        <PremiumFrame>
          <SectionHeader label="Our Memories" title="Photo Gallery" />

          {/* ── Desktop mosaic layout ── */}
          <div className="hidden md:block max-w-5xl mx-auto">
            <div className="grid gap-3" style={{ gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "300px 300px" }}>
              {/* Featured large - spans 2 rows */}
              <div
                className="row-span-2 relative overflow-hidden rounded-3xl cursor-pointer group"
                onClick={() => setLightbox(true)}
              >
                <img
                  key={active}
                  src={featured}
                  alt="Featured wedding photo"
                  className="w-full h-full object-cover"
                  style={{ animation: "fadeImg 0.4s ease" }}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-8" style={{ background: "linear-gradient(to top, rgba(44,36,22,0.6) 0%, transparent 50%)" }}>
                  <span className="text-xs tracking-widest uppercase text-white mb-2" style={{ fontWeight: 300 }}>View Full</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(200,169,106,0.9)" }}>
                    <Heart size={13} fill="white" color="white"/>
                  </div>
                </div>
                {/* counter badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs" style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", color: "#8A7560", letterSpacing: "0.1em" }}>
                  {active + 1} / {photos.length}
                </div>
              </div>
              {/* Top right */}
              <div className="relative overflow-hidden rounded-3xl cursor-pointer group" onClick={() => { go((active + 1) % photos.length, "right"); }}>
                <img src={sideTop} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(200,169,106,0.15)" }}/>
              </div>
              {/* Middle right */}
              <div className="relative overflow-hidden rounded-3xl cursor-pointer group" onClick={() => { go((active + 2) % photos.length, "right"); }}>
                <img src={sideMid} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(200,169,106,0.15)" }}/>
              </div>
              {/* Bottom left */}
              <div className="relative overflow-hidden rounded-3xl cursor-pointer group" onClick={() => { go((active + 3) % photos.length, "right"); }}>
                <img src={sideBot1} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(200,169,106,0.15)" }}/>
              </div>
              {/* Bottom right */}
              <div className="relative overflow-hidden rounded-3xl cursor-pointer group" onClick={() => { go((active + 4) % photos.length, "right"); }}>
                <img src={sideBot2} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(200,169,106,0.15)" }}/>
              </div>
            </div>

            {/* Desktop nav + thumbnails */}
            <div className="flex items-center gap-4 mt-5">
              <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:scale-110" style={{ background: "rgba(200,169,106,0.12)", border: "1px solid rgba(200,169,106,0.3)", color: "#C8A96A" }}>
                <ChevronDown size={16} style={{ transform: "rotate(90deg)" }}/>
              </button>
              <div ref={thumbsRef} className="flex gap-2 overflow-x-auto flex-1" style={{ scrollbarWidth: "none", touchAction: "pan-y", overscrollBehaviorX: "contain", scrollSnapType: "x mandatory" }}>
                {photos.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => go(i, i > active ? "right" : "left")}
                    className="flex-shrink-0 relative overflow-hidden transition-all duration-300"
                    style={{
                      width: 64, height: 48,
                      borderRadius: 12,
                      border: active === i ? "2px solid #C8A96A" : "2px solid transparent",
                      opacity: active === i ? 1 : 0.55,
                      transform: active === i ? "scale(1.08)" : "scale(1)",
                    }}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover"/>
                  </button>
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:scale-110" style={{ background: "rgba(200,169,106,0.12)", border: "1px solid rgba(200,169,106,0.3)", color: "#C8A96A" }}>
                <ChevronDown size={16} style={{ transform: "rotate(-90deg)" }}/>
              </button>
            </div>
          </div>

          {/* ── Mobile: swipeable carousel ── */}
          <div className="md:hidden">
            {/* Main photo */}
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ height: "65vw", maxHeight: 380, touchAction: "pan-y" }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onClick={() => setLightbox(true)}
            >
              {/* Previous photo (slide out) */}
              {prevActive !== null && (
                <img
                  src={photos[prevActive]}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    animation: `slideOut${direction === "right" ? "Left" : "Right"} 0.4s ease forwards`,
                  }}
                />
              )}
              {/* Active photo (slide in) */}
              <img
                key={active}
                src={photos[active]}
                alt={`Wedding photo ${active + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  animation: prevActive !== null ? `slideIn${direction === "right" ? "Right" : "Left"} 0.4s ease forwards` : "none",
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(44,36,22,0.5) 0%, transparent 40%)" }}/>
              {/* Bottom info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.7)", fontWeight: 300 }}>
                  Tap to open
                </span>
                <span className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)", color: "rgba(255,255,255,0.8)", letterSpacing: "0.1em" }}>
                  {active + 1} / {photos.length}
                </span>
              </div>
              {/* Swipe hint arrows */}
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center pointer-events-auto"
                style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)" }}
                onClick={e => { e.stopPropagation(); prev(); }}
              >
                <ChevronDown size={16} style={{ transform: "rotate(90deg)", color: "#fff" }}/>
              </button>
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center pointer-events-auto"
                style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)" }}
                onClick={e => { e.stopPropagation(); next(); }}
              >
                <ChevronDown size={16} style={{ transform: "rotate(-90deg)", color: "#fff" }}/>
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-1.5 mt-4">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > active ? "right" : "left")}
                  style={{
                    width: active === i ? 20 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: active === i ? "#C8A96A" : "rgba(200,169,106,0.3)",
                    border: "none",
                    padding: 0,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>

            {/* Horizontal thumbnail filmstrip */}
            <div
              ref={thumbsRef}
              className="flex gap-2 overflow-x-auto mt-5 pb-1"
              style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory", touchAction: "pan-y" }}
              onTouchMove={onTouchMove}
            >
              {photos.map((src, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > active ? "right" : "left")}
                  className="flex-shrink-0 relative overflow-hidden"
                  style={{
                    width: 60, height: 60,
                    borderRadius: 12,
                    scrollSnapAlign: "start",
                    border: active === i ? "2.5px solid #C8A96A" : "2.5px solid transparent",
                    opacity: active === i ? 1 : 0.5,
                    transform: active === i ? "scale(1.06)" : "scale(1)",
                    transition: "all 0.3s ease",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover"/>
                  {active === i && (
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(200,169,106,0.15)" }}>
                      <div className="w-3 h-3 rounded-full" style={{ background: "rgba(200,169,106,0.8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#fff" }}/>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </PremiumFrame>
      </FadeSection>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(20,14,8,0.96)", backdropFilter: "blur(16px)" }}
          onClick={() => setLightbox(false)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center z-10"
            style={{ background: "rgba(200,169,106,0.15)", border: "1px solid rgba(200,169,106,0.3)", color: "#C8A96A" }}
          >
            <X size={18}/>
          </button>
          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center z-10"
            style={{ background: "rgba(200,169,106,0.12)", border: "1px solid rgba(200,169,106,0.25)", color: "#C8A96A" }}
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            <ChevronDown size={18} style={{ transform: "rotate(90deg)" }}/>
          </button>
          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center z-10"
            style={{ background: "rgba(200,169,106,0.12)", border: "1px solid rgba(200,169,106,0.25)", color: "#C8A96A" }}
            onClick={e => { e.stopPropagation(); next(); }}
          >
            <ChevronDown size={18} style={{ transform: "rotate(-90deg)" }}/>
          </button>
          {/* Photo */}
          <div className="relative px-16 max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img
              key={active}
              src={photos[active]}
              alt={`Wedding photo ${active + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
              style={{ animation: "fadeImg 0.3s ease", boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}
            />
            {/* Caption */}
            <div className="flex items-center justify-between mt-4 px-2">
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(232,208,154,0.7)", fontSize: "0.9rem" }}>
                Aisyah & Rizky · 2026
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>
                {active + 1} / {photos.length}
              </p>
            </div>
          </div>
          {/* Dot nav */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); go(i, i > active ? "right" : "left"); }}
                style={{
                  width: active === i ? 20 : 6, height: 6, borderRadius: 3, padding: 0, border: "none",
                  background: active === i ? "#C8A96A" : "rgba(200,169,106,0.3)",
                  transition: "all 0.3s ease", cursor: "pointer",
                }}
              />
            ))}
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
          fill="#2C2416"
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
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#EFE7DD" }}>
      <BackgroundOrnament position="top-left" opacity={0.95} />
      <BackgroundOrnament position="bottom-right" opacity={0.95} />
      <div className="relative z-10">
        <PremiumFrame>
          <SectionHeader
            label="Your Blessings Mean The World"
            title="Wedding Gift"
            description="Kehadiran kalian adalah kebahagiaan terbesar kami. Jika kalian ingin berbagi berkah, kami menerimanya dengan sepenuh hati."
          />

          <div className="max-w-2xl mx-auto space-y-6">

            {/* ── Envelope / QRIS card ── */}
            <div className="rounded-3xl overflow-hidden" style={{
              background: "#FAF7F2",
              border: "1px solid rgba(200,169,106,0.25)",
              boxShadow: "0 8px 40px rgba(200,169,106,0.1)",
            }}>
              {/* Envelope closed state */}
              {!envelopeOpen && (
                <div className="flex flex-col items-center text-center px-8 py-12">
                  {/* Envelope illustration */}
                  <div className="relative mb-6" style={{ width: 120, height: 88 }}>
                    <svg viewBox="0 0 120 88" fill="none" className="w-full h-full drop-shadow-lg">
                      {/* Envelope body */}
                      <rect x="2" y="20" width="116" height="66" rx="6" fill="#FFF8EE" stroke="#C8A96A" strokeWidth="1.5"/>
                      {/* Envelope flap closed */}
                      <path d="M2 20 L60 54 L118 20 Z" fill="#EFE7DD" stroke="#C8A96A" strokeWidth="1.5" strokeLinejoin="round"/>
                      {/* Wax seal */}
                      <circle cx="60" cy="52" r="11" fill="#C8A96A" opacity="0.9"/>
                      <circle cx="60" cy="52" r="8" fill="#D4B87A"/>
                      <text x="60" y="56" textAnchor="middle" fontSize="9" fill="#2C2416" fontFamily="serif">A&E</text>
                      {/* Envelope fold lines */}
                      <path d="M2 86 L46 54" stroke="#C8A96A" strokeWidth="1" opacity="0.3"/>
                      <path d="M118 86 L74 54" stroke="#C8A96A" strokeWidth="1" opacity="0.3"/>
                      {/* Small floral accent */}
                      <ellipse cx="18" cy="32" rx="5" ry="7" fill="#A8B8A5" opacity="0.5" transform="rotate(-30 18 32)"/>
                      <ellipse cx="102" cy="32" rx="5" ry="7" fill="#A8B8A5" opacity="0.5" transform="rotate(30 102 32)"/>
                    </svg>
                  </div>

                  <p className="text-xs tracking-[0.35em] uppercase mb-2" style={{ color: "#C8A96A", fontWeight: 300 }}>
                    Digital Gift
                  </p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", color: "#2C2416", fontWeight: 400 }}>
                    Ada hadiah untuk kami?
                  </h3>
                  <p className="text-sm mt-3 mb-8 max-w-xs leading-relaxed" style={{ color: "#8A7560" }}>
                    Sentuh amplop ini untuk membuka dan melihat kode QRIS kami. Terima kasih atas kebaikan hatimu. 🌸
                  </p>
                  <button
                    onClick={handleOpenEnvelope}
                    className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
                    style={{
                      background: "linear-gradient(135deg, #C8A96A, #D4B87A)",
                      color: "#fff",
                      boxShadow: "0 6px 24px rgba(200,169,106,0.35)",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ fontSize: "1.1rem" }}>💌</span>
                    <span className="text-sm tracking-widest uppercase" style={{ fontWeight: 400 }}>Buka Amplop</span>
                  </button>
                </div>
              )}

              {/* Envelope opening animation + QRIS revealed */}
              {envelopeOpen && (
                <div
                  style={{
                    animation: "envelopeReveal 0.5s cubic-bezier(0.34,1.56,0.64,1) both",
                  }}
                >
                  {/* Flap opening visual */}
                  <div className="flex justify-center pt-8 pb-4">
                    <div className="relative" style={{ width: 120, height: 88 }}>
                      <svg viewBox="0 0 120 88" fill="none" className="w-full h-full drop-shadow-lg">
                        <rect x="2" y="20" width="116" height="66" rx="6" fill="#FFF8EE" stroke="#C8A96A" strokeWidth="1.5"/>
                        {/* Flap open = rotated up */}
                        <path d="M2 20 L60 2 L118 20 Z" fill="#EFE7DD" stroke="#C8A96A" strokeWidth="1.5" strokeLinejoin="round"
                          style={{ transformOrigin: "60px 20px", animation: "flapOpen 0.5s ease forwards" }}
                        />
                        <path d="M2 86 L46 54" stroke="#C8A96A" strokeWidth="1" opacity="0.3"/>
                        <path d="M118 86 L74 54" stroke="#C8A96A" strokeWidth="1" opacity="0.3"/>
                        <ellipse cx="18" cy="32" rx="5" ry="7" fill="#A8B8A5" opacity="0.5" transform="rotate(-30 18 32)"/>
                        <ellipse cx="102" cy="32" rx="5" ry="7" fill="#A8B8A5" opacity="0.5" transform="rotate(30 102 32)"/>
                      </svg>
                    </div>
                  </div>

                  {/* QRIS content slides up */}
                  <div
                    className="px-8 pb-10"
                    style={{
                      opacity: qrisOpen ? 1 : 0,
                      transform: qrisOpen ? "translateY(0)" : "translateY(20px)",
                      transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
                    }}
                  >
                    <div className="text-center mb-6">
                      <p className="text-xs tracking-[0.35em] uppercase mb-1" style={{ color: "#C8A96A", fontWeight: 300 }}>
                        QRIS Payment
                      </p>
                      <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "#2C2416" }}>
                        Scan & Kirim Hadiahmu
                      </h4>
                      <p className="text-xs mt-1" style={{ color: "#8A7560" }}>
                        Bisa digunakan di semua aplikasi mobile banking & e-wallet
                      </p>
                    </div>

                    {/* QR code */}
                    <div className="flex justify-center mb-5">
                      <div className="p-5 rounded-2xl" style={{
                        background: "#fff",
                        border: "1px solid rgba(200,169,106,0.3)",
                        boxShadow: "0 4px 20px rgba(200,169,106,0.1)",
                      }}>
                        <QRCode />
                        <p className="text-center text-xs mt-3 tracking-widest" style={{ color: "#8A7560", fontFamily: "'Poppins', sans-serif" }}>
                          Aisyah & Rizky
                        </p>
                      </div>
                    </div>

                    <p className="text-center text-xs" style={{ color: "#A8957A" }}>
                      Terima kasih banyak atas kebaikan dan cinta kalian 🌸
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bank accounts */}
            {[
              { bank: "Bank Mandiri", account: "1234-5678-9012-3456", name: "Aisyah Yusuf" },
              { bank: "Bank BCA", account: "0987-6543-2109-8765", name: "Rizky Ramadhan" },
            ].map((b) => (
              <div key={b.bank} className="rounded-3xl p-6 flex items-center justify-between gap-4" style={{ background: "#FAF7F2", border: "1px solid rgba(200,169,106,0.25)", boxShadow: "0 4px 20px rgba(200,169,106,0.06)" }}>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase mb-0.5" style={{ color: "#C8A96A" }}>{b.bank}</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#2C2416", letterSpacing: "0.05em" }}>{b.account}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#8A7560" }}>a.n. {b.name}</p>
                </div>
                <button
                  onClick={() => handleCopy(b.account.replace(/-/g, ""), b.bank)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs tracking-wide transition-all hover:scale-105"
                  style={{ background: copied === b.bank ? "rgba(168,184,165,0.2)" : "rgba(200,169,106,0.12)", border: "1px solid rgba(200,169,106,0.3)", color: copied === b.bank ? "#A8B8A5" : "#C8A96A" }}
                >
                  {copied === b.bank ? <Check size={13}/> : <Copy size={13}/>}
                  {copied === b.bank ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        </PremiumFrame>
      </div>
    </section>
  );
}

/* ─── Main App ───────────────────────────────────────────── */
export default function App() {
  const [isOpened, setIsOpened] = useState(false);
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
  const weddingDateMs = useMemo(() => new Date("2026-09-20T10:00:00").getTime(), []);
  const countdown = useCountdown(weddingDateMs);

  // Scroll locking & touch/wheel opening detection
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setIsOpened(true);
      }
    };

    let touchStart = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStart = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touchEnd = e.touches[0].clientY;
      if (touchStart - touchEnd > 40) {
        setIsOpened(true);
      }
    };

    if (!isOpened) {
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
  }, [isOpened]);

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
      void audioRef.current.play().catch(() => {
        // Autoplay may be blocked until first user gesture in some browsers.
      });
    } else {
      audioRef.current.pause();
    }
  }, [isOpened, isMuted]);

  // Listen for scroll back to top to close the flowers
  useEffect(() => {
    if (!isOpened) return;

    let hasScrolledDown = false;

    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 20) {
        hasScrolledDown = true;
      }
      if (hasScrolledDown && y <= 5) {
        setIsOpened(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpened]);

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

      {/* ── HERO & OPENING SECTION ─────────────────────────── */}
      <div
        className="relative w-full flex flex-col items-center justify-center overflow-visible"
        style={{ minHeight: "100svh", height: "100svh", background: "#FAF7F2" }}
      >
        {/* Left Flower Frame */}
        <div
          className="absolute inset-y-0 left-0 w-full h-full pointer-events-none select-none overflow-visible"
          style={{
            zIndex: 10,
            transform: `translateX(${isOpened ? "-45vw" : "0vw"})`,
            transition: "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              animation: "windSwayLeft 10s ease-in-out infinite alternate",
            }}
          >
            <img
              src={bungaOpeningKiriSvg}
              className="w-full h-full object-cover"
              alt="Left Flower"
              style={{ transform: "scale(1.03)", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right Flower Frame */}
        <div
          className="absolute inset-y-0 right-0 w-full h-full pointer-events-none select-none overflow-visible"
          style={{
            zIndex: 10,
            transform: `translateX(${isOpened ? "45vw" : "0vw"})`,
            transition: "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              animation: "windSwayRight 10s ease-in-out infinite alternate",
            }}
          >
            <img
              src={bungaOpeningKananSvg}
              className="w-full h-full object-cover"
              alt="Right Flower"
              style={{ transform: "scale(1.03)", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Closed Cover Overlay */}
        <div
          className="absolute inset-0 w-full h-full overflow-visible"
          style={{
            zIndex: 15,
            background: "#FAF7F2",
            opacity: isOpened ? 0 : 1,
            pointerEvents: isOpened ? "none" : "auto",
            transition: "opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1)",
            willChange: "opacity",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              animation: "windSwayLeft 8s ease-in-out infinite alternate",
            }}
          >
            <img
              src={openinggSvg}
              className="w-full h-full object-cover"
              alt="Closed Cover"
              style={{ transform: "scale(1.03)", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Hero Content (revealed when opened) */}
        <div
          className="relative z-20 flex flex-col items-center text-center px-6"
          style={{
            opacity: isOpened ? 1 : 0,
            transform: `translateY(${isOpened ? "0px" : "30px"})`,
            transition: "opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            pointerEvents: isOpened ? "auto" : "none",
            willChange: "opacity, transform",
          }}
        >
          <p
            className="text-xs tracking-[0.45em] uppercase mb-4"
            style={{ color: "#8A7560", fontWeight: 400 }}
          >
            THE WEDDING OF
          </p>
          <h1
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(3.5rem, 12vw, 6.5rem)",
              color: "#C8A96A",
              lineHeight: 1,
              textShadow: "0 2px 10px rgba(200,169,106,0.1)",
            }}
          >
            Aisyah
          </h1>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              color: "#8A7560",
              margin: "0.25rem 0",
            }}
          >
            &
          </span>
          <h1
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(3.5rem, 12vw, 6.5rem)",
              color: "#C8A96A",
              lineHeight: 1,
              textShadow: "0 2px 10px rgba(200,169,106,0.1)",
              marginBottom: "1rem",
            }}
          >
            Rizky
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              color: "#8A7560",
              letterSpacing: "0.15em",
              fontWeight: 500,
            }}
          >
            20.09.2026
          </p>
          <p className="mt-2 text-xs tracking-[0.35em] uppercase" style={{ color: "#8A7560", fontWeight: 300 }}>
            Grand Ballroom · The Ivory Palace · Jakarta
          </p>
          <a
            href="#welcome"
            className="mt-10 flex flex-col items-center gap-2"
            style={{ color: "rgba(200,169,106,0.8)", textDecoration: "none" }}
          >
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontSize: "0.65rem" }}>Scroll to Explore</span>
            <ChevronDown size={18} style={{ animation: "bounce 1.5s ease-in-out infinite" }}/>
          </a>
        </div>

        {/* Buka Undangan Button Overlay */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none"
          style={{
            opacity: isOpened ? 0 : 1,
            transition: "opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
            willChange: "opacity",
          }}
        >
          <button
            onClick={() => setIsOpened(true)}
            className="px-8 py-4 rounded-full text-sm font-light tracking-[0.2em] uppercase transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-3 cursor-pointer pointer-events-auto"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(200, 169, 106, 0.5)",
              color: "#2C2416",
              boxShadow: "0 10px 40px rgba(200, 169, 106, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.75rem",
            }}
          >
            <Heart size={14} fill="#C8A96A" className="text-[#C8A96A]" />
            Buka Undangan
          </button>
        </div>
      </div>

      {isOpened && (
        <button
          onClick={() => setIsMuted(prev => !prev)}
          className="fixed left-4 z-50 flex items-center gap-2 rounded-full bg-white/85 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C2416] shadow-lg shadow-black/10 backdrop-blur-xl transition hover:scale-105"
          style={{ border: "1px solid rgba(44, 36, 22, 0.12)", bottom: "calc(env(safe-area-inset-bottom, 1rem) + 1.5rem)" }}
        >
          <Music size={16} />
          <span>{isMuted ? "Muted" : "Sound"}</span>
        </button>
      )}

      {/* ── WELCOME ─────────────────────────────────────────── */}
      <section id="welcome" className="py-24 px-6 text-center relative overflow-hidden" style={{ background: "#FAF7F2" }}>
        <BackgroundOrnament position="top-right" opacity={0.95} />
        <BackgroundOrnament position="bottom-left" opacity={0.95} />
        <div className="relative z-10">
          <SectionReveal className="relative z-10">
            <PremiumFrame>
              <SectionHeader label="With Joy We Announce" title="Welcome, Dear Guests" />
              <div className="max-w-xl mx-auto">
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                color: "#8A7560",
                fontStyle: "italic",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}>
                "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."
              </p>
              <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C8A96A" }}>— Surah Ar-Rum: 21 —</p>
              <p className="mt-8 leading-relaxed" style={{ color: "#8A7560", fontSize: "0.9rem", lineHeight: 1.9 }}>
                Dengan penuh cinta dan rasa syukur yang melimpah, kami dengan bahagia mengundang kalian untuk merayakan bersatunya dua hati kami. Kehadiran kalian akan membuat hari istimewa kami menjadi sempurna — dan selalu terkenang dalam ingatan kami.
              </p>
            </div>
          </PremiumFrame>
          </SectionReveal>
        </div>
      </section>

      {/* ── BRIDE & GROOM ───────────────────────────────────── */}
      <section className="py-32 px-6 relative overflow-hidden" style={{ background: "#EFE7DD" }}>
        {/* Background wind sway */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 animate-bg-wind" style={{ background: `url(${bg85Svg}) no-repeat center/cover` }} />
        {/* Curved Section Divider (Lengkungan) at the top */}
        <div className="absolute top-0 inset-x-0 h-16 w-full overflow-hidden pointer-events-none z-10" style={{ transform: "translateY(-1px)" }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full" style={{ fill: "#FAF7F2" }}>
            <path d="M0,0 C300,70 900,70 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>

        {/* Curved Section Divider (Lengkungan) at the bottom */}
        <div className="absolute bottom-0 inset-x-0 h-16 w-full overflow-hidden pointer-events-none z-10" style={{ transform: "rotate(180deg) translateY(-1px)" }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full" style={{ fill: "#FAF7F2" }}>
            <path d="M0,0 C300,70 900,70 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>

        <BackgroundOrnament position="top-left" opacity={0.95} />
        <BackgroundOrnament position="bottom-right" opacity={0.95} />
        <SectionReveal className="relative z-10">
          <PremiumFrame>
            <SectionHeader label="The Happy Couple" title="Bride & Groom" />
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Bride */}
              <FadeSection variant="left" delay={100} className="flex flex-col items-center text-center">
                <div className="relative mb-8 group cursor-pointer">
                  {/* Floral Background Spray */}
                  <div className="absolute inset-0 -m-8 pointer-events-none select-none z-0 opacity-75 scale-115 group-hover:scale-120 group-hover:rotate-6 transition-all duration-700 ease-out">
                    <img src={bunga1Svg} className="w-full h-full object-contain" alt="" style={{ animation: "floralFloat 12s ease-in-out infinite alternate" }} />
                  </div>

                  {/* Arched Portrait Frame */}
                  <div className="w-44 h-60 rounded-t-full rounded-b-[2rem] overflow-hidden relative z-10 shadow-xl group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500 ease-out" style={{ border: "3px solid #C8A96A", padding: "5px", background: "#FAF7F2" }}>
                    <img src="https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=400&h=600&fit=crop&auto=format" alt="Aisyah - Bride" className="w-full h-full object-cover rounded-t-full rounded-b-[1.75rem]"/>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-xs tracking-widest uppercase z-20 shadow-md group-hover:scale-105 transition-all duration-500 ease-out" style={{ background: "#C8A96A", color: "#fff", fontWeight: 400, fontSize: "0.6rem" }}>
                    Bride
                  </div>
                </div>
                <h3 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "2.5rem", color: "#2C2416" }}>Aisyah Yusuf</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "#8A7560", marginTop: "0.25rem" }}>Putri dari</p>
                <p className="font-medium text-sm mt-1" style={{ color: "#2C2416" }}>Mr. Ahmad Yusuf & Mrs. Fatima Yusuf</p>
                <div className="flex gap-4 mt-5">
                  <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: "rgba(200,169,106,0.15)", color: "#C8A96A" }}>
                    <Instagram size={15}/>
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: "rgba(200,169,106,0.15)", color: "#C8A96A" }}>
                    <Facebook size={15}/>
                  </a>
                </div>
              </FadeSection>
              {/* Groom */}
              <FadeSection variant="right" delay={200} className="flex flex-col items-center text-center">
                <div className="relative mb-8 group cursor-pointer">
                  {/* Floral Background Spray */}
                  <div className="absolute inset-0 -m-8 pointer-events-none select-none z-0 opacity-75 scale-115 group-hover:scale-120 group-hover:-rotate-6 transition-all duration-700 ease-out">
                    <img src={bunga2Svg} className="w-full h-full object-contain" alt="" style={{ animation: "floralFloat 12s ease-in-out infinite alternate" }} />
                  </div>

                  {/* Arched Portrait Frame */}
                  <div className="w-44 h-60 rounded-t-full rounded-b-[2rem] overflow-hidden relative z-10 shadow-xl group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500 ease-out" style={{ border: "3px solid #C8A96A", padding: "5px", background: "#FAF7F2" }}>
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&auto=format" alt="Rizky - Groom" className="w-full h-full object-cover rounded-t-full rounded-b-[1.75rem]"/>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-xs tracking-widest uppercase z-20 shadow-md group-hover:scale-105 transition-all duration-500 ease-out" style={{ background: "#2C2416", color: "#C8A96A", fontWeight: 400, fontSize: "0.6rem" }}>
                    Groom
                  </div>
                </div>
                <h3 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "2.5rem", color: "#2C2416" }}>Rizky Ramadhan</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "#8A7560", marginTop: "0.25rem" }}>Putra dari</p>
                <p className="font-medium text-sm mt-1" style={{ color: "#2C2416" }}>Mr. Ibrahim Ramadhan & Mrs. Khadijah Ramadhan</p>
                <div className="flex gap-4 mt-5">
                  <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: "rgba(200,169,106,0.15)", color: "#C8A96A" }}>
                    <Instagram size={15}/>
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: "rgba(200,169,106,0.15)", color: "#C8A96A" }}>
                    <Facebook size={15}/>
                  </a>
                </div>
              </FadeSection>
            </div>
            {/* Heart connector */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-4">
                <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, #C8A96A)" }}/>
                <Heart size={22} fill="#C8A96A" style={{ color: "#C8A96A" }}/>
                <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, #C8A96A)" }}/>
              </div>
            </div>
          </PremiumFrame>
        </SectionReveal>
      </section>

      {/* ── LOVE STORY ──────────────────────────────────────── */}
      <LoveStorySection timeline={timeline} />

      {/* ── COUNTDOWN ───────────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: `#FAF7F2 url(${hitungMundurSvg}) no-repeat center/cover` }}>
        <BackgroundOrnament position="top-left" opacity={0.95} />
        <BackgroundOrnament position="bottom-right" opacity={0.95} />
        <FloralScatter tint="#C8A96A" opacity={0.06}/>
        <SectionReveal className="relative z-10">
          <SectionHeader label="The Big Day" title="Counting Down With Joy" light={false} />
          <StaggerChildren className="flex flex-wrap justify-center gap-5 mt-10" variant="zoom" staggerMs={120} baseDelay={100}>
            {[
              { label: "Hari", value: countdown.days },
              { label: "Jam", value: countdown.hours },
              { label: "Menit", value: countdown.minutes },
              { label: "Detik", value: countdown.seconds },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col items-center justify-center w-28 h-28 rounded-2xl" style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(200,169,106,0.3)",
                boxShadow: "0 8px 32px rgba(44,36,22,0.08)",
              }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", color: "#C8A96A", lineHeight: 1, fontWeight: 300 }}>
                  {String(value).padStart(2, "0")}
                </span>
                <span className="text-xs tracking-[0.25em] uppercase mt-1" style={{ color: "#8A7560", fontWeight: 400 }}>
                  {label}
                </span>
              </div>
            ))}
          </StaggerChildren>
        </SectionReveal>
      </section>

      {/* ── EVENTS ──────────────────────────────────────────── */}
      <section id="events" className="py-24 px-6 relative overflow-hidden">
        {/* Background wind sway */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 animate-bg-wind" style={{ background: `url(${bg80Svg}) no-repeat center/cover` }} />
        <BackgroundOrnament position="top-right" opacity={0.95} />
        <BackgroundOrnament position="bottom-left" opacity={0.95} />
        <FloralLineart tint="#A8B8A5" opacity={0.09}/>
        <FloralScatter tint="#C8A96A" opacity={0.055}/>
        <SectionReveal className="relative z-10">
          <SectionHeader label="Save The Date" title="Wedding Events" />
          <StaggerChildren className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" variant="up" staggerMs={150} baseDelay={80}>
            {[
              {
                title: "Akad Nikah",
                subtitle: "Ijab Kabul",
                date: "Sabtu, 20 September 2025",
                time: "08:00 – 11:00 WIB",
                location: "Al-Ikhlas Grand Mosque",
                address: "Jl. Sudirman No. 12, Jakarta Pusat",
                icon: "✦",
                bg: "#EFE7DD",
              },
              {
                title: "Reception",
                subtitle: "Resepsi Pernikahan",
                date: "Sabtu, 20 September 2025",
                time: "12:00 – 21:00 WIB",
                location: "The Ivory Palace Grand Ballroom",
                address: "Jl. Gatot Subroto No. 88, Jakarta Selatan",
                icon: "✦",
                bg: "#FAF7F2",
              },
            ].map((ev) => (
              <div key={ev.title} className="rounded-3xl p-8 relative overflow-hidden" style={{
                background: ev.bg,
                border: "1px solid rgba(200,169,106,0.25)",
                boxShadow: "0 4px 30px rgba(200,169,106,0.08)",
              }}>
                <div className="absolute top-4 right-4 opacity-10" style={{ fontSize: "5rem", lineHeight: 1, fontFamily: "'Cormorant Garamond', serif", color: "#C8A96A" }}>
                  {ev.icon}
                </div>
                <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#C8A96A", fontWeight: 300 }}>{ev.subtitle}</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color: "#2C2416", fontWeight: 400 }}>{ev.title}</h3>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar size={14} style={{ color: "#C8A96A", marginTop: "3px", flexShrink: 0 }}/>
                    <span className="text-sm" style={{ color: "#8A7560" }}>{ev.date}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={14} style={{ color: "#C8A96A", marginTop: "3px", flexShrink: 0 }}/>
                    <span className="text-sm" style={{ color: "#8A7560" }}>{ev.time}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={14} style={{ color: "#C8A96A", marginTop: "3px", flexShrink: 0 }}/>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#2C2416" }}>{ev.location}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#8A7560" }}>{ev.address}</p>
                    </div>
                  </div>
                </div>
                <button className="mt-6 text-xs tracking-widest uppercase px-6 py-2.5 rounded-full transition-all hover:scale-105" style={{ background: "rgba(200,169,106,0.12)", border: "1px solid rgba(200,169,106,0.4)", color: "#C8A96A" }}>
                  Add to Calendar
                </button>
              </div>
            ))}
          </StaggerChildren>
        </SectionReveal>
      </section>

      {/* ── LOCATION ────────────────────────────────────────── */}
      <section id="location" className="py-24 px-6 relative overflow-hidden">
        {/* Background wind sway */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 animate-bg-wind" style={{ background: `url(${bg80Svg}) no-repeat center/cover` }} />
        <BackgroundOrnament position="top-left" opacity={0.95} />
        <BackgroundOrnament position="bottom-right" opacity={0.95} />
        <FloralScatter tint="#C8A96A" opacity={0.07}/>
        <FloralWatercolor opacity={0.05}/>
        <SectionReveal className="relative z-10">
          <SectionHeader label="How to Find Us" title="Location" />
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(200,169,106,0.25)", boxShadow: "0 8px 40px rgba(200,169,106,0.1)" }}>
              <div className="relative w-full max-w-5xl mx-auto p-2 md:p-6" style={{ background: "linear-gradient(180deg, #F6EEE4 0%, #E9DDD1 100%)" }}>
                <div className="relative mx-auto w-full" style={{ maxWidth: "980px", aspectRatio: "1 / 1.02" }}>
                  <div
                    className="absolute left-1/2 top-[16%] w-[100%] h-[84%] -translate-x-1/2 overflow-hidden shadow-[0_28px_70px_rgba(0,0,0,0.16)]"
                    style={{
                      background: "#E7D7C8",
                      clipPath: "polygon(10% 24%, 22% 14%, 36% 10%, 64% 10%, 78% 14%, 90% 24%, 90% 84%, 10% 84%)",
                      border: "1px solid rgba(255,255,255,0.75)",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1944491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20Sudirman%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: "sepia(20%) saturate(0.8)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Wedding Location"
                    />
                  </div>
                  <img
                    src={rumahSvg}
                    alt="House location frame"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ zIndex: 2, pointerEvents: "none" }}
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ background: "#FAF7F2" }}>
                <div>
                  <p className="font-medium" style={{ color: "#2C2416", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}>The Ivory Palace Grand Ballroom</p>
                  <p className="text-sm mt-1" style={{ color: "#8A7560" }}>Jl. Gatot Subroto No. 88, Jakarta Selatan 12710</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-sm tracking-widest uppercase transition-all hover:scale-105 whitespace-nowrap"
                  style={{ background: "#C8A96A", color: "#fff", textDecoration: "none", fontWeight: 400, fontSize: "0.7rem" }}
                >
                  <MapPin size={13}/>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────── */}
      <GallerySection photos={photos} />

      {/* ── WEDDING GIFT ────────────────────────────────────── */}
      <GiftSection copied={copied} handleCopy={handleCopy} />

      {/* ── RSVP ────────────────────────────────────────────── */}
      <section id="rsvp" className="py-24 px-6 relative overflow-hidden">
        {/* Background wind sway */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 animate-bg-wind" style={{ background: `url(${bg80Svg}) no-repeat center/cover` }} />
        <BackgroundOrnament position="top-left" opacity={0.95} />
        <BackgroundOrnament position="bottom-right" opacity={0.95} />
        <FloralLineart tint="#C8A96A" opacity={0.07}/>
        <FloralScatter tint="#A8B8A5" opacity={0.065}/>
        <SectionReveal className="relative z-10">
          <SectionHeader label="Will You Join Us?" title="RSVP" />
          <div className="max-w-lg mx-auto">
            {rsvpSent ? (
              <div className="text-center py-12 rounded-3xl" style={{ background: "#EFE7DD", border: "1px solid rgba(200,169,106,0.2)" }}>
                <Heart size={36} fill="#C8A96A" style={{ color: "#C8A96A", margin: "0 auto 1rem" }}/>
                <h3 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "2.5rem", color: "#2C2416" }}>Terima Kasih!</h3>
                <p className="mt-3 text-sm" style={{ color: "#8A7560" }}>Konfirmasi kehadiran kalian telah kami terima. Kami tidak sabar untuk merayakan bersama kalian!</p>
              </div>
            ) : (
              <form onSubmit={handleRsvp} className="space-y-5 rounded-3xl p-8" style={{ background: "#EFE7DD", border: "1px solid rgba(200,169,106,0.2)", boxShadow: "0 4px 30px rgba(200,169,106,0.06)" }}>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#8A7560" }}>Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={rsvpForm.name}
                    onChange={e => setRsvpForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="Nama kamu"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-1"
                    style={{ background: "#FAF7F2", border: "1px solid rgba(200,169,106,0.3)", color: "#2C2416", fontFamily: "'Poppins', sans-serif", focusRingColor: "#C8A96A" }}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#8A7560" }}>Kehadiran</label>
                  <div className="flex gap-3">
                    {["yes", "no", "maybe"].map(opt => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setRsvpForm(p => ({ ...p, attendance: opt }))}
                        className="flex-1 py-3 rounded-xl text-xs tracking-widest uppercase transition-all"
                        style={{
                          background: rsvpForm.attendance === opt ? "#C8A96A" : "rgba(200,169,106,0.1)",
                          color: rsvpForm.attendance === opt ? "#fff" : "#8A7560",
                          border: `1px solid ${rsvpForm.attendance === opt ? "#C8A96A" : "rgba(200,169,106,0.3)"}`,
                        }}
                      >
                        {opt === "yes" ? "Hadir" : opt === "no" ? "Tidak Hadir" : "Mungkin"}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#8A7560" }}>Jumlah Tamu</label>
                  <select
                    value={rsvpForm.guests}
                    onChange={e => setRsvpForm(p => ({ ...p, guests: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: "#FAF7F2", border: "1px solid rgba(200,169,106,0.3)", color: "#2C2416", fontFamily: "'Poppins', sans-serif" }}
                  >
                    {["1","2","3","4","5+"].map(n => <option key={n} value={n}>{n} Tamu</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#8A7560" }}>Ucapan & Pesan</label>
                  <textarea
                    rows={4}
                    value={rsvpForm.wishes}
                    onChange={e => setRsvpForm(p => ({ ...p, wishes: e.target.value }))}
                    placeholder="Tuliskan doa dan ucapan terbaikmu untuk kami..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{ background: "#FAF7F2", border: "1px solid rgba(200,169,106,0.3)", color: "#2C2416", fontFamily: "'Poppins', sans-serif" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl flex items-center justify-center gap-2 text-sm tracking-widest uppercase transition-all hover:opacity-90 hover:scale-[1.01]"
                  style={{ background: "linear-gradient(135deg, #C8A96A, #D4B87A)", color: "#fff", fontWeight: 400 }}
                >
                  <Send size={14}/>
                  Send RSVP
                </button>
              </form>
            )}
          </div>
        </SectionReveal>
      </section>

      {/* ── WISHES ──────────────────────────────────────────── */}
      <section id="wishes" className="py-24 px-6 relative overflow-hidden" style={{ background: "#EFE7DD" }}>
        <BackgroundOrnament position="top-right" opacity={0.95} />
        <BackgroundOrnament position="bottom-left" opacity={0.95} />
        <FloralLineart tint="#A8B8A5" opacity={0.09}/>
        <FloralWatercolor opacity={0.055}/>
        <SectionReveal className="relative z-10">
          <SectionHeader label="Kind Words" title="Guest Wishes" />
          <StaggerChildren className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" variant="zoom" staggerMs={100}>
            {wishes.map((w, i) => (
              <div key={i} className="rounded-3xl p-6 relative" style={{
                background: "#FAF7F2",
                border: "1px solid rgba(200,169,106,0.2)",
                boxShadow: "0 4px 20px rgba(200,169,106,0.06)",
              }}>
                <div className="absolute top-4 right-5 opacity-20" style={{ fontFamily: "'Great Vibes', cursive", fontSize: "3rem", color: "#C8A96A", lineHeight: 1 }}>"</div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#5A4A3A", lineHeight: 1.8 }}>{w.message}</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(200,169,106,0.15)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium" style={{ background: "rgba(200,169,106,0.15)", color: "#C8A96A" }}>
                    {w.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#2C2416" }}>{w.name}</p>
                    <p className="text-xs" style={{ color: "#A8957A" }}>{w.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </SectionReveal>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="relative py-20 px-6 text-center overflow-hidden" style={{ background: "#2C2416" }}>
        <BackgroundOrnament position="top-left" opacity={0.85} />
        <BackgroundOrnament position="top-right" opacity={0.85} />
        <SectionReveal className="relative z-10">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "rgba(200,169,106,0.6)", fontWeight: 300 }}>
            With All Our Love
          </p>
          <h2 style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(3rem, 10vw, 5.5rem)",
            color: "#C8A96A",
            textShadow: "0 4px 30px rgba(200,169,106,0.25)",
          }}>
            Aisyah & Rizky
          </h2>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px w-12" style={{ background: "rgba(200,169,106,0.3)" }}/>
            <Heart size={14} fill="#C8A96A" style={{ color: "#C8A96A" }}/>
            <div className="h-px w-12" style={{ background: "rgba(200,169,106,0.3)" }}/>
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(232,208,154,0.6)", fontSize: "1rem" }}>
            20 September 2026 · Jakarta, Indonesia
          </p>
          <div className="flex justify-center gap-4 mt-8">
            {[Instagram, Facebook, Music].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: "rgba(200,169,106,0.1)", border: "1px solid rgba(200,169,106,0.2)", color: "#C8A96A" }}>
                <Icon size={15}/>
              </a>
            ))}
          </div>
          <p className="mt-10 text-xs" style={{ color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em" }}>
            Dibuat dengan cinta · #AisyahRizky2026
          </p>
        </SectionReveal>
      </footer>

      {isOpened && (
        <nav className="fixed left-1/2 z-50 -translate-x-1/2 w-[min(94vw,680px)] rounded-full border border-white/25 bg-white/70 px-2 py-2 shadow-2xl shadow-black/10 backdrop-blur-2xl"
          style={{ bottom: "calc(env(safe-area-inset-bottom, 1rem) + 0.75rem)" }}
        >
          <div className="flex items-center justify-between gap-1">
            {[
              { href: "#welcome", label: "Home", Icon: Home },
              { href: "#events", label: "Events", Icon: Calendar },
              { href: "#location", label: "Location", Icon: MapPin },
              { href: "#rsvp", label: "RSVP", Icon: Send },
              { href: "#wishes", label: "Wishes", Icon: Heart },
            ].map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                className="flex min-w-[56px] flex-1 items-center justify-center rounded-3xl px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5A4F40] transition-all duration-200 hover:bg-[#F6EFE4] hover:text-[#2C2416]"
                aria-label={label}
              >
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <Icon size={16} />
                  <span className="hidden sm:inline">{label}</span>
                </div>
              </a>
            ))}
          </div>
        </nav>
      )}

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
        * { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(200,169,106,0.3); border-radius: 4px; }
        input:focus, select:focus, textarea:focus { outline: none; border-color: #C8A96A !important; box-shadow: 0 0 0 2px rgba(200,169,106,0.15); }
      `}</style>
    </div>
  );
}
