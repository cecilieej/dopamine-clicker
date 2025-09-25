// SubwaySurfers.jsx - Embeds Subway Surfers video gameplay
// Affected by upgrades: 7 (Subway Surfers), 31 (Subway Surfers Unmuted)
import React from 'react';

export default function SubwaySurfers({ isUnmuted, isFullscreen, hasWormhole }) {
  const videoStyle = {
    position: 'fixed',
    top: isFullscreen ? 0 : '20px',
    right: isFullscreen ? 0 : '20px',
    width: isFullscreen ? '100vw' : '300px',
    height: isFullscreen ? '100vh' : '200px',
    zIndex: isFullscreen ? 1 : 5,
    borderRadius: isFullscreen ? 0 : '8px',
    border: isFullscreen ? 'none' : '2px solid #333',
    opacity: isFullscreen ? 0.8 : 1,
    pointerEvents: 'none',
  };

  return (
    <div className="subway-surfers-container">
      <iframe
        style={videoStyle}
        src={`https://www.youtube.com/embed/i0M4ARe9v0Y?autoplay=1&mute=${isUnmuted ? 0 : 1}&loop=1&playlist=i0M4ARe9v0Y&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
        title="Subway Surfers Gameplay"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {hasWormhole && (
        <div 
          className="wormhole-effect"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, transparent, rgba(255,0,255,0.8))',
            borderRadius: '50%',
            animation: 'wormholeSpin 2s linear infinite',
            zIndex: 15,
            pointerEvents: 'none',
          }}
        />
      )}
      <style>
        {`
          @keyframes wormholeSpin {
            from { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
            to { transform: translate(-50%, -50%) rotate(360deg) scale(1.2); }
          }
        `}
      </style>
    </div>
  );
}