// TabTitleManager.jsx - Manages change of browser tab title and favicon
// Affected by upgrade: 2 (Add Tab Title)
import { useEffect } from 'react';

export default function TabTitleManager() {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Dopamine Clicker | You're now collecting dopamine...";
    
    // Try to update favicon if it exists
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "/dopamine-icon.png";
    } else {
      // Create favicon link if it doesn't exist
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href = "/dopamine-icon.png";
      document.head.appendChild(newFavicon);
    }
    
    return () => {
      document.title = originalTitle;
    };
  }, []);
  
  return null; // No visual component
}