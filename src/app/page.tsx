"use client";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import FeaturedProjects from "@/components/sections/featured-projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";
import FloatingNav from "@/components/floating-nav";

export default function Home() {
  return (
    <>
      {/* Fixed background video */}
      <video className="bg-video" loop muted autoPlay playsInline>
        <source src="/assets/BGvid2.mp4" type="video/mp4" />
      </video>

      {/* Page content */}
      <Hero />
      <FloatingNav />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
