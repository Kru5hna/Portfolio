"use client";

import TopNav from "@/components/top-nav";
import RainingStars from "@/components/raining-stars";
import BottomCapsule from "@/components/bottom-capsule";
import BlurredStagger from "@/components/blurred-stagger";
import { Download, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  const resumeUrl =
    "https://drive.google.com/file/d/1FK5eDxRuHI6VwU2WixXaUNDeLut7yD2b/view?usp=sharing";

  return (
    <>
      <RainingStars />
      <TopNav />

      <main className="content-area max-w-2xl mx-auto px-6 text-center">
        <section className="py-12">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-white">
            <FileText className="w-6 h-6" />
          </div>

          <h1 className="text-3xl font-serif text-white mb-3">
            <BlurredStagger text="curriculum vitae." delay={0.1} />
          </h1>
          <p className="text-xs text-zinc-400 max-w-md mx-auto mb-8 leading-relaxed">
            view or download Krushna Raut's complete software engineering resume, work history, and project highlights.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={resumeUrl}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition-all shadow-lg"
            >
              <span>Open Full Resume</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Quick Highlights Summary */}
        <div className="glass-card p-6 border border-white/10 text-left space-y-4 my-6">
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
            Summary Highlights
          </h2>
          <ul className="text-xs text-zinc-300 space-y-2 list-disc list-inside leading-relaxed">
            <li>Full Stack Developer with expertise in Next.js, React, Node.js, and Rust.</li>
            <li>Built 8+ production web apps, npm libraries (Rate-Shield), and AI computer vision systems (SecureGate).</li>
            <li>Hands-on experience with zero-knowledge AES-256-GCM encryption and Web Crypto API.</li>
            <li>Software Engineering Intern at Avijo working on web applications and frontend performance optimization.</li>
          </ul>
        </div>
      </main>

      <BottomCapsule />
    </>
  );
}
