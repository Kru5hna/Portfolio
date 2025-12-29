"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = [
  {
    company: "Avijo",
    role: "Full Stack Developer Intern",
    period: "Dec 2025 – Present",
    type: "Remote | Part-Time",
    description: "Contributing to the development of a healthcare commerce platform.",
    achievements: [
      "Developed core frontend features including product listing, cart, and order lifecycle using React & Tailwind.",
      "Built robust REST APIs with Node.js and Express for order management and pharmacy operations.",
      "Designed schemas and aggregation pipelines in MongoDB for efficient inventory tracking.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
            <p className="text-muted-foreground">My professional journey in software development.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-accent group-hover:text-accent transition-colors">
                  <Briefcase className="w-5 h-5" />
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                    <h3 className="font-bold text-lg">{job.role}</h3>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-secondary text-secondary-foreground whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <div className="mb-4">
                     <h4 className="text-primary font-medium">{job.company}</h4>
                     <p className="text-sm text-muted-foreground">{job.type}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    {job.achievements.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground/80 pl-1">{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
