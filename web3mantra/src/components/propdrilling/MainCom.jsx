import React, { useState } from 'react'
import ComA from './ComA';
import "./style.css";

const MainCom = () => {
    //hame ye data ko componet c me pass karna hai using props drilling;
   const [data,setData] = useState({name:"dhiraj",age:23});
  return (
    <div>
        MainComponet jaha se data pass kar rahe hai
        <ComA data = {data}/>

    </div>
  )
}

export default MainCom;