"use client";

import { CheckCircle, Terminal, Cpu, Wrench, Shield } from "lucide-react";

export default function Competencies() {
  const pmSkills = [
    {
      title: "Product Discovery & Problem Framing",
      desc: "Translating customer interviews, support logs, and pain points into validated product problem statements.",
    },
    {
      title: "PRDs & Technical Specifications",
      desc: "Authoring unambiguous product requirements, user stories, edge-case criteria, and architecture handoffs.",
    },
    {
      title: "RICE Prioritization & Trade-offs",
      desc: "Evaluating feature candidate backlogs against Reach, Impact, Confidence, and Effort to balance value vs. complexity.",
    },
    {
      title: "Competitor & Market Benchmarking",
      desc: "Deconstructing competitor feature sets, pricing vectors, and identifying defensible product differentiation.",
    },
    {
      title: "Go-to-Market (GTM) Strategy",
      desc: "Coordinating product launches, positioning guidelines, user onboarding journeys, and messaging collateral.",
    },
    {
      title: "Cross-Functional Execution",
      desc: "Working across engineering, design, and operations with disciplined ownership and sprint accountability.",
    },
  ];

  const technicalSkills = [
    {
      category: "Programming",
      items: ["Python", "C++", "C", "TypeScript", "JavaScript"],
    },
    {
      category: "Applied AI & Computer Vision",
      items: ["OpenCV", "EasyOCR", "YOLO", "Reinforcement Learning", "Google Gemini API"],
    },
    {
      category: "Web & Backend Architecture",
      items: ["Next.js (App Router)", "React 19", "FastAPI", "Tailwind CSS"],
    },
    {
      category: "Data & Analysis",
      items: ["NumPy", "Pandas", "Matplotlib", "SQLite", "Data Leakage Auditing"],
    },
  ];

  const verifiedTools = [
    { name: "VS Code", type: "Development IDE" },
    { name: "Git & GitHub", type: "Version Control & CI" },
    { name: "Next.js", type: "Frontend Framework" },
    { name: "Vercel", type: "Edge Deployment" },
    { name: "Supabase", type: "Backend & Auth" },
    { name: "Google Gemini", type: "LLM / API Tooling" },
    { name: "OpenCV", type: "Vision Processing" },
    { name: "FastAPI", type: "Python REST APIs" },
    { name: "Name.com", type: "Domain Infrastructure" },
  ];

  return (
    <section id="competencies" className="py-24 relative">
      <div className="hairline-divider mb-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-300 uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>Skills & Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-white">
            Where product thinking meets technical execution.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            No subjective percentages or animated progress bars. Grounded competencies derived from 
            hands-on software development and verified product management projects.
          </p>
        </div>

        {/* 2-Column Core Competencies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-12">
          {/* Column 1: Product Management */}
          <div className="p-7 rounded-2xl bg-zinc-950/60 border border-white/[0.08] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/[0.1] flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white">Product Management</h3>
                <p className="text-xs text-zinc-400">Discovery, prioritization, and strategy</p>
              </div>
            </div>

            <div className="space-y-3.5">
              {pmSkills.map((skill, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.04] hover:border-white/[0.08] transition-colors">
                  <div className="text-sm font-semibold text-white mb-1">{skill.title}</div>
                  <div className="text-xs text-zinc-300 leading-relaxed">{skill.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Technical & AI Capabilities */}
          <div className="p-7 rounded-2xl bg-zinc-950/60 border border-white/[0.08] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/[0.1] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white">Technical & AI Engineering</h3>
                <p className="text-xs text-zinc-400">Languages, frameworks, and applied ML</p>
              </div>
            </div>

            <div className="space-y-3.5">
              {technicalSkills.map((group, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.04] hover:border-white/[0.08] transition-colors">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5 font-medium">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-200 border border-white/[0.06]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verified Toolstack Card */}
        <div className="p-7 rounded-2xl bg-zinc-950/60 border border-white/[0.08] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.1] flex items-center justify-center">
                <Wrench className="w-4 h-4 text-zinc-300" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">Verified Day-to-Day Toolstack</h3>
                <p className="text-xs text-zinc-400">Tools with documented, hands-on production usage</p>
              </div>
            </div>

            {/* Authenticity notice */}
            <div className="inline-flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>Strictly omitting unverified enterprise tool names</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {verifiedTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/[0.04] text-left hover:border-white/[0.1] transition-colors"
              >
                <div className="text-xs font-semibold text-white">{tool.name}</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">{tool.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
