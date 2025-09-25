// ThunderEffect.jsx - Adds ambient thunder sounds and lightning flashes
// Affected by upgrades: 15 (Thunder Sounds)
import React, { useEffect, useState } from 'react';

export default function ThunderEffect() {
  const [lightning, setLightning] = useState(false);

  useEffect(() => {
    const triggerLightning = () => {
      setLightning(true);
      setTimeout(() => setLightning(false), 200);
      
      // Random interval between 3-8 seconds
      const nextFlash = Math.random() * 5000 + 3000;
      setTimeout(triggerLightning, nextFlash);
    };

    // Start the lightning cycle
    const initialDelay = Math.random() * 3000 + 1000;
    setTimeout(triggerLightning, initialDelay);
  }, []);

  return (
    <>
      {lightning && (
        <div
          className="lightning-flash"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(255, 255, 255, 0.8)',
            zIndex: 50,
            pointerEvents: 'none',
            animation: 'lightningFlash 0.2s ease-out',
          }}
        />
      )}
      <div className="thunder-label">
        <div style={{
          position: 'fixed',
          top: '100px',
          right: '20px',
          background: 'rgba(75, 0, 130, 0.8)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '12px',
          zIndex: 6,
        }}>
          ⚡ Thunder
        </div>
      </div>
      <style>
        {`
          @keyframes lightningFlash {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
      {/* Audio would be handled by AudioManager */}
    </>
  );
}