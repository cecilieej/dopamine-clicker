// ClickEffects.jsx - Displays click effect on button clicks
// Affected by upgrade: 3 (Amount Animation)
import { useState, useEffect } from 'react';

export default function ClickEffects({ calculateClickValue }) {
  const [effects, setEffects] = useState([]);

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.classList.contains('clicker-btn')) {
        const rect = event.target.getBoundingClientRect();

        // Get the actual click value including bonuses
        const clickValue = calculateClickValue ? calculateClickValue() : 1;

        const newEffect = {
          id: Date.now() + Math.random(),
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          value: clickValue,
        };

        setEffects(prev => [...prev, newEffect]);

        // Remove effect after animation
        setTimeout(() => {
          setEffects(prev => prev.filter(e => e.id !== newEffect.id));
        }, 2000);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [calculateClickValue]);

  return (
    <div className="click-effects-container">
      {effects.map(effect => (
        <div
          key={effect.id}
          className="click-effect"
          style={{
            left: effect.x,
            top: effect.y,
          }}
        >
          +{Math.round(effect.value)}
        </div>
      ))}
    </div>
  );
}