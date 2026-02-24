import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", icon: "🔍", title: "Discover", desc: "Understand the user's world through research, interviews, and empathy mapping. No assumptions — only evidence." },
  { num: "02", icon: "📐", title: "Define", desc: "Translate insights into problem statements, user journeys, and information architecture. Clarity before creativity." },
  { num: "03", icon: "✏️", title: "Design", desc: "Iterative wireframes to high-fidelity prototypes. Every layout decision is intentional, every interaction deliberate." },
  { num: "04", icon: "📊", title: "Validate", desc: "Test with real users. Gather data. Refine until the experience is not just functional — but frictionless." },
];

const ProcessSection = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: "#161616" }}>
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <span className="eyebrow text-text-tertiary">Methodology</span>
          <h2 className="mt-4 mb-12">
            <span className="heading-bold">Design </span>
            <span className="heading-thin">Process</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="border border-white/[0.07] grid grid-cols-1 md:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative p-8 group transition-colors duration-500 hover:bg-white/[0.02] ${i > 0 ? "border-t md:border-t-0 md:border-l border-white/[0.07]" : ""}`}
              >
                <span className="eyebrow text-text-tertiary">{step.num}</span>
                <div className="text-3xl mt-4 mb-3">{step.icon}</div>
                <h3 className="text-sm font-bold text-text-primary tracking-wide">{step.title}</h3>
                <p className="text-xs text-text-secondary mt-2 leading-[1.8]">{step.desc}</p>
                {/* Bottom sweep line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProcessSection;
