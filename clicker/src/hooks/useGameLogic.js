// handles state, intervals, dopamine increment
import { useEffect, useState } from "react";
import { upgradesData } from "../data/upgrades.js"; // Import from data folder with correct export name

export default function useGameLogic() {
  const [dopamine, setDopamine] = useState(0);
  const [upgrades, setUpgrades] = useState(upgradesData); // Use the imported upgradesData
  const [chaosLevel, setChaosLevel] = useState(0);
  const [endGame, setEndGame] = useState(false);

  // Manual click
  const addDopamine = () => setDopamine((d) => d + 1);

  // Purchase upgrade
  const purchaseUpgrade = (id) => {
    setUpgrades((prev) =>
      prev.map((u) =>
        u.id === id && dopamine >= u.cost
          ? { ...u, owned: (u.owned || 0) + 1 }
          : u
      )
    );
    setDopamine((d) => {
      const upgrade = upgrades.find((u) => u.id === id);
      return upgrade && d >= upgrade.cost ? d - upgrade.cost : d;
    });
  };

  // Auto dopamine from upgrades
  useEffect(() => {
    const interval = setInterval(() => {
      let totalDps = upgrades.reduce(
        (sum, u) => sum + (u.dps * (u.owned || 0)),
        0
      );
      if (totalDps > 0) {
        setDopamine((d) => d + totalDps);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [upgrades]);

  // Chaos scaling
  useEffect(() => {
    const chaos = upgrades.reduce(
      (sum, u) => sum + (u.chaosBoost * (u.owned || 0)),
      0
    );
    setChaosLevel(chaos);

    // End condition
    if (dopamine >= 1000000) {
      setEndGame(true);
    }
  }, [dopamine, upgrades]);

  return {
    dopamine,
    addDopamine,
    upgrades, // Return as 'upgrades' to match your App.jsx
    purchaseUpgrade,
    chaosLevel,
    endGame,
  };
}