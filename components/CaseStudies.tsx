"use client";

import { useState, useEffect, useRef, MouseEvent } from "react";
import Image from "next/image";
import {
  ExternalLink,
  X,
  CheckCircle2,
  Layers,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  logoUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  statusBadge: string;
  tags: string[];
  problem: string;
  role: string;
  process: string;
  decisions: string[];
  deliverables: string[];
  evidence: {
    label: string;
    value: string;
    detail?: string;
  }[];
  learnings: string;
  confidentialityNote?: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "prodily",
    title: "Prodily",
    subtitle: "Product Management Academy",
    category: "Educational Product / Web Application",
    tagline:
      "A structured, 90-lesson product management learning platform built from problem discovery to code.",
    logoUrl: "/prodily-logo.svg",
    liveUrl: "https://prodily.adityagangwani.me/",
    statusBadge: "Live Platform · 90 Lessons",
    tags: ["Next.js", "TypeScript", "Curriculum Architecture", "Product Design"],
    problem:
      "Product management knowledge across the web is fragmented into scattered medium articles, YouTube tutorials, and unstructured reading lists. Aspiring PMs waste hours assembling their own curriculum without a cohesive, progressive framework for learning problem discovery, prioritization, and execution.",
    role: "Solo Creator & Product Builder. Owned end-to-end product strategy, information architecture, curriculum progression, and frontend implementation using Next.js and TypeScript.",
    process:
      "Analyzed core product competencies across leading PM frameworks, organized 90 lessons into self-contained progressive modules, established static content schemas for predictable quality, and designed an intuitive learner dashboard with progress persistence.",
    decisions: [
      "Static Structured Lessons vs. Generative AI: Deliberately chose curated, static lesson content over generative AI to ensure reliable pedagogy, accurate terminology, and verifiable content quality.",
      "Information Architecture: Designed self-contained modules with clear progress visibility rather than open-ended feeds to reduce cognitive overload for early-career learners.",
      "Predictable State: Maintained lessons in structured files to guarantee high performance and fast client navigation without complex backend dependencies.",
    ],
    deliverables: [
      "Live educational web application at prodily.adityagangwani.me",
      "90 curated lessons organized across structured core PM modules",
      "Interactive curriculum dashboard with lesson navigation and progress tracking",
    ],
    evidence: [
      { label: "Lessons Shipped", value: "90 Lessons", detail: "Curated curriculum" },
      { label: "Frontend Stack", value: "Next.js + TypeScript", detail: "App Router" },
      { label: "Availability", value: "Public Web App", detail: "Live production" },
    ],
    learnings:
      "A learning product succeeds on curriculum structure, information hierarchy, and progress visibility. Content alone is insufficient without a reliable, predictable delivery system.",
  },
  {
    id: "featuresmith",
    title: "Featuresmith",
    subtitle: "Open-Source Python Library",
    category: "Developer Tooling / ML Infrastructure",
    tagline:
      "Dataset review, ML readiness scoring, leakage detection, and dataset comparison with CLI & SDK parity.",
    logoUrl: "/featuresmith-logo.svg",
    statusBadge: "Open-Source Tool · 66 Passing Tests",
    tags: ["Python", "CLI & SDK Parity", "Data Leakage", "ML Readiness"],
    problem:
      "Data scientists and ML engineers spend extensive time performing repetitive manual checks on raw datasets. Silent issues such as train-test leakage, target contamination, or subtle schema drifts between dataset versions frequently go unnoticed until post-training failure.",
    role: "Independent Creator & Product Builder. Led feature roadmapping, Python API design, terminal CLI implementation, test suite authoring, and documentation.",
    process:
      "Identified repetitive data validation workflows, designed a modular engine architecture (Review, ML Readiness, Leakage Detection, and Dataset Diff), and engineered full functional parity between the programmatic Python SDK and terminal CLI.",
    decisions: [
      "Strict CLI/SDK Parity: Decided every programmatic Python function must have a direct CLI counterpart so engineers can run ad-hoc terminal audits or integrate automated checks into CI/CD pipelines.",
      "Modular Engine Architecture: Separated concerns into distinct engines (Review Engine, Readiness Scorer, Leakage Detector, Diff Engine) so users can import only what their pipeline requires.",
      "Terminal Actionability: Formatted CLI outputs as concise, human-readable terminal summaries rather than raw data dumps.",
    ],
    deliverables: [
      "Open-source Python package with versioned releases",
      "Automated unit test suite verifying dataset review, scoring, and diff capabilities",
      "Comprehensive developer documentation covering both CLI and Python API usage",
    ],
    evidence: [
      { label: "Automated Tests", value: "66 Passing", detail: "1 warning (local run)" },
      { label: "Core Engines", value: "4 Sub-Engines", detail: "Review, Leakage, Diff, Score" },
      { label: "Workflows", value: "CLI & SDK Parity", detail: "Terminal & Python" },
    ],
    learnings:
      "Developer tools are judged on interface predictability, actionable terminal output, clear error messaging, and rigorous test coverage—not just raw algorithmic functionality.",
  },
  {
    id: "operate",
    title: "Operate",
    subtitle: "Open-Source Product Experience",
    category: "Developer Tools / Applied AI Exploration",
    tagline:
      "An interactive experience demonstrating how AI assists engineers in investigating software issues.",
    liveUrl: "https://operatex.dev/open-source",
    statusBadge: "Interactive Demo · Open Source",
    tags: ["Developer Experience", "AI Issue Investigation", "Code Navigation"],
    problem:
      "Understanding bugs in unfamiliar or complex codebases requires tedious manual navigation across nested dependencies, documentation, and error traces. Developers need faster ways to identify the exact files and logic relevant to an issue.",
    role: "Product Experience, Presentation & Visual Direction. Focused on user interaction flow, onboarding, visual design, and communicating the value of AI-assisted investigation.",
    process:
      "Mapped user workflows for investigating software issues, structured the interactive demo interface to highlight issue selection and codebase exploration, and established visual guidelines that emphasize technical credibility.",
    decisions: [
      "Honest Concept Framing: Made a deliberate product decision to frame the open-source experience as an illustrative concept demonstration rather than claiming full parity with a verified production diagnostic system.",
      "Time-to-Value in Demo: Optimized the onboarding so visitors can immediately select a sample issue and trace potential codebase hotspots without configuring credentials or repositories.",
      "Clear Visual Hierarchy: Designed an interface where findings, trace lines, and context are immediately scannable.",
    ],
    deliverables: [
      "Live interactive demonstration at operatex.dev/open-source",
      "Product presentation and user-facing exploration interface",
      "Product positioning and visual design assets",
    ],
    evidence: [
      { label: "Live Deployment", value: "operatex.dev", detail: "Public interactive demo" },
      { label: "Focus", value: "Issue Exploration", detail: "AI codebase assistance" },
      { label: "Framing", value: "Concept Demo", detail: "Transparent expectation setting" },
    ],
    learnings:
      "In developer tools, establishing trust early through honest expectation-setting, clear onboarding, and predictable outputs is vital to user adoption.",
  },
  {
    id: "samsung-prism",
    title: "Samsung PRISM",
    subtitle: "Troubleshoot Helper (Appliance Error OCR)",
    category: "Applied AI / Research Prototype",
    tagline:
      "Computer vision and OCR pipeline for extracting and interpreting appliance error codes from visual inputs.",
    statusBadge: "Research Prototype · Worklet 25ST32MS",
    tags: ["Computer Vision", "OpenCV", "EasyOCR", "YOLO", "Python"],
    problem:
      "When domestic appliances malfunction, error codes displayed on small alphanumeric panels leave users confused. Users struggle to match codes to physical manuals or find accurate troubleshooting steps.",
    role: "Research Intern at Samsung R&D Institute India (Worklet ID: 25ST32MS). Worked on the computer vision and optical character recognition (OCR) technical pipeline.",
    process:
      "Explored visual pre-processing pipelines, integrated object detection models to locate appliance screens, and evaluated text extraction approaches for low-resolution digital displays.",
    decisions: [
      "Multi-stage Detection Pipeline: Combined YOLO object detection to isolate appliance panels before passing cropped screen regions to EasyOCR, reducing false text detections from appliance branding.",
      "Image Pre-processing: Applied adaptive thresholding and contrast normalization in OpenCV to improve OCR accuracy on reflective LED/LCD screens.",
      "Confidentiality Discipline: Strictly excluded all proprietary training datasets, internal benchmarking metrics, and confidential Samsung assets from public presentation.",
    ],
    deliverables: [
      "Troubleshoot Helper research project deliverables under Worklet ID: 25ST32MS",
      "Computer vision and OCR pipeline combining OpenCV, EasyOCR, YOLO, and Python",
      "Project presentation and approved technical artifacts",
    ],
    evidence: [
      { label: "Worklet ID", value: "25ST32MS", detail: "Samsung PRISM Project" },
      { label: "Technologies", value: "OpenCV · YOLO · EasyOCR", detail: "Python Pipeline" },
      { label: "Institution", value: "Samsung R&D Institute", detail: "India Research Intern" },
    ],
    confidentialityNote:
      "All proprietary datasets, internal model benchmarks, and confidential enterprise details are strictly protected under Samsung R&D non-disclosure agreements.",
    learnings:
      "Applied AI projects must be evaluated against the complete user workflow, not just raw model accuracy. Extracting text accurately is only meaningful if it reliably connects the user to actionable resolution steps.",
  },
];

// Spotlight card sub-component tracking cursor position
function SpotlightCard({
  project,
  onOpenModal,
}: {
  project: CaseStudy;
  onOpenModal: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="spotlight-card group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-zinc-950/60 border border-white/[0.08] overflow-hidden"
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(420px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.06), transparent 60%)`
            : "none",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Card Top: Badges & Links */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-zinc-900 border border-white/[0.1] text-zinc-300 font-medium">
            {project.statusBadge}
          </span>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                aria-label={`Open ${project.title} live link`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="flex items-start gap-3.5 mb-3">
          {project.logoUrl && (
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/[0.1] p-1.5 flex items-center justify-center shrink-0 shadow-sm">
              <Image
                src={project.logoUrl}
                alt={`${project.title} logo`}
                width={28}
                height={28}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-zinc-100 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-400 font-medium mt-0.5">{project.subtitle}</p>
          </div>
        </div>

        <p className="text-sm text-zinc-300 leading-relaxed mt-2.5">
          {project.tagline}
        </p>

        {/* Evidence snippet */}
        <div className="grid grid-cols-3 gap-2 my-5 p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
          {project.evidence.map((item, idx) => (
            <div key={idx} className="text-left">
              <div className="text-[11px] text-zinc-400 font-mono">{item.label}</div>
              <div className="text-xs font-semibold text-zinc-200 mt-0.5 truncate">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.03] text-zinc-300 border border-white/[0.07]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <button
          type="button"
          onClick={onOpenModal}
          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200 hover:text-white transition-colors group/btn"
        >
          <span>Read Full Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Visit Live</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  // Close modal on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (activeModalId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModalId]);

  const activeStudy = caseStudiesData.find((study) => study.id === activeModalId);

  return (
    <section id="work" className="py-24 relative">
      <div className="hairline-divider mb-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-300 uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-white">
            Products built with intent, evidence, and clear trade-offs.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            Deep-dive explorations across educational platforms, developer infrastructure, and applied AI systems.
          </p>
        </div>

        {/* 4 Spotlight Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudiesData.map((project) => (
            <SpotlightCard
              key={project.id}
              project={project}
              onOpenModal={() => setActiveModalId(project.id)}
            />
          ))}
        </div>
      </div>

      {/* Accessible Slide-over / Modal for Deep Dive with Smooth Reactbits Animation */}
      {activeStudy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          {/* Modal Backdrop click listener */}
          <div
            className="fixed inset-0"
            onClick={() => setActiveModalId(null)}
            aria-hidden="true"
          />

          {/* Modal Content Box with smooth entrance */}
          <div className="animate-modal relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0c0d12] border border-white/[0.14] shadow-2xl overflow-hidden z-10">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4.5 border-b border-white/[0.08] bg-[#0c0d12]/95 backdrop-blur-xl sticky top-0 z-20">
              <div className="flex items-center gap-3">
                {activeStudy.logoUrl && (
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 p-1 border border-white/[0.1] flex items-center justify-center">
                    <Image
                      src={activeStudy.logoUrl}
                      alt={`${activeStudy.title} logo`}
                      width={22}
                      height={22}
                      className="object-contain"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                )}
                <div>
                  <h3 id="modal-title" className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {activeStudy.title} — {activeStudy.subtitle}
                  </h3>
                  <div className="text-xs text-zinc-400 font-mono mt-0.5">{activeStudy.category}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {activeStudy.liveUrl && (
                  <a
                    href={activeStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-tactile hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white"
                  >
                    <span>Open Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setActiveModalId(null)}
                  aria-label="Close case study modal"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-6 space-y-7 overflow-y-auto">
              {/* Confidentiality Warning if present */}
              {activeStudy.confidentialityNote && (
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-500/[0.08] border border-amber-500/20 text-xs text-amber-200">
                  <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                  <div>
                    <span className="font-semibold text-amber-300">Confidentiality Safeguard: </span>
                    {activeStudy.confidentialityNote}
                  </div>
                </div>
              )}

              {/* 1. Context & Problem */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-medium">
                  01. The Problem & Context
                </h4>
                <p className="text-sm sm:text-base text-zinc-200 leading-[1.65]">
                  {activeStudy.problem}
                </p>
              </div>

              {/* 2. Role & Ownership */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-medium">
                  02. My Role & Scope
                </h4>
                <p className="text-sm sm:text-base text-zinc-200 leading-[1.65]">
                  {activeStudy.role}
                </p>
              </div>

              {/* 3. Approach & Decisions */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-medium">
                  03. Product Decisions & Trade-Offs
                </h4>
                <div className="space-y-2.5">
                  {activeStudy.decisions.map((decision, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-zinc-300 bg-zinc-950/60 p-3.5 rounded-xl border border-white/[0.05]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{decision}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Deliverables & Evidence */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-medium">
                  04. Deliverables & Verifiable Evidence
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-sm text-zinc-300">
                  {activeStudy.deliverables.map((deliv, i) => (
                    <li key={i}>{deliv}</li>
                  ))}
                </ul>

                {/* Metric Summary Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                  {activeStudy.evidence.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-950/60 border border-white/[0.06]"
                    >
                      <div className="text-xs text-zinc-400 font-mono">{item.label}</div>
                      <div className="text-base font-bold text-white mt-0.5">{item.value}</div>
                      {item.detail && (
                        <div className="text-[11px] text-zinc-400 mt-0.5">{item.detail}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Key Learning */}
              <div className="p-4.5 rounded-xl bg-blue-950/20 border border-blue-500/20">
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-1.5 font-semibold">
                  Key Product Management Takeaway
                </h4>
                <p className="text-sm text-zinc-200 leading-relaxed font-medium">
                  &ldquo;{activeStudy.learnings}&rdquo;
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/[0.08] bg-[#0c0d12] flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono">
                Verified portfolio case study
              </span>
              <button
                type="button"
                onClick={() => setActiveModalId(null)}
                className="btn-secondary-tactile px-4 py-2 rounded-lg bg-white/[0.06] text-xs font-semibold text-white"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
