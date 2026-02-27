import ScrollReveal from "./ScrollReveal";
import manifestoImg from "@/assets/manifesto.jpg";

const metrics = [
  { value: "6", label: "Projects" },
  { value: "100+", label: "Screens" },
  { value: "AI", label: "Certified" },
  { value: "∞", label: "Iterations" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left — Image */}
        <ScrollReveal>
          <div className="relative">
            {/* Offset border */}
            <div className="absolute -top-5 -left-5 w-full h-full border border-gold/[0.18] z-0" />
            <div className="relative z-10 overflow-hidden group">
              <div className="h-[2px] bg-gradient-to-r from-gold to-transparent w-3/4" />
              <img
                src={manifestoImg}
                alt="Manifesto visual"
                loading="lazy"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Right — Text */}
        <div>
          <ScrollReveal>
            <span className="text-[12px] font-bold tracking-[3px] uppercase text-text-secondary">My Manifesto</span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="mt-4">
              <span className="heading-bold block">Build What</span>
              <span className="heading-thin block">Matters.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="gold-rule mt-6" />
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <blockquote className="mt-8 border-l-2 border-gold pl-6 text-[22px] font-bold italic text-text-primary leading-[1.5]">
              "Design is a strategic investment — not just decoration."
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="body-text mt-8">
              My work sits at the intersection of human empathy and business logic. I strive to humanise complex technology by focusing on clarity — ensuring every pixel earns its place.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <p className="body-text mt-4">
              I approach every project as a user advocate first. By studying needs before drawing a single frame, the solutions I design don't just look good — they perform. Because when we truly advocate for the user, sustainable growth follows naturally.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-10 pt-8 border-t border-white/[0.07] grid grid-cols-4 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <span className="text-gold text-3xl md:text-4xl font-extrabold">{m.value}</span>
                  <span className="block text-[12px] font-bold tracking-[3px] uppercase text-text-secondary mt-2">{m.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
