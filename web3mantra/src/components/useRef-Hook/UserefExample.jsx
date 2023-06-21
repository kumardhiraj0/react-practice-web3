import React, { useRef } from 'react';

const UserefExample = () => {
  const inputRef = useRef(null);
  const prevValueRef = useRef('');

  const handleButtonClick = () => {
    inputRef.current.focus(); // Focus the input element
  };

  const handleInputChange = () => {
    const currentValue = inputRef.current.value;
    console.log('Previous Value:', prevValueRef.current);
    console.log('Current Value:', currentValue);
    prevValueRef.current = currentValue;
  };

  return (
    <div>
      <input ref={inputRef} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
};

export default UserefExample;
