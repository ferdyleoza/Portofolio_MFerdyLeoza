import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Sections Wrapper */}
        <div className="relative z-10">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
        </div>
      </main>
      <Footer />
    </>
  );
}
