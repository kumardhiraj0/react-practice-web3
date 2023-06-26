import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponet = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);
  const changeInput = (e) => {
    setItem(e.target.value);
  };

  const AddTodo = useCallback(() => {
    setTodo((oldData) => {
      return [...oldData, item];
    });
    setItem("");
  }, [item]);
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <input type="text" onChange={changeInput} value={item} />
      <ChildComponent todo={todo} addTodo={AddTodo} />
    </div>
  );
};

export default ParentComponet;
