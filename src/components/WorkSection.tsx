import { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, MoveUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import workAero from "@/assets/work-aero.png";
import workCravings from "@/assets/work-cravings.png";
import workGreengetways from "@/assets/work-greengetways.png";
import workMsrtc from "@/assets/work-msrtc.png";
import workEcopulse from "@/assets/work-ecopulse.png";
import workPurevessel from "@/assets/work-purevessel.png";
import workFlo from "@/assets/work-flo.png";
import workBmw from "@/assets/work-bmw.png";
import workUpdate from "@/assets/work-update.png";
import workAbunai from "@/assets/work-abunai.png";
import workEcole from "@/assets/work-ecole.png";
import workWeframe from "@/assets/work-weframe.png";
import workBuildforge from "@/assets/work-buildforge.png";

const projects = [
  {
    num: "01",
    title: "FLO — Money Made Simple",
    desc: "A clean finance experience focused on clarity, trust, and fast decision-making for everyday money management.",
    tags: ["Web App", "Finance UX", "Live Site"],
    link: "https://flo-money-made-simple.vercel.app/",
    image: workFlo,
    type: "Web",
    imgClass: "object-contain bg-white p-10",
  },
  {
    num: "02",
    title: "BMW — Premium Automotive Website",
    desc: "A polished brand-led automotive interface with a premium visual system and smooth path into the product experience.",
    tags: ["Web Design", "Brand UI", "Live Site"],
    link: "https://bmwby-rohan-p.vercel.app/",
    image: workBmw,
    type: "Web",
    imgClass: "object-contain bg-black p-10",
  },
  {
    num: "03",
    title: "BuildForge — Studio Platform",
    desc: "A bold studio platform interface focused on confident typography, sharp brand presence, and a clear path into the product workflow.",
    tags: ["Web App", "Studio UI", "Live Site"],
    link: "https://buildforge-studio.vercel.app/",
    image: workBuildforge,
    type: "Web",
    imgClass: "object-contain bg-white p-12",
  },
  {
    num: "04",
    title: "upDate — Launchpad Platform",
    desc: "A modern launch experience designed with strong hierarchy, crisp messaging, and recruiter-friendly project presentation.",
    tags: ["Web App", "Product UI", "Live Site"],
    link: "https://update-launchpad-yvro.vercel.app/",
    image: workUpdate,
    type: "Web",
    imgClass: "object-contain bg-white p-10",
  },
  {
    num: "05",
    title: "AbunAi — AI Product Website",
    desc: "A focused AI product interface balancing concise communication, confident branding, and a smooth browsing flow.",
    tags: ["AI Website", "Product UX", "Live Site"],
    link: "https://abunaibydzigner5.vercel.app/",
    image: workAbunai,
    type: "Web",
    imgClass: "object-contain bg-white p-10",
  },
  {
    num: "06",
    title: "Ecole Globale — International Girls' School",
    desc: "A refined school website experience presenting institutional trust, clear information architecture, and elegant brand presence.",
    tags: ["School Website", "UX Design", "Live Site"],
    link: "https://school-vision-spark.vercel.app/",
    image: workEcole,
    type: "Web",
    imgClass: "object-contain bg-[#822638] p-8",
  },
  {
    num: "07",
    title: "We Frame Technologies — Digital Studio",
    desc: "A technology brand website built around credibility, visual contrast, and direct access to service-led project details.",
    tags: ["Tech Website", "Brand UI", "Live Site"],
    link: "https://weframetechtechnologiesbuild-bright.vercel.app/",
    image: workWeframe,
    type: "Web",
    imgClass: "object-contain bg-[#070b12] p-8",
  },
  {
    num: "08",
    title: "Aero — Flight Booking App",
    desc: "Reducing booking anxiety through a linear, minimalist interface. High-contrast hierarchy, spacious inputs — frictionless trust-building from search to seat selection.",
    tags: ["Mobile App", "UX Research", "Figma"],
    link: "https://www.figma.com/design/oM8MFlQ39pxHQjEHLxnDvn/Flight-Booking-App-UI?node-id=229-667",
    image: workAero,
    type: "Mobile",
    imgClass: "object-contain bg-[#e84118]",
  },
  {
    num: "09",
    title: "Seamless Cravings — Food Delivery UX",
    desc: "Friction-free ordering with granular customisation and checkout transparency. Highly visual home screen with a detailed item customisation modal for full user control.",
    tags: ["Mobile App", "E-Commerce", "Figma"],
    link: "https://www.figma.com/design/UtZIUU6snZCjtEZq6UFZ9t/Zomato-App-Design-Clone?node-id=0-1",
    image: workCravings,
    type: "Mobile",
    imgClass: "object-cover object-[center_25%]",
  },
  {
    num: "10",
    title: "Green Getways — Eco Tourism Platform",
    desc: "Visual storytelling meets utility. Immersive hero imagery anchored by a multi-tab booking widget — transparent pricing, frictionless path from discovery to checkout.",
    tags: ["Web Design", "Eco UX", "Figma"],
    link: "https://www.figma.com/design/8fwSHgtDg396zOuLUhPjYa/Green-Getways-web-design?node-id=0-1",
    image: workGreengetways,
    type: "Web",
  },
  {
    num: "11",
    title: "MSRTC Redesign — Maharashtra's Lifeline",
    desc: "Transforming a complex government portal into an accessible, intuitive experience for all demographics. Modern UI retaining the official brand identity.",
    tags: ["Gov UX", "Accessibility", "Figma"],
    link: "https://www.figma.com/design/tM43IuYSgaxtDrBFipXwgH/MSRTC?node-id=1-1717",
    image: workMsrtc,
    type: "Web",
  },
  {
    num: "12",
    title: "EcoPulse — Personalised Sustainability App",
    desc: "Bridging the gap between intention and action. Personalised carbon impact dashboard with gamified challenges and positive reinforcement loops.",
    tags: ["Gamification", "Mobile UX", "Figma"],
    link: null,
    image: workEcopulse,
    type: "Mobile",
  },
  {
    num: "13",
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
            <p className="body-text max-w-xl text-right">
              Thirteen projects spanning live websites, mobile apps, and government portals —<br className="hidden md:inline" /> each one solving a real problem for real people.
            </p>
          </ScrollReveal>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ScrollReveal key={p.num} delay={i * 0.08}>
              <motion.div
                className="group relative rounded-lg overflow-hidden border border-white/[0.06] bg-white/[0.02] cursor-pointer shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-colors duration-500 hover:border-gold/35 hover:bg-white/[0.035]"
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -6, rotateX: 1.2, rotateY: -1.2 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image Container */}
                <div className={`relative aspect-[16/10] overflow-hidden ${p.imgClass?.includes("bg-") ? p.imgClass.split(" ").filter(c => c.startsWith("bg-")).join(" ") : "bg-white/[0.03]"}`}>
                  <motion.div
                    className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100"
                    animate={{
                      backgroundPosition: hoveredIndex === i ? "140% 0%" : "-40% 0%",
                    }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      backgroundImage: "linear-gradient(105deg, transparent 34%, rgba(200,168,122,0.2) 48%, transparent 62%)",
                      backgroundSize: "220% 100%",
                    }}
                  />
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full image-render-auto transform-gpu ${p.imgClass || "object-cover object-top"}`}
                    animate={{
                      scale: hoveredIndex === i ? 1.025 : 1,
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Project number */}
                  <span className="absolute top-4 left-4 text-[11px] font-bold tracking-[2px] text-white/40 uppercase transition-colors duration-300 group-hover:text-gold">
                    {p.num}
                  </span>

                  {/* Type badge */}
                  <motion.span
                    className="absolute top-4 right-4 text-[9px] font-bold tracking-[2px] uppercase border border-white/20 bg-black/40 backdrop-blur-sm px-3 py-1.5 text-white/70"
                    animate={{ y: hoveredIndex === i ? -2 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {p.type}
                  </motion.span>

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
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gold/90 text-black text-[11px] font-bold tracking-[2px] uppercase backdrop-blur-sm hover:bg-gold transition-colors"
                          >
                            View Project <ExternalLink size={14} strokeWidth={2.4} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                  <h3 className="flex items-start justify-between gap-3 text-[16px] md:text-[17px] font-bold text-text-primary group-hover:text-gold transition-colors duration-300 mb-2">
                    <span>{p.title}</span>
                    <MoveUpRight size={17} className="mt-0.5 shrink-0 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  </h3>
                  <p className="text-[12px] text-text-primary/60 leading-[1.7] mb-4 line-clamp-2">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t, tagIndex) => (
                      <span
                        key={t}
                        className="text-[9px] font-semibold tracking-[1px] uppercase border border-white/10 px-2.5 py-1 text-text-secondary transition-all duration-300 group-hover:border-gold/25 group-hover:text-text-primary"
                        style={{ transitionDelay: `${tagIndex * 45}ms` }}
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
