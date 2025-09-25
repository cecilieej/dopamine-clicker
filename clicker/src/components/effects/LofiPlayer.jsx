// LofiPlayer.jsx - Adds lofi beats music with Lofi Girl visual
// Affected by upgrades: 10 (Lofi Beats)
import React from 'react';

export default function LofiPlayer() {
  return (
    <div className="lofi-player-container">
      <div className="lofi-visual">
        <iframe
          style={{
            position: 'fixed',
            bottom: '60px',
            left: '20px',
            width: '280px',
            height: '180px',
            borderRadius: '8px',
            border: '2px solid #8B4513',
            zIndex: 5,
            pointerEvents: 'none',
          }}
          src="https://www.youtube.com/embed/AzV77KFsLn4?autoplay=1&mute=0&loop=1&playlist=AzV77KFsLn4&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          title="Lofi Hip Hop Radio"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <div className="lofi-label">
        <div style={{
          position: 'fixed',
          bottom: '245px',
          left: '20px',
          background: 'rgba(139, 69, 19, 0.9)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '12px',
          zIndex: 6,
        }}>
          🎵 Lofi Beats
        </div>
      </div>
    </div>
  );
}