"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowUpRight, Award, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const [activeDrawer, setActiveDrawer] = useState<"manifesto" | "journal" | null>(null);

  // Close helper
  const closeDrawer = () => setActiveDrawer(null);

  return (
    <section
      id="about"
      className="relative w-full bg-black py-28 px-4 md:px-8 border-b border-[rgba(255,255,255,0.07)]"
    >
      <div className="w-[90%] max-w-[1700px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 pb-6 border-b border-white/5">
          <span className="font-serif-editorial text-[0.65rem] tracking-[0.25em] text-[#c5a880] uppercase">
            THE CHRONICLES
          </span>
          <h2 className="font-serif-editorial text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            The Souvenirs of Code
          </h2>
        </div>

        {/* Double Column Teaser Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Card 1: The Manifesto */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
            onClick={() => setActiveDrawer("manifesto")}
          >
            {/* Background Image (Dark moody code workspace) */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1200')` }}
            />
            {/* Tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/20 transition-all duration-500" />

            {/* Overlay Text */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
              <span className="font-serif-editorial text-[0.65rem] tracking-[0.25em] text-[#c5a880] uppercase mb-1">
                JOURNEY & BIOGRAPHY
              </span>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-white italic tracking-wide mb-3">
                The Manifesto
              </h3>
              <p className="text-white/60 text-xs tracking-wider max-w-[450px] line-clamp-2 mb-6">
                Exploring full stack engineering, backend architectures, and machine learning models from India.
              </p>
              <button className="font-serif-editorial text-xs font-semibold tracking-widest text-black bg-white group-hover:bg-[#c5a880] group-hover:text-black py-2.5 px-6 rounded transition-colors uppercase">
                DÉCOUVRIR
              </button>
            </div>
          </motion.div>

          {/* Card 2: The Journal */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
            onClick={() => setActiveDrawer("journal")}
          >
            {/* Background Image (Dark terminal screen or tech setup) */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200')` }}
            />
            {/* Tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/20 transition-all duration-500" />

            {/* Overlay Text */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
              <span className="font-serif-editorial text-[0.65rem] tracking-[0.25em] text-[#c5a880] uppercase mb-1">
                EXPERIENCE LOG
              </span>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-white italic tracking-wide mb-3">
                The Journal
              </h3>
              <p className="text-white/60 text-xs tracking-wider max-w-[450px] line-clamp-2 mb-6">
                A chronicle of industry contributions in healthcare commerce, RBAC structures, and database schema scaling.
              </p>
              <button className="font-serif-editorial text-xs font-semibold tracking-widest text-black bg-white group-hover:bg-[#c5a880] group-hover:text-black py-2.5 px-6 rounded transition-colors uppercase">
                DÉCOUVRIR
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* DRAWERS FOR RICH INTERACTIVE TEXT SLIDE OUT */}
      <AnimatePresence>
        {activeDrawer && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
              className="drawer-overlay active"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="drawer-content active"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/5">
                <span className="font-serif-editorial text-[0.65rem] tracking-[0.2em] text-white/50 uppercase">
                  {activeDrawer === "manifesto" ? "MANIFESTO / BIOGRAPHY" : "JOURNAL / CV"}
                </span>
                <button
                  onClick={closeDrawer}
                  className="p-2 hover:bg-white/5 rounded-full text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer: The Manifesto */}
              {activeDrawer === "manifesto" && (
                <div className="flex flex-col gap-6 font-light">
                  <h3 className="font-serif-editorial text-3xl font-bold text-white italic">
                    The Manifesto
                  </h3>

                  {/* PFP box in Drawer */}
                  <div className="aspect-[4/3] w-full rounded-md overflow-hidden bg-white/5 border border-white/10 relative my-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/pfp_copy.png"
                      alt="Krushna Raut"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 18%" }}
                    />
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed font-sans">
                    Hello, I&apos;m Krushna — a Full Stack Developer from India with a
                    passion for building elegant web applications and exploring AI.
                    I specialize in the MERN stack, Next.js, and TypeScript, with
                    hands-on experience in backend systems, REST APIs, and database
                    design.
                  </p>

                  <p className="text-white/80 text-sm leading-relaxed font-sans">
                    Like many others, I dreamed of making games as a child. That curiosity
                    eventually led me into the universe of full-stack development, where I
                    now architect scalable applications and integrate intelligent models,
                    prioritizing clean file code structures and crisp client interfaces.
                  </p>

                  <div className="border-t border-white/5 pt-6 mt-4">
                    <h4 className="font-serif-editorial text-lg text-white font-bold mb-4 uppercase tracking-wider">
                      Academic Foundations
                    </h4>

                    <div className="flex gap-4 items-start p-4 rounded bg-white/5 border border-white/5 mb-4">
                      <GraduationCap className="w-6 h-6 text-[#c5a880] flex-shrink-0" />
                      <div>
                        <h5 className="text-white font-bold text-sm">CS Bachelor of Technology</h5>
                        <p className="text-white/50 text-xs mt-1">Computer Science Engineering</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start p-4 rounded bg-white/5 border border-white/5">
                      <Award className="w-6 h-6 text-[#c5a880] flex-shrink-0" />
                      <div>
                        <h5 className="text-white font-bold text-sm">8+ Distributed Applications</h5>
                        <p className="text-white/50 text-xs mt-1">Shipped across public hosting repositories (Vercel, Netlify, Hugging Face).</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-6 mt-4">
                    <h4 className="font-serif-editorial text-lg text-white font-bold mb-3 uppercase tracking-wider">
                      Crafting Values
                    </h4>
                    <ul className="space-y-3 font-sans text-xs text-white/60 pl-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#c5a880] mt-0.5">✦</span>
                        <span><strong>Zero Compromise on Security</strong>: AES-256 local handshakes and rate limiters on standard APIs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c5a880] mt-0.5">✦</span>
                        <span><strong>Editorial Aesthetics</strong>: Design that respects typography proportions, spacing, and micro-motion.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c5a880] mt-0.5">✦</span>
                        <span><strong>AI Integrations</strong>: Harnessing models for OCR extraction and financial projections.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Drawer: The Journal */}
              {activeDrawer === "journal" && (
                <div className="flex flex-col gap-6 font-light">
                  <h3 className="font-serif-editorial text-3xl font-bold text-white italic">
                    The Journal
                  </h3>
                  <p className="text-white/50 text-xs font-mono">CURRICULUM VITAE & LOGS</p>

                  <div className="relative border-l border-white/10 pl-6 ml-3 space-y-8 my-6">
                    {/* Timeline Item 1 */}
                    <div className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-black border border-[#c5a880] p-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c5a880]" />
                      </span>

                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="text-white font-bold text-sm tracking-wide">
                          Full Stack Developer Intern @ Avijo
                        </h4>
                        <span className="text-[0.6rem] font-bold text-[#c5a880] font-mono border border-[#c5a880]/30 rounded px-2 py-0.5">
                          Dec 2025 – Mar 2026
                        </span>
                      </div>

                      <p className="text-white/40 text-xs font-medium mb-3">Healthcare Commerce / Remote</p>

                      <p className="text-white/70 text-xs leading-relaxed mb-4">
                        Contributed to the development of a health-tech platform managing client transactions and medical order tracking pipelines.
                      </p>

                      <ul className="space-y-2 text-xs text-white/50 list-disc list-outside pl-4">
                        <li>Engineered full-stack features, owning both client views (React, Tailwind CSS) and server queries (Node.js, Express) for pharmacy inventories.</li>
                        <li>Implemented role-based access control (RBAC) and Aadhaar-linked systems, integrating ABDM APIs for secure onboarding verification.</li>
                        <li>Designed MongoDB storage models and aggregation pipelines for order tracking; led a developers sub-team on modular task execution.</li>
                      </ul>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-black border border-white/20 p-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      </span>

                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="text-white font-bold text-sm tracking-wide">
                          B.Tech in Computer Science
                        </h4>
                        <span className="text-[0.6rem] text-white/40 font-mono border border-white/10 rounded px-2 py-0.5">
                          Academics
                        </span>
                      </div>
                      <p className="text-white/40 text-xs font-medium mb-3">University CS Curriculum / India</p>
                      <p className="text-white/70 text-xs leading-relaxed">
                        Focused study on algorithms, database engineering, system models, and computational foundations, building game prototypes and web integrations.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-6 mt-4 flex justify-between items-center">
                    <span className="text-white/40 text-xs font-mono">Need the complete offline file?</span>
                    <Link
                      href="https://drive.google.com/file/d/1FK5eDxRuHI6VwU2WixXaUNDeLut7yD2b/view?usp=sharing"
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-xs text-white font-semibold hover:text-[#c5a880] transition-colors"
                    >
                      Download Resume <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
