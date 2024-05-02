export default function InputNumber({
  value,
  onDecrease,
  onIncrease,
  onUpdateQuantity,
}) {
  const handleDecrease = () => {
    onDecrease();
  };

  const handleIncrease = () => {
    onIncrease();
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue)) {
      onUpdateQuantity(newValue);
    }
  };

  return (
    <div className="input-number-container">
      <button className="input-number-btn" onClick={handleDecrease}>
        -
      </button>
      <input
        className="input-number text-center"
        type="text"
        value={value}
        defaultValue={value}
        pattern="[0-9]"
        onChange={handleChange}
      />
      <button className="input-number-btn" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
