"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Copy, Check } from "lucide-react";
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
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white">
                <title>LeetCode</title>
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
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
