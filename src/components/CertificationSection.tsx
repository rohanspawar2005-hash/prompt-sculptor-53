import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import certImg from "@/assets/certificate.jpg";
import certGoogleUx from "@/assets/cert-google-ux.png";
import certMicrosoftUx from "@/assets/cert-microsoft-ux.png";
import certDeloitteData from "@/assets/cert-deloitte-data.png";
import certDeloitteTech from "@/assets/cert-deloitte-tech.png";
import certIbmUx from "@/assets/cert-ibm-ux.jpeg";
import certSap from "@/assets/cert-sap.png";
import certSiemens from "@/assets/cert-siemens.png";
import certTataDataviz from "@/assets/cert-tata-dataviz.png";
import certTataGenai from "@/assets/cert-tata-genai.png";
import certLloydsUx from "@/assets/cert-lloyds-ux.png";
import certXboxUx from "@/assets/cert-xbox-ux.png";
import certAccenture from "@/assets/cert-accenture.png";
import certProductAi from "@/assets/cert-product-ai.png";
import certAgileDesign from "@/assets/cert-agile-design.png";
import certHypothesis from "@/assets/cert-hypothesis.png";
import certAgileTeam from "@/assets/cert-agile-team.png";
import certUxWriting from "@/assets/cert-ux-writing.png";
import certSapUi5 from "@/assets/cert-sap-ui5.png";
import certSapFiori from "@/assets/cert-sap-fiori.png";
import certSapFioriRap from "@/assets/cert-sap-fiori-rap.png";

const partners = ["Microsoft", "Google Cloud", "AWS Educate", "Adobe", "Cisco", "Tech Mahindra", "Genpact", "NASSCOM"];

const additionalCerts = [
  { img: certGoogleUx, title: "Google UX Design", org: "Coursera · Google", desc: "Professional Certificate — 8 courses covering the full UX design process from research to prototyping." },
  { img: certMicrosoftUx, title: "Microsoft UX Design", org: "Coursera · Microsoft", desc: "Professional Certificate — 4 courses in UI/UX fundamentals, prototyping, and accessibility." },
  { img: certXboxUx, title: "Interaction Design & UX/UI Principles", org: "Coursera · Xbox", desc: "Course on interaction design and UX/UI principles authorized by Xbox." },
  { img: certIbmUx, title: "UX Design Fundamentals", org: "IBM SkillsBuild", desc: "User Experience Design Fundamentals credential issued by IBM-SkillsBuild." },
  { img: certLloydsUx, title: "UX Design Advanced", org: "Lloyds Banking Group · Forage", desc: "Advanced job simulation covering customer research, value propositions, and presentation design." },
  { img: certUxWriting, title: "UX Content & Interface Strategy", org: "Coursera · Packt", desc: "Writing is Designing — UX content strategy and interface writing." },
  { img: certProductAi, title: "Product Analytics and AI", org: "Coursera · UVA Darden", desc: "Product analytics and AI from the Darden School of Business." },
  { img: certAgileDesign, title: "Agile Meets Design Thinking", org: "Coursera · UVA Darden", desc: "Combining agile methodology with design thinking principles." },
  { img: certHypothesis, title: "Hypothesis-Driven Development", org: "Coursera · UVA Darden", desc: "Data-driven product development through hypothesis testing." },
  { img: certAgileTeam, title: "Managing an Agile Team", org: "Coursera · UVA Darden", desc: "Leading and managing agile teams effectively." },
  { img: certAccenture, title: "Strategy Consulting Simulation", org: "Accenture · Forage", desc: "Strategy consulting tasks including user journey redesign and prioritisation." },
  { img: certDeloitteData, title: "Data Analytics Simulation", org: "Deloitte · Forage", desc: "Practical tasks in data analysis and forensic technology." },
  { img: certDeloitteTech, title: "Technology Simulation", org: "Deloitte · Forage", desc: "Practical tasks in coding and development." },
  { img: certSap, title: "Technical Consulting Simulation", org: "SAP · Forage", desc: "Tasks in data assembly, analysis, and presenting results." },
  { img: certSapUi5, title: "Advanced SAPUI5 Development", org: "SAP Learning", desc: "Intermediate-level course on full-screen and list-detail applications with UI5 controls." },
  { img: certSapFiori, title: "SAP Fiori Elements App Development", org: "SAP Learning", desc: "Developing SAP Fiori Elements apps based on CAP OData V4 Service." },
  { img: certSapFioriRap, title: "SAP Fiori Elements with RAP", org: "SAP Learning", desc: "Creating SAP Fiori Elements apps based on OData V4 RAP Service." },
  { img: certSiemens, title: "Project Manager Simulation", org: "Siemens · Forage", desc: "Developing KPIs and managing project dashboards." },
  { img: certTataDataviz, title: "Data Visualisation", org: "Tata · Forage", desc: "Business scenario framing, choosing visuals, and communicating insights." },
  { img: certTataGenai, title: "GenAI Data Analytics", org: "Tata · Forage", desc: "Exploratory data analysis, risk profiling, and AI-driven collections strategy." },
];

const CertificationSection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="certifications" className="section-padding" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Featured — Yuva AI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[72px]">
          <ScrollReveal>
            <div className="relative overflow-hidden group cursor-pointer" onClick={() => setLightbox(certImg)}>
              <img src={certImg} alt="Yuva AI Certification" loading="lazy" className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#111111] to-transparent" />
              <div className="absolute top-4 left-4 bg-gold text-base text-[9px] font-bold tracking-[3px] uppercase px-3 py-1.5">Featured</div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="text-[10px] font-bold tracking-[3px] uppercase text-gold">Ministry of Electronics & IT · Nasscom IT-ITeS SSC</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="mt-4 text-2xl font-extrabold text-text-primary leading-tight">Certified in AI Strategy & Implementation — Yuva AI for All</h3>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="body-text mt-6">Completed the Yuva AI for All programme — a nationally recognised initiative driving digital excellence under government oversight. This certification has equipped me with practical AI skills to optimise workflows, accelerate design output, and deliver precision-driven results.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <ul className="mt-6 space-y-3">
                {["Leveraging AI for operational efficiency and time management", "Implementing data-driven strategies for accurate decision-making", "Curriculum backed by AICTE, NSDC, and Skill India"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary"><span className="text-gold font-bold mt-0.5">›</span>{item}</li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="mt-8">
                <span className="eyebrow text-text-tertiary block mb-3">Industry Partners</span>
                <div className="flex flex-wrap gap-2">
                  {partners.map((p) => (<span key={p} className="pill-chip">{p}</span>))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Additional Certifications Grid */}
        <div className="mt-20">
          <ScrollReveal>
            <span className="eyebrow text-text-tertiary">Additional Credentials</span>
            <h3 className="mt-4 mb-10">
              <span className="heading-bold text-3xl md:text-4xl block">Professional</span>
              <span className="heading-thin text-3xl md:text-4xl block">Certifications.</span>
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalCerts.map((cert, i) => (
              <ScrollReveal key={cert.title} delay={i * 0.05}>
                <div
                  className="group border border-white/[0.07] overflow-hidden cursor-pointer transition-all duration-500 hover:border-gold/30"
                  onClick={() => setLightbox(cert.img)}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={cert.img} alt={cert.title} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111111] to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="text-[9px] font-bold tracking-[2px] uppercase text-gold">{cert.org}</span>
                    <h4 className="mt-2 text-sm font-bold text-text-primary leading-snug">{cert.title}</h4>
                    <p className="mt-2 text-xs text-text-tertiary leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 cursor-pointer" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Certificate" className="max-w-full max-h-[90vh] object-contain" />
        </div>
      )}
    </section>
  );
};

export default CertificationSection;
