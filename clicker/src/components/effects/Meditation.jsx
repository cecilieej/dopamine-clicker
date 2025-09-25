// Meditation.jsx - Adds meditation visuals and calming audio
// Affected by upgrades: 29 (Meditation), 30 (Meditation ×2)
import React from 'react';

export default function Meditation({ isDoubled }) {
  const containerStyle = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '250px',
    height: '200px',
    background: 'linear-gradient(135deg, rgba(147, 112, 219, 0.8), rgba(138, 43, 226, 0.8))',
    borderRadius: '15px',
    border: '2px solid #9370db',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    zIndex: 5,
    animation: isDoubled ? 'meditationDouble 4s ease-in-out infinite' : 'meditation 8s ease-in-out infinite',
  };

  return (
    <div className="meditation-container">
      <div style={containerStyle}>
        <div style={{ fontSize: '24px', marginBottom: '10px' }}>🧘‍♀️</div>
        <div style={{ fontSize: '14px', textAlign: 'center', marginBottom: '10px' }}>
          Mindfulness Session
        </div>
        <div style={{
          width: '60px',
          height: '60px',
          border: '2px solid white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'breathe 4s ease-in-out infinite',
        }}>
          <div style={{
            width: '30px',
            height: '30px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            animation: 'innerBreathe 4s ease-in-out infinite',
          }} />
        </div>
        <div style={{ fontSize: '10px', marginTop: '10px' }}>
          {isDoubled ? '2x Effectiveness' : 'Breathe... Relax...'}
        </div>
      </div>
      <style>
        {`
          @keyframes meditation {
            0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.8; }
            50% { transform: translateX(-50%) scale(1.05); opacity: 1; }
          }
          
          @keyframes meditationDouble {
            0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.8; }
            25% { transform: translateX(-50%) scale(1.1); opacity: 1; }
            50% { transform: translateX(-50%) scale(1); opacity: 0.8; }
            75% { transform: translateX(-50%) scale(1.1); opacity: 1; }
          }
          
          @keyframes breathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          
          @keyframes innerBreathe {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(0.8); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}