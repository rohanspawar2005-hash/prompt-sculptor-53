import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    num: "01", title: "Aero — Flight Booking App",
    desc: "Reducing booking anxiety through a linear, minimalist interface. High-contrast hierarchy, spacious inputs — frictionless trust-building from search to seat selection.",
    tags: ["Mobile App", "UX Research", "Figma"],
    link: "https://www.figma.com/design/oM8MFlQ39pxHQjEHLxnDvn/Flight-Booking-App-UI?node-id=229-667",
  },
  {
    num: "02", title: "Seamless Cravings — Food Delivery UX",
    desc: "Friction-free ordering with granular customisation and checkout transparency. Highly visual home screen with a detailed item customisation modal for full user control.",
    tags: ["Mobile App", "E-Commerce", "Figma"],
    link: "https://www.figma.com/design/UtZIUU6snZCjtEZq6UFZ9t/Zomato-App-Design-Clone?node-id=0-1",
  },
  {
    num: "03", title: "Green Getways — Eco Tourism Platform",
    desc: "Visual storytelling meets utility. Immersive hero imagery anchored by a multi-tab booking widget — transparent pricing, frictionless path from discovery to checkout.",
    tags: ["Web Design", "Eco UX", "Figma"],
    link: "https://www.figma.com/design/8fwSHgtDg396zOuLUhPjYa/Green-Getways-web-design?node-id=0-1",
  },
  {
    num: "04", title: "MSRTC Redesign — Maharashtra's Lifeline",
    desc: "Transforming a complex government portal into an accessible, intuitive experience for all demographics. Modern UI retaining the official brand identity.",
    tags: ["Gov UX", "Accessibility", "Figma"],
    link: "https://www.figma.com/design/tM43IuYSgaxtDrBFipXwgH/MSRTC?node-id=1-1717",
  },
  {
    num: "05", title: "EcoPulse — Personalised Sustainability App",
    desc: "Bridging the gap between intention and action. Personalised carbon impact dashboard with gamified challenges and positive reinforcement loops.",
    tags: ["Gamification", "Mobile UX", "Figma"],
    link: null,
  },
  {
    num: "06", title: "Pure Vessel — Conscious E-Commerce",
    desc: "Radical reduction. Editorial photography. The strongest UX sometimes comes from removing what isn't essential — a masterclass in restraint.",
    tags: ["E-Commerce", "Minimalism", "Figma"],
    link: null,
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="section-padding" style={{ backgroundColor: "#0c0c0c" }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <ScrollReveal>
            <span className="eyebrow text-text-tertiary">Portfolio</span>
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

        <div className="border-t border-white/[0.07]">
          {projects.map((p, i) => (
            <ScrollReveal key={p.num} delay={i * 0.05}>
              <div className="relative group border-b border-white/[0.07] py-6 px-2 md:grid md:grid-cols-[60px_1fr_200px_140px] md:items-center gap-6 transition-colors duration-300 hover:bg-white/[0.015]">
                <span className="eyebrow text-text-tertiary hidden md:block">{p.num}</span>
                <div>
                  <h3 className="text-[17px] font-bold text-text-primary transition-colors duration-300 group-hover:text-gold">
                    <span className="md:hidden text-text-tertiary mr-2">{p.num}.</span>
                    {p.title}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1 leading-[1.7]">{p.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3 md:mt-0">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[9px] font-semibold tracking-[1px] uppercase border border-white/10 px-2.5 py-1 text-text-tertiary">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-3 md:mt-0 text-right">
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold tracking-[2px] uppercase text-gold hover:text-text-primary transition-colors"
                    >
                      View Project →
                    </a>
                  ) : (
                    <span className="text-[11px] font-bold tracking-[2px] uppercase text-text-tertiary">
                      Coming Soon
                    </span>
                  )}
                </div>
                {/* Hover underline */}
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
