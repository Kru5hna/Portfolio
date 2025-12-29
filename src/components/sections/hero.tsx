"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { PixelSnow } from "@/components/ui/pixel-snow";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden bg-background">
       
       {/* CSS-only Retro Grid Background (Safe & Performant) */}
       <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-20 blur-[100px]"></div>
       </div>
       
       <div className="container relative z-10 flex flex-col items-center text-center px-4 md:px-6">
        
        {/* Animated Avatar / GIF */}
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
        >
            <div className="relative w-32 h-32 md:w-44 md:h-44 mx-auto">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src="/navbarImg.gif" 
                    alt="Avatar" 
                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-125  transition-transform duration-300" 
                />
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
           <div className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium border rounded-full border-white/10 bg-white/5 text-neutral-300 backdrop-blur-sm">
            <span className="relative flex w-2 h-2 mr-2">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
            </span>
             Available for work
           </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
        >
          Krushna Raut
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl text-lg md:text-xl text-muted-foreground mb-10 mx-auto"
        >
          Turning childhood dreams of building games into crafting modern web experiences. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="rounded-full px-8 bg-foreground text-background border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white transition-all" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10"
      >
        <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Link>
      </motion.div>
    </section>
  );
}
