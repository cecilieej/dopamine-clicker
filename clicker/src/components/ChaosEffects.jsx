export default function ChaosEffects({ chaosLevel }) {
  // TODO: Scale chaosLevel to simple effects (maybe can add CSS filters, sounds, popups, etc.)
  const chaosStyle = {
    filter: `hue-rotate(${chaosLevel * 10}deg)`,
  };

  return <div className="chaos-overlay" style={chaosStyle}></div>;
}
