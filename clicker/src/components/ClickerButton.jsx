function ClickerButton({ onClick }) {
  return (
    <button className="clicker-btn" onClick={onClick}>
      Click for Dopamine
    </button>
  );
}

export default ClickerButton;