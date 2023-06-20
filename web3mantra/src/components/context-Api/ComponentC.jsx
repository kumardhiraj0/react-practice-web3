import React, { useContext } from 'react'
import { Myinfo } from '../../App'; 
const ComponentC = () => {
    const dataInfo = useContext(Myinfo);
  return (
    <div>
        ComponentC

        <p>Name: {dataInfo.data.name}</p>
        <p>gmail: {dataInfo.data.gmail}</p>
        <p>Contact: {dataInfo.data.contact}</p>
        <button onClick={()=> dataInfo.updateData({...dataInfo.data,name:"avinash"})}>change name dhiraj to avinash</button>
    </div>
  )
}

export default ComponentC;