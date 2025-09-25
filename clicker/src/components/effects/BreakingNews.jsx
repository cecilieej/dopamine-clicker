// BreakingNews.jsx - Adds a scrolling news ticker banner at the bottom
// Affected by upgrades: 8 (Breaking News)
import React, { useState, useEffect } from 'react';

export default function BreakingNews() {
  const [currentNews, setCurrentNews] = useState(0);
  
  const newsItems = [
    "BREAKING: Local person discovers infinite source of digital dopamine",
    "ALERT: Scientists confirm clicking buttons releases happiness chemicals", 
    "UPDATE: Area human unable to stop clicking, more at 11",
    "EXCLUSIVE: Dopamine addiction reaches all-time high in local vicinity",
    "URGENT: Productivity plummets as mysterious clicking sounds intensify",
    "LIVE: Witnesses report seeing floating DVD logos, authorities investigating",
    "FLASH: Local clicker achieves legendary status, neighbors concerned",
    "NOW: Breaking addiction specialist recommends 'just one more click'",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews(prev => (prev + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div className="breaking-news-container">
      <div className="news-ticker">
        <div className="news-label">BREAKING NEWS</div>
        <div className="news-content">
          <div className="news-text">
            {newsItems[currentNews]}
          </div>
        </div>
      </div>
      <style>
        {`
          .breaking-news-container {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 40px;
            background: #cc0000;
            color: white;
            overflow: hidden;
            z-index: 20;
            font-weight: bold;
            font-size: 14px;
          }
          
          .news-ticker {
            display: flex;
            height: 100%;
            align-items: center;
          }
          
          .news-label {
            background: #990000;
            padding: 0 15px;
            height: 100%;
            display: flex;
            align-items: center;
            white-space: nowrap;
          }
          
          .news-content {
            flex: 1;
            overflow: hidden;
          }
          
          .news-text {
            padding: 0 20px;
            animation: scrollNews 15s linear infinite;
            white-space: nowrap;
          }
          
          @keyframes scrollNews {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
}