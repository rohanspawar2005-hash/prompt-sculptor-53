import { useInView } from "react-intersection-observer";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "UX / UI Design", score: 97, desc: "End-to-end product design with user-centred methodology" },
  { name: "Figma Prototyping", score: 95, desc: "High-fidelity interactive prototypes and design systems" },
  { name: "User Research & Advocacy", score: 92, desc: "Qualitative and quantitative research driving design decisions" },
  { name: "Visual Storytelling", score: 88, desc: "Communicating complex ideas through compelling visuals" },
  { name: "Information Architecture", score: 84, desc: "Structuring content for intuitive navigation and findability" },
  { name: "AI Strategy & Implementation", score: 80, desc: "Leveraging AI tools to optimise design workflows" },
];

const tools = ["Figma", "Prototyping", "User Research", "Wireframing", "Usability Testing", "Design Systems", "AI Tools", "Visual Design"];

const SkillBar = ({ name, score, desc, delay }: { name: string; score: number; desc: string; delay: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="mb-8">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm font-semibold text-text-primary">{name}</span>
        <span className="text-sm font-bold text-gold">{score} / 100</span>
      </div>
      <div className="h-[2px] bg-white/[0.07] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-gold to-gold/60"
          style={{
            width: inView ? `${score}%` : "0%",
            transition: `width 1.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
          }}
        />
      </div>
      <p className="text-xs text-text-secondary mt-1.5">{desc}</p>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: "#0c0c0c" }}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[340px_1fr] gap-12 md:gap-20">
        {/* Left */}
        <div>
          <ScrollReveal>
            <span className="text-[12px] font-bold tracking-[3px] uppercase text-text-secondary">Expertise</span>
            <h2 className="mt-4">
              <span className="heading-bold block">Core</span>
              <span className="heading-thin block">Skillset</span>
            </h2>
            <p className="body-text mt-6">
              A focused toolkit honed through real projects — every skill earned through practice, not theory.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="pill-chip">{t}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right — Bars */}
        <ScrollReveal delay={0.1}>
          <div>
            {skills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.1} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
