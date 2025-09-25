// CatContent.jsx - Displays cat gif on repeat on middle right of page
// Affected by upgrades: 13 (Cat Content)
import React from 'react';

export default function CatContent() {
  return (
    <div className="cat-content-container">
      <img
        src="https://cataas.com/cat" // https://tenor.com/view/cats-infinity-gif-18216694
        alt="Cat"
        style={{
          position: 'fixed',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          width: '250px',
          height: 'auto',
          zIndex: 5,
        }}
      />
    </div>
  );
}