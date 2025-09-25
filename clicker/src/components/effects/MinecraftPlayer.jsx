// MinecraftPlayer.jsx - Displays Minecraft gameplay visuals and audio
// Affected by upgrades: 18 (Minecraft)
import React from 'react';

export default function MinecraftPlayer() {
  return (
    <div className="minecraft-container">
      <div className="minecraft-visual">
        <div style={{
          position: 'fixed',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          width: '180px',
          height: '120px',
          background: '#2d5a27',
          border: '3px solid #8B4513',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '12px',
          zIndex: 5,
          fontFamily: 'monospace',
        }}>
          <div style={{ marginBottom: '10px' }}>⛏️ Minecraft</div>
          <div style={{
            width: '80%',
            height: '4px',
            background: '#4a4a4a',
            borderRadius: '2px',
            overflow: 'hidden',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, #2ecc71, #27ae60)',
              animation: 'minecraftProgress 3s ease-in-out infinite',
            }} />
          </div>
          <div style={{ marginTop: '8px', fontSize: '10px' }}>
            *mining sounds*
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes minecraftProgress {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
}