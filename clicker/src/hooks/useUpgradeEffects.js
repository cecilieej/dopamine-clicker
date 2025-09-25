export default function useUpgradeEffects(upgrades) {
  const ownedUpgrades = upgrades.filter(u => (u.owned || 0) > 0);
  const visualUpgrades = ownedUpgrades.filter(u => u.type === "visual");
  
  const hasUpgrade = (id) => {
    return ownedUpgrades.some(u => u.id === id);
  };
  
  const getUpgradeCount = (id) => {
    const upgrade = ownedUpgrades.find(u => u.id === id);
    return upgrade ? (upgrade.owned || 0) : 0;
  };
  
  return { 
    hasUpgrade, 
    getUpgradeCount, 
    visualUpgrades,
    ownedUpgrades 
  };
}