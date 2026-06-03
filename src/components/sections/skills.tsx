"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPostman,
  SiFirebase,
  SiPython,
  SiDocker,
  SiRedis,
  SiSolana,
} from "react-icons/si";
import { IconType } from "react-icons";

type TileProps = { icon: IconType; name: string };

const Tile = ({ icon: Icon, name }: TileProps) => (
  <div
    className="glass-card aspect-square flex flex-col items-center justify-center gap-1 rounded-xl transition-all duration-300"
    style={{ borderRadius: "1.2rem" }}
  >
    <Icon className="text-white text-3xl md:text-4xl" />
    <p className="text-white text-xs font-semibold mt-1">{name}</p>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" style={{ minHeight: "100vh", padding: "8rem 0" }}>
      <h5 className="text-center text-custom-light">The Skills I Have</h5>
      <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-12">
        My Experience
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid gap-10"
        style={{
          width: "80vw",
          maxWidth: "1200px",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {/* Frontend Column */}
        <div className="glass-card rounded-2xl p-8 md:p-10">
          <h3 className="text-center text-white text-xl font-bold mb-6">
            Frontend Development
          </h3>
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
            }}
          >
            <Tile icon={SiJavascript} name="JavaScript" />
            <Tile icon={SiTypescript} name="TypeScript" />
            <Tile icon={SiReact} name="React" />
            <Tile icon={SiNextdotjs} name="Next.js" />
            <Tile icon={SiTailwindcss} name="Tailwind" />
          </div>
        </div>

        {/* Backend Column */}
        <div className="glass-card rounded-2xl p-8 md:p-10">
          <h3 className="text-center text-white text-xl font-bold mb-6">
            Backend Development
          </h3>
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
            }}
          >
            <Tile icon={SiNodedotjs} name="Node.js" />
            <Tile icon={SiExpress} name="Express" />
            <Tile icon={SiMongodb} name="MongoDB" />
            <Tile icon={SiPostgresql} name="PostgreSQL" />
            <Tile icon={SiPrisma} name="Prisma" />
            <Tile icon={SiRedis} name="Redis" />
            <Tile icon={SiPython} name="Python" />
            <Tile icon={SiDocker} name="Docker" />
            <Tile icon={SiFirebase} name="Firebase" />
            <Tile icon={SiGit} name="Git" />
            <Tile icon={SiGithub} name="GitHub" />
            <Tile icon={SiPostman} name="Postman" />
          </div>
        </div>
      </motion.div>

      <h5 className="text-center text-custom-light text-sm mt-12">
        More skills can be found on my resume
      </h5>

      {/* Mobile responsive */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
