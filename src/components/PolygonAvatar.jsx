import React, { useState, useRef } from 'react';
import './PolygonAvatar.css';

export default function PolygonAvatar({ size = 360, className = '' }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;
    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`polygon-avatar-root ${className}`}
      style={{
        width: `${size}px`,
        height: `${size * 1.12}px`,
      }}
    >
      {/* Floating 3D Sparkle Star: Top Left (Cyan ✦) */}
      <div className="polygon-sparkle-tl">
        ✦
      </div>

      {/* Floating 3D Dot: Top Right (Purple) */}
      <div className="polygon-dot-tr" />

      {/* Floating 3D Dot: Mid Left (Orange) */}
      <div className="polygon-dot-ml" />

      {/* Floating 3D Sparkle Star: Bottom Right (Lilac ✦) */}
      <div className="polygon-sparkle-br">
        ✦
      </div>

      {/* 3D Tilting Polygon Frame */}
      <div
        className="polygon-avatar-frame"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* Polygon Mask Shape */}
        <div className="polygon-avatar-mask">
          {/* Subtle radiating geometric white line art behind portrait */}
          <svg
            viewBox="0 0 400 450"
            className="polygon-avatar-svg"
          >
            <circle cx="200" cy="225" r="160" fill="none" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="200" cy="225" r="230" fill="none" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="50" y1="50" x2="350" y2="400" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="350" y1="50" x2="50" y2="400" stroke="#ffffff" strokeWidth="1.5" />
          </svg>

          {/* Developer Portrait Image */}
          <img
            src="/avatar.jpeg"
            alt="Jeeva - Software Developer"
            className="polygon-avatar-img"
          />
        </div>

        {/* Polished White Hairline Outline */}
        <div className="polygon-avatar-outline" />
      </div>
    </div>
  );
}
