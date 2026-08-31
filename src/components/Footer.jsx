"use client";
"use strict";

import React, { useState } from "react";
import { Mail, ArrowUp, Send } from "lucide-react";

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "82dfcf49-3095-45f4-8170-bd093e4610c0",
          from_name: formData.name || "Pengunjung Portofolio",
          subject: `[Portofolio] Pesan Baru dari ${formData.name || "Pengunjung"}`,
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="kontak" className="bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Blur Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-teal-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Contact Section Block */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          
          {/* Contact Text */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Mari Bekerja Sama!
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
              Saya selalu terbuka untuk diskusi mengenai pengembangan frontend, desain antarmuka, proyek web/mobile menarik, atau peluang kolaborasi lainnya. Silakan hubungi saya kapan saja!
            </p>
            <div className="flex flex-col space-y-3 pt-2">
              <a
                href="mailto:ferdyleoza123@gmail.com"
                className="inline-flex items-center space-x-3 text-zinc-300 hover:text-teal-400 transition-colors w-fit"
              >
                <div className="p-2.5 bg-zinc-900 rounded-xl border border-zinc-800">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">ferdyleoza123@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama Anda"
                  className="px-4 py-3 bg-zinc-900/60 border border-zinc-850 hover:border-zinc-800 focus:border-teal-400 focus:outline-none rounded-xl text-sm text-zinc-200 placeholder:text-zinc-550 transition-colors duration-200"
                  required
                  disabled={isSubmitting}
                  suppressHydrationWarning
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Anda"
                  className="px-4 py-3 bg-zinc-900/60 border border-zinc-850 hover:border-zinc-800 focus:border-teal-400 focus:outline-none rounded-xl text-sm text-zinc-200 placeholder:text-zinc-550 transition-colors duration-200"
                  required
                  disabled={isSubmitting}
                  suppressHydrationWarning
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Pesan Anda..."
                rows="4"
                className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-850 hover:border-zinc-800 focus:border-teal-400 focus:outline-none rounded-xl text-sm text-zinc-200 placeholder:text-zinc-550 transition-colors duration-200 resize-none"
                required
                disabled={isSubmitting}
                suppressHydrationWarning
              />

              {submitStatus === "success" && (
                <p className="text-teal-400 text-xs font-medium font-mono">
                  ✓ Pesan berhasil terkirim! Terima kasih telah menghubungi saya.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-xs font-medium font-mono">
                  ✗ Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung melalui email.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-white text-zinc-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center justify-center space-x-2 hover:bg-teal-400 hover:text-zinc-950 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                suppressHydrationWarning
              >
                <span>{isSubmitting ? "Mengirim..." : "Kirim Pesan"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <span className="text-lg font-bold text-white tracking-tight">
              MFL<span className="text-teal-400">.</span>
            </span>
            <span className="text-xs text-zinc-500" suppressHydrationWarning>
              © {new Date().getFullYear()} Muhammad Ferdy Leoza. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/ferdyleoza"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-xl transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/m-ferdy-leoza-17b588410/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-xl transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-xl transition-all cursor-pointer"
              aria-label="Scroll to top"
              suppressHydrationWarning
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
