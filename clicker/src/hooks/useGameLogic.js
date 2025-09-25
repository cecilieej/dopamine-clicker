// handles state, intervals, dopamine increment
import { useEffect, useState } from "react";
import { upgradesData } from "../data/upgrades.js"; // Import from data folder with correct export name

export default function useGameLogic() {
  const [dopamine, setDopamine] = useState(0);
  const [upgrades, setUpgrades] = useState(upgradesData); // Use the imported upgradesData
  const [endGame, setEndGame] = useState(false);

  // Manual click
  const addDopamine = () => setDopamine((d) => d + 1);

  // Purchase upgrade
  const purchaseUpgrade = (id) => {
    const upgrade = upgrades.find((u) => u.id === id);
    if (!upgrade || dopamine < upgrade.cost) return;

    // Check if upgrade is at max owned limit
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

  // Calculate total DPS
  const totalDps = upgrades.reduce(
    (sum, u) => sum + (u.dps * (u.owned || 0)),
    0
  );

  // Auto dopamine from upgrades
  useEffect(() => {
    if (totalDps <= 0) return;

    const interval = setInterval(() => {
      setDopamine((d) => d + totalDps);
    }, 1000);

    return () => clearInterval(interval);
  }, [totalDps]);

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
    totalDps,
    endGame,
  };
}