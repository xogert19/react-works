import { useReducer } from "react";
import Calculator from "../Calculator/Calculator";
import "./App.css";

const evaluate = ({ previousValue, currentValue, operation }) => {
  const prev = parseFloat(previousValue);
  const curr = parseFloat(currentValue);

  if (isNaN(prev) || isNaN(curr)) return "";

  let computation;
  switch (operation) {
    case "+":
      computation = prev + curr;
      break;

    case "-":
      computation = prev - curr;
      break;

    case "*":
      computation = prev * curr;
      break;

    case "÷":
      computation = prev / curr;
      break;

    default:
      computation = "";
  }

  return isNaN(computation) ? null : computation.toString();
};

const reducer = (state, { action, content }) => {
  switch (action) {
    case "action":
      if (content === "AC") return {};

      if (state.currentValue == null) return state;
      if (state.currentValue.length === 1) {
        return {
          ...state,
          currentValue: null,
        };
      }

      return {
        ...state,
        currentValue: state.currentValue.slice(0, -1),
      };

    case "digit":
      if (content === "0" && state.currentValue === "0") return state;
      if (content === "." && state.currentValue == null) {
        return {
          ...state,
          currentValue: "0.",
        };
      }
      if (content === "." && state.currentValue.includes(".")) return state;
      if (content !== "0" && state.currentValue === "0") {
        return {
          ...state,
          currentValue: content,
        };
      }

      return {
        ...state,
        currentValue: `${state.currentValue || ""}${content}`,
      };

    case "operation":
      if (content === "=") {
        if (
          state.currentValue == null ||
          state.previousValue == null ||
          state.operation == null
        ) {
          return state;
        }

        return {
          ...state,
          currentValue: evaluate(state),
          previousValue: null,
          operation: null,
        };
      }

      if (state.previousValue == null && state.currentValue == null) {
        return state;
      }

      if (state.currentValue == null) {
        return {
          ...state,
          operation: content,
        };
      }

      if (state.previousValue == null) {
        return {
          ...state,
          previousValue: state.currentValue,
          currentValue: null,
          operation: content,
        };
      }

      return {
        ...state,
        previousValue: evaluate(state),
        currentValue: null,
        operation: content,
      };

    default:
      return {};
  }
};

const App = () => {
  const [{ previousValue, currentValue, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="App">
      <Calculator
        previousValue={previousValue}
        currentValue={currentValue}
        operation={operation}
        dispatch={dispatch}
      />
    </div>
  );
};

export default App;
