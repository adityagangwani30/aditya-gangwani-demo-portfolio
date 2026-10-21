"use client";

import Link from "next/link";
import { ArrowDown, FileText, Mail, MapPin, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-42 md:pb-32 overflow-hidden">
      {/* Refined subtle ambient top glow (replacing harsh saturated blobs) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-gradient-to-b from-blue-600/10 via-indigo-900/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern bg-radial-fade opacity-60 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Status badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/[0.1] text-zinc-300 text-xs font-medium shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            <span>Associate Product Manager at Better (btr.group)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] text-zinc-400 text-xs font-medium">
            <MapPin className="w-3 h-3 text-zinc-400" />
            <span>Bengaluru, India · Open to Remote & Hybrid</span>
          </div>
        </div>

        {/* Identity & Main Headline */}
        <div className="space-y-4 max-w-4xl">
          <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 font-semibold">
            Aditya Gangwani · Product Manager & AI Product Builder
          </h2>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-white leading-[1.12]">
            Connecting engineering systems with{" "}
            <span className="text-gradient-metallic">
              user value.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-[1.65] font-normal pt-2 max-w-[62ch]">
            Associate Product Manager at <strong className="text-white font-medium">Better</strong> and 
            engineering student at <strong className="text-white font-medium">M.S. Ramaiah Institute of Technology</strong>. 
            I bridge the gap between technical feasibility, structured product discovery, and practical user needs—from 
            AI-driven tools and developer experiences to educational platforms.
          </p>
        </div>

        {/* 3 Primary Action Buttons with Reactbits tactile feel */}
        <div className="flex flex-wrap items-center gap-3.5 pt-8">
          <Link
            href="#work"
            className="btn-primary-tactile flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg"
          >
            <span>View Case Studies</span>
            <ArrowDown className="w-4 h-4" />
          </Link>

          <a
            href="/aditya-gangwani-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-tactile flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-zinc-200 hover:text-white text-sm font-medium"
          >
            <FileText className="w-4 h-4 text-zinc-400" />
            <span>Download Resume</span>
          </a>

          <Link
            href="#contact"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-white/[0.04] text-zinc-400 hover:text-white text-sm font-medium transition-all border border-transparent hover:border-white/[0.08]"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>Get in Touch</span>
          </Link>
        </div>

        {/* Grounded Evidence Stat Strip */}
        <div className="pt-12 mt-14 relative">
          <div className="hairline-divider mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-xl bg-zinc-950/40 border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">4 Projects</div>
              <div className="text-xs text-zinc-400 mt-1">Deep-dive case studies</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/40 border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">90 Lessons</div>
              <div className="text-xs text-zinc-400 mt-1">Prodily PM Academy</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/40 border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">66 Passing Tests</div>
              <div className="text-xs text-zinc-400 mt-1">Featuresmith Python Library</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/40 border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">50+ Events</div>
              <div className="text-xs text-zinc-400 mt-1">IEEE RIT-B Leadership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
