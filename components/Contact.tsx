"use client";

import { useState } from "react";
import { Mail, Linkedin, FileText, Globe, ArrowUpRight, Copy, Check } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyProfile = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("https://www.linkedin.com/in/aditya-gangwani/");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="hairline-divider mb-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950/80 border border-white/[0.1] text-center relative overflow-hidden shadow-2xl">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-300 uppercase tracking-wider mb-5">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>Direct Outreach</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-white mb-4">
            Let&apos;s build something meaningful together.
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            I am always interested in discussing full-time Product Manager / APM opportunities, 
            AI product collaborations, and technical advisory conversations.
          </p>

          {/* Action Hub */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            {/* LinkedIn Direct Connect */}
            <a
              href="https://www.linkedin.com/in/aditya-gangwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-tactile flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-lg"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Resume Download */}
            <a
              href="/aditya-gangwani-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-tactile flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-zinc-200 hover:text-white text-xs sm:text-sm font-semibold"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              <span>Download PDF Resume</span>
            </a>

            {/* Copy LinkedIn Link Button */}
            <button
              type="button"
              onClick={handleCopyProfile}
              className="btn-secondary-tactile flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs sm:text-sm font-medium"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Profile URL Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copy Profile Link</span>
                </>
              )}
            </button>
          </div>

          {/* Verified Directory Grid */}
          <div className="pt-8 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <a
              href="https://adityagangwani.me"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/[0.05] hover:border-white/[0.14] transition-colors group"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Personal Domain</span>
                <Globe className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div className="text-xs font-mono text-zinc-200 mt-1 group-hover:text-white transition-colors truncate">
                adityagangwani.me
              </div>
            </a>

            <a
              href="https://prodily.adityagangwani.me"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/[0.05] hover:border-white/[0.14] transition-colors group"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Prodily Academy</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div className="text-xs font-mono text-zinc-200 mt-1 group-hover:text-white transition-colors truncate">
                prodily.adityagangwani.me
              </div>
            </a>

            <a
              href="https://operatex.dev/open-source"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/[0.05] hover:border-white/[0.14] transition-colors group"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Operate Open Source</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div className="text-xs font-mono text-zinc-200 mt-1 group-hover:text-white transition-colors truncate">
                operatex.dev/open-source
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
