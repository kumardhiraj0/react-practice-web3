import "./App.css";
import MainCom from "./components/propdrilling/MainCom";
import ComponentA from "./components/context-Api/ComponentA";
import ComponentB from "./components/context-Api/ComponentB";
import ComponentC from "./components/context-Api/ComponentC";
import {createContext, useState} from "react";

const Myinfo = createContext();
const App = () => {
  //const name = "Dhiraj";
  const [data,setData]= useState({
    name:"Dhiraj",
    age:23,
    contact:977098765,
    gmail:"kumar@gmail.com"
  })
  return (
    <>
    <Myinfo.Provider  value={{data:data,updateData:setData}}>
        <MainCom/>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
    </Myinfo.Provider>
    </>
  )
};
export default App;
export {Myinfo};
