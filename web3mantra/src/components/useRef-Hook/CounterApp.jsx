import React, { useRef, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    countRef.current += 1;
    setCount(countRef.current);
  };

  const handleDecrement = () => {
    countRef.current -= 1;
    setCount(countRef.current);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement} >Increment</button>
      <button onClick={handleDecrement} >Decrement</button>
    </div>
  );
};

export default Counter;
