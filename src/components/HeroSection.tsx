import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpeg";

const ease = [0.22, 1, 0.36, 1] as const;
type EaseTuple = [number, number, number, number];
const e = ease as unknown as EaseTuple;

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#0c0c0c" }}>
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 md:gap-0 items-center pt-20 md:pt-0">
        {/* Left */}
        <div className="relative z-10 py-10 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: e }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="block w-8 h-[1px] bg-gold" />
            <span className="text-gold text-[12px] font-bold tracking-[4px] uppercase">UI/UX Designer & User Advocate</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: e }}
            className="text-text-primary font-extrabold leading-[1.02] tracking-[-3px]"
            style={{ fontSize: "clamp(56px, 8vw, 88px)" }}
          >
            ROHAN
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: e }}
            className="text-text-secondary font-extralight italic leading-[1.02] tracking-[-3px]"
            style={{ fontSize: "clamp(56px, 8vw, 88px)" }}
          >
            Pawar.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: e }}
            className="mt-8 text-text-secondary text-base font-normal max-w-[420px] leading-[1.8]"
          >
            Complexity to Clarity. I bridge the gap between human needs and design — crafting experiences where every pixel earns its place and every interaction drives real outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: e }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#work" className="btn-primary">View My Work →</a>
            <a href="#contact" className="btn-ghost">Get in Touch</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 hidden md:flex items-center gap-3"
          >
            <span className="eyebrow text-text-tertiary">Scroll to explore</span>
            <div className="relative w-[1px] h-8 bg-white/10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full bg-gold" style={{ height: "100%", animation: "scanline 2s ease-in-out infinite" }} />
            </div>
          </motion.div>
        </div>

        {/* Right — Image */}
        <div className="relative h-[500px] md:h-screen">
          <img
            src={heroPortrait}
            alt="Rohan Pawar"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/50 to-transparent" style={{ width: "40%" }} />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-base to-transparent" />

          <div className="absolute bottom-8 right-4 hidden md:block">
            <span
              className="text-[9px] font-semibold tracking-[3px] uppercase text-text-tertiary"
              style={{ writingMode: "vertical-rl" }}
            >
              Rohan Pawar · 2025
            </span>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes scanline {
          0%, 100% { transform: translateY(-100%); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
