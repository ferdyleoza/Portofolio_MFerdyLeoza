"use strict";

import React from "react";
import { Laptop, Cpu, Database, Code2, Sparkles, Terminal } from "lucide-react";

const FigmaIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 9h3.5a3.5 3.5 0 1 1-3.5 3.5V9z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v3.5A3.5 3.5 0 0 1 8.5 16H8.5A3.5 3.5 0 0 1 5 12.5z" />
    <path d="M5 18.5A3.5 3.5 0 0 1 8.5 15H12v3.5A3.5 3.5 0 0 1 8.5 22H8.5A3.5 3.5 0 0 1 5 18.5z" />
  </svg>
);

export default function Skills() {
  const categories = [
    {
      title: "Bahasa Pemrograman",
      icon: <Laptop className="w-6 h-6 text-teal-400" />,
      bgIcon: <FigmaIcon className="absolute right-4 bottom-4 w-24 h-24 text-zinc-800/10 pointer-events-none" />,
      color: "border-teal-500/20 shadow-teal-950/20",
      skills: [
        "JavaScript",
        "Dart",
        "Golang",
        "PHP",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Framework & Library",
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      bgIcon: <Code2 className="absolute right-4 bottom-4 w-24 h-24 text-zinc-800/10 pointer-events-none" />,
      color: "border-emerald-500/20 shadow-emerald-950/20",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Flutter",
        "Tailwind CSS",
        "Laravel",
      ],
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      bgIcon: <Terminal className="absolute right-4 bottom-4 w-24 h-24 text-zinc-800/10 pointer-events-none" />,
      color: "border-blue-500/20 shadow-blue-950/20",
      skills: [
        "MongoDB",
        "SQL",
        "Git",
        "GitHub",
        "API Integration (Gemini API)",
        "AI-Assisted Tools",
      ],
    },
  ];

  return (
    <section id="keahlian" className="py-20 bg-zinc-950/40 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-teal-400">
            <Sparkles className="w-3 h-3" />
            <span>Keahlian & Kompetensi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kombinasi Seni & Teknologi
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Perangkat bantu, bahasa pemrograman, dan pendekatan desain yang saya gunakan untuk mewujudkan konsep menjadi nyata.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className={`glass-panel rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 border border-white/5 shadow-lg ${category.color}`}
            >
              {/* Background Large Icon Decor */}
              {category.bgIcon}
              
              {/* Card Header */}
              <div className="flex items-center space-x-3 mb-6 relative z-10">
                <div className="p-3 bg-zinc-900/80 rounded-2xl border border-zinc-800/60 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Badges Grid */}
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white font-medium rounded-full transition-all duration-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
