"use client";

import { useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Sparkles, Send, Globe } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (form) {
      const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
      const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
      const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
      
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
      
      window.location.href = `mailto:krishraut2103@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-black py-28 px-4 md:px-8 border-b border-[rgba(255,255,255,0.07)]"
    >
      <div className="w-[90%] max-w-[1700px] mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Editorial Information */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-serif-editorial text-[0.65rem] tracking-[0.25em] text-[#c5a880] uppercase">
                ACQUISITIONS & INQUIRIES
              </span>
              <h2 className="font-serif-editorial text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-none">
                Contact the Builder
              </h2>
            </div>

            <p className="text-white/50 text-xs tracking-wider leading-relaxed font-light max-w-[480px]">
              Available for full-time developer positions, remote roles, and innovative system collaborations.
              Send your brief or drop a quick ping.
            </p>

            {/* Structured details registry */}
            <div className="flex flex-col gap-6 mt-6 border-t border-white/5 pt-8">
              
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded bg-white/5 border border-white/5 text-[#c5a880]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[0.55rem] font-bold uppercase tracking-widest text-white/30 font-mono">
                    Direct Mail
                  </span>
                  <a
                    href="mailto:krishraut2103@gmail.com"
                    className="font-serif-editorial text-sm font-semibold text-white hover:text-[#c5a880] transition-colors"
                  >
                    krishraut2103@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded bg-white/5 border border-white/5 text-[#c5a880]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[0.55rem] font-bold uppercase tracking-widest text-white/30 font-mono">
                    Based In
                  </span>
                  <span className="font-serif-editorial text-sm font-semibold text-white">
                    India (GMT+5:30) / Remote
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded bg-white/5 border border-white/5 text-[#c5a880]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[0.55rem] font-bold uppercase tracking-widest text-white/30 font-mono">
                    Opportunity Status
                  </span>
                  <span className="font-serif-editorial text-xs font-semibold text-[#c5a880] uppercase tracking-wider">
                    Actively Interviewing
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Sleek Editorial Form */}
          <div className="p-8 md:p-10 rounded-lg bg-[#0b0b0d] border border-white/5 relative">
            
            {/* Form decorative top */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-8">
              <span className="font-serif-editorial text-[0.6rem] tracking-[0.2em] text-white/40 uppercase">
                SECURE HANDSHAKE / MAILTO ROUTER
              </span>
              <Globe className="w-3.5 h-3.5 text-white/20 animate-spin" style={{ animationDuration: "20s" }} />
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.6rem] font-bold uppercase tracking-widest text-white/40 font-mono">
                  Full Name / Firm Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name..."
                  className="sleek-input"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.6rem] font-bold uppercase tracking-widest text-white/40 font-mono">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email..."
                  className="sleek-input"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.6rem] font-bold uppercase tracking-widest text-white/40 font-mono">
                  Project Brief / Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe your inquiry..."
                  className="sleek-input resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full inline-flex items-center justify-center gap-2 overflow-hidden border border-[#c5a880] bg-[#c5a880] px-8 py-4 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-white mt-4"
              >
                <span>Dispatch Mail</span>
                <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
