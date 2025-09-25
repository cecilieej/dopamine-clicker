// handles state, intervals, dopamine increment
import { useEffect, useState, useRef } from "react";
import { upgradesData } from "../data/upgrades.js"; // Import from data folder with correct export name

export default function useGameLogic() {
  const [dopamine, setDopamine] = useState(0);
  const [upgrades, setUpgrades] = useState(upgradesData); // Use the imported upgradesData
  const [endGame, setEndGame] = useState(false);
  const [realTimeDps, setRealTimeDps] = useState(0);
  
  // Track clicks for real-time DPS calculation
  const clicksRef = useRef([]);
  const lastDopamineRef = useRef(0);

  // Calculate click value (for both actual clicks and display)
  const calculateClickValue = () => {
    let clickValue = 1;
    
    // Amount Animation (ID: 3) - +1 dopamine per click (base bonus)
    const hasAmountAnimation = upgrades.find(u => u.id === 3)?.owned > 0;
    if (hasAmountAnimation) {
      clickValue += 1;
    }
    
    // Button Upgrade (ID: 5) - +1 dopamine per click
    const hasButtonUpgrade = upgrades.find(u => u.id === 5)?.owned > 0;
    if (hasButtonUpgrade) {
      clickValue += 1;
    }
    
    // Button Upgrade II (ID: 28) - +1% of DPS per click
    const hasAdvancedButtonUpgrade = upgrades.find(u => u.id === 28)?.owned > 0;
    if (hasAdvancedButtonUpgrade) {
      clickValue += baseDps * 0.01;
    }
    
    // Popcorn Animation (ID: 16) - +8 dopamine per click
    const hasPopcornAnimation = upgrades.find(u => u.id === 16)?.owned > 0;
    if (hasPopcornAnimation) {
      clickValue += 8;
    }
    
    return clickValue;
  };

  // Manual click with upgrade bonuses
  const addDopamine = () => {
    const now = Date.now();
    clicksRef.current.push(now);
    
    // Clean up clicks older than 1 second
    clicksRef.current = clicksRef.current.filter(time => now - time <= 1000);
    
    const clickValue = calculateClickValue();
    setDopamine((d) => d + clickValue);
  };

  // Calculate base DPS from upgrades
  const baseDps = upgrades.reduce(
    (sum, u) => sum + (u.dps * (u.owned || 0)),
    0
  );

  // Calculate real-time DPS including manual clicks
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      
      // Count clicks in the last second
      const recentClicks = clicksRef.current.filter(time => now - time <= 1000).length;
      
      // Calculate dopamine gained from upgrades in the last second
      const currentDopamine = dopamine;
      const dopamineFromUpgrades = Math.max(0, currentDopamine - lastDopamineRef.current - recentClicks);
      
      // Real-time DPS = base upgrade DPS + clicks per second
      const calculatedDps = baseDps + recentClicks;
      setRealTimeDps(calculatedDps);
      
      lastDopamineRef.current = currentDopamine;
    }, 100); // Update every 100ms for smooth real-time updates

    return () => clearInterval(interval);
  }, [dopamine, baseDps]);

  // Purchase upgrade logic
  const purchaseUpgrade = (id) => {
    const upgrade = upgrades.find((u) => u.id === id);
    if (!upgrade || dopamine < upgrade.cost) return;

    if (upgrade.maxOwned !== null && (upgrade.owned || 0) >= upgrade.maxOwned) {
      return;
    }

    setUpgrades((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, owned: (u.owned || 0) + 1 } : u
      )
    );
    
    setDopamine((d) => d - upgrade.cost);
  };

  // Auto dopamine from upgrades
  useEffect(() => {
    if (baseDps <= 0) return;

    const interval = setInterval(() => {
      setDopamine((d) => d + baseDps);
    }, 1000);

    return () => clearInterval(interval);
  }, [baseDps]);

  // End condition
  useEffect(() => {
    if (dopamine >= 1000000) {
      setEndGame(true);
    }
  }, [dopamine]);

  return {
    dopamine,
    addDopamine,
    upgrades,
    purchaseUpgrade,
    totalDps: baseDps,
    realTimeDps,
    endGame,
    calculateClickValue,
  };
}