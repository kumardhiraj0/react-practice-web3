import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This function will be called after the component has rendered
    document.title = `Count: ${count}`;

    // Clean-up function (optional)
    return () => {
      document.title = 'React App'; // Reset the title when the component unmounts
    };
  }, [count]); // Run the effect only if the 'count' state changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Example;