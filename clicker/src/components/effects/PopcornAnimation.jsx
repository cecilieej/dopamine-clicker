// PopcornAnimation.jsx - Adds popcorn animation effects on clicks
// Affected by upgrades: 16 (Popcorn Animation)
import React, { useState, useEffect } from 'react';

export default function PopcornAnimation() {
  const [popcorns, setPopcorns] = useState([]);

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.classList.contains('clicker-btn')) {
        const rect = event.target.getBoundingClientRect();
        
        // Create multiple popcorn pieces
        const newPopcorns = Array.from({ length: 8 }, (_, i) => ({
          id: Date.now() + i,
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          vx: (Math.random() - 0.5) * 8,
          vy: Math.random() * -5 - 3,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10,
        }));

        setPopcorns(prev => [...prev, ...newPopcorns]);

        // Remove popcorns after animation
        setTimeout(() => {
          setPopcorns(prev => prev.filter(p => !newPopcorns.includes(p)));
        }, 1500);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (popcorns.length === 0) return;

    const animatePopcorns = () => {
      setPopcorns(prevPopcorns => 
        prevPopcorns.map(popcorn => ({
          ...popcorn,
          x: popcorn.x + popcorn.vx,
          y: popcorn.y + popcorn.vy,
          vy: popcorn.vy + 0.3, // gravity
          rotation: popcorn.rotation + popcorn.rotationSpeed,
        }))
      );
    };

    const interval = setInterval(animatePopcorns, 16);
    return () => clearInterval(interval);
  }, [popcorns.length]);

  return (
    <div className="popcorn-container">
      {popcorns.map(popcorn => (
        <div
          key={popcorn.id}
          className="popcorn"
          style={{
            position: 'fixed',
            left: popcorn.x,
            top: popcorn.y,
            transform: `translate(-50%, -50%) rotate(${popcorn.rotation}deg)`,
            fontSize: '16px',
            pointerEvents: 'none',
            zIndex: 15,
            transition: 'opacity 0.5s ease-out',
          }}
        >
          🍿
        </div>
      ))}
    </div>
  );
}