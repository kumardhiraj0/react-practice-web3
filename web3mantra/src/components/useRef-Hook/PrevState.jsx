import React, { useEffect, useState,useRef } from "react";
const PrevState = ()=>{
    const [input,setInput] = useState("");
    const Prev_state = useRef("");
    const handleChange = (e)=>{
       setInput(e.target.value);
    }
    useEffect(()=>{
        Prev_state.current = input;
    })
    return (
        <>
        <input type="text" onChange={handleChange} value={input} placeholder="write ur name..."/>
        <h4>Previous state was <span style={{color:"green"}}>{Prev_state.current}</span></h4>
        </>
    )
}
export default PrevState;