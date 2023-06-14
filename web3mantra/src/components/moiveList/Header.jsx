import React from 'react'
import "./header.css";
const Header = () => {
    const login = true;
  return (
    <div className='main'>
        <h2>Moive List</h2>
        {/* how to use if else inside jsx */}
       {
        (()=>{
            if(login===true){
                return <h1>Dekh le bhai</h1>
            }else {
                return <h1>tujhe nahi dikhaunga</h1>
            }
        })()
       }

       {/* same above code using ternary operator */}
       {
        login?<h1>dekh le bhai</h1>: <h1>tujhe nahi dikhaunga bhai</h1>
       }
    </div>
  )
}
export default Header