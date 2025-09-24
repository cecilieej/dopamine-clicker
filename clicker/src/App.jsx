import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import './index.css'
import ClickerButton from "./components/ClickerButton";
import Counter from "./components/Counter";
import UpgradeList from "./components/UpgradeList";
//import ChaosEffects from "./components/ChaosEffects";
import EndGameScreen from "./components/EndGameScreen";

import useGameLogic from "./hooks/useGameLogic";

export default function App() {
  const [started, setStarted] = useState(false);
  const {
    dopamine,
    addDopamine,
    upgrades,
    purchaseUpgrade,
    //chaosLevel,
    endGame,
  } = useGameLogic();

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
      
      <Counter dopamine={dopamine} />
      
      <UpgradeList
        dopamine={dopamine}
        upgrades={upgrades}
        onPurchase={purchaseUpgrade}
      />
      
      {/*<ChaosEffects chaosLevel={chaosLevel} />*/}
    </div>
  );
}

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
