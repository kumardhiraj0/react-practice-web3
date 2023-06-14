import React, { useState } from "react";
import "./counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const Increament = () => {
    setCount(count + 1);
  };

  const Decreament = () => {
    setCount(count - 1);
  };
  return (
    <div className="main">
      <h2>Counter App</h2>
      <h1>{count}</h1>

      <div className="btndiv">
        <button className="btn" onClick={Increament}>
          Increase
        </button>
        <button className="btn" onClick={Decreament}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
