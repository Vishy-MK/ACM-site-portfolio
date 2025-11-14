import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    
    const setCanvasDimensions = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    
      constructor(canvas: HTMLCanvasElement) { 
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = this.getRandomColor();
      }
    
      private getRandomColor() {
        const colors = [
          "rgba(59, 130, 246, 0.2)", 
          "rgba(139, 92, 246, 0.2)", 
          "rgba(16, 185, 129, 0.2)", 
          "rgba(245, 158, 11, 0.2)", 
          "rgba(239, 68, 68, 0.2)", 
          "rgba(236, 72, 153, 0.2)", 
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }
    
      update(canvas: HTMLCanvasElement) {
        this.x += this.speedX;
        this.y += this.speedY;
    
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
    
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
    
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }
    
    

    const particles: Particle[] = [];
    const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000));

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas));
    }

    const animate = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return; 

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(canvas);
        particle.draw(ctx);
      });

      ctx.strokeStyle = "rgba(200, 200, 200, 0.05)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
}
