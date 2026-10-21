"use client";

import Link from "next/link";
import { ArrowDown, FileText, Mail, MapPin, Briefcase, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern bg-radial-fade opacity-70 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Status badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.08] border border-blue-500/20 text-blue-300 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            <span>Associate Product Manager at Better (btr.group)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 text-xs font-medium">
            <MapPin className="w-3 h-3 text-slate-400" />
            <span>Bengaluru, India · Open to Remote & Hybrid</span>
          </div>
        </div>

        {/* Identity & Main Headline */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-sm font-mono tracking-wider uppercase text-slate-400 font-medium">
            Aditya Gangwani · Product Manager & AI Product Builder
          </h2>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            Connecting engineering systems with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              user value.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-2">
            Associate Product Manager at <strong className="text-white font-medium">Better</strong> and 
            engineering student at <strong className="text-white font-medium">M.S. Ramaiah Institute of Technology</strong>. 
            I bridge the gap between technical feasibility, structured product discovery, and practical user needs—from 
            AI-driven tools and developer experiences to educational platforms.
          </p>
        </div>

        {/* 3 Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 pt-8">
          <Link
            href="#work"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
          >
            <span>View Case Studies</span>
            <ArrowDown className="w-4 h-4" />
          </Link>

          <a
            href="/aditya-gangwani-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] text-white text-sm font-medium transition-all hover:border-white/[0.2] active:scale-[0.98]"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Download Resume</span>
          </a>

          <Link
            href="#contact"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-transparent hover:bg-white/[0.04] text-slate-300 hover:text-white text-sm font-medium transition-all border border-transparent hover:border-white/[0.08]"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Get in Touch</span>
          </Link>
        </div>

        {/* Grounded Evidence Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-12 border-t border-white/[0.08] mt-12">
          <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <div className="font-mono text-lg font-bold text-white">4 Projects</div>
            <div className="text-xs text-slate-400 mt-0.5">Deep-dive case studies</div>
          </div>
          <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <div className="font-mono text-lg font-bold text-white">90 Lessons</div>
            <div className="text-xs text-slate-400 mt-0.5">Prodily PM Academy</div>
          </div>
          <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <div className="font-mono text-lg font-bold text-white">66 Passing Tests</div>
            <div className="text-xs text-slate-400 mt-0.5">Featuresmith Python Library</div>
          </div>
          <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <div className="font-mono text-lg font-bold text-white">50+ Events</div>
            <div className="text-xs text-slate-400 mt-0.5">IEEE RIT-B Leadership</div>
          </div>
        </div>
      </div>
    </section>
  );
}
