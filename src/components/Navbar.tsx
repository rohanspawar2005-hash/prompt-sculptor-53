import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
      style={{
        height: 60,
        backgroundColor: scrolled ? "rgba(12,12,12,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-6 md:px-10">
        {/* Brand */}
        <a href="#home" className="text-gold font-extrabold text-[11px] tracking-[5px]">
          DZiGNR_5
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[10px] font-semibold tracking-[3px] uppercase text-text-secondary hover:text-text-primary transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-[-4px] left-0 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/rohan-pawar-a54434345/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-semibold tracking-[3px] uppercase border border-white/15 px-5 py-2 text-text-primary hover:bg-gold hover:text-base hover:border-gold transition-all duration-300"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-[1px] bg-gold transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-[1px] bg-gold transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1px] bg-gold transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-[60px] left-0 right-0 bg-base/95 backdrop-blur-xl border-b border-white/5 py-8 px-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[11px] font-semibold tracking-[3px] uppercase text-text-secondary hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/rohan-pawar-a54434345/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-semibold tracking-[3px] uppercase border border-gold px-5 py-3 text-gold text-center"
          >
            LinkedIn ↗
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
