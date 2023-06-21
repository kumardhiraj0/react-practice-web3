import "./App.css";
import Counter from "./components/useRef-Hook/CounterApp";
import Focus from "./components/useRef-Hook/Focus";
import CountRender from "./components/useRef-Hook/Count-Render";

import PrevState from "./components/useRef-Hook/PrevState";

const App = () => {

  return (
    <>
     <CountRender/>
    <PrevState/>
     <Counter/>
    <Focus/>
    </>
  )
};
export default App;
