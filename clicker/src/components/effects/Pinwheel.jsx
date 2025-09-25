// Pinwheel.jsx - Adds animated sunrays radiating from the clicker button
// Affected by upgrades: 12 (Pinwheel)
import React, { useEffect, useRef } from 'react';

export default function Pinwheel() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Find the clicker button to position rays from it
    const clickerBtn = document.querySelector('.clicker-btn');
    if (!clickerBtn) return;

    const updatePosition = () => {
      const rect = clickerBtn.getBoundingClientRect();
      const container = containerRef.current;
      if (container) {
        container.style.left = `${rect.left + rect.width / 2}px`;
        container.style.top = `${rect.top + rect.height / 2}px`;
      }
    };

    updatePosition();
    
    // Update position on window resize
    window.addEventListener('resize', updatePosition);
    
    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="pinwheel-container"
      style={{
        position: 'fixed',
        width: '400px',
        height: '400px',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    >
      {/* Create 12 sunrays */}
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          className="sunray"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '200px',
            height: '4px',
            background: 'linear-gradient(to right, rgba(255, 215, 0, 0.6), transparent)',
            transformOrigin: '0 50%',
            transform: `translate(0, -50%) rotate(${i * 30}deg)`,
            animation: `pinwheelSpin 6s linear infinite`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
      <style>
        {`
          @keyframes pinwheelSpin {
            from { transform: translate(0, -50%) rotate(0deg); }
            to { transform: translate(0, -50%) rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}