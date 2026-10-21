"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Competencies", href: "#competencies" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090a0f]/80 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/60"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Monogram */}
        <Link
          href="#"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white hover:text-zinc-200 transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-white/[0.12] flex items-center justify-center font-mono text-xs font-bold text-zinc-200 group-hover:border-white/[0.24] group-hover:bg-zinc-800 transition-all shadow-sm">
            AG
          </span>
          <span className="hidden sm:inline-block font-medium text-zinc-200 group-hover:text-white transition-colors">
            Aditya Gangwani
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-950/60 border border-white/[0.08] px-3 py-1.5 rounded-full text-xs font-medium text-zinc-300 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA: Resume */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/aditya-gangwani-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-tactile flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/[0.1] text-zinc-200 hover:text-white"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bg-[#090a0f]/95 backdrop-blur-2xl border-b border-white/[0.1] px-5 py-6 space-y-4 shadow-2xl animate-modal">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/[0.08]">
            <a
              href="/aditya-gangwani-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary-tactile flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
