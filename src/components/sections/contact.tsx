"use client";

import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { useRef, FormEvent } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Hook up emailjs or your preferred service
    const form = formRef.current;
    if (form) {
      const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
      window.location.href = `mailto:krushna.raut@example.com?subject=Portfolio Contact&body=From: ${email}`;
      form.reset();
    }
  };

  return (
    <section id="contact" style={{ minHeight: "100vh", padding: "8rem 0" }}>
      <h5 className="text-center text-custom-light">Get In Touch</h5>
      <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-12">
        Contact Me
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto grid gap-12"
        style={{
          width: "58%",
          gridTemplateColumns: "30% 58%",
          gap: "12%",
        }}
      >
        {/* Contact Options */}
        <div className="flex flex-col gap-5">
          <article className="glass-card rounded-xl p-5 text-center border border-transparent">
            <HiOutlineMail className="text-2xl mb-2 mx-auto text-custom-pink" />
            <h4 className="text-white font-bold">Email</h4>
            <h5 className="text-custom-light text-sm">
              krushna.raut@example.com
            </h5>
            <a
              href="mailto:krushna.raut@example.com"
              className="inline-block mt-3 text-sm font-medium text-custom-light hover:text-white"
            >
              Send me an email
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-5 rounded-lg glass-card text-white font-medium"
            style={{
              fontFamily: "var(--font-poppins, 'Poppins', sans-serif)",
              border: "none",
              outline: "none",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-5 rounded-lg glass-card text-white font-medium"
            style={{
              fontFamily: "var(--font-poppins, 'Poppins', sans-serif)",
              border: "none",
              outline: "none",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={7}
            required
            className="w-full p-5 rounded-lg glass-card text-white font-medium resize-none"
            style={{
              fontFamily: "var(--font-poppins, 'Poppins', sans-serif)",
              border: "none",
              outline: "none",
            }}
          />
          <button type="submit" className="btn-gradient py-3">
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr !important;
            width: 85% !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          .grid {
            width: 90% !important;
          }
        }
      `}</style>
    </section>
  );
}
