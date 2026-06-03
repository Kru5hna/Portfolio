"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" style={{ minHeight: "100vh", padding: "8rem 0" }}>
      <h5 className="text-center text-custom-light">Some Recent Work</h5>
      <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-12">
        My Projects
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto"
        style={{ width: "75%", maxWidth: "1400px" }}
      >
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-4 rounded-2xl border border-transparent"
            >
              {/* Image */}
              <div
                className="w-full overflow-hidden rounded-xl mb-4"
                style={{ height: "220px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-1">
                {project.featuredTitle ?? project.title}
              </h3>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      background: "rgba(253,9,136,0.15)",
                      color: "#FD0988",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p
                className="text-custom-light text-sm mb-4"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                {project.links.demo && (
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    className="btn-gradient text-sm px-4 py-2"
                  >
                    Live Demo
                  </Link>
                )}
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    className="btn-outline text-sm px-4 py-2"
                  >
                    Github
                  </Link>
                )}
                {project.links.package && (
                  <Link
                    href={project.links.package}
                    target="_blank"
                    className="btn-gradient text-sm px-4 py-2"
                  >
                    NPM
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
