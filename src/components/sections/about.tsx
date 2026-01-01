"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center md:items-start">

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3 space-y-6 text-center md:text-left order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I&apos;m Krushna <span className="inline-block animate-wave">👋</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              A Full Stack Web Developer.
            </h3>

            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                I enjoy designing systems with a strong focus on low-level design, while bringing them to life with intuitive and performant frontend experiences using <span className="text-foreground font-medium">TypeScript</span>, <span className="text-foreground font-medium">React</span>, and <span className="text-foreground font-medium">Next.js</span>.
              </p>
              <p>
                Like many others, I dreamed of making games as a child so I asked myself, why not start with coding? That curiosity led me into full-stack development, where I now build scalable applications and AI-powered solutions with a strong emphasis on clean architecture and user experience.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <Button className="rounded-full" asChild>
                <Link href="https://drive.google.com/file/d/1TSnWt5SZvLPN0GqtVUP0uSLROtBl-zX3/view" target="_blank">Resume / CV</Link>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="#contact">Get in touch <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </motion.div>

          {/* Avatar Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3 flex justify-center md:justify-start order-1 md:order-2"
          >
            <div className="relative w-80 h-80 my-3 md:w-96 md:h-96 aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pfp.png"
                alt="Krushna Raut"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
