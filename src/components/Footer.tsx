const Footer = () => {
  return (
    <footer className="border-t border-white/[0.07] py-6 px-6 md:px-10" style={{ backgroundColor: "#0c0c0c" }}>
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[2px] uppercase">
        <span className="font-extrabold text-gold text-sm tracking-[3px]">DZiGNR_5</span>
        <span className="text-text-secondary text-center">© 2026 Rohan Pawar · All rights reserved</span>
        <span className="text-text-secondary">Complexity to Clarity</span>
      </div>
    </footer>
  );
};

export default Footer;
