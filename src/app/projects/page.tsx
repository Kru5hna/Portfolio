"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Package } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { projectFilters, projects } from "@/lib/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.category.includes(activeFilter)
  );

  return (
    <div className="flex flex-col min-h-screen relative bg-background overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10">
        <div className="absolute left-0 right-0 top-0 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-20 blur-[100px]" />
      </div>

      <Navbar />

      <main className="flex-1 pt-24 pb-20 relative z-10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-8">
            <Button
              variant="ghost"
              className="gap-2 pl-0 hover:bg-transparent hover:text-emerald-400 transition-colors"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="h-5 w-5" /> Back to Home
              </Link>
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              All Projects
            </h1>
            <p className="text-muted-foreground">
              Explorations in code, design, and problem solving.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectFilters.map((filter) => (
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

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
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
                    {project.links.demo ? (
                      <>
                        <div className="absolute inset-0 w-full h-full">
                          <iframe
                            src={project.links.demo}
                            title={project.title}
                            className="w-[200%] h-[200%] scale-50 origin-top-left pointer-events-none group-hover:pointer-events-auto transition-all"
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin"
                          />
                        </div>
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
                            {project.status ?? "Not Deployed"}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-secondary/50 rounded text-[10px] font-medium text-secondary-foreground uppercase tracking-wider border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-auto">
                      {project.links.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full flex-1 gap-2 min-w-24"
                          asChild
                        >
                          <Link href={project.links.github} target="_blank">
                            <Github className="h-4 w-4" /> Code
                          </Link>
                        </Button>
                      )}
                      {project.links.package && (
                        <Button
                          variant="default"
                          size="sm"
                          className="rounded-full flex-1 gap-2 min-w-24"
                          asChild
                        >
                          <Link href={project.links.package} target="_blank">
                            <Package className="h-4 w-4" /> NPM
                          </Link>
                        </Button>
                      )}
                      {project.links.demo && (
                        <Button
                          variant="default"
                          size="sm"
                          className="rounded-full flex-1 gap-2 min-w-24"
                          asChild
                        >
                          <Link href={project.links.demo} target="_blank">
                            <ExternalLink className="h-4 w-4" /> Demo
                          </Link>
                        </Button>
                      )}
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
