// Vines.jsx - Adds overlay of old Vine humor videos
// Affected by upgrades: 34 (Vines)
import React from 'react';

export default function Vines() {
  return (
    <div className="vines-overlay">
      <iframe
        src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&loop=1&playlist=VIDEO_ID"
        // https://www.youtube.com/embed/nwP3TeK-fPs
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}
