import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const blobPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], .hoverable, input, textarea")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], .hoverable, input, textarea")) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    let raf: number;
    const animate = () => {
      const dx = mouse.current.x - blobPos.current.x;
      const dy = mouse.current.y - blobPos.current.y;

      // Smooth spring-like follow
      velocity.current.x += dx * 0.12;
      velocity.current.y += dy * 0.12;
      velocity.current.x *= 0.75;
      velocity.current.y *= 0.75;

      blobPos.current.x += velocity.current.x;
      blobPos.current.y += velocity.current.y;

      // Calculate stretch based on velocity
      const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2);
      const angle = Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI);
      const stretch = Math.min(speed * 0.04, 0.6);

      if (blobRef.current) {
        const baseSize = isHovering ? 64 : isClicking ? 28 : 36;
        blobRef.current.style.width = `${baseSize}px`;
        blobRef.current.style.height = `${baseSize}px`;
        blobRef.current.style.transform = `translate(${blobPos.current.x - baseSize / 2}px, ${blobPos.current.y - baseSize / 2}px) rotate(${angle}deg) scaleX(${1 + stretch}) scaleY(${1 - stretch * 0.4})`;
        blobRef.current.style.borderColor = isHovering ? "rgba(200,168,122,0.6)" : "rgba(200,168,122,0.35)";
        blobRef.current.style.backgroundColor = isHovering
          ? "rgba(200,168,122,0.1)"
          : isClicking
          ? "rgba(200,168,122,0.15)"
          : "transparent";
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(raf);
    };
  }, [isHovering, isVisible, isClicking]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <div
      ref={blobRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: "1.5px solid rgba(200,168,122,0.35)",
        opacity: isVisible ? 1 : 0,
        transition: "width 0.3s ease, height 0.3s ease, opacity 0.4s, background-color 0.3s, border-color 0.3s",
        backdropFilter: "blur(1px)",
      }}
    />
  );
};

export default CustomCursor;
