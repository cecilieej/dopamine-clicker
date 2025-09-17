function UpgradeList({ dopamine, upgrades, onPurchase }) {
  return (
    <div className="upgrade-list">
      {upgrades
        .filter((u) => dopamine >= u.unlockAt)
        .map((u) => (
          <button
            key={u.id}
            disabled={dopamine < u.cost}
            onClick={() => onPurchase(u.id)}
          >
            {u.name} ({u.cost}) – Owned: {u.owned || 0}
          </button>
        ))}
    </div>
  );
}

export default UpgradeList;