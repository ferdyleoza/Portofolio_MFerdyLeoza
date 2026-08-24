"use strict";

import React from "react";
import CertificateCard from "./CertificateCard";
import { Award } from "lucide-react";

export default function Certificates() {
  const certificateList = [
    {
      title: "Project Management Essentials Professional Certification - PMEPC",
      issuer: "Open Test",
      image: "pmepcFerdy.png"
    },
    {
      title: "UI/UX Design Course",
      issuer: "Interaction Design Foundation (IxDF)",
    },
    {
      title: "JavaScript Fundamental",
      issuer: "Dicoding Indonesia",
    },
  ];

  return (
    <section id="sertifikat" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-teal-400">
            <Award className="w-3.5 h-3.5" />
            <span>Kredensial Resmi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sertifikasi Profesional
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Daftar sertifikat dan pelatihan terverifikasi yang mendukung keahlian teknis saya.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificateList.map((cert, idx) => (
            <div key={idx} className="h-full">
              <CertificateCard
                title={cert.title}
                issuer={cert.issuer}
                image={cert.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
