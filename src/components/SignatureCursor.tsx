import { type JSX, useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
};

const SignatureCursor = (): JSX.Element | null => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on mobile for performance and UX
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - mouseRef.current.x;
      const dy = e.clientY - mouseRef.current.y;

      // Calculate speed to determine thickness (faster = thinner line)
      const speed = Math.sqrt(dx * dx + dy * dy);
      const targetSize = Math.max(0.55, 6 - speed * 0.1);

      mouseRef.current = { x: e.clientX, y: e.clientY };

      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        vx: dx,
        vy: dy,
        life: 1.0,
        size: targetSize,
      });

      // Keep the array manageable
      if (pointsRef.current.length > 100) {
        pointsRef.current.shift();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const points = pointsRef.current;
      if (points.length < 2) {
        requestAnimationFrame(animate);
        return;
      }

      // Draw the "Ink" Trail
      for (let i = 1; i < points.length; i++) {
        const p1 = points[i - 1];
        const p2 = points[i];

        // Gradient life fade
        p1.life -= 0.015;

        if (p1.life > 0) {
          ctx.beginPath();
          ctx.lineCap = "round";
          ctx.lineJoin = "round";

          // Style: Orange/Gold ink feel
          ctx.strokeStyle = `rgba(255, 140, 0, ${p1.life})`;
          ctx.lineWidth = p1.size;

          // Quadratic curve for smoother "calligraphy" look
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;

          ctx.moveTo(p1.x, p1.y);
          ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
          ctx.stroke();
        }
      }

      // Draw Cursor Head (Glowing Dot)
      const last = points[points.length - 1];
      if (last) {
        ctx.beginPath();
        ctx.arc(last.x, last.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#FF8C00";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#FFA500";
        ctx.fill();
        ctx.shadowBlur = 0; // Reset blur for next frame
      }

      // Cleanup dead points
      pointsRef.current = points.filter((p) => p.life > 0);
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none w-full h-full"
    />
  );
};

export default SignatureCursor;
