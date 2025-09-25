// Vines.jsx - Adds overlay vines and nature visuals
// Affected by upgrades: 34 (Vines)
import React from 'react';

export default function Vines() {
  const vines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    side: i % 2 === 0 ? 'left' : 'right',
    delay: i * 0.5,
    height: 60 + (i % 3) * 20,
  }));

  return (
    <div className="vines-container">
      {vines.map(vine => (
        <div
          key={vine.id}
          style={{
            position: 'fixed',
            [vine.side]: '0px',
            top: `${20 + vine.id * 80}px`,
            width: '80px',
            height: `${vine.height}px`,
            background: 'linear-gradient(45deg, #27ae60, #2ecc71, #58d68d)',
            clipPath: vine.side === 'left' 
              ? 'polygon(0% 0%, 70% 10%, 85% 40%, 60% 60%, 75% 85%, 45% 100%, 0% 90%)'
              : 'polygon(100% 0%, 30% 10%, 15% 40%, 40% 60%, 25% 85%, 55% 100%, 100% 90%)',
            opacity: 0.7,
            zIndex: 2,
            animation: `vineGrow ${2 + vine.delay}s ease-out`,
            transformOrigin: 'top',
          }}
        >
          {/* Vine leaves */}
          <div style={{
            position: 'absolute',
            top: '20%',
            [vine.side]: vine.side === 'left' ? '-10px' : '-10px',
            width: '20px',
            height: '15px',
            background: '#2ecc71',
            borderRadius: '50% 0',
            transform: vine.side === 'left' ? 'rotate(-45deg)' : 'rotate(45deg)',
          }} />
          <div style={{
            position: 'absolute',
            top: '50%',
            [vine.side]: vine.side === 'left' ? '-8px' : '-8px',
            width: '18px',
            height: '12px',
            background: '#27ae60',
            borderRadius: '50% 0',
            transform: vine.side === 'left' ? 'rotate(-30deg)' : 'rotate(30deg)',
          }} />
          <div style={{
            position: 'absolute',
            top: '80%',
            [vine.side]: vine.side === 'left' ? '-12px' : '-12px',
            width: '22px',
            height: '18px',
            background: '#58d68d',
            borderRadius: '50% 0',
            transform: vine.side === 'left' ? 'rotate(-60deg)' : 'rotate(60deg)',
          }} />
        </div>
      ))}
      
      {/* Corner decorations */}
      <div style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle at bottom right, #27ae60 30%, transparent 70%)',
        opacity: 0.6,
        zIndex: 2,
      }} />
      <div style={{
        position: 'fixed',
        top: '0px',
        right: '0px',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle at bottom left, #2ecc71 30%, transparent 70%)',
        opacity: 0.6,
        zIndex: 2,
      }} />
      
      <style>
        {`
          @keyframes vineGrow {
            0% { 
              transform: scaleY(0);
              opacity: 0;
            }
            50% { 
              opacity: 0.4;
            }
            100% { 
              transform: scaleY(1);
              opacity: 0.7;
            }
          }
        `}
      </style>
    </div>
  );
}