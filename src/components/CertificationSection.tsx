import ScrollReveal from "./ScrollReveal";
import certImg from "@/assets/certificate.jpg";

const partners = ["Microsoft", "Google Cloud", "AWS Educate", "Adobe", "Cisco", "Tech Mahindra", "Genpact", "NASSCOM"];

const CertificationSection = () => {
  return (
    <section id="certifications" className="section-padding" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[72px]">
        {/* Left — Image */}
        <ScrollReveal>
          <div className="relative overflow-hidden group">
            <img
              src={certImg}
              alt="Yuva AI Certification"
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base-light to-transparent" />
            <div className="absolute top-4 left-4 bg-gold text-base text-[9px] font-bold tracking-[3px] uppercase px-3 py-1.5">
              Certified
            </div>
          </div>
        </ScrollReveal>

        {/* Right — Content */}
        <div>
          <ScrollReveal>
            <span className="text-[10px] font-bold tracking-[3px] uppercase text-gold">
              Ministry of Electronics & IT · Nasscom IT-ITeS SSC
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="mt-4 text-2xl font-extrabold text-text-primary leading-tight">
              Certified in AI Strategy & Implementation — Yuva AI for All
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="body-text mt-6">
              Completed the Yuva AI for All programme — a nationally recognised initiative driving digital excellence under government oversight. This certification has equipped me with practical AI skills to optimise workflows, accelerate design output, and deliver precision-driven results.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ul className="mt-6 space-y-3">
              {[
                "Leveraging AI for operational efficiency and time management",
                "Implementing data-driven strategies for accurate decision-making",
                "Curriculum backed by AICTE, NSDC, and Skill India",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="text-gold font-bold mt-0.5">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="mt-8">
              <span className="eyebrow text-text-tertiary block mb-3">Industry Partners</span>
              <div className="flex flex-wrap gap-2">
                {partners.map((p) => (
                  <span key={p} className="pill-chip">{p}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
