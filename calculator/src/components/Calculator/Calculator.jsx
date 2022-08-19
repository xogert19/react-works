import Button from "../Button/Button";
import Output from "../Output/Output";
import "./Calculator.css";

const Calculator = ({ previousValue, currentValue, operation, dispatch }) => {
  return (
    <div className="Calculator">
      <Output
        previousValue={previousValue}
        currentValue={currentValue}
        operation={operation}
      />
      <Button
        color="grey"
        action="action"
        content="AC"
        onClick={dispatch}
        length="span-two"
      />
      <Button color="grey" action="action" content="DEL" onClick={dispatch} />
      <Button
        color="orange"
        action="operation"
        content="÷"
        onClick={dispatch}
      />
      <Button color="grey" action="digit" content="7" onClick={dispatch} />
      <Button color="grey" action="digit" content="8" onClick={dispatch} />
      <Button color="grey" action="digit" content="9" onClick={dispatch} />
      <Button
        color="orange"
        action="operation"
        content="*"
        onClick={dispatch}
      />
      <Button color="grey" action="digit" content="4" onClick={dispatch} />
      <Button color="grey" action="digit" content="5" onClick={dispatch} />
      <Button color="grey" action="digit" content="6" onClick={dispatch} />
      <Button
        color="orange"
        action="operation"
        content="+"
        onClick={dispatch}
      />
      <Button color="grey" action="digit" content="1" onClick={dispatch} />
      <Button color="grey" action="digit" content="2" onClick={dispatch} />
      <Button color="grey" action="digit" content="3" onClick={dispatch} />
      <Button
        color="orange"
        action="operation"
        content="-"
        onClick={dispatch}
      />
      <Button
        color="grey"
        action="digit"
        content="0"
        onClick={dispatch}
        length="span-two"
      />
      <Button color="grey" action="digit" content="." onClick={dispatch} />
      <Button
        color="orange"
        action="operation"
        content="="
        onClick={dispatch}
      />
    </div>
  );
};

export default Calculator;
