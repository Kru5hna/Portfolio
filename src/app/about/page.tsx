"use client";

import TopNav from "@/components/top-nav";
import RainingStars from "@/components/raining-stars";
import BottomCapsule from "@/components/bottom-capsule";
import BlurredStagger from "@/components/blurred-stagger";
import { Briefcase, GraduationCap, Code2, Cpu } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <RainingStars />
      <TopNav />

      <main className="content-area max-w-3xl mx-auto px-6">
        <section className="py-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif text-white mb-3">
            <BlurredStagger text="about me." delay={0.1} />
          </h1>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto leading-relaxed">
            full stack software engineer, product thinker, and computer science student passionate about building high-performance systems and intuitive user interfaces.
          </p>
        </section>

        {/* Experience & Education Grid */}
        <div className="space-y-8 my-8">
          {/* Work Experience Card */}
          <div className="glass-card p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-white">Work Experience</h2>
                <p className="text-xs text-zinc-400">Software Engineering Intern</p>
              </div>
            </div>
            <div className="border-l-2 border-white/10 pl-4 ml-2 space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span className="font-medium text-white">Avijo</span>
                  <span className="font-mono text-[11px]">2024 - Present</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Developed responsive web apps, integrated backend APIs, optimized frontend bundle sizes, and collaborated on cross-functional product features.
                </p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="glass-card p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-white">Education</h2>
                <p className="text-xs text-zinc-400">Bachelor of Technology (B.Tech) in CS</p>
              </div>
            </div>
            <div className="border-l-2 border-white/10 pl-4 ml-2 space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span className="font-medium text-white">Computer Science & Engineering</span>
                  <span className="font-mono text-[11px]">2022 - 2026</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Coursework in Data Structures & Algorithms, Distributed Systems, Database Management Systems, Machine Learning, and Computer Networks.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="glass-card p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-white">Technical Arsenal</h2>
                <p className="text-xs text-zinc-400">Languages, Frameworks & Infrastructure</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {[
                "TypeScript / JS",
                "React / Next.js",
                "Rust (Axum)",
                "Node.js / Express",
                "Python / YOLOv8",
                "PostgreSQL / Redis",
                "TailwindCSS / HTML",
                "Socket.io / Web Crypto",
                "Git / Docker / Linux",
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-zinc-300 font-mono text-[11px]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <BottomCapsule />
    </>
  );
}
