"use client";

import Image from "next/image";
import { GraduationCap, Award, Compass, CheckCircle2 } from "lucide-react";

export default function About() {
  const certifications = [
    {
      title: "Google Project Management Certificate",
      issuer: "Google / Coursera",
      focus: "Scrum, agile workflows, risk management, and project execution",
    },
    {
      title: "IBM SkillsBuild Product Management Fundamentals",
      issuer: "IBM SkillsBuild",
      focus: "Product lifecycle, problem framing, and design thinking fundamentals",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="hairline-divider mb-20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-300 uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>Background & Story</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-white">
            From circuits and code to product ownership.
          </h2>
        </div>

        {/* 2-Column Split: Photo & Story */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left Column: Photo & Education Card */}
          <div className="md:col-span-5 space-y-6">
            {/* Photo Card with Reactbits-style halo */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-zinc-950/80 p-2.5 shadow-2xl group">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-900">
                <Image
                  src="/aditya-gangwani-photo-square.jpg"
                  alt="Aditya Gangwani — Product Manager & AI Product Builder"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>

              <div className="p-4">
                <div className="text-base font-bold text-white tracking-tight">Aditya Gangwani</div>
                <div className="text-xs text-zinc-400 font-mono mt-0.5">
                  Associate Product Manager · Bengaluru
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-white/[0.08] shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/[0.1] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider font-medium">Formal Education</div>
                  <div className="text-sm font-bold text-white mt-1">
                    B.E. in Electronics & Communication Engineering
                  </div>
                  <div className="text-xs text-zinc-300 mt-0.5">
                    M.S. Ramaiah Institute of Technology (MSRIT), Bengaluru
                  </div>
                  <div className="text-[11px] font-mono text-zinc-300 mt-2.5 inline-block px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                    Expected Graduation: June 2027
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Certifications & Philosophy */}
          <div className="md:col-span-7 space-y-8">
            {/* The Transition Story */}
            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-[1.7]">
              <h3 className="text-lg font-bold text-white tracking-tight">Why Product Management?</h3>
              <p>
                My transition into Product Management grew from a simple realization: while I loved 
                building technical systems through my Electronics and Communication Engineering background 
                and independent AI/ML projects, I was most energized by the decisions behind 
                <strong className="text-white font-medium"> what gets built and why</strong>.
              </p>
              <p>
                Writing code taught me implementation constraints, API contracts, and engineering trade-offs. 
                Leading organizational initiatives in IEEE gave me experience aligning diverse people, 
                managing logistics, and executing 50+ events. Product Management is where these two worlds meet: 
                translating technical capabilities into structured roadmaps, clear PRDs, and products that users love.
              </p>
              <p>
                My engineering background allows me to communicate effortlessly with technical architects 
                and developers without losing sight of customer pain points, feature prioritization, 
                and business viability.
              </p>
            </div>

            {/* Professional Certifications */}
            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Professional Certifications</span>
              </h3>

              <div className="grid grid-cols-1 gap-2.5">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-950/60 border border-white/[0.06] flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white">{cert.title}</div>
                      <div className="text-xs text-zinc-400 font-mono mt-0.5">{cert.issuer}</div>
                      <div className="text-xs text-zinc-400 mt-1">{cert.focus}</div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Philosophy Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/[0.1] shadow-md relative overflow-hidden">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                Core Product Philosophy
              </div>
              <blockquote className="text-base text-zinc-100 font-medium italic leading-relaxed">
                &ldquo;Define the problem with precision. Build the system with engineering discipline. 
                Use AI where it truly earns its place.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
