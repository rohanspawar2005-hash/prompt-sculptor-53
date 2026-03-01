import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

import workAero from "@/assets/work-aero.png";
import workCravings from "@/assets/work-cravings.png";
import workGreengetways from "@/assets/work-greengetways.png";
import workMsrtc from "@/assets/work-msrtc.png";
import workEcopulse from "@/assets/work-ecopulse.png";
import workPurevessel from "@/assets/work-purevessel.png";

const projects = [
  {
    num: "01",
    title: "Aero — Flight Booking App",
    desc: "Reducing booking anxiety through a linear, minimalist interface. High-contrast hierarchy, spacious inputs — frictionless trust-building from search to seat selection.",
    tags: ["Mobile App", "UX Research", "Figma"],
    link: "https://www.figma.com/design/oM8MFlQ39pxHQjEHLxnDvn/Flight-Booking-App-UI?node-id=229-667",
    image: workAero,
    type: "Mobile",
  },
  {
    num: "02",
    title: "Seamless Cravings — Food Delivery UX",
    desc: "Friction-free ordering with granular customisation and checkout transparency. Highly visual home screen with a detailed item customisation modal for full user control.",
    tags: ["Mobile App", "E-Commerce", "Figma"],
    link: "https://www.figma.com/design/UtZIUU6snZCjtEZq6UFZ9t/Zomato-App-Design-Clone?node-id=0-1",
    image: workCravings,
    type: "Mobile",
  },
  {
    num: "03",
    title: "Green Getways — Eco Tourism Platform",
    desc: "Visual storytelling meets utility. Immersive hero imagery anchored by a multi-tab booking widget — transparent pricing, frictionless path from discovery to checkout.",
    tags: ["Web Design", "Eco UX", "Figma"],
    link: "https://www.figma.com/design/8fwSHgtDg396zOuLUhPjYa/Green-Getways-web-design?node-id=0-1",
    image: workGreengetways,
    type: "Web",
  },
  {
    num: "04",
    title: "MSRTC Redesign — Maharashtra's Lifeline",
    desc: "Transforming a complex government portal into an accessible, intuitive experience for all demographics. Modern UI retaining the official brand identity.",
    tags: ["Gov UX", "Accessibility", "Figma"],
    link: "https://www.figma.com/design/tM43IuYSgaxtDrBFipXwgH/MSRTC?node-id=1-1717",
    image: workMsrtc,
    type: "Web",
  },
  {
    num: "05",
    title: "EcoPulse — Personalised Sustainability App",
    desc: "Bridging the gap between intention and action. Personalised carbon impact dashboard with gamified challenges and positive reinforcement loops.",
    tags: ["Gamification", "Mobile UX", "Figma"],
    link: null,
    image: workEcopulse,
    type: "Mobile",
  },
  {
    num: "06",
    title: "Pure Vessel — Conscious E-Commerce",
    desc: "Radical reduction. Editorial photography. The strongest UX sometimes comes from removing what isn't essential — a masterclass in restraint.",
    tags: ["E-Commerce", "Minimalism", "Figma"],
    link: null,
    image: workPurevessel,
    type: "Web",
  },
];

const WorkSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="section-padding" style={{ backgroundColor: "#0c0c0c" }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <ScrollReveal>
            <span className="text-[12px] font-bold tracking-[3px] uppercase text-text-secondary">Projects</span>
            <h2 className="mt-4">
              <span className="heading-bold">Selected </span>
              <span className="heading-thin">Work</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="body-text max-w-md text-right">
              Six projects spanning mobile apps, web platforms, and government portals — each one solving a real problem for real people.
            </p>
          </ScrollReveal>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ScrollReveal key={p.num} delay={i * 0.08}>
              <motion.div
                className="group relative rounded-lg overflow-hidden border border-white/[0.06] bg-white/[0.02] cursor-pointer"
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.03]">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top"
                    animate={{
                      scale: hoveredIndex === i ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Project number */}
                  <span className="absolute top-4 left-4 text-[11px] font-bold tracking-[2px] text-white/40 uppercase">
                    {p.num}
                  </span>

                  {/* Type badge */}
                  <span className="absolute top-4 right-4 text-[9px] font-bold tracking-[2px] uppercase border border-white/20 bg-black/40 backdrop-blur-sm px-3 py-1.5 text-white/70">
                    {p.type}
                  </span>

                  {/* View CTA on hover */}
                  <AnimatePresence>
                    {hoveredIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        {p.link ? (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gold/90 text-black text-[11px] font-bold tracking-[2px] uppercase backdrop-blur-sm hover:bg-gold transition-colors"
                          >
                            View Project →
                          </a>
                        ) : (
                          <span className="px-6 py-3 border border-white/30 text-white/70 text-[11px] font-bold tracking-[2px] uppercase backdrop-blur-sm">
                            Coming Soon
                          </span>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-[16px] md:text-[17px] font-bold text-text-primary group-hover:text-gold transition-colors duration-300 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[12px] text-text-primary/60 leading-[1.7] mb-4 line-clamp-2">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-semibold tracking-[1px] uppercase border border-white/10 px-2.5 py-1 text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
