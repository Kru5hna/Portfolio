"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects, Project } from "@/lib/projects";

interface HighlightsCarouselProps {
  activeTab?: string;
}

export default function HighlightsCarousel({ activeTab = "dev" }: HighlightsCarouselProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Filter projects according to category or tab selection
  const filteredProjects = projects.filter((project) => {
    if (activeTab === "dev") {
      if (selectedCategory === "All") return true;
      return project.category.some(c => c.toLowerCase().includes(selectedCategory.toLowerCase()));
    }
    if (activeTab === "uiux") {
      return project.category.some(c => c.toLowerCase().includes("frontend") || c.toLowerCase().includes("full stack"));
    }
    if (activeTab === "skills") {
      return true;
    }
    if (activeTab === "art") {
      return project.category.some(c => c.toLowerCase().includes("ai") || c.toLowerCase().includes("web3"));
    }
    return true;
  });

  return (
    <div className="carousel-container">
      {/* Category Pills (Sub-filter for Dev tab) */}
      {activeTab === "dev" && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {["All", "Full Stack", "Backend", "AI", "Web3"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs rounded-full transition-all ${
                selectedCategory === cat
                  ? "bg-white/20 text-white font-medium border border-white/30"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Cards Horizontal Grid / Carousel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {filteredProjects.map((project: Project) => (
          <div
            key={project.id}
            className="glass-card p-6 flex flex-col justify-between h-full group relative overflow-hidden"
          >
            <div>
              {/* Card Header & Status */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  {project.category.join(" • ")}
                </span>
                {project.status && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Card Image Preview if available */}
              {project.image && (
                <div className="relative w-full h-44 mb-4 rounded-lg overflow-hidden bg-zinc-900/60 border border-white/5 group-hover:border-white/15 transition-all">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              )}

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Tech Badges & Action Links */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </Link>
                )}

                {project.links.demo && (
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-xs text-white/90 hover:text-white font-medium transition-colors ml-auto"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                )}
                
                {project.links.package && (
                  <Link
                    href={project.links.package}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors ml-auto"
                  >
                    <span>NPM Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="p-12 text-center text-zinc-500 font-mono text-xs">
          No items found for this filter.
        </div>
      )}
    </div>
  );
}
