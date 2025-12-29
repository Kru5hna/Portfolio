"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Welth",
    category: ["Full Stack", "AI"],
    description: "AI-powered finance platform with receipt scanning and budget alerts.",
    tech: ["Next.js 15", "Supabase", "Gemini API"],
    links: { github: "#", demo: "#" },
  },
  {
    id: 2,
    title: "ChatHub",
    category: ["Full Stack"],
    description: "Real-time messaging platform with secure JWT auth and Socket.io.",
    tech: ["Node.js", "Socket.io", "MongoDB"],
    links: { github: "#", demo: "#" },
  },
  {
    id: 3,
    title: "NotesBud",
    category: ["Full Stack"],
    description: "Secure note-taking app with real-time sync and CRUD operations.",
    tech: ["Next.js", "Firebase", "Firestore"],
    links: { github: "#", demo: "#" },
  },
  {
    id: 4,
    title: "Pokedex",
    category: ["Frontend"],
    description: "Interactive Pokédex exploring the first 151 Pokémon.",
    tech: ["React", "CSS"],
    links: { github: "#", demo: "#" },
  },
  {
    id: 5,
    title: "DailyBrew",
    category: ["Frontend"],
    description: "Track daily caffeine intake and stay balanced.",
    tech: ["JavaScript"],
    links: { github: "#", demo: "#" },
  },
  {
    id: 6,
    title: "Solana Wallet Adapter",
    category: ["Web3"],
    description: "Wallet adapter integration for Solana blockchain apps.",
    tech: ["Web3", "Solana", "React"],
    links: { github: "#", demo: "#" },
  },
];

const filters = ["All", "Frontend", "Full Stack", "Web3", "AI"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.category.includes(activeFilter)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">All Projects</h1>
            <p className="text-muted-foreground">Explorations in code, design, and problem solving.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:border-accent/50 transition-colors"
                >
                  <div className="aspect-video bg-muted/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-medium">
                      {project.title} Preview
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                       <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-secondary rounded text-[10px] font-medium text-secondary-foreground uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <Link href={project.links.github} className="text-sm font-medium flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="h-4 w-4" /> Code
                      </Link>
                      <Link href={project.links.demo} className="text-sm font-medium flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink className="h-4 w-4" /> Demo
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
