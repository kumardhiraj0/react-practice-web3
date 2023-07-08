import React, { useState } from 'react'
import ChildOpti from './ChildOpti';
const ParentOpti = () => {
    const [list,setList] = useState([]);
    const [item,setItem] = useState("");
    const [heading,setHeading] = useState("I AM OLDER HEADING");
  return (
    <div>
        <input type="text" placeholder='Enter anything....' onChange={(e)=>{setItem(e.target.value)}} value={item}/>
        <button onClick={()=> {setList([...list,item]); setItem("")}}>Add todo</button>
        <button onClick={()=>{ setHeading("I AM UPDATED HEADING")}}> Click to update heading</button>
       <ul>
       {
            list.map((val,ind)=>{
                return <li key={ind}>{val}</li>
            })
        }
       </ul>
        <ChildOpti heading = {heading}/>
    </div>
  )
}

export default ParentOpti;