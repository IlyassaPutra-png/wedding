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
  // Lined-up bottom plants array repeating [pink, purple, white] across the bottom width
  const plantTypes = [
    tanamanPinkPng,
    tanamanUnguPng,
    tanamanPutihPng,
    tanamanPinkPng,
    tanamanUnguPng,
    tanamanPutihPng,
    tanamanPinkPng,
    tanamanUnguPng,
    tanamanPutihPng,
    tanamanPinkPng,
    tanamanUnguPng,
    tanamanPutihPng,
    tanamanPinkPng,
    tanamanUnguPng,
    tanamanPutihPng,
  ];

  return (
    <section className="relative w-full h-[92vh] sm:h-[95vh] min-h-[580px] max-h-[900px] overflow-hidden bg-[#F5EFE6] select-none flex flex-col justify-between items-center shadow-lg">
      
      {/* ── Background Subtle Vignette & Warm Glow ───────────────── */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 50% 35%, rgba(255, 253, 248, 0.95) 0%, rgba(245, 239, 230, 0.98) 60%, rgba(235, 227, 214, 1) 100%)"
        }}
      />

      {/* ── 1. LAYER 0: Rearmost Trees (STATIC - NO sway animation per requirement) ── */}
      {/* Rear Center Tree */}
      <img
        src={pohonTengahPng}
        alt="Pohon Tengah Belakang"
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[70%] sm:w-[60%] max-w-[500px] pointer-events-none z-10 opacity-95 filter drop-shadow-sm"
      />
      {/* Rear Left Tree */}
      <img
        src={pohonKiriBelakangPng}
        alt="Pohon Kiri Belakang"
        className="absolute bottom-[12%] left-[-12%] xs:left-[-8%] sm:left-[-4%] w-[50%] sm:w-[42%] max-w-[360px] pointer-events-none z-10 opacity-90"
      />
      {/* Rear Right Tree */}
      <img
        src={pohonKananBelakangPng}
        alt="Pohon Kanan Belakang"
        className="absolute bottom-[12%] right-[-12%] xs:right-[-8%] sm:right-[-4%] w-[50%] sm:w-[42%] max-w-[360px] pointer-events-none z-10 opacity-90"
      />


      {/* ── 2. LAYER 1: Midground & Foreground Swaying Trees (DYNAMIC WIND SWAY) ── */}
      {/* Upper Left Canopy Tree (sways left-top) */}
      <img
        src={pohonKiriAtasPng}
        alt="Pohon Kiri Atas"
        className="absolute top-0 left-0 w-[46%] xs:w-[42%] sm:w-[36%] max-w-[340px] pointer-events-none z-20 origin-top-left animate-sway-tree-left-top filter drop-shadow-sm"
      />
      {/* Upper Right Canopy Tree (sways right-top) */}
      <img
        src={pohonKananAtasPng}
        alt="Pohon Kanan Atas"
        className="absolute top-0 right-0 w-[44%] xs:w-[40%] sm:w-[34%] max-w-[320px] pointer-events-none z-20 origin-top-right animate-sway-tree-right-top filter drop-shadow-sm"
      />
      {/* Lower Left Trunk & Foliage Tree (sways left-bottom) */}
      <img
        src={pohonKiriBawahPng}
        alt="Pohon Kiri Bawah"
        className="absolute bottom-[1%] left-[-8%] xs:left-[-4%] sm:left-0 w-[58%] xs:w-[54%] sm:w-[48%] max-w-[440px] pointer-events-none z-25 origin-bottom-left animate-sway-tree-left-bottom filter drop-shadow-[0_8px_16px_rgba(30,45,35,0.12)]"
      />
      {/* Lower Right Twisted Trunk Tree (sways right-bottom) */}
      <img
        src={pohonKananBawahPng}
        alt="Pohon Kanan Bawah"
        className="absolute bottom-[1%] right-[-8%] xs:right-[-4%] sm:right-0 w-[60%] xs:w-[56%] sm:w-[50%] max-w-[460px] pointer-events-none z-25 origin-bottom-right animate-sway-tree-right-bottom filter drop-shadow-[0_8px_16px_rgba(30,45,35,0.12)]"
      />


      {/* ── 3. LAYER 2: Central Gazebo Foundation Structure ── */}
      <img
        src={fondasiTengahPng}
        alt="Fondasi Tengah Gazebo"
        className="absolute bottom-[3.8%] left-1/2 -translate-x-1/2 w-[82%] xs:w-[74%] sm:w-[62%] md:w-[54%] max-w-[480px] pointer-events-none z-30 filter drop-shadow-[0_14px_28px_rgba(35,45,30,0.22)]"
      />


      {/* ── 4. LAYER 3: Lined-up Bottom Plants (SWAYING IN OPPOSITE DIRECTIONS) ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-40 flex justify-between items-end overflow-hidden px-0 pointer-events-none h-24 xs:h-28 sm:h-36 md:h-40">
        {plantTypes.map((plantSrc, idx) => {
          const isEven = idx % 2 === 0;
          // Alternate sway animation: Even indices sway left, Odd indices sway right
          const animationClass = isEven ? "animate-sway-plant-left" : "animate-sway-plant-right";
          const delaySec = ((idx * 0.22) % 1.5).toFixed(2);
          
          return (
            <div
              key={idx}
              className={`flex-1 min-w-[28px] xs:min-w-[34px] sm:min-w-[44px] -mx-1.5 xs:-mx-2 sm:-mx-2.5 flex items-end justify-center ${animationClass}`}
              style={{
                animationDelay: `${delaySec}s`,
                transformOrigin: "bottom center"
              }}
            >
              <img
                src={plantSrc}
                alt={`Tanaman ${idx}`}
                className="w-full h-auto max-h-[85px] xs:max-h-[105px] sm:max-h-[135px] md:max-h-[155px] object-contain object-bottom filter drop-shadow-[0_4px_8px_rgba(20,35,25,0.18)]"
              />
            </div>
          );
        })}
      </div>


      {/* ── 5. LAYER 4: Top Header Crest & Typography (Matching referensi.png) ── */}
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
          className="text-[11px] xs:text-xs sm:text-sm tracking-[0.28em] uppercase text-[#253B29] font-medium mb-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
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
