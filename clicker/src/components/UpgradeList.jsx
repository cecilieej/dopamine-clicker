import { useState, useMemo } from 'react';
import UpgradeTooltip from './UpgradeTooltip';

function UpgradeList({ dopamine, upgrades, onPurchase }) {
  const [hoveredUpgrade, setHoveredUpgrade] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const availableUpgrades = upgrades.filter((u) => {
    // Show upgrade if:
    // 1. Player has enough dopamine to unlock it
    // 2. It's not a visual upgrade that's already purchased (maxOwned: 1)
    return dopamine >= u.unlockAt && 
           !(u.type === "visual" && u.maxOwned === 1 && (u.owned || 0) >= 1);
  });

  const displayedUpgrades = useMemo(() => {
    return availableUpgrades.slice(currentIndex, currentIndex + 5);
  }, [availableUpgrades, currentIndex]);

  // Reset index if it goes beyond available upgrades
  useMemo(() => {
    if (currentIndex >= availableUpgrades.length && availableUpgrades.length > 0) {
      setCurrentIndex(Math.max(0, availableUpgrades.length - 5));
    }
  }, [availableUpgrades.length, currentIndex]);

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

  const canScrollUp = currentIndex > 0;
  const canScrollDown = currentIndex + 5 < availableUpgrades.length;

  const scrollUp = () => {
    if (canScrollUp) {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const scrollDown = () => {
    if (canScrollDown) {
      setCurrentIndex(Math.min(availableUpgrades.length - 5, currentIndex + 1));
    }
  };

  if (availableUpgrades.length === 0) {
    return null; // Don't show anything if no upgrades available
  }

  return (
    <div className="upgrades-section">
      {canScrollUp && (
        <button 
          onClick={scrollUp}
          style={{
            background: 'rgba(51, 51, 51, 0.8)',
            border: '1px solid #555',
            color: '#fff',
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
            cursor: 'pointer',
            borderRadius: '6px',
            alignSelf: 'center'
          }}
        >
          ▲ Previous
        </button>
      )}
      
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
      
      {canScrollDown && (
        <button 
          onClick={scrollDown}
          style={{
            background: 'rgba(51, 51, 51, 0.8)',
            border: '1px solid #555',
            color: '#fff',
            padding: '0.5rem 1rem',
            marginTop: '1rem',
            cursor: 'pointer',
            borderRadius: '6px',
            alignSelf: 'center'
          }}
        >
          Next ▼
        </button>
      )}
      
      <UpgradeTooltip 
        upgrade={hoveredUpgrade}
        isVisible={!!hoveredUpgrade}
        position={tooltipPosition}
      />
    </div>
  );
}

export default UpgradeList;