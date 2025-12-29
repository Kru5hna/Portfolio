"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Server, Layers, Cpu, Wrench } from "lucide-react";

// Simplified data structure, will use text pills but with updated list
const skills = {
  "Languages": ["JavaScript", "Java"],
  "Tech Stack (MERN+)": ["MongoDB", "Express.js", "React", "Node.js", "Next.js", "Tailwind CSS"],
  "Database": ["MongoDB", "PostgreSQL (Supabase)"],
  "Tools & Libraries": ["Git", "GitHub", "VS Code", "Postman", "Shadcn UI", "Prisma"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/5">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Technologies & Tools</h2>
            <p className="text-muted-foreground">
               My tech stack and the modern tools I use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="bg-card/50 p-6 rounded-2xl border border-white/5"
              >
                 <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                    {category === "Languages" && <Code2 className="h-5 w-5 text-emerald-500" />}
                    {category === "Tech Stack (MERN+)" && <Layers className="h-5 w-5 text-blue-500" />}
                    {category === "Database" && <Database className="h-5 w-5 text-purple-500" />}
                    {category === "Tools & Libraries" && <Wrench className="h-5 w-5 text-orange-500" />}
                    {category}
                 </h3>
                 <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <div
                        key={skill}
                        className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/30 border border-white/5 hover:border-white/10 hover:bg-secondary/50 transition-all cursor-default"
                      >
                        <span className="text-sm font-medium text-foreground/80">{skill}</span>
                      </div>
                    ))}
                 </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
