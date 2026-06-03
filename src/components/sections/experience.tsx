"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = [
  {
    company: "Avijo",
    role: "Full Stack Developer Intern",
    period: "Dec 2025 – Mar 2026",
    type: "Remote",
    description:
      "Contributing to the development of a healthcare commerce platform.",
    achievements: [
      "Engineered full-stack features across a healthcare commerce platform, owning both frontend (React, Tailwind CSS) and backend (Node.js, Express) for pharmacy and order management workflows.",
      "Implemented role-based access control (RBAC) and an Aadhaar-linked authentication system, integrating ABDM APIs for ABHA (M1–M4) onboarding and identity verification across user roles.",
      "Designed MongoDB schemas and aggregation pipelines for inventory and order tracking; led a sub-team on modular feature delivery.",
    ],

  
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ minHeight: "auto", padding: "6rem 0" }}>
      <h5 className="text-center text-custom-light">Where I&apos;ve Worked</h5>
      <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-12">
        Experience
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto"
        style={{ width: "80vw", maxWidth: "900px" }}
      >
        {experience.map((job, index) => (
          <div key={index} className="glass-card rounded-2xl p-8 md:p-10 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(60deg, #7237BD, #FD0988)",
                }}
              >
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{job.role}</h3>
                <p className="text-custom-pink font-medium">{job.company}</p>
              </div>
              <span className="ml-auto text-custom-light text-sm whitespace-nowrap">
                {job.period}
              </span>
            </div>

            <p className="text-custom-light text-sm mb-2">{job.type}</p>
            <p className="text-custom-light text-sm mb-4">{job.description}</p>

            <ul className="list-disc list-outside ml-5 space-y-1">
              {job.achievements.map((item, i) => (
                <li key={i} className="text-custom-light text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
