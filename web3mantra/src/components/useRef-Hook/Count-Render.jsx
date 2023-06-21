import React, { useEffect, useState,useRef } from "react";
const CountRender = ()=>{
    const [input,setInput] = useState("");
    const counter = useRef(0);
    const handleChange = (e)=>{
       setInput(e.target.value);
    }
    useEffect(()=>{
        counter.current = counter.current+1;
    })
    return (
        <>
        <p>Name : <span style={{color:"GrayText"}}>{input}</span></p>
        <input type="text" onChange={handleChange} value={input} placeholder="write ur name..."/>
        <h4>Application has been rendered {counter.current} times</h4>
        </>
    )
}
export default CountRender;