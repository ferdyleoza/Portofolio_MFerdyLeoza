"use strict";

import React from "react";
import { FolderGit2, ArrowUpRight, User } from "lucide-react";

export default function ProjectCard({ title, role, tech, description }) {
  return (
    <div className="glass-panel rounded-3xl p-6 flex flex-col justify-between border border-white/5 shadow-xl glass-panel-hover group relative overflow-hidden h-full bg-zinc-900/40 backdrop-blur-xl">
      {/* Decorative Gradient Background */}
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-colors duration-300 pointer-events-none" />

      <div>
        {/* Card Header Icon & Link */}
        <div className="flex items-center justify-between mb-5">
          <div className="p-3 bg-zinc-900/80 rounded-2xl border border-zinc-800/80 text-teal-400 group-hover:text-white transition-colors duration-300">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div className="p-2 bg-zinc-900/50 hover:bg-zinc-900 rounded-full border border-zinc-800 text-zinc-400 group-hover:text-white transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Project Meta Info */}
        <div className="space-y-2.5">
          {/* Peran / Role Badge */}
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] text-teal-400 font-medium">
            <User className="w-3 h-3" />
            <span>Peran: {role}</span>
          </div>

          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-teal-400 transition-colors duration-300 pt-1">
            {title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mt-6 pt-4 border-t border-zinc-900/60 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="px-2.5 py-1 bg-zinc-900/80 border border-zinc-800 text-[10px] text-zinc-400 font-semibold rounded-lg tracking-wide uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
