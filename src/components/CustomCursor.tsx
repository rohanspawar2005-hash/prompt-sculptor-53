import { useEffect, useRef, useState, useCallback } from "react";

interface Trail {
  x: number;
  y: number;
  alpha: number;
}

const TRAIL_LENGTH = 12;

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const trail = useRef<Trail[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const resize = useCallback(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
      trail.current.unshift({ x: e.clientX, y: e.clientY, alpha: 1 });
      if (trail.current.length > TRAIL_LENGTH) trail.current.pop();
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [role='button'], .hoverable")) setIsHovering(true);
    };
    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [role='button'], .hoverable")) setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    let raf: number;
    const draw = () => {
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        trail.current.forEach((point, i) => {
          const progress = i / TRAIL_LENGTH;
          point.alpha = 1 - progress;
          const radius = isHovering ? 3.5 - progress * 2.5 : 2.5 - progress * 2;
          if (radius > 0) {
            ctx.beginPath();
            ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 168, 122, ${point.alpha * 0.5})`;
            ctx.fill();
          }
        });
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(raf);
    };
  }, [isVisible, isHovering, resize]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[9998] pointer-events-none"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: isHovering ? 10 : 8,
          height: isHovering ? 10 : 8,
          borderRadius: "50%",
          backgroundColor: "#c8a87a",
          opacity: isVisible ? 1 : 0,
          transition: "width 0.2s, height 0.2s, opacity 0.3s",
        }}
      />
    </>
  );
};

export default CustomCursor;
