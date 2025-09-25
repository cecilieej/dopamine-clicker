// Button Upgrade - Enhances clicker button appearance and adds more dopamine per click 
// Affected by upgrades: 5 (Button Upgrade, +1 per click) and 28 (Button Upgrade II, +1% of DPS per click)
import { useEffect } from 'react';

export default function ButtonUpgrade({ hasBasicUpgrade, hasAdvancedUpgrade, currentDps }) {
  useEffect(() => {
    const button = document.querySelector('.clicker-btn');
    if (!button) return;

    if (hasBasicUpgrade) {
      button.classList.add('upgraded-button');
    }
    
    if (hasAdvancedUpgrade) {
      button.classList.add('advanced-button');
    }

    return () => {
      button.classList.remove('upgraded-button', 'advanced-button');
    };
  }, [hasBasicUpgrade, hasAdvancedUpgrade]);

  return null; // This component only modifies existing button
}