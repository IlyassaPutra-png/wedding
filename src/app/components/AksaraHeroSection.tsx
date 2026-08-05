import React, { useState, useEffect } from 'react';

// Import assets from assetpagebaru
import fondasiTengahPng from "../../../assetpagebaru/fondasi_tengah.png";
import pohonKiriAtasPng from "../../../assetpagebaru/pohon _kiri_atas.png";
import pohonKananAtasPng from "../../../assetpagebaru/pohon_kanan_atas.png";
import pohonKananBawahPng from "../../../assetpagebaru/pohon_kanan_bawah.png";
import pohonKananBelakangPng from "../../../assetpagebaru/pohon_kanan_belakang.png";
import pohonKiriBawahPng from "../../../assetpagebaru/pohon_kiri_bawah.png";
import pohonKiriBelakangPng from "../../../assetpagebaru/pohon_kiri_belakang.png";
import pohonTengahPng from "../../../assetpagebaru/pohon_tengah.png";
import tanamanPinkPng from "../../../assetpagebaru/tanaman_pink.png";
import tanamanPutihPng from "../../../assetpagebaru/tanaman_putih.png";
import tanamanUnguPng from "../../../assetpagebaru/tanaman_ungu.png";

// Top flower bouquet crest
import topFloralHeaderPng from "./gambar/bunga/bunga7.png";

// Flying bird assets for frame-by-frame wing flapping
import burung01Png from "./gambar/burung/burung01.png";
import burung02Png from "./gambar/burung/burung02.png";
import burungBaru1Png from "./gambar/burung/burungbaru1.png";
import burungBaru2Png from "./gambar/burung/burungbaru2.png";
import burungBaru3Png from "./gambar/burung/burungbaru3.png";
import burungBaru4Png from "./gambar/burung/burungbaru4.png";

interface AksaraHeroSectionProps {
  brideName?: string;
  groomName?: string;
  titleText?: string;
}

/* ─── Flapping Bird Component (Pure CSS 0-state performance animation) ─── */
function FlappingBird({
  frameA,
  frameB,
  size = 36,
  flapSpeed = 230,
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
  const duration = `${flapSpeed * 2}ms`;

  return (
    <div
      className={`relative pointer-events-none select-none ${className}`}
      style={{ width: size, height: size, transform: flipX ? "scaleX(-1)" : "none", ...style }}
    >
      <img
        src={frameA}
        alt=""
        decoding="async"
        className="absolute inset-0 w-full h-full object-contain filter drop-shadow-[0_3px_6px_rgba(0,0,0,0.18)] animate-bird-frame-a"
        style={{ animationDuration: duration }}
      />
      <img
        src={frameB}
        alt=""
        decoding="async"
        className="absolute inset-0 w-full h-full object-contain filter drop-shadow-[0_3px_6px_rgba(0,0,0,0.18)] animate-bird-frame-b"
        style={{ animationDuration: duration }}
      />
    </div>
  );
}

export default function AksaraHeroSection({
  brideName = "Aisyah",
  groomName = "Rizky",
  titleText = "The Wedding of"
}: AksaraHeroSectionProps) {
  // Lined-up bottom plants array - 7 prominent flower clusters
  const plantTypes = [
    tanamanPinkPng,
    tanamanUnguPng,
    tanamanPutihPng,
    tanamanPinkPng,
    tanamanUnguPng,
    tanamanPutihPng,
    tanamanPinkPng,
  ];

  return (
    <section id="hero" className="relative w-full h-screen min-h-[100dvh] overflow-hidden bg-[#F5EFE6] select-none flex flex-col justify-between items-center shadow-lg">
      
      {/* ── Bulletproof Inline CSS Keyframe Animations ────────────── */}
      <style>{`
        /* Lower Trees Wind Sway */
        @keyframes windSwayTreeLeftBottom {
          0% { transform: rotate(0deg) scale(1) translateY(0px); }
          50% { transform: rotate(-5.5deg) scale(1.02) translateY(-4px); }
          100% { transform: rotate(0deg) scale(1) translateY(0px); }
        }

        @keyframes windSwayTreeRightBottom {
          0% { transform: rotate(0deg) scale(1) translateY(0px); }
          50% { transform: rotate(5.5deg) scale(1.02) translateY(-4px); }
          100% { transform: rotate(0deg) scale(1) translateY(0px); }
        }

        /* Faster & Lively Plant Sway */
        @keyframes windSwayPlantLeft {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(-14deg) scale(1.06); }
          100% { transform: rotate(0deg) scale(1); }
        }

        @keyframes windSwayPlantRight {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(14deg) scale(1.06); }
          100% { transform: rotate(0deg) scale(1); }
        }

        /* Bird Wing Flapping Frame Toggle */
        @keyframes birdFrameA {
          0%, 49.9% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes birdFrameB {
          0%, 49.9% { opacity: 0; }
          50%, 100% { opacity: 1; }
        }
        .animate-bird-frame-a {
          animation: birdFrameA 0.5s steps(1) infinite;
          will-change: opacity;
        }
        .animate-bird-frame-b {
          animation: birdFrameB 0.5s steps(1) infinite;
          will-change: opacity;
        }

        /* Flying Birds Left to Right (LTR) */
        @keyframes flyAcrossLTR {
          0% {
            transform: translate3d(-120px, 20px, 0) scale(0.7) rotate(-3deg);
            opacity: 0;
          }
          8% {
            opacity: 0.9;
          }
          50% {
            transform: translate3d(calc(50vw - 30px), -25px, 0) scale(1) rotate(2deg);
            opacity: 1;
          }
          92% {
            opacity: 0.9;
          }
          100% {
            transform: translate3d(calc(100vw + 100px), -50px, 0) scale(0.8) rotate(-4deg);
            opacity: 0;
          }
        }

        /* Flying Birds Right to Left (RTL - Crossing) */
        @keyframes flyAcrossRTL {
          0% {
            transform: translate3d(100px, -20px, 0) scale(0.8) rotate(4deg);
            opacity: 0;
          }
          8% {
            opacity: 0.9;
          }
          50% {
            transform: translate3d(calc(-50vw + 30px), 25px, 0) scale(1) rotate(-2deg);
            opacity: 1;
          }
          92% {
            opacity: 0.9;
          }
          100% {
            transform: translate3d(calc(-100vw - 120px), 50px, 0) scale(0.7) rotate(3deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* ── Background Soft Glow & Vignette ─────────────────────── */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at 50% 35%, rgba(255, 254, 250, 0.98) 0%, rgba(245, 239, 230, 0.98) 55%, rgba(232, 224, 210, 1) 100%)"
        }}
      />

      {/* ── 0. LAYER: CROSSING FLYING BIRDS FLOCKS IN THE SKY ─────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {/* Flock 1: Flying Left to Right (facing forward right) */}
        <div
          className="absolute top-[12%] left-0"
          style={{ animation: "flyAcrossLTR 13s linear infinite 0.5s" }}
        >
          <FlappingBird frameA={burung01Png} frameB={burung02Png} size={44} flapSpeed={220} flipX={false} />
        </div>

        <div
          className="absolute top-[8%] left-0"
          style={{ animation: "flyAcrossLTR 13s linear infinite 1.4s" }}
        >
          <FlappingBird frameA={burungBaru1Png} frameB={burungBaru2Png} size={34} flapSpeed={260} flipX={true} />
        </div>

        <div
          className="absolute top-[16%] left-0"
          style={{ animation: "flyAcrossLTR 13s linear infinite 2.2s" }}
        >
          <FlappingBird frameA={burungBaru3Png} frameB={burungBaru4Png} size={28} flapSpeed={200} flipX={true} />
        </div>

        {/* Flock 2: Flying Right to Left near lower swaying trees (CROSSING!) */}
        <div
          className="absolute top-[36%] right-0"
          style={{ animation: "flyAcrossRTL 11s linear infinite 1.2s" }}
        >
          <FlappingBird frameA={burung01Png} frameB={burung02Png} size={42} flapSpeed={230} flipX={true} />
        </div>

        <div
          className="absolute top-[32%] right-0"
          style={{ animation: "flyAcrossRTL 11s linear infinite 2.0s" }}
        >
          <FlappingBird frameA={burungBaru1Png} frameB={burungBaru2Png} size={36} flapSpeed={250} flipX={false} />
        </div>

        <div
          className="absolute top-[41%] right-0"
          style={{ animation: "flyAcrossRTL 11s linear infinite 2.8s" }}
        >
          <FlappingBird frameA={burungBaru3Png} frameB={burungBaru4Png} size={30} flapSpeed={190} flipX={false} />
        </div>
      </div>


      {/* ── 1. LAYER 0: Dense Background Trees (STATIC backdrop framing center) ── */}
      {/* Rear Center Tree (SUPER EXTRA LARGE CENTERPIECE) */}
      <img
        src={pohonTengahPng}
        alt="Pohon Tengah Belakang"
        decoding="async"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180%] xs:w-[125%] sm:w-[110%] md:w-[98%] max-w-[1050px] h-[92vh] sm:h-[95vh] object-contain object-bottom pointer-events-none z-[10] opacity-95 filter drop-shadow-sm"
      />
      {/* Rear Mid Left Tree (Restored to previous framing size) */}
      <img
        src={pohonKiriBelakangPng}
        alt="Pohon Kiri Belakang"
        decoding="async"
        className="absolute top-[6%] sm:top-[4%] left-[-16%] xs:left-[-12%] sm:left-[-6%] w-[72%] xs:w-[64%] sm:w-[50%] max-w-[440px] h-[65vh] object-contain object-top-left pointer-events-none z-[12] opacity-95"
      />
      {/* Rear Mid Right Tree (Restored to previous framing size) */}
      <img
        src={pohonKananBelakangPng}
        alt="Pohon Kanan Belakang"
        decoding="async"
        className="absolute top-[6%] sm:top-[4%] right-[-16%] xs:right-[-12%] sm:right-[-6%] w-[72%] xs:w-[64%] sm:w-[50%] max-w-[440px] h-[65vh] object-contain object-top-right pointer-events-none z-[12] opacity-95"
      />


      {/* ── 2. LAYER 1: Midground & Foreground Trees ── */}
      {/* Upper Left Canopy Tree (STATIONARY per user request) */}
      <img
        src={pohonKiriAtasPng}
        alt="Pohon Kiri Atas"
        decoding="async"
        className="absolute top-[-3%] left-[-8%] xs:left-[-4%] sm:left-0 w-[62%] xs:w-[54%] sm:w-[42%] max-w-[400px] pointer-events-none z-20 filter drop-shadow-sm"
      />
      {/* Upper Right Canopy Tree (STATIONARY per user request) */}
      <img
        src={pohonKananAtasPng}
        alt="Pohon Kanan Atas"
        decoding="async"
        className="absolute top-[-3%] right-[-8%] xs:right-[-4%] sm:right-0 w-[60%] xs:w-[52%] sm:w-[40%] max-w-[380px] pointer-events-none z-20 filter drop-shadow-sm"
      />
      {/* Lower Left Trunk & Dense Foliage Tree (DYNAMIC WIND SWAY) */}
      <img
        src={pohonKiriBawahPng}
        alt="Pohon Kiri Bawah"
        decoding="async"
        className="absolute bottom-0 left-[-12%] xs:left-[-8%] sm:left-[-4%] w-[100%] xs:w-[66%] sm:w-[52%] max-w-[480px] pointer-events-none z-25 filter drop-shadow-[0_8px_16px_rgba(30,45,35,0.14)]"
        style={{
          animation: "windSwayTreeLeftBottom 6.5s ease-in-out infinite",
          transformOrigin: "20% 100%"
        }}
      />
      {/* Lower Right Twisted Trunk Tree (DYNAMIC WIND SWAY) */}
      <img
        src={pohonKananBawahPng}
        alt="Pohon Kanan Bawah"
        decoding="async"
        className="absolute bottom-0 right-[-12%] xs:right-[-8%] sm:right-[-4%] w-[110%] xs:w-[68%] sm:w-[54%] max-w-[500px] pointer-events-none z-25 filter drop-shadow-[0_8px_16px_rgba(30,45,35,0.14)]"
        style={{
          animation: "windSwayTreeRightBottom 7.2s ease-in-out infinite",
          transformOrigin: "80% 100%"
        }}
      />


      {/* ── 3. LAYER 2: Central Gazebo Foundation Structure ── */}
      <img
        src={fondasiTengahPng}
        alt="Fondasi Tengah Gazebo"
        decoding="async"
        className="absolute bottom-[3%] left-1/2 -translate-x-1/2 w-[88%] xs:w-[82%] sm:w-[68%] md:w-[58%] max-w-[500px] pointer-events-none z-30 filter drop-shadow-[0_14px_28px_rgba(35,45,30,0.22)]"
      />


      {/* ── 4. LAYER 3: Lively Lined-up Bottom Plants (SWAYING IN OPPOSITE DIRECTIONS) ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-40 flex justify-between items-end overflow-hidden px-0 pointer-events-none h-32 xs:h-40 sm:h-52 md:h-60">
        {plantTypes.map((plantSrc, idx) => {
          const isEven = idx % 2 === 0;
          const animName = isEven ? "windSwayPlantLeft" : "windSwayPlantRight";
          const delaySec = ((idx * 0.25) % 1.2).toFixed(2);
          
          return (
            <div
              key={idx}
              className="flex-1 min-w-[50px] xs:min-w-[65px] sm:min-w-[85px] -mx-3 xs:-mx-4 sm:-mx-6 flex items-end justify-center"
              style={{
                animation: `${animName} 2.6s ease-in-out infinite ${delaySec}s`,
                transformOrigin: "bottom center"
              }}
            >
              <img
                src={plantSrc}
                alt={`Tanaman ${idx}`}
                decoding="async"
                className="w-full h-auto max-h-[140px] xs:max-h-[175px] sm:max-h-[220px] md:max-h-[260px] object-contain object-bottom filter drop-shadow-[0_6px_12px_rgba(20,35,25,0.22)]"
              />
            </div>
          );
        })}
      </div>


      {/* ── 5. LAYER 4: Top Header Crest & Luxury Typography ── */}
      <div className="relative z-50 text-center pt-6 xs:pt-8 sm:pt-12 px-4 flex flex-col items-center max-w-lg mx-auto">
        
        {/* Top Bouquet Crest */}
        <div className="w-20 xs:w-24 sm:w-32 mb-2 sm:mb-3 filter drop-shadow-[0_3px_8px_rgba(40,55,35,0.15)] transition-transform hover:scale-105 duration-300">
          <img
            src={topFloralHeaderPng}
            alt="Floral Crest"
            decoding="async"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Subtitle: "The Wedding of" */}
        <div className="mb-2 px-4 py-1 rounded-full bg-[#FAF5EE]/95 border border-[#C7A86D]/60 shadow-[0_4px_16px_rgba(20,35,25,0.15)] backdrop-blur-md inline-flex items-center justify-center">
          <p
            className="text-[11px] xs:text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8B6B23] font-bold drop-shadow-xs"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
          >
            {titleText}
          </p>
        </div>

        {/* Bride Name: "Aisyah" */}
        <h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#1D3322] leading-tight tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontWeight: 600
          }}
        >
          {brideName}
        </h1>

        {/* Ampersand: "&" */}
        <span
          className="text-lg xs:text-xl sm:text-2xl text-[#2D4531] italic my-0.5 drop-shadow-xs"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          &
        </span>

        {/* Groom Name: "Rizky" */}
        <h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#1D3322] leading-tight tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontWeight: 600
          }}
        >
          {groomName}
        </h1>
      </div>


      {/* ── 6. LAYER 5: Subtle Floating Petals & Scroll Down Indicator ── */}
      <div className="relative z-50 mb-14 xs:mb-16 sm:mb-20 flex flex-col items-center opacity-85">
        <div className="animate-bounce flex flex-col items-center cursor-pointer">
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#2D4531] font-semibold mb-1 drop-shadow-xs">
            Gulir Ke Bawah
          </span>
          <svg className="w-5 h-5 text-[#2D4531] drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

    </section>
  );
}
