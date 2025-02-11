import React, { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    canvas.style.background = "black";

    let particles = [];

    const clearCanvas = () => {
      ctx.fillStyle = "rgba(0,0,0,0.10)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    function Particle(x, y, speed, color) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.update = function () {
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        this.x += this.speed.x;
        this.y += this.speed.y;
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        const ang = Math.atan2(this.speed.y, this.speed.x);
        const mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
        const options = [ang + Math.PI / 4, ang - Math.PI / 4];
        const choice = Math.floor(Math.random() * options.length);
        if (Math.random() < 0.05) {
          this.speed.x = Math.cos(options[choice]) * mag;
          this.speed.y = Math.sin(options[choice]) * mag;
        }
      };
    }

    const speed = 4;
    const period = 1000; 

    const pulse = () => {
      setTimeout(pulse, period);
      const h = Math.random() * (210 - 150) + 150;
      for (let i = 0; i < 56; i++) {
        particles.push(
          new Particle(
            canvas.width / 2,
            canvas.height / 2,
            {
              x: Math.cos((i / 8) * 2 * Math.PI) * speed,
              y: Math.sin((i / 8) * 2 * Math.PI) * speed,
            },
            `hsl(${h},100%,50%)`
          )
        );
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      clearCanvas();
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        if (
          particles[i].x < 0 ||
          particles[i].x > canvas.width ||
          particles[i].y < 0 ||
          particles[i].y > canvas.height
        ) {
          particles.splice(i, 1);
          i--; 
        }
      }
    };

    pulse();
    animate();

    const handleResize = () => {
      setCanvasSize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default Background;
