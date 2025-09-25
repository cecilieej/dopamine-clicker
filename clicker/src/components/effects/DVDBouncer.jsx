// DVDBouncer.jsx - Handles bouncing DVD logos around the screen
// Affected by upgrades: 1 (Bouncing DVD), 21 (DVD Speed I), 24 (Corner Hits), 38 (DVD Speed II)
import React, { useState, useEffect, useRef } from 'react';

export default function DVDBouncer({ count, hasSpeed2, hasCornerHits, hasTechnicolor }) {
  const [logos, setLogos] = useState([]);
  const animationRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    if (count <= 0) {
      setLogos([]);
      return;
    }

    // Initialize DVD logos
    const newLogos = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 60),
      vx: (Math.random() > 0.5 ? 1 : -1) * (hasSpeed2 ? 4 : 2),
      vy: (Math.random() > 0.5 ? 1 : -1) * (hasSpeed2 ? 4 : 2),
      color: hasTechnicolor ? `hsl(${Math.random() * 360}, 70%, 60%)` : '#ffffff',
    }));
    setLogos(newLogos);
  }, [count, hasSpeed2, hasTechnicolor]);

  useEffect(() => {
    if (logos.length === 0) return;

    const animate = () => {
      setLogos(prevLogos => prevLogos.map(logo => {
        let newX = logo.x + logo.vx;
        let newY = logo.y + logo.vy;
        let newVx = logo.vx;
        let newVy = logo.vy;
        let newColor = logo.color;

        // Bounce off walls
        if (newX <= 0 || newX >= window.innerWidth - 100) {
          newVx = -newVx;
          newX = Math.max(0, Math.min(newX, window.innerWidth - 100));
          if (hasTechnicolor) {
            newColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
          }
          
          // Corner hit detection
          if (hasCornerHits && (newY <= 0 || newY >= window.innerHeight - 60)) {
            // Corner hit! (would trigger bonus dopamine in game logic)
            console.log('Corner hit!');
          }
        }
        
        if (newY <= 0 || newY >= window.innerHeight - 60) {
          newVy = -newVy;
          newY = Math.max(0, Math.min(newY, window.innerHeight - 60));
          if (hasTechnicolor) {
            newColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
          }
        }

        return {
          ...logo,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
          color: newColor,
        };
      }));

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [logos.length, hasCornerHits, hasTechnicolor]);

  if (count <= 0) return null;

  return (
    <div ref={containerRef} className="dvd-container">
      {logos.map(logo => (
        <div
          key={logo.id}
          className="dvd-logo"
          style={{
            position: 'fixed',
            left: logo.x,
            top: logo.y,
            color: logo.color,
            fontSize: '20px',
            fontWeight: 'bold',
            pointerEvents: 'none',
            zIndex: 10,
            userSelect: 'none',
          }}
        >
          DVD
        </div>
      ))}
    </div>
  );
}