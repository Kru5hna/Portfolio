"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Copy, Check, Code } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "krushna.raut@example.com"; // User should update this

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
        {/* Background gradient for emphasis */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto max-w-3xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="rounded-full px-8 h-12 text-base" asChild>
                <Link href={`mailto:${email}`}>Say Hello</Link>
            </Button>
             <Button
              variant="outline"
              size="lg"
              className="rounded-full px-6 h-12 gap-2"
              onClick={handleCopy}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy Email"}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Link href="https://github.com/Kru5hna" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-white/5 rounded-full">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-white/5 rounded-full">
              <Linkedin className="h-6 w-6" />
               <span className="sr-only">LinkedIn</span>
            </Link>
             <Link href="https://x.com/raut2135" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-white/5 rounded-full">
              {/* X Logo */}
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
               <span className="sr-only">X (Twitter)</span>
            </Link>
             <Link href="https://leetcode.com/u/Krushna_2135/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-white/5 rounded-full">
              <Code className="h-6 w-6" />
               <span className="sr-only">LeetCode</span>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Footer Content Integrated
      <div className="absolute bottom-4 inset-x-0 text-center text-xs text-zinc-800">
         &copy; {new Date().getFullYear()} Krushna Raut. All rights reserved.
      </div> */}
    </section>
  );
}
