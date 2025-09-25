export default function DPSCounter({ dps }) {
  return (
    <div className="dps-counter">
      <div className="dps-value">{dps.toFixed(1)}</div>
      <div className="dps-label">dopamine per second</div>
    </div>
  );
}