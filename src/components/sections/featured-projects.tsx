"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, projectFilters } from "@/lib/projects";

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

// Component for Individual Project Card
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
      
      // Speed up typing for output logs, type commands slowly
      const isCommand = fullLineText.startsWith("$");
      const speed = isCommand ? 2 : 1; // skip chars to speed up

      if (charIdx < fullLineText.length) {
        currentText += fullLineText.substring(charIdx, charIdx + speed);
        charIdx += speed;
        setTypedLines((prev) => {
          const next = [...prev];
          next[currentLineIdx] = currentText;
          return next;
        });
      } else {
        // Go to next line
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
      {/* Upper image/interactive box */}
      <div className="project-card-image-box aspect-[4/3] w-full rounded-md border border-white/5 relative group mb-6">
        {/* Mockup image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dynamic code typing terminal overlay on hover */}
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

        {/* Project Link Icon tags */}
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

      {/* Under info text: Category, Name, Price (Status) */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            {/* Category / Subtitle */}
            <span className="font-serif-editorial text-[0.625rem] tracking-[0.2em] text-white/40 uppercase">
              {project.category.join(" / ")}
            </span>

            {/* Project Title */}
            <h3 className="font-serif-editorial text-lg text-white font-bold tracking-wide mt-1">
              {project.title}
            </h3>
          </div>

          {/* Pricing style: Status Badge */}
          <div className="font-serif-editorial text-xs font-semibold tracking-wider text-[#c5a880] border border-[#c5a880]/30 rounded px-2.5 py-1 uppercase bg-[#c5a880]/5">
            {project.status || "COMPLETED"}
          </div>
        </div>

        {/* Short description */}
        <p className="text-white/50 text-[0.75rem] font-light leading-relaxed mt-2 line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
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

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((p) => p.category.includes(activeFilter))
      );
    }
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="relative w-full bg-black py-28 px-4 md:px-8 border-b border-[rgba(255,255,255,0.07)]"
    >
      <div className="w-[90%] max-w-[1700px] mx-auto">
        
        {/* Title and Intro */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 pb-6 border-b border-white/5">
          <div className="flex flex-col gap-2">
            <span className="font-serif-editorial text-[0.65rem] tracking-[0.25em] text-[#c5a880] uppercase">
              SELECT WORKS
            </span>
            <h2 className="font-serif-editorial text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              The Collection
            </h2>
          </div>
          <p className="max-w-[400px] text-white/40 text-xs tracking-wider leading-relaxed font-light">
            Every repository is a publication of software engineering patterns, featuring zero-knowledge cryptos, backend shields, and image models.
          </p>
        </div>

        {/* Category Filters (GIFTSHOP tab styling) */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10 text-[0.7rem] font-bold uppercase tracking-widest font-mono">
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
        </div>

        {/* The Grid (Thin border outline) */}
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

        {/* Bottom Callout */}
        <div className="flex justify-center items-center mt-16">
          <Link
            href="https://github.com/Kru5hna?tab=repositories"
            target="_blank"
            className="group inline-flex items-center gap-2 border border-white/20 hover:border-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all bg-white/5"
          >
            <span>View GitHub Catalog</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
