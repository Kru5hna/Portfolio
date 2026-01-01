"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Welth",
    category: ["Full Stack", "AI"],
    description: "AI-powered finance platform with receipt scanning and budget alerts. Helps users track expenses and get personalized financial advice.",
    tech: ["Next.js 15", "Supabase", "Gemini API"],
    links: { github: "https://github.com/Kru5hna/Welth-AI-Finance-Platform", demo: "https://welth-kru5hna.vercel.app/" },
    image: "/welth.png"
  },
  {
    id: 2,
    title: "ChatHub",
    category: ["Full Stack"],
    description: "Real-time messaging platform enabling seamless communication with instant updates, secure JWT auth, and separate chat rooms.",
    tech: ["Node.js", "Socket.io", "MongoDB"],
    links: { github: "https://github.com/Kru5hna/ChatHub", demo: "https://chat-app-jm55l.sevalla.app/login" },
    image: "/chathub.png"
  },
  {
    id: 3,
    title: "NotesBud",
    description: "A feature-rich note-taking application designed for productivity with real-time sync and CRUD operations.",
    category: ["Full Stack"],
    tech: ["Next.js", "Firebase", "Firestore"],
    links: { github: "https://github.com/Kru5hna/NotesBud", demo: "https://notesbuds.netlify.app/" },
    image: "/notesbud.png"
  },
  {
    id: 4,
    title: "Pokedex",
    category: ["Frontend"],
    description: "Interactive Pokédex exploring the first 151 Pokémon with detailed stats and abilities.",
    tech: ["React", "CSS"],
    links: { github: "https://github.com/Kru5hna/Pokedex", demo: "https://krushna-pokedex.netlify.app/" },
    image: "/pokedex.png"
  },
  {
    id: 5,
    title: "DailyBrew",
    category: ["Frontend"],
    description: "Your daily dose of coffee and news. Track caffeine intake and stay balanced.",
    tech: ["JavaScript", "API"],
    links: { github: "https://github.com/Kru5hna/DailyBrew", demo: "https://dailybrews.netlify.app/" },
    image: "/dailybrew.png"
  },
  {
    id: 6,
    title: "Solana Wallet Adapter",
    category: ["Web3"],
    description: "Wallet adapter integration for Solana blockchain apps, facilitating secure transactions.",
    tech: ["Web3", "Solana", "React"],
    links: { github: "https://github.com/Kru5hna/Web3-projects/tree/master/solana-Wallet-adapter", demo: "#" },
    image: "/solanaWalletAdapter.png"
  },
];

const filters = ["All", "Frontend", "Full Stack", "Web3", "AI"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.category.includes(activeFilter)
  );

  return (
    <div className="flex flex-col min-h-screen relative bg-background overflow-hidden">
        {/* Retro Grid Background */}
       <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10">
            <div className="absolute left-0 right-0 top-0 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-20 blur-[100px]"></div>
       </div>

      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 relative z-10">
        <div className="container px-4 md:px-6 mx-auto">
            
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-emerald-400 transition-colors" asChild>
                <Link href="/">
                    <ArrowLeft className="h-5 w-5" /> Back to Home
                </Link>
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">All Projects</h1>
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
                  className="group flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
                >
                  <div className="aspect-video bg-muted/20 relative overflow-hidden">
                     {project.links.demo !== "#" ? (
                       <>
                         {/* Iframe container - shows actual project on hover */}
                         <div className="absolute inset-0 w-full h-full">
                           <iframe
                             src={project.links.demo}
                             title={project.title}
                             className="w-[200%] h-[200%] scale-50 origin-top-left pointer-events-none group-hover:pointer-events-auto transition-all"
                             loading="lazy"
                             sandbox="allow-scripts allow-same-origin"
                           />
                         </div>
                         {/* Fallback image for initial load */}
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img 
                           src={project.image} 
                           alt={project.title} 
                           className="object-cover w-full h-full absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                           <div className="absolute bottom-2 left-2 px-2 py-1 bg-emerald-500/80 rounded text-xs font-medium text-white">
                             Scroll to preview
                           </div>
                         </div>
                       </>
                     ) : (
                       <>
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img 
                           src={project.image} 
                           alt={project.title} 
                           className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                         />
                         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <span className="px-3 py-1.5 bg-zinc-700/80 rounded-full text-xs font-medium text-zinc-300">
                             Not Deployed
                           </span>
                         </div>
                       </>
                     )}
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                       <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-secondary/50 rounded text-[10px] font-medium text-secondary-foreground uppercase tracking-wider border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <Button variant="outline" size="sm" className="rounded-full flex-1 gap-2" asChild>
                         <Link href={project.links.github} target="_blank">
                            <Github className="h-4 w-4" /> Code
                         </Link>
                      </Button>
                      
                       <Button variant={project.links.demo !== "#" ? "default" : "ghost"} size="sm" className="rounded-full flex-1 gap-2" disabled={project.links.demo === "#"} asChild={project.links.demo !== "#"}>
                         {project.links.demo !== "#" ? (
                             <Link href={project.links.demo} target="_blank">
                                <ExternalLink className="h-4 w-4" /> Demo
                             </Link>
                         ) : (
                             <span className="opacity-50 cursor-not-allowed text-muted-foreground"><ExternalLink className="h-4 w-4 mr-2" /> Demo</span>
                         )}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
