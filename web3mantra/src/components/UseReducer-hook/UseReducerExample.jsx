import { useReducer, useState } from "react";

const UseReducerExample = () => {
  const reducer = (currentValue, action) => {
    switch (action.type) {
      case "IncrementByValue":
        return currentValue + action.value;
      case "Decrement":
        return currentValue - 1;
      case "Increment":
        return currentValue + 1;
      default:
        return currentValue;
    }
  };
  const initialState = 0;
  const [counter, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");
  //1 more state and 3 handlers
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
        }}
      >
        +
      </button>
      <div>{counter}</div>
      <button
        onClick={() => {
          dispatch({ type: "Decrement" });
        }}
      >
        -
      </button>
      <input onChange={(e) => setInputValue(e.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: "IncrementByValue", value: parseInt(inputValue) });
        }}
      >
        Increment By
      </button>
    </div>
  );
};
export default UseReducerExample;
