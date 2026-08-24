"use strict";

import React from "react";
import { Award, ShieldCheck } from "lucide-react";

export default function CertificateCard({ title, issuer, image }) {
  return (
    <div className="glass-panel rounded-3xl p-6 border border-white/5 shadow-xl glass-panel-hover flex flex-col justify-between h-full group relative overflow-hidden bg-zinc-900/40 backdrop-blur-xl">
      {/* Decorative blurred background orb */}
      <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-300 pointer-events-none" />

      <div className="space-y-4">
        {/* Certificate Image/Icon Placeholder */}
        <div className="relative w-full aspect-[16/10] bg-zinc-900/60 group-hover:bg-zinc-900 rounded-2xl border border-zinc-800/80 flex items-center justify-center transition-all duration-300 overflow-hidden">
          {/* Accent light ray */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-white/[0.02] to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex flex-col items-center space-y-2 text-zinc-500 group-hover:text-teal-400 transition-colors duration-300">
              <Award className="w-10 h-10 stroke-[1.2]" />
              <span className="text-[10px] uppercase font-semibold tracking-widest text-zinc-600 group-hover:text-teal-500/80">
                Verified Credential
              </span>
            </div>
          )}
        </div>

        {/* Text Details */}
        <div className="space-y-1.5">
          <h3 className="text-base font-bold text-white tracking-tight group-hover:text-teal-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center space-x-1.5 text-zinc-400 text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Penerbit: {issuer}</span>
          </div>
        </div>
      </div>
      
      {/* Visual bottom badge bar */}
      <div className="mt-4 pt-3 border-t border-zinc-900/60 text-[10px] text-zinc-500 font-medium">
        Kredensial Resmi
      </div>
    </div>
  );
}
