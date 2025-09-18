function ClickerButton({ onClick }) {
  return (
    <button className="clicker-btn" onClick={onClick}>
      Click Me
    </button>
  );
}

export default ClickerButton;