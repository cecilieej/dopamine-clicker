// Overstimulation.jsx - The ultimate chaos effect with all stimuli combined
// Affected by upgrades: 38 (Overstimulation)
import React, { useState, useEffect } from 'react';

export default function Overstimulation() {
  const [intensity, setIntensity] = useState(0);
  const [flashColors, setFlashColors] = useState(['#ff0000', '#00ff00', '#0000ff']);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Escalating intensity
    const intensityInterval = setInterval(() => {
      setIntensity(prev => Math.min(prev + 1, 100));
    }, 100);

    // Color flash cycling
    const colorInterval = setInterval(() => {
      setFlashColors([
        `hsl(${Math.random() * 360}, 100%, 50%)`,
        `hsl(${Math.random() * 360}, 100%, 50%)`,
        `hsl(${Math.random() * 360}, 100%, 50%)`,
      ]);
    }, 200);

    // Particle generation
    const particleInterval = setInterval(() => {
      const newParticles = Array.from({ length: 5 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        size: Math.random() * 20 + 10,
        emoji: ['🔥', '⚡', '💥', '🌟', '✨', '💫', '🚀', '💊'][Math.floor(Math.random() * 8)],
      }));
      
      setParticles(prev => [...prev.slice(-20), ...newParticles]);
    }, 150);

    return () => {
      clearInterval(intensityInterval);
      clearInterval(colorInterval);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div className="overstimulation-container">
      {/* Full screen overlay with strobing colors */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: `linear-gradient(45deg, ${flashColors[0]}, ${flashColors[1]}, ${flashColors[2]})`,
        opacity: 0.1 + (intensity * 0.003),
        zIndex: 15,
        pointerEvents: 'none',
        animation: 'strobeFlash 0.1s infinite',
      }} />

      {/* Particle explosions */}
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'fixed',
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            fontSize: `${particle.size}px`,
            color: particle.color,
            zIndex: 16,
            animation: 'particleExplode 1s ease-out forwards',
            pointerEvents: 'none',
            textShadow: `0 0 ${particle.size/2}px ${particle.color}`,
          }}
        >
          {particle.emoji}
        </div>
      ))}

      {/* Chaos text overlays */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '72px',
        fontWeight: 'bold',
        color: flashColors[0],
        zIndex: 17,
        animation: 'chaosText 0.2s infinite',
        pointerEvents: 'none',
        textShadow: `0 0 20px ${flashColors[0]}`,
      }}>
        OVERSTIMULATION
      </div>

      {/* Warning indicators */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(255, 0, 0, 0.9)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        zIndex: 18,
        animation: 'warningPulse 0.5s infinite',
        border: '3px solid #ff0000',
      }}>
        ⚠️ MAXIMUM STIMULATION REACHED ⚠️
      </div>

      {/* Intensity meter */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        width: '200px',
        height: '20px',
        background: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '10px',
        overflow: 'hidden',
        zIndex: 18,
        border: '2px solid #ff0000',
      }}>
        <div style={{
          width: `${intensity}%`,
          height: '100%',
          background: `linear-gradient(90deg, #ff0000 0%, #ff8800 50%, #ffff00 100%)`,
          animation: 'intensityPulse 0.3s infinite',
        }} />
        <div style={{
          position: 'absolute',
          top: '2px',
          left: '10px',
          fontSize: '10px',
          color: 'white',
          fontWeight: 'bold',
        }}>
          CHAOS: {intensity}%
        </div>
      </div>

      {/* Glitch effects */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
        zIndex: 16,
        pointerEvents: 'none',
        animation: 'glitchLines 0.1s infinite',
      }} />

      <style>
        {`
          @keyframes strobeFlash {
            0%, 50% { opacity: 0.05; }
            25%, 75% { opacity: 0.15; }
          }
          
          @keyframes particleExplode {
            0% { 
              transform: scale(0) rotate(0deg);
              opacity: 1;
            }
            50% {
              transform: scale(1.2) rotate(180deg);
              opacity: 0.8;
            }
            100% { 
              transform: scale(0) rotate(360deg);
              opacity: 0;
            }
          }
          
          @keyframes chaosText {
            0% { 
              transform: translate(-50%, -50%) scale(1) rotate(0deg);
              filter: hue-rotate(0deg);
            }
            25% { 
              transform: translate(-48%, -52%) scale(1.05) rotate(2deg);
              filter: hue-rotate(90deg);
            }
            50% { 
              transform: translate(-52%, -48%) scale(0.95) rotate(-2deg);
              filter: hue-rotate(180deg);
            }
            75% { 
              transform: translate(-48%, -52%) scale(1.02) rotate(1deg);
              filter: hue-rotate(270deg);
            }
            100% { 
              transform: translate(-50%, -50%) scale(1) rotate(0deg);
              filter: hue-rotate(360deg);
            }
          }
          
          @keyframes warningPulse {
            0%, 100% { 
              transform: translateX(-50%) scale(1);
              background: rgba(255, 0, 0, 0.9);
            }
            50% { 
              transform: translateX(-50%) scale(1.1);
              background: rgba(255, 100, 0, 0.9);
            }
          }
          
          @keyframes intensityPulse {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.5); }
          }
          
          @keyframes glitchLines {
            0% { transform: translateX(0px); }
            25% { transform: translateX(2px); }
            50% { transform: translateX(-1px); }
            75% { transform: translateX(1px); }
            100% { transform: translateX(0px); }
          }
        `}
      </style>
    </div>
  );
}