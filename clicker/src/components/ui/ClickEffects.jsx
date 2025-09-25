import { useState, useEffect } from 'react';

export default function ClickEffects({ onButtonClick }) {
  const [effects, setEffects] = useState([]);

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.classList.contains('clicker-btn')) {
        const rect = event.target.getBoundingClientRect();
        const newEffect = {
          id: Date.now() + Math.random(),
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };

        setEffects(prev => [...prev, newEffect]);

        // Remove effect after animation
        setTimeout(() => {
          setEffects(prev => prev.filter(e => e.id !== newEffect.id));
        }, 1000);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

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
          +1
        </div>
      ))}
    </div>
  );
}