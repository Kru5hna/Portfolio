"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import { projectFilters, projects } from "@/lib/projects";

// Mock Terminal Logs for each project to type on hover
const terminalLogs: Record<string, string[]> = {
  "Privault": [
    "$ git clone git@github.com:Kru5hna/Privault.git",
    "Cloning into 'Privault'...",
    "$ cargo run --release",
    "   Compiling crypt-engine v0.1.0...",
    "   Running axum-server on localhost:8080",
    "[crypt] AES-256-GCM Handshake: ACTIVE",
    "[vault] Database connection: OK",
    "[info] Zero-knowledge handshake secure."
  ],
  "Rate-Shield": [
    "$ npm i rate-shield",
    "added 1 package in 0.41s",
    "$ node index.js",
    "[shield] Loading TypeScript build...",
    "[shield] Redis Client connection: ESTABLISHED",
    "[shield] Sliding Window limit: 100req/sec",
    "[info] Circuit-breaker fallback: ACTIVE"
  ],
  "SecureGate": [
    "$ python gate.py --detect",
    "[yolo] Loading weights yolov8n.pt...",
    "[yolo] CUDA context initialized.",
    "[vision] Camera stream active.",
    "[vision] Match: MH-12-AB-1234 (Verified)",
    "[status] Gate action: OPEN"
  ],
  "Welth": [
    "$ npm run dev",
    "[next] Next.js 15 starting...",
    "[api] Gemini API client initialized.",
    "[vision] Reading receipt invoice.png...",
    "[ocr] Found: $45.22 at Grocery Store",
    "[db] Firestore sync: SUCCESS"
  ],
  "ChatHub": [
    "$ node server.js",
    "[db] Connected to MongoDB Atlas",
    "[io] Socket.io server listening on port 5000",
    "[room] Joined Room 'lobby_dev'",
    "[msg] Decrypted JWT for user: Krushna",
    "[status] Real-time socket: READY"
  ],
  "NotesBud": [
    "$ npm run build && npm start",
    "compiled successfully in 1.4s",
    "[notes] Firebase Client connected.",
    "[notes] Firestore listener binding: OK",
    "[notes] Synced 14 notes locally",
    "[sync] Offline state observer: ACTIVE"
  ],
  "Pokedex": [
    "$ npm run start",
    "[react] Rendering index.js...",
    "[poke] Fetching first 151 items...",
    "[poke] API Status: 200 OK",
    "[search] Filter active: 'Fire'",
    "[info] Rendered Charizard card."
  ],
  "DailyBrew": [
    "$ node app.js",
    "[brew] Initializing news feed API...",
    "[brew] Caffeine log: 250mg input",
    "[news] Fetching latest headline logs...",
    "[status] Balanced intake index: 8.5/10"
  ],
  "Solana Wallet Adapter": [
    "$ solana transaction send",
    "[web3] Requesting signature authorization...",
    "[web3] Solana Devnet Adapter connected",
    "[web3] Gas estimate: 0.000005 SOL",
    "[status] Sign: 2A1c...d8F2 (Confirmed)"
  ]
};

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const logs = terminalLogs[project.title] || ["$ cat README.md", project.description];

  useEffect(() => {
    if (!isHovered) {
      setTypedLines([]);
      return;
    }

    let currentLineIdx = 0;
    let currentText = "";
    let charIdx = 0;
    
    setTypedLines([""]);

    const lineTimer = setInterval(() => {
      if (currentLineIdx >= logs.length) {
        clearInterval(lineTimer);
        return;
      }

      const fullLineText = logs[currentLineIdx];
      const isCommand = fullLineText.startsWith("$");
      const speed = isCommand ? 2 : 1;

      if (charIdx < fullLineText.length) {
        currentText += fullLineText.substring(charIdx, charIdx + speed);
        charIdx += speed;
        setTypedLines((prev) => {
          const next = [...prev];
          next[currentLineIdx] = currentText;
          return next;
        });
      } else {
        currentLineIdx++;
        currentText = "";
        charIdx = 0;
        if (currentLineIdx < logs.length) {
          setTypedLines((prev) => [...prev, ""]);
        }
      }
    }, 40);

    return () => clearInterval(lineTimer);
  }, [isHovered, logs]);

  return (
    <article
      className="editorial-grid-item flex flex-col justify-between p-6 bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card-image-box aspect-[4/3] w-full rounded-md border border-white/5 relative group mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="terminal-overlay">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 text-[0.55rem] text-white/40 uppercase tracking-widest font-mono">
            <span>Terminal: {project.title}</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
          </div>

          <div className="flex-1 font-mono text-[0.65rem] text-[#c5a880] leading-relaxed overflow-hidden">
            {typedLines.map((line, i) => (
              <div
                key={i}
                className={
                  line.startsWith("$")
                    ? "text-white/80 font-bold"
                    : line.startsWith("[status]") || line.startsWith("[crypt]") || line.startsWith("[shield]")
                    ? "text-green-400 font-semibold"
                    : "text-white/40"
                }
              >
                {line}
                {i === typedLines.length - 1 && isHovered && (
                  <span className="inline-block w-1.5 h-3.5 ml-1 bg-white animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-3 right-3 z-30 flex items-center gap-2">
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              title="View Repository"
              className="p-2 rounded-full bg-black/80 text-white/70 hover:text-white border border-white/10 hover:border-white/30 backdrop-blur-md transition-all"
            >
              <Github className="w-3.5 h-3.5" />
            </Link>
          )}
          {project.links.demo && (
            <Link
              href={project.links.demo}
              target="_blank"
              title="Live Application"
              className="p-2 rounded-full bg-[#c5a880] text-black hover:bg-white border border-[#c5a880] backdrop-blur-md transition-all"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
          {project.links.package && (
            <Link
              href={project.links.package}
              target="_blank"
              title="NPM Package"
              className="px-2.5 py-1 text-[0.55rem] font-bold rounded-md bg-[#cb3837] text-white hover:bg-white hover:text-[#cb3837] transition-all font-mono"
            >
              NPM
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="font-serif-editorial text-[0.625rem] tracking-[0.2em] text-white/40 uppercase">
              {project.category.join(" / ")}
            </span>
            <h3 className="font-serif-editorial text-lg text-white font-bold tracking-wide mt-1">
              {project.title}
            </h3>
          </div>

          <div className="font-serif-editorial text-xs font-semibold tracking-wider text-[#c5a880] border border-[#c5a880]/30 rounded px-2.5 py-1 uppercase bg-[#c5a880]/5">
            {project.status || "COMPLETED"}
          </div>
        </div>

        <p className="text-white/50 text-[0.75rem] font-light leading-relaxed mt-2 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[0.6rem] font-mono font-medium bg-white/5 text-white/50 px-2 py-0.5 rounded border border-white/[0.03]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.category.includes(activeFilter)
  );

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <main className="relative z-10 flex-1 pt-12 pb-20">
        <div className="w-[90%] max-w-[1700px] mx-auto px-4">
          
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/40 hover:text-[#c5a880] transition-colors text-xs font-bold uppercase tracking-widest font-mono"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </motion.div>

          {/* Title block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16 border-b border-white/5 pb-10"
          >
            <span className="font-serif-editorial text-[0.65rem] tracking-[0.25em] text-[#c5a880] uppercase block mb-2">
              CATALOG INDEX
            </span>
            <h1 className="font-serif-editorial text-4xl md:text-6xl font-bold uppercase tracking-tight text-white">
              All Shipped Projects
            </h1>
            <p className="max-w-[500px] text-white/40 text-xs tracking-wider leading-relaxed font-light mt-3">
              A comprehensive archive of applications, network limiters, security triggers, and Web3 adapters.
            </p>
          </motion.div>

          {/* Category Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-12 text-[0.7rem] font-bold uppercase tracking-widest font-mono"
          >
            <span className="text-white/30 mr-2">Filter Catalog:</span>
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`transition-colors py-1 ${
                  activeFilter === filter
                    ? "text-[#c5a880] border-b border-[#c5a880]"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Projects Catalog Grid */}
          <div className="editorial-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Fallback empty view */}
          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-24 text-center text-white/40 text-xs font-mono tracking-widest uppercase"
            >
              No projects matching category index.
            </motion.p>
          )}

        </div>
      </main>

      {/* Reused the simple bottom details block of Footer */}
      <footer className="w-full bg-black border-t border-white/5 py-12 px-4 md:px-8 mt-20">
        <div className="w-[90%] max-w-[1700px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[0.6rem] font-bold tracking-widest text-white/30 font-mono">
          <span>&copy; {new Date().getFullYear()} KRUSHNA RAUT. ALL RIGHTS RESERVED.</span>
          <span>DESIGN INSPIRED BY THE EDITORIAL CATALOGS OF PARIS.</span>
        </div>
      </footer>
    </div>
  );
}
