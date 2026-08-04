import React from 'react';

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

interface AksaraHeroSectionProps {
  brideName?: string;
  groomName?: string;
  titleText?: string;
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
    <section className="relative w-full h-[90vh] sm:h-[95vh] min-h-[580px] max-h-[880px] overflow-hidden bg-[#F5EFE6] select-none flex flex-col justify-between items-center shadow-lg">
      
      {/* ── Bulletproof Inline CSS Keyframe Animations ────────────── */}
      <style>{`
        @keyframes windSwayTreeLeftTop {
          0% { transform: rotate(0deg) scale(1) translateY(0px); }
          50% { transform: rotate(-5.5deg) scale(1.03) translateY(-6px); }
          100% { transform: rotate(0deg) scale(1) translateY(0px); }
        }

        @keyframes windSwayTreeRightTop {
          0% { transform: rotate(0deg) scale(1) translateY(0px); }
          50% { transform: rotate(5.5deg) scale(1.03) translateY(-6px); }
          100% { transform: rotate(0deg) scale(1) translateY(0px); }
        }

        @keyframes windSwayTreeLeftBottom {
          0% { transform: rotate(0deg) scale(1) translateY(0px); }
          50% { transform: rotate(-6deg) scale(1.025) translateY(-6px); }
          100% { transform: rotate(0deg) scale(1) translateY(0px); }
        }

        @keyframes windSwayTreeRightBottom {
          0% { transform: rotate(0deg) scale(1) translateY(0px); }
          50% { transform: rotate(6deg) scale(1.025) translateY(-6px); }
          100% { transform: rotate(0deg) scale(1) translateY(0px); }
        }

        @keyframes windSwayPlantLeft {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(-14deg) scale(1.08); }
          100% { transform: rotate(0deg) scale(1); }
        }

        @keyframes windSwayPlantRight {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(14deg) scale(1.08); }
          100% { transform: rotate(0deg) scale(1); }
        }
      `}</style>

      {/* ── Background Soft Glow & Vignette ─────────────────────── */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at 50% 35%, rgba(255, 254, 250, 0.98) 0%, rgba(245, 239, 230, 0.98) 55%, rgba(232, 224, 210, 1) 100%)"
        }}
      />

      {/* ── 1. LAYER 0: Dense Background Trees (STATIC backdrop framing center) ── */}
      {/* Rear Center Tree */}
      <img
        src={pohonTengahPng}
        alt="Pohon Tengah Belakang"
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[95%] sm:w-[70%] max-w-[580px] h-[65%] sm:h-[60%] object-cover object-bottom pointer-events-none z-10 opacity-95 filter drop-shadow-sm"
      />
      {/* Rear Mid Left Tree */}
      <img
        src={pohonKiriBelakangPng}
        alt="Pohon Kiri Belakang"
        className="absolute top-[12%] sm:top-[8%] left-[-18%] xs:left-[-12%] sm:left-[-6%] w-[72%] xs:w-[64%] sm:w-[50%] max-w-[420px] h-[62%] object-cover pointer-events-none z-10 opacity-95"
      />
      {/* Rear Mid Right Tree */}
      <img
        src={pohonKananBelakangPng}
        alt="Pohon Kanan Belakang"
        className="absolute top-[12%] sm:top-[8%] right-[-18%] xs:right-[-12%] sm:right-[-6%] w-[72%] xs:w-[64%] sm:w-[50%] max-w-[420px] h-[62%] object-cover pointer-events-none z-10 opacity-95"
      />


      {/* ── 2. LAYER 1: Midground & Foreground Swaying Trees (DYNAMIC WIND SWAY) ── */}
      {/* Upper Left Canopy Tree */}
      <img
        src={pohonKiriAtasPng}
        alt="Pohon Kiri Atas"
        className="absolute top-[-3%] left-[-8%] xs:left-[-4%] sm:left-0 w-[62%] xs:w-[54%] sm:w-[42%] max-w-[400px] pointer-events-none z-20 filter drop-shadow-sm"
        style={{
          animation: "windSwayTreeLeftTop 5.2s ease-in-out infinite",
          transformOrigin: "0% 0%"
        }}
      />
      {/* Upper Right Canopy Tree */}
      <img
        src={pohonKananAtasPng}
        alt="Pohon Kanan Atas"
        className="absolute top-[-3%] right-[-8%] xs:right-[-4%] sm:right-0 w-[60%] xs:w-[52%] sm:w-[40%] max-w-[380px] pointer-events-none z-20 filter drop-shadow-sm"
        style={{
          animation: "windSwayTreeRightTop 5.6s ease-in-out infinite",
          transformOrigin: "100% 0%"
        }}
      />
      {/* Lower Left Trunk & Dense Foliage Tree */}
      <img
        src={pohonKiriBawahPng}
        alt="Pohon Kiri Bawah"
        className="absolute bottom-0 left-[-12%] xs:left-[-8%] sm:left-[-4%] w-[74%] xs:w-[66%] sm:w-[52%] max-w-[480px] pointer-events-none z-25 filter drop-shadow-[0_8px_16px_rgba(30,45,35,0.14)]"
        style={{
          animation: "windSwayTreeLeftBottom 6.2s ease-in-out infinite",
          transformOrigin: "20% 100%"
        }}
      />
      {/* Lower Right Twisted Trunk Tree */}
      <img
        src={pohonKananBawahPng}
        alt="Pohon Kanan Bawah"
        className="absolute bottom-0 right-[-12%] xs:right-[-8%] sm:right-[-4%] w-[76%] xs:w-[68%] sm:w-[54%] max-w-[500px] pointer-events-none z-25 filter drop-shadow-[0_8px_16px_rgba(30,45,35,0.14)]"
        style={{
          animation: "windSwayTreeRightBottom 6.8s ease-in-out infinite",
          transformOrigin: "80% 100%"
        }}
      />


      {/* ── 3. LAYER 2: Central Gazebo Foundation Structure ── */}
      <img
        src={fondasiTengahPng}
        alt="Fondasi Tengah Gazebo"
        className="absolute bottom-[3%] left-1/2 -translate-x-1/2 w-[88%] xs:w-[82%] sm:w-[68%] md:w-[58%] max-w-[500px] pointer-events-none z-30 filter drop-shadow-[0_14px_28px_rgba(35,45,30,0.22)]"
      />


      {/* ── 4. LAYER 3: Enlarged Lined-up Bottom Plants (SWAYING IN OPPOSITE DIRECTIONS) ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-40 flex justify-between items-end overflow-hidden px-0 pointer-events-none h-32 xs:h-40 sm:h-52 md:h-60">
        {plantTypes.map((plantSrc, idx) => {
          const isEven = idx % 2 === 0;
          const animName = isEven ? "windSwayPlantLeft" : "windSwayPlantRight";
          const delaySec = ((idx * 0.3) % 1.5).toFixed(2);
          
          return (
            <div
              key={idx}
              className="flex-1 min-w-[50px] xs:min-w-[65px] sm:min-w-[85px] -mx-3 xs:-mx-4 sm:-mx-6 flex items-end justify-center"
              style={{
                animation: `${animName} 3.4s ease-in-out infinite ${delaySec}s`,
                transformOrigin: "bottom center"
              }}
            >
              <img
                src={plantSrc}
                alt={`Tanaman ${idx}`}
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
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Subtitle: "The Wedding of" */}
        <p
          className="text-[11px] xs:text-xs sm:text-sm tracking-[0.28em] uppercase text-[#253B29] font-medium mb-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
        >
          {titleText}
        </p>

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
