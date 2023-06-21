import React, { useRef } from 'react';

const Focus = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Focus the input element
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};
export default Focus;
