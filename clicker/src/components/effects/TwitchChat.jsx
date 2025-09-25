// TwitchChat.jsx - Adds scrolling Twitch-style chat overlay
// Affected by upgrades: 37 (Twitch Chat)
import React, { useState, useEffect } from 'react';

export default function TwitchChat() {
  const [messages, setMessages] = useState([]);
  const [messageId, setMessageId] = useState(0);

  const chatMessages = [
    { user: 'PogChamp123', message: 'THIS IS INSANE', color: '#9146ff' },
    { user: 'ClickMaster99', message: 'HOW DO YOU CLICK SO FAST', color: '#00f5ff' },
    { user: 'DopamineLord', message: 'MY BRAIN IS MELTING', color: '#ff6b6b' },
    { user: 'StimAddict2024', message: 'CANT STOP WATCHING', color: '#51ff00' },
    { user: 'ReactGod', message: 'POGGERS', color: '#ff9f43' },
    { user: 'ClickBot5000', message: 'beep boop click click', color: '#a29bfe' },
    { user: 'ViewerNumber1', message: 'First time here, what is this??', color: '#fd79a8' },
    { user: 'SubAlert', message: 'Thanks for the follow!', color: '#fdcb6e' },
    { user: 'ModeratorTim', message: 'Keep it clean chat', color: '#00b894' },
    { user: 'DonationBot', message: '$5 from Anonymous: "Keep clicking!"', color: '#e17055' },
    { user: 'SpamKing', message: 'Kappa Kappa Kappa', color: '#636e72' },
    { user: 'NewViewer42', message: 'What upgrades should I get?', color: '#fab1a0' },
  ];

  const emotes = ['Kappa', 'PogChamp', 'OMEGALUL', '5Head', 'MonkaS', 'EZ', 'Pepega', 'WeirdChamp'];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = chatMessages[Math.floor(Math.random() * chatMessages.length)];
      const hasEmote = Math.random() > 0.7;
      const emote = hasEmote ? emotes[Math.floor(Math.random() * emotes.length)] : '';
      
      const newMessage = {
        id: messageId,
        ...randomMessage,
        message: hasEmote ? `${randomMessage.message} ${emote}` : randomMessage.message,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev.slice(-8), newMessage]);
      setMessageId(prev => prev + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, [messageId]);

  return (
    <div className="twitch-chat-container">
      <div style={{
        position: 'fixed',
        bottom: '200px',
        left: '20px',
        width: '280px',
        height: '300px',
        background: 'rgba(24, 24, 27, 0.95)',
        borderRadius: '8px',
        border: '2px solid #9146ff',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 7,
        fontFamily: 'monospace',
        overflow: 'hidden',
      }}>
        {/* Chat header */}
        <div style={{
          background: '#9146ff',
          color: 'white',
          padding: '8px 12px',
          fontSize: '12px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ fontSize: '16px' }}>💬</span>
          LIVE CHAT • 1,337 viewers
        </div>
        
        {/* Chat messages */}
        <div style={{
          flex: 1,
          padding: '8px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
        }}>
          {messages.map((msg) => (
            <div 
              key={msg.id}
              style={{
                fontSize: '11px',
                lineHeight: '1.4',
                animation: 'chatSlideIn 0.3s ease-out',
                wordWrap: 'break-word',
              }}
            >
              <span style={{ 
                color: msg.color, 
                fontWeight: 'bold',
                marginRight: '4px',
              }}>
                {msg.user}:
              </span>
              <span style={{ color: '#efeff1' }}>
                {msg.message}
              </span>
            </div>
          ))}
        </div>
        
        {/* Chat input simulation */}
        <div style={{
          background: '#18181b',
          border: '1px solid #464649',
          margin: '8px',
          borderRadius: '4px',
          padding: '6px 8px',
          fontSize: '11px',
          color: '#adadb8',
          display: 'flex',
          alignItems: 'center',
        }}>
          💬 Say something...
        </div>
      </div>

      {/* Floating emotes */}
      <div style={{
        position: 'fixed',
        left: '320px',
        bottom: '300px',
        fontSize: '20px',
        animation: 'emoteFloat 3s ease-in-out infinite',
        zIndex: 6,
        pointerEvents: 'none',
      }}>
        🎭
      </div>

      <style>
        {`
          @keyframes chatSlideIn {
            0% { 
              transform: translateX(-20px);
              opacity: 0;
            }
            100% { 
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          @keyframes emoteFloat {
            0%, 100% { 
              transform: translateY(0) rotate(0deg);
              opacity: 0.7;
            }
            50% { 
              transform: translateY(-20px) rotate(180deg);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}