import "./App.css";
import DisplayData from "./components/Custom-hook/DisplayData";
import Counter1 from "./components/Custom-hook/counter-custom-hook/Counter1";
import Counter2 from "./components/Custom-hook/counter-custom-hook/Counter2";
import CatFact from "./custom-hook/cat-fact/cat-fact";
const App = () => {

  return (
    <>
    <DisplayData/>
    <Counter1/>
    <Counter2/>
    <CatFact/>
    </>
  )
};
export default App;
