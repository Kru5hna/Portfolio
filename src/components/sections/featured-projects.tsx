"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Welth - AI Finance Platform",
    description: "An AI-powered financial management platform that helps users track expenses, set budgets, and get personalized financial advice.",
    tech: ["Next.js", "OpenAI API", "Supabase"],
    links: {
      demo: "#", // Add live link if available
      github: "https://github.com/Kru5hna/Welth-AI-Finance-Platform",
    },
    image: "/welth.png", 
  },
  {
    title: "ChatHub",
    description: "A real-time messaging platform enabling seamless communication with instant updates and separate chat rooms.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    links: {
      demo: "#",
      github: "https://github.com/Kru5hna/ChatHub",
    },
    image: "/chathub.png",
  },
  {
    title: "NotesBud",
    description: "A feature-rich note-taking application designed for productivity.",
    tech: ["Next.js"],
    links: { demo: "#", github: "https://github.com/Kru5hna/NotesBud" },
    image: "/notesbud.png"
  },
  {
    title: "DailyBrew",
    description: "Your daily dose of coffee and news.",
    tech: ["React", "API"],
    links: { demo: "#", github: "https://github.com/Kru5hna/DailyBrew" },
    image: "/dailybrew.png"
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl">
                A selection of projects that showcase my passion for building robust and scalable applications.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              {/* Image Container - MADE SMALLER aspect ratio */}
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <Button variant="default" size="sm" className="rounded-full w-full" asChild>
                    <Link href={project.links.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  {project.links.demo !== "#" && (
                    <Button variant="outline" size="sm" className="rounded-full w-full" asChild>
                        <Link href={project.links.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
            <Button variant="outline" className="rounded-full px-8" asChild>
                <Link href="/projects">View All Projects</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
