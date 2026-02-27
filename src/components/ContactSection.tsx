import ScrollReveal from "./ScrollReveal";
import { Linkedin, Mail, Palette, Camera } from "lucide-react";

const contactLinks = [
  { icon: Linkedin, label: "LinkedIn", value: "Rohan Pawar", href: "https://www.linkedin.com/in/rohan-pawar-a54434345/" },
  { icon: Mail, label: "Email", value: "rohanspawar2005@gmail.com", href: "mailto:rohanspawar2005@gmail.com" },
  { icon: Palette, label: "Instagram — Design Work", value: "@dzignr_5", href: "https://www.instagram.com/dzignr_5?igsh=MXMyMWo0bDZzeTNncg==" },
  { icon: Camera, label: "Instagram — Personal", value: "@rohan_pawar.515", href: "https://www.instagram.com/rohan_pawar.515?igsh=NmdzbDJrbmJzbG4x" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: "#0c0c0c" }}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left */}
        <div>
          <ScrollReveal>
            <span className="text-[12px] font-bold tracking-[3px] uppercase text-text-secondary">Get in Touch</span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="mt-4" style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.15 }}>
              <span className="text-text-primary">Let's create</span><br />
              <span className="text-text-primary">something </span>
              <span className="text-gold">great.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="gold-rule mt-6" />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="body-text mt-6 max-w-md">
              I'm open to full-time opportunities, freelance projects, and collaborations where design can make a real, measurable difference. I respond promptly — let's talk.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <a href="mailto:rohanspawar2005@gmail.com" className="btn-primary inline-block mt-8">
              Send an Email →
            </a>
          </ScrollReveal>
        </div>

        {/* Right — Links */}
        <div className="flex flex-col gap-0">
          {contactLinks.map((link, i) => (
            <ScrollReveal key={link.label} delay={i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-5 py-5 border-b border-white/[0.07] transition-all duration-300 hover:pl-3"
              >
                {/* Left gold bar */}
                <span className="w-[2px] h-0 bg-gold transition-all duration-300 group-hover:h-10 self-center" />
                <link.icon className="text-gold" size={22} strokeWidth={1.5} />
                <div className="flex-1">
                  <span className="text-[10px] font-bold tracking-[3px] uppercase text-text-secondary">{link.label}</span>
                  <span className="block text-sm font-semibold text-text-primary mt-1 transition-colors duration-300 group-hover:text-gold">
                    {link.value}
                  </span>
                </div>
                <span className="text-text-tertiary text-sm transition-colors duration-300 group-hover:text-gold">→</span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
