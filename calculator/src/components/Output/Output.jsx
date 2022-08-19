import "./Output.css";

const Output = ({ previousValue, currentValue, operation }) => {
  return (
    <div className="Output">
      <div className="previous-value">
        {previousValue} {operation}
      </div>
      <div className="current-value">{currentValue}</div>
    </div>
  );
};

export default Output;
