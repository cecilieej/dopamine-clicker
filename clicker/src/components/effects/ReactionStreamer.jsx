// ReactionStreamer.jsx - Adds reaction streamer overlay with animated reactions
// Affected by upgrades: 35 (Reaction Streamer)
import React, { useState, useEffect } from 'react';

export default function ReactionStreamer() {
  const [currentReaction, setCurrentReaction] = useState(0);
  
  const reactions = [
    { emoji: "😱", text: "NO WAY!", intensity: "high" },
    { emoji: "🤯", text: "MIND BLOWN!", intensity: "high" },
    { emoji: "😂", text: "LMAOOO", intensity: "medium" },
    { emoji: "🔥", text: "FIRE!", intensity: "medium" },
    { emoji: "💀", text: "I'M DEAD", intensity: "high" },
    { emoji: "😭", text: "CRYING", intensity: "medium" },
    { emoji: "🚀", text: "TO THE MOON!", intensity: "high" },
    { emoji: "👑", text: "KING!", intensity: "medium" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReaction(prev => (prev + 1) % reactions.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [reactions.length]);

  const reaction = reactions[currentReaction];

  return (
    <div className="reaction-streamer-container">
      {/* Streamer face cam */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '180px',
        height: '120px',
        background: 'linear-gradient(135deg, #9b59b6, #8e44ad)',
        borderRadius: '12px',
        border: '3px solid #7d3c98',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        zIndex: 10,
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
      }}>
        <div style={{ fontSize: '14px', marginBottom: '8px' }}>
          📹 REACTION CAM
        </div>
        <div style={{ 
          fontSize: '40px', 
          marginBottom: '8px',
          animation: reaction.intensity === 'high' ? 'reactionBounce 0.5s ease-in-out' : 'none'
        }}>
          {reaction.emoji}
        </div>
        <div style={{ 
          fontSize: '12px', 
          fontWeight: 'bold',
          textAlign: 'center',
          animation: reaction.intensity === 'high' ? 'textShake 0.5s ease-in-out' : 'none'
        }}>
          {reaction.text}
        </div>
      </div>

      {/* Chat overlay */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '250px',
        height: '150px',
        background: 'rgba(0, 0, 0, 0.85)',
        borderRadius: '8px',
        border: '2px solid #7d3c98',
        padding: '10px',
        color: 'white',
        fontSize: '11px',
        overflow: 'hidden',
        zIndex: 9,
      }}>
        <div style={{ marginBottom: '6px', color: '#9b59b6', fontWeight: 'bold' }}>
          💬 LIVE CHAT
        </div>
        <div style={{ lineHeight: '1.4' }}>
          <div>viewer123: {reaction.text.toLowerCase()}</div>
          <div>pogchamp99: this is insane 🔥</div>
          <div>clickmaster: HOW IS THIS POSSIBLE</div>
          <div>dopaminelord: MY BRAIN IS MELTING</div>
          <div>stimfan2024: can't stop watching</div>
          <div>reactkid: {reaction.emoji} {reaction.emoji} {reaction.emoji}</div>
        </div>
      </div>

      {/* Subscriber notification */}
      <div style={{
        position: 'fixed',
        top: '160px',
        right: '20px',
        width: '200px',
        height: '50px',
        background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
        borderRadius: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '12px',
        fontWeight: 'bold',
        zIndex: 9,
        animation: 'slideInRight 3s ease-in-out infinite',
      }}>
        🔔 StimAddict subscribed!
      </div>

      <style>
        {`
          @keyframes reactionBounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          
          @keyframes textShake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-2px); }
            75% { transform: translateX(2px); }
          }
          
          @keyframes slideInRight {
            0%, 80%, 100% { transform: translateX(220px); opacity: 0; }
            10%, 70% { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}