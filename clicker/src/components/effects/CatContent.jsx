// CatContent.jsx - Displays cat videos or images
// Affected by upgrades: 13 (Cat Content)
import React from 'react';

export default function CatContent() {
  return (
    <div className="cat-content-container">
      <div className="hydraulic-press-simulator">
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          width: '250px',
          height: '180px',
          background: '#333',
          border: '2px solid #666',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          zIndex: 5,
        }}>
          <div style={{ fontSize: '18px', marginBottom: '10px' }}>🔧 Hydraulic Press</div>
          <div 
            className="press-block"
            style={{
              width: '60px',
              height: '20px',
              background: '#ff4444',
              animation: 'hydraulicPress 3s ease-in-out infinite',
            }}
          />
          <div style={{
            width: '80px',
            height: '10px',
            background: '#666',
            marginTop: '5px',
          }} />
        </div>
      </div>
      <style>
        {`
          @keyframes hydraulicPress {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(30px); height: 10px; }
          }
        `}
      </style>
    </div>
  );
}