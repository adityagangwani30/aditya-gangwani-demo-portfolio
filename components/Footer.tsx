"use client";

import Link from "next/link";
import { ArrowUp, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 border-t border-white/[0.06] bg-[#07080a] text-xs text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/[0.1] flex items-center justify-center font-mono text-xs font-bold text-zinc-300 shadow-sm">
              AG
            </span>
            <div>
              <div className="font-semibold text-zinc-200">Aditya Gangwani</div>
              <div className="text-[11px] text-zinc-500">
                Product Manager & AI Product Builder · Bengaluru
              </div>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-400">
            <Link href="#work" className="hover:text-white transition-colors">
              Work
            </Link>
            <Link href="#experience" className="hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="#competencies" className="hover:text-white transition-colors">
              Competencies
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <a
              href="/aditya-gangwani-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Resume (PDF)
            </a>
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.linkedin.com/in/aditya-gangwani/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aditya Gangwani on LinkedIn"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors border border-white/[0.06]"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://adityagangwani.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aditya Gangwani Personal Website"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors border border-white/[0.06]"
            >
              <Globe className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-colors text-[11px] font-mono border border-white/[0.06]"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Aditya Gangwani. Built with Next.js & TypeScript.
          </div>
          <div className="text-zinc-500">
            Grounded in evidence · No simulated metrics or unverified claims.
          </div>
        </div>
      </div>
    </footer>
  );
}
