import React from "react";
import "./style.css";

export default function ParticlesBackground() {
  const particles = Array.from({ length: 25 }); // ساخت 25 ذره

  return (
    <div className="particles-container">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2; // بین 2 تا 6 پیکسل
        const left = Math.random() * 100; // موقعیت افقی
        const top = Math.random() * 100;  // موقعیت عمودی
        const duration = Math.random() * 5 + 5; // بین 5 تا 10 ثانیه
        const opacity = Math.random();

        const style = {
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}vw`,
          top: `${top}vh`,
          animationDuration: `${duration}s`,
          opacity,
        };

        return <div key={i} className="particle" style={style}></div>;
      })}
    </div>
  );
}
