"use client";

import { useState } from "react";
import { Mail, Linkedin, FileText, Globe, ArrowUpRight, Copy, Check, Send } from "lucide-react";

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
    <section id="contact" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.1] text-center relative overflow-hidden shadow-2xl">
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-28 bg-blue-600/15 blur-[60px] rounded-full pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 uppercase tracking-wider mb-5">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Let&apos;s build something meaningful together.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
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
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
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
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] text-white text-xs sm:text-sm font-semibold transition-all active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Download PDF Resume</span>
            </a>

            {/* Copy LinkedIn Link Button */}
            <button
              type="button"
              onClick={handleCopyProfile}
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 text-xs sm:text-sm font-medium transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Profile URL Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
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
              className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-colors group"
            >
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Personal Domain</span>
                <Globe className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="text-xs font-mono text-white mt-1 group-hover:text-blue-400 transition-colors truncate">
                adityagangwani.me
              </div>
            </a>

            <a
              href="https://prodily.adityagangwani.me"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-colors group"
            >
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Prodily Academy</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="text-xs font-mono text-white mt-1 group-hover:text-blue-400 transition-colors truncate">
                prodily.adityagangwani.me
              </div>
            </a>

            <a
              href="https://operatex.dev/open-source"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-colors group"
            >
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Operate Open Source</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="text-xs font-mono text-white mt-1 group-hover:text-blue-400 transition-colors truncate">
                operatex.dev/open-source
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
