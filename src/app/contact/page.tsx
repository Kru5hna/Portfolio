"use client";

import { useState } from "react";
import TopNav from "@/components/top-nav";
import RainingStars from "@/components/raining-stars";
import BottomCapsule from "@/components/bottom-capsule";
import BlurredStagger from "@/components/blurred-stagger";
import { Github, Linkedin, Mail, Send, Check } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <>
      <RainingStars />
      <TopNav />

      <main className="content-area max-w-xl mx-auto px-6">
        <section className="py-8 text-center">
          <h1 className="text-3xl font-serif text-white mb-3">
            <BlurredStagger text="get in touch." delay={0.1} />
          </h1>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed mb-8">
            have an exciting project, full-time role, or collaboration in mind? drop a line below.
          </p>
        </section>

        {/* Contact Form */}
        <div className="glass-card p-6 border border-white/10 mb-8">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <h2 className="text-sm font-semibold text-white">Message sent!</h2>
              <p className="text-xs text-zinc-400">Thanks for reaching out. I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:border-white/30"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:border-white/30"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hey Krushna, let's build something awesome together..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:border-white/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/15 transition-all flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-4 text-xs font-mono">
          <Link
            href="https://github.com/Kru5hna"
            target="_blank"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/krushna-raut-347a3b27b/"
            target="_blank"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="https://leetcode.com/u/Krushna_2135/"
            target="_blank"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <SiLeetcode className="w-4 h-4" />
            <span>LeetCode</span>
          </Link>
        </div>
      </main>

      <BottomCapsule />
    </>
  );
}
