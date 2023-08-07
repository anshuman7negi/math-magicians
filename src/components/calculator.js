import Button from './button.js';

export default function calculator() {
  return (
    <div className="calculator-container">
      <div className="calculator">
        <p className="result">0</p>
        <Button />
      </div>
    </div>
  );
}
