import { useState } from "react";

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  const Increament = () => {
    setCount(count + 1);
  };

  const Decreament = () => {
    setCount(count - 1);
  };

  return [count, Increament, Decreament];
};

export default useCounter;
