"use strict";

import React from "react";
import { ArrowUpRight, Sparkles, Code, Layout, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="tentang"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-teal-500/10 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content - Typography */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-teal-400 font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mahasiswa D4 Teknik Informatika di Universitas Logistik dan Bisnis Internasional.</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Muhammad Ferdy
              <span className="block mt-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Leoza
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-medium text-zinc-300">
              Fullstack Developer dengan fokus utama pada Frontend Engineering
            </p>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
            Mahasiswa D4 Teknik Informatika di Universitas Logistik dan Bisnis Internasional. Saya berspesialisasi dalam membangun aplikasi web dan mobile interaktif menggunakan Next.js, Flutter, dan Vanilla JavaScript. Terbiasa mengintegrasikan antarmuka frontend dengan backend tangguh (Node.js, Golang, Laravel), mengelola database, serta memanfaatkan AI-Assisted Development untuk efisiensi penulisan kode maksimal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#proyek"
              className="group px-6 py-3 bg-teal-500 hover:bg-teal-400 text-zinc-950 font-semibold rounded-xl inline-flex items-center space-x-2 transition-all hover:shadow-lg hover:shadow-teal-500/25 active:scale-95"
            >
              <span>Lihat Proyek</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/cv_ATS_ferdy.pdf"
              download="CV_Muhammad_Ferdy_Leoza.pdf"
              className="group px-6 py-3 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-semibold rounded-xl inline-flex items-center space-x-2 transition-all active:scale-95"
            >
              <span>Unduh CV</span>
              <Download className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Content - Visual Profile Card */}
        <div className="lg:col-span-5 relative">
          <div className="w-full aspect-square max-w-[400px] mx-auto relative group">
            {/* Ambient glowing shadow backdrops */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/30 to-blue-500/30 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500 pointer-events-none" />

            {/* Frame Box */}
            <div className="absolute inset-0 glass-panel rounded-3xl p-4 flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden bg-zinc-900/60 backdrop-blur-xl transition-all duration-300 group-hover:border-teal-500/30">

              {/* Top mockup window control bar */}
              <div className="flex justify-between items-center pb-3 border-b border-zinc-800/80">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="text-[10px] text-zinc-500 font-mono">Muhammad Ferdy Leoza</div>
              </div>

              {/* Profile Image Wrapper */}
              <div className="flex-1 py-4 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
                  <img
                    src="ferdy.jpeg"
                    alt="Muhammad Ferdy Leoza"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Footer Tech Icon Badges */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-800/80 text-center">
                <div className="py-2.5 px-3 bg-zinc-950/50 rounded-xl border border-zinc-850 flex items-center justify-center space-x-2">
                  <Code className="w-4 h-4 text-teal-400" />
                  <span className="text-[10px] text-zinc-400 font-semibold tracking-wider">DEVELOPMENT</span>
                </div>
                <div className="py-2.5 px-3 bg-zinc-950/50 rounded-xl border border-zinc-850 flex items-center justify-center space-x-2">
                  <Layout className="w-4 h-4 text-blue-400" />
                  <span className="text-[10px] text-zinc-400 font-semibold tracking-wider">UI/UX ENGINE</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
