"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ minHeight: "100vh", padding: "8rem 0" }}>
      <h5 className="text-center text-custom-light">Get To Know Me</h5>
      <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-12">
        About Me
      </h2>

      <div className="container mx-auto" style={{ width: "80vw", maxWidth: "1700px" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 items-start"
          style={{
            gridTemplateColumns: "minmax(280px, 32%) 1fr",
          }}
        >
          {/* Portrait */}
          <div
            className="aspect-square overflow-hidden rounded-2xl"
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pfp_copy.png"
              alt="Krushna Raut"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 18%" }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col w-full">
            {/* Bio */}
            <div
              className="glass-card rounded-2xl p-6 md:p-8 mb-5"
              style={{ lineHeight: 1.6 }}
            >
              <p className="text-custom-light">
                Hello, I&apos;m Krushna — a Full Stack Developer from India with a
                passion for building elegant web applications and exploring AI.
                I specialize in the MERN stack, Next.js, and TypeScript, with
                hands-on experience in backend systems, REST APIs, and database
                design. Like many others, I dreamed of making games as a child,
                so I asked myself, why not start with coding? That curiosity led
                me into full-stack development, where I now build scalable
                applications and AI-powered solutions with a strong emphasis on
                clean architecture and user experience.
              </p>
            </div>

            {/* Experience cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="glass-card rounded-xl p-5 flex gap-4 items-start shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/navbarImg.gif"
                  alt="Developer"
                  className="w-12 h-12 rounded-lg object-contain flex-shrink-0 p-1"
                  style={{ background: "rgba(0,0,0,0.6)" }}
                />
                <div>
                  <h3 className="text-white font-bold text-sm">Avijo</h3>
                  <h4 className="text-custom-light font-medium text-sm">
                    Full Stack Developer Intern
                  </h4>
                </div>
              </div>

              <div className="glass-card rounded-xl p-5 flex gap-4 items-start shadow-lg">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-2xl"
                  style={{ background: "rgba(0,0,0,0.6)" }}
                >
                  🎓
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Education</h3>
                  <h4 className="text-custom-light font-medium text-sm">
                    B.Tech in CS
                  </h4>
                </div>
              </div>

              <div className="glass-card rounded-xl p-5 flex gap-4 items-start shadow-lg">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-2xl"
                  style={{ background: "rgba(0,0,0,0.6)" }}
                >
                  🚀
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">8+ Projects</h3>
                  <h4 className="text-custom-light font-medium text-sm">
                    Open Source Contributor
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile responsive override */}
      <style jsx>{`
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
