"use strict";

import React from "react";
import { Users, Clock, Milestone, Building2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Kepala Divisi Humas - Panitia Kunjungan Industri",
      organization: "Himpunan Mahasiswa Teknik Informatika / Kampus ULBI",
      period: "Agustus 2025 - September 2025",
      type: "Kepanitiaan",
      description: "Memimpin seluruh koordinasi komunikasi eksternal dan mengevaluasi kelayakan mitra kunjungan industri untuk menyukseskan program akademik mahasiswa.",
      highlights: "Memimpin komunikasi eksternal dan evaluasi mitra antara KCIC dan CTIGroup. Berhasil menegosiasikan dan mengamankan kemitraan institusional dengan CTIGroup untuk memfasilitasi kunjungan industri bagi 133 mahasiswa.",
      skills: ["External Relations", "Mitra Evaluation", "Institutional Negotiation", "Leadership"]
    },
    {
      role: "Staf Hubungan Masyarakat (Humas)",
      organization: "Himpunan Mahasiswa Teknik Informatika",
      period: "Juli 2025 - Juli 2026",
      type: "Organisasi Mahasiswa",
      description: "Bertanggung jawab atas pengelolaan alur komunikasi eksternal, promosi kegiatan mahasiswa, serta membangun hubungan strategis dengan berbagai pihak.",
      highlights: "Berhasil menjalin kerja sama profesional dan mengamankan sponsor dari brand nasional ternama (seperti Mie Sedaap, Promag) serta mengelola komunikasi eksternal secara profesional.",
      skills: ["Public Relations", "Brand Sponsorship", "External Communication", "Event Planning"]
    }
  ];

  return (
    <section id="pengalaman" className="py-20 bg-zinc-950/40 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-teal-400">
            <Milestone className="w-3.5 h-3.5" />
            <span>Riwayat Kolaborasi & Organisasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pengalaman Organisasi
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Bagaimana saya berkolaborasi, bernegosiasi, dan memberikan dampak nyata di luar penulisan kode teknis.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-zinc-850 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Pulsing indicator node */}
              <div className={`absolute -left-[45px] md:-left-[61px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 flex items-center justify-center shadow-lg ${idx === 0 ? "border-teal-400 shadow-teal-400/20" : "border-zinc-800"}`}>
                <div className={`w-2.5 h-2.5 rounded-full ${idx === 0 ? "bg-teal-400 animate-pulse" : "bg-zinc-700"}`} />
              </div>

              {/* Experience Card */}
              <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 shadow-xl transition-all duration-300 hover:border-teal-500/25 bg-zinc-900/40 backdrop-blur-xl group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-teal-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-zinc-400 text-sm mt-1">
                      <Users className="w-4 h-4 text-teal-400" />
                      <span className="font-semibold text-zinc-300">
                        {exp.organization}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 w-fit self-start md:self-center font-medium">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="text-zinc-400 text-sm sm:text-base leading-relaxed space-y-3">
                  <p>{exp.description}</p>
                  
                  {/* Glowing Highlight Box */}
                  <div className="p-4 bg-zinc-950/50 rounded-2xl border border-zinc-850/60 text-zinc-300 text-sm">
                    <span className="font-bold text-teal-400 flex items-center gap-1.5 mb-1">
                      <Building2 className="w-3.5 h-3.5" />
                      Sorotan Pencapaian:
                    </span>
                    <p className="leading-relaxed">
                      {exp.highlights}
                    </p>
                  </div>
                </div>

                {/* Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 bg-zinc-950 border border-zinc-850 text-[11px] text-zinc-400 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
