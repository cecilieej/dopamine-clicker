// VirtualPet.jsx - Adds a virtual pet that reacts to clicks and progress
// Affected by upgrades: 36 (Virtual Pet)
import React, { useState, useEffect } from 'react';

export default function VirtualPet() {
  const [petState, setPetState] = useState('happy');
  const [petPosition, setPetPosition] = useState({ x: 300, y: 300 });
  const [isMoving, setIsMoving] = useState(false);
  
  const petStates = {
    happy: { emoji: '🐱', message: 'Purr purr!' },
    excited: { emoji: '🐱‍🏍', message: 'So much dopamine!' },
    sleepy: { emoji: '😴', message: 'Zzz...' },
    playful: { emoji: '🐱‍💻', message: 'Let\'s play!' },
    hungry: { emoji: '🐱‍🍽', message: 'Feed me clicks!' },
  };

  useEffect(() => {
    // Change pet state periodically
    const stateInterval = setInterval(() => {
      const states = Object.keys(petStates);
      setPetState(states[Math.floor(Math.random() * states.length)]);
    }, 4000);

    // Move pet around occasionally
    const moveInterval = setInterval(() => {
      setIsMoving(true);
      setPetPosition({
        x: Math.random() * (window.innerWidth - 200) + 100,
        y: Math.random() * (window.innerHeight - 200) + 100,
      });
      
      setTimeout(() => setIsMoving(false), 1000);
    }, 8000);

    return () => {
      clearInterval(stateInterval);
      clearInterval(moveInterval);
    };
  }, []);

  const currentPet = petStates[petState];

  return (
    <div className="virtual-pet-container">
      <div 
        style={{
          position: 'fixed',
          left: `${petPosition.x}px`,
          top: `${petPosition.y}px`,
          width: '120px',
          height: '100px',
          background: 'linear-gradient(135deg, #f39c12, #e67e22)',
          borderRadius: '50px 50px 20px 20px',
          border: '3px solid #d68910',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          zIndex: 8,
          cursor: 'pointer',
          transition: isMoving ? 'all 1s ease-in-out' : 'transform 0.3s ease',
          animation: petState === 'excited' ? 'petBounce 0.5s ease-in-out infinite' : 'petIdle 3s ease-in-out infinite',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
        onClick={() => setPetState('excited')}
      >
        <div style={{ fontSize: '32px', marginBottom: '5px' }}>
          {currentPet.emoji}
        </div>
        <div style={{ fontSize: '10px', textAlign: 'center', fontWeight: 'bold' }}>
          {currentPet.message}
        </div>
      </div>

      {/* Pet status bar */}
      <div style={{
        position: 'fixed',
        left: `${petPosition.x}px`,
        top: `${petPosition.y - 30}px`,
        width: '120px',
        height: '20px',
        background: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '8px',
        zIndex: 9,
        transition: isMoving ? 'all 1s ease-in-out' : 'none',
      }}>
        ❤️ Happy • 🍽️ Fed • ⚡ Energized
      </div>

      {/* Pet treats/rewards */}
      {petState === 'excited' && (
        <div style={{
          position: 'fixed',
          left: `${petPosition.x + 60}px`,
          top: `${petPosition.y - 10}px`,
          fontSize: '20px',
          zIndex: 10,
          animation: 'treatFloat 1s ease-out',
          pointerEvents: 'none',
        }}>
          🦴
        </div>
      )}

      <style>
        {`
          @keyframes petBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes petIdle {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes treatFloat {
            0% { 
              transform: translateY(0) rotate(0deg);
              opacity: 1;
            }
            100% { 
              transform: translateY(-30px) rotate(360deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}