import "./App.css";
import ShoppingCart from "./components/UseReducer-hook/CartExampleUseReducer";
import UseReducerExample from "./components/UseReducer-hook/UseReducerExample";
import UuidExample from "./components/Uuid/UuidExample";
import RefComplex from "./components/ref/RefComplex";
import RefExample from "./components/ref/RefExam";

const App = () => {

  return (
    <>
    <UuidExample/>
    <RefComplex/>
    <RefExample/>
    <UseReducerExample/>
    <ShoppingCart/>
    </>
  )
};
export default App;
