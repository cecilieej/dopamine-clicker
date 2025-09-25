import { useState, useMemo } from 'react';
import UpgradeTooltip from './UpgradeTooltip';

function UpgradeList({ dopamine, upgrades, onPurchase }) {
  const [hoveredUpgrade, setHoveredUpgrade] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const availableUpgrades = upgrades.filter((u) => {
    // Show upgrade if:
    // 1. Player has enough dopamine to unlock it
    // 2. It's not a visual upgrade that's already purchased (maxOwned: 1)
    return dopamine >= u.unlockAt && 
           !(u.type === "visual" && u.maxOwned === 1 && (u.owned || 0) >= 1);
  });

  // Only show first 5 available upgrades
  const displayedUpgrades = useMemo(() => {
    return availableUpgrades.slice(0, 5);
  }, [availableUpgrades]);

  const handleMouseEnter = (upgrade, event) => {
    const rect = event.target.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.bottom + 10
    });
    setHoveredUpgrade(upgrade);
  };

  const handleMouseLeave = () => {
    setHoveredUpgrade(null);
  };

  const getUpgradeImage = (upgradeId) => {
    return `/images/upgrades/upgrade-${upgradeId}.png`;
  };

  if (displayedUpgrades.length === 0) {
    return null; // Don't show anything if no upgrades available
  }

  return (
    <div className="upgrades-section">
      <div className="upgrade-grid">
        {displayedUpgrades.map((upgrade) => (
          <button
            key={upgrade.id}
            className="upgrade-item"
            disabled={dopamine < upgrade.cost}
            onClick={() => onPurchase(upgrade.id)}
            onMouseEnter={(e) => handleMouseEnter(upgrade, e)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="upgrade-image">
              <img 
                src={getUpgradeImage(upgrade.id)}
                alt={upgrade.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="upgrade-image-placeholder" style={{ display: 'none' }}>
                {upgrade.id}
              </div>
            </div>
          </button>
        ))}
      </div>
      
      <UpgradeTooltip 
        upgrade={hoveredUpgrade}
        isVisible={!!hoveredUpgrade}
        position={tooltipPosition}
      />
    </div>
  );
}

export default UpgradeList;