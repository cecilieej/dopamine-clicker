import React from 'react';
import './UpgradeTooltip.css';

function UpgradeTooltip({ upgrade, isVisible, position }) {
  if (!isVisible || !upgrade) return null;

  return (
    <div 
      className="upgrade-tooltip"
      style={{
        left: position?.x || 0,
        top: position?.y || 0,
      }}
    >
      <div className="tooltip-name">{upgrade.name}</div>
      <div className="tooltip-description">
        {upgrade.flavorText}
      </div>
      <div className="tooltip-cost">
        Cost: {upgrade.cost.toLocaleString()} dopamine
      </div>
      {upgrade.owned > 0 && (
        <div className="tooltip-owned">
          Owned: {upgrade.owned}
        </div>
      )}
      {upgrade.type === "generator" && upgrade.dps > 0 && (
        <div className="tooltip-dps">
          +{upgrade.dps} dopamine/second each
        </div>
      )}
    </div>
  );
}

export default UpgradeTooltip;
