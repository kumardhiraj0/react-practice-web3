import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    // Simulating a computationally expensive calculation
    let result = 0;
    for (let i = 0; i < count * 10000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Calculation: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default UseMemo;
