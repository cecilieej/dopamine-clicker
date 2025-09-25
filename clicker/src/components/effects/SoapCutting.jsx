// SoapCutting.jsx - ASMR slime visuals and soap cutting videos
// Affected by upgrades: 17 (Slime)
import React from 'react';

export default function SoapCutting() {
  return (
    <div className="soap-cutting-container">
      <div className="slime-visual">
        <div style={{
          position: 'fixed',
          bottom: '260px',
          left: '20px',
          width: '200px',
          height: '150px',
          background: 'linear-gradient(45deg, #ff6b9d, #c44569)',
          borderRadius: '15px',
          border: '2px solid #8e44ad',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'slimeSquish 2s ease-in-out infinite',
          zIndex: 5,
        }}>
          <div style={{
            color: 'white',
            fontSize: '14px',
            textAlign: 'center',
          }}>
            🌈 ASMR Slime<br/>
            *squish sounds*
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes slimeSquish {
            0%, 100% { 
              transform: scale(1); 
              border-radius: 15px; 
            }
            50% { 
              transform: scale(1.05); 
              border-radius: 20px; 
            }
          }
        `}
      </style>
    </div>
  );
}