"use client";

import TopNav from "@/components/top-nav";
import RainingStars from "@/components/raining-stars";
import BottomCapsule from "@/components/bottom-capsule";
import BlurredStagger from "@/components/blurred-stagger";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Java",
        "Rust",
        "Lua",
        "SQL",
        "HTML5 / CSS3",
      ],
    },
    {
      title: "Cloud, DevOps & Infra",
      skills: [
        "AWS (S3, Cloud Practitioner)",
        "Docker",
        "Git & GitHub",
        "Postman",
        "Vercel",
        "Clerk Auth",
        "Inngest Cron Jobs",
        "Arcjet",
      ],
    },
    {
      title: "Frameworks & Backend",
      skills: [
        "Next.js 15",
        "React",
        "Node.js",
        "Express",
        "FastAPI",
        "Axum (Rust)",
        "Socket.io",
        "REST APIs",
        "JWT Auth",
        "Tailwind CSS",
        "Shadcn UI",
        "Recharts",
      ],
    },
    {
      title: "Databases & Storage",
      skills: [
        "PostgreSQL (Supabase)",
        "MongoDB (Aggregation Pipelines)",
        "Redis",
        "Prisma ORM",
        "Firebase Firestore",
        "SQLite",
      ],
    },
    {
      title: "AI & Computer Vision",
      skills: [
        "YOLOv8",
        "EasyOCR",
        "Tesseract OCR",
        "Gemini Vision API",
        "OpenCV",
        "Flask",
        "HuggingFace Spaces",
      ],
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      year: "2025",
      issuer: "Amazon Web Services",
    },
    {
      title: "Web3 Development Cohort",
      year: "2025",
      issuer: "100xDevs",
    },
  ];

  return (
    <>
      <RainingStars />
      <TopNav />
      <main className="content-area max-w-4xl mx-auto px-6 pb-24">
        {/* Header */}
        <section className="py-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif text-white mb-2">
            <BlurredStagger text="technical skills & stack." delay={0.1} />
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mb-8 leading-relaxed">
            Languages, cloud infrastructure, backend engines, databases, security protocols, and AI vision tools I use to build scalable software.
          </p>
        </section>

        {/* Certifications Banner */}
        <div className="mb-10 bg-gradient-to-r from-blue-950/40 via-zinc-900/60 to-purple-950/40 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-semibold">
              Certifications & Achievements
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-black/40 border border-white/5 p-4 rounded-xl flex items-center justify-between"
              >
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-zinc-400">{cert.issuer}</p>
                </div>
                <span className="text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="glass-card p-6 border border-white/10 rounded-2xl hover:border-white/20 transition-all"
            >
              <h2 className="text-xs font-mono font-semibold text-blue-400 mb-4 uppercase tracking-wider flex items-center justify-between">
                <span>{cat.title}</span>
                <span className="text-zinc-600 text-[10px]">
                  {cat.skills.length} tools
                </span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-200 hover:border-white/25 hover:text-white transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <BottomCapsule activeTab="skills" />
    </>
  );
}
