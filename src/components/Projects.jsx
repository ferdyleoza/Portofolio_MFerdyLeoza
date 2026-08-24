"use strict";

import React from "react";
import ProjectCard from "./ProjectCard";
import { Briefcase } from "lucide-react";

export default function Projects() {
  const projectList = [
    {
      title: "AI Q&A Agent",
      role: "Frontend & API Integrator",
      tech: ["JavaScript", "Node.js", "Gemini API", "Tailwind CSS"],
      description: "Asisten cerdas berbasis kecerdasan buatan untuk menjawab pertanyaan secara cepat. Mengembangkan antarmuka interaktif dan jembatan API Node.js ringan untuk memproses respons Gemini API secara real-time.",
    },
    {
      title: "LogiTrack",
      role: "Sole Frontend Developer",
      tech: ["Flutter", "Dart", "Mobile UI", "State Management"],
      description: "Aplikasi pelacakan logistik lintas platform. Membangun UI mobile cross-platform utuh secara mandiri dengan widget kustom, sistem filter dinamis, custom bottom nav, dan fitur Dark Mode terintegrasi.",
    },
    {
      title: "Nyumbangin / Aplikasi Donasi Publik",
      role: "Fullstack / Frontend Developer",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "Dashboard CRUD"],
      description: "Platform donasi khusus kreator konten dan publik yang transparan. Mengeksekusi rancangan antarmuka responsif langsung ke dalam kode serta membuat Admin Dashboard fungsional untuk pencairan dana.",
    },
    {
      title: "Anime Review App",
      role: "Frontend Lead",
      tech: ["Golang", "MongoDB", "HTML", "CSS"],
      description: "Platform ulasan anime interaktif. Merancang halaman informasi anime yang detail, antarmuka sistem rating interaktif, serta berkolaborasi dalam integrasi backend berkinerja tinggi berbasis Golang.",
    },
    {
      title: "E-Voting Platform",
      role: "Frontend Developer",
      tech: ["Laravel", "Blade Template", "HTML", "CSS", "SQL"],
      description: "Platform pemungutan suara kampus yang aman. Membangun alur pengguna yang terarah menggunakan Blade template, mencakup alur autentikasi aman dan sistem dashboard admin CRUD.",
    },
  ];

  return (
    <section id="proyek" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-teal-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Karya Terpilih</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proyek Pilihan
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Merancang & membangun aplikasi interaktif dengan kinerja optimal dan visual premium.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, idx) => (
            <div key={idx} className="h-full">
              <ProjectCard
                title={project.title}
                role={project.role}
                tech={project.tech}
                description={project.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
