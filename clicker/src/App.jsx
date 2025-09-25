import { useState } from 'react'
import React from "react";
import './index.css'
import ClickerButton from "./components/ClickerButton";
import Counter from "./components/Counter";
import UpgradeList from "./components/UpgradeList";
import EndGameScreen from "./components/EndGameScreen";

// UI Components
import { TabTitleManager, DPSCounter, ClickEffects } from "./components/ui";

// Hooks
import useGameLogic from "./hooks/useGameLogic";
import useUpgradeEffects from "./hooks/useUpgradeEffects";

export default function App() {
  const [started, setStarted] = useState(false);
  const {
    dopamine,
    addDopamine,
    upgrades,
    purchaseUpgrade,
    totalDps,
    realTimeDps,
    endGame,
    calculateClickValue,
  } = useGameLogic();

  const { hasUpgrade, getUpgradeCount } = useUpgradeEffects(upgrades);

  const handleClick = () => {
    if (!started) {
      setStarted(true);
    }
    addDopamine();
  };

  if (endGame) {
    return <EndGameScreen />;
  }

  return (
    <div className="game-container">
      <div className="clicker-section">
        <ClickerButton onClick={handleClick} />
      </div>
      
      {started && dopamine > 0 && (
        <div className="counter-section">
          <Counter dopamine={dopamine} />
          {hasUpgrade(4) && <DPSCounter dps={realTimeDps} />}
        </div>
      )}
      
      {started && dopamine >= 3 && (
        <UpgradeList
          dopamine={dopamine}
          upgrades={upgrades}
          onPurchase={purchaseUpgrade}
        />
      )}
      
      {/* Visual Effects */}
      {hasUpgrade(2) && <TabTitleManager />}
      {hasUpgrade(3) && <ClickEffects calculateClickValue={calculateClickValue} />}
    </div>
  );
}