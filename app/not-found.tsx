import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f8fafc] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center font-mono text-base font-bold text-blue-400 mb-6">
        404
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
        Page Not Found
      </h1>
      <p className="text-slate-400 text-sm max-w-md mb-8">
        The link you requested does not exist or has been moved. Return to the main portfolio page.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md"
      >
        <Home className="w-4 h-4" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
}
