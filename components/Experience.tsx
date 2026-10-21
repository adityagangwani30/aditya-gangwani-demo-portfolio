"use client";

import { Briefcase, Calendar, MapPin, ShieldCheck } from "lucide-react";

interface RoleItem {
  company: string;
  role: string;
  type: "Full-Time / Contract" | "Internship" | "Project Engagement" | "Leadership";
  timeline: string;
  location?: string;
  summary: string;
  deliverables: string[];
  tags: string[];
}

const experiences: RoleItem[] = [
  {
    company: "Better (btr.group)",
    role: "Associate Product Manager",
    type: "Full-Time / Contract",
    timeline: "October 2026 – Present",
    location: "Remote · Bengaluru, India",
    summary:
      "Working as an Associate Product Manager within the product team during an initial six-month remote engagement, focusing on product discovery and feature execution.",
    deliverables: [
      "Conducting product discovery to identify user pain points and workflow bottlenecks.",
      "Collaborating with the product and engineering team to translate customer problems into structured feature inputs.",
      "Analyzing user workflows to refine product experiences and feature adoption.",
    ],
    tags: ["Product Discovery", "User Journey", "B2B Workflows", "Feature Execution"],
  },
  {
    company: "Computer Software Solutions (CSS)",
    role: "Product Management Intern",
    type: "Internship",
    timeline: "2026 – Present",
    location: "Bengaluru, India",
    summary:
      "Authoring product requirements and structured feature documentation for business software platforms, including Expert Business Accounting Software.",
    deliverables: [
      "Analyzing existing business accounting systems to map core functional requirements.",
      "Authoring comprehensive PRDs and specification sheets for development teams.",
      "Translating customer accounting requirements into prioritized backlog items.",
    ],
    tags: ["PRD Authoring", "Business Accounting Software", "Requirements Gathering"],
  },
  {
    company: "IntelAbroad",
    role: "Product Management Intern",
    type: "Internship",
    timeline: "July 2026 onward",
    summary:
      "Selected for an EdTech product management internship focused on CRM workflows and student lead management.",
    deliverables: [
      "Mapped the end-to-end student lead lifecycle across education-technology CRM touchpoints.",
      "Applied the RICE framework (Reach, Impact, Confidence, Effort) to prioritize candidate feature requests.",
      "Evaluated workflow trade-offs to streamline counselor-to-student lead transitions.",
    ],
    tags: ["RICE Prioritization", "CRM Lead Lifecycle", "EdTech Product"],
  },
  {
    company: "Samsung R&D Institute India",
    role: "Samsung PRISM Research Intern",
    type: "Internship",
    timeline: "2026",
    location: "Bengaluru, India",
    summary:
      "Researched and built computer vision and OCR pipelines for the Troubleshoot Helper project (Worklet ID: 25ST32MS).",
    deliverables: [
      "Developed image processing and screen recognition routines using OpenCV and Python.",
      "Evaluated text extraction techniques on appliance display panels using YOLO and EasyOCR.",
      "Synthesized technical findings into project milestone reviews and approved artifacts.",
    ],
    tags: ["Computer Vision", "OCR Pipeline", "Worklet 25ST32MS", "Python"],
  },
  {
    company: "SOYL AI / ARIP",
    role: "Product Management Project",
    type: "Project Engagement",
    timeline: "Project Milestone",
    summary:
      "Led foundational product documentation and positioning for the Autonomous Revenue Intelligence Platform (ARIP) designed for the hospitality sector.",
    deliverables: [
      "Authored the complete Product Requirements Document (PRD) and Product Bible.",
      "Conducted competitor benchmarking across revenue intelligence tools in hospitality.",
      "Drafted initial go-to-market (GTM) documentation and positioning guidelines.",
    ],
    tags: ["Product Bible", "GTM Documentation", "Competitor Benchmarking", "Hospitality AI"],
  },
  {
    company: "IEEE RIT-B Student Branch",
    role: "Vice Secretary & Leadership Roles",
    type: "Leadership",
    timeline: "College Tenure",
    location: "MSRIT Bengaluru",
    summary:
      "Managed operations and organizational execution across student-branch initiatives and large-scale technical symposia.",
    deliverables: [
      "Led organizational and logistical operations across 50+ institutional events.",
      "Directed STEM outreach initiatives directly engaging 100+ students.",
      "Managed logistics and outreach for 25+ events at RIT TechFest 2025, scaling participation to over 2,800 attendees.",
    ],
    tags: ["Operational Leadership", "Team Coordination", "TechFest 2025 (2,800+ attendees)"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="hairline-divider mb-20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-300 uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5 text-blue-400" />
              <span>Professional History</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-white">
              Work Experience & Roles
            </h2>
          </div>

          {/* Confidentiality Notice Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-950/80 border border-white/[0.08] text-zinc-400 text-xs shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Corporate metrics & roadmaps protected under NDAs</span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-zinc-800/80 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-[#090a0f] border-2 border-zinc-500 group-hover:scale-125 group-hover:border-blue-400 transition-all duration-200" />

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/60 border border-white/[0.07] group-hover:border-white/[0.14] group-hover:bg-zinc-900/40 transition-all duration-200 shadow-sm">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white group-hover:text-zinc-100 transition-colors">
                      {exp.role}
                    </span>
                    <span className="text-sm font-semibold text-zinc-400">@ {exp.company}</span>
                  </div>

                  {/* Type Badge */}
                  <span
                    className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                      exp.type === "Full-Time / Contract"
                        ? "bg-blue-500/10 border-blue-500/25 text-blue-300"
                        : exp.type === "Internship"
                        ? "bg-purple-500/10 border-purple-500/25 text-purple-300"
                        : exp.type === "Leadership"
                        ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-300"
                        : "bg-zinc-500/10 border-zinc-500/25 text-zinc-300"
                    }`}
                  >
                    {exp.type}
                  </span>
                </div>

                {/* Sub-meta: Timeline and Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-mono mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.timeline}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                {/* Role Summary */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">{exp.summary}</p>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-5">
                  {exp.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-normal">
                      <span className="text-zinc-500 font-bold shrink-0">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills/Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/[0.04]">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.025] text-zinc-400 border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
