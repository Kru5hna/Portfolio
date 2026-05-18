"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Package } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Latest Work
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Recent projects focused on backend resilience, AI-assisted workflows,
            and practical developer tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
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
                    {project.status && (
                      <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-black/65 border border-white/10 rounded-full text-xs font-medium text-white backdrop-blur">
                        {project.status}
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.featuredTitle ?? project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.links.github && (
                    <Button
                      variant="default"
                      size="sm"
                      className="rounded-full flex-1 min-w-24"
                      asChild
                    >
                      <Link href={project.links.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  )}
                  {project.links.package && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full flex-1 min-w-24"
                      asChild
                    >
                      <Link href={project.links.package} target="_blank">
                        <Package className="mr-2 h-4 w-4" /> NPM
                      </Link>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full flex-1 min-w-24"
                      asChild
                    >
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
