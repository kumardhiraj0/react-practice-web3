import React from 'react'
import useCounter from './useCounter'

const Counter2 = () => {
    //custon hook useCounter
    const [count,Increament,Decreament] = useCounter(10);
  return (
    <div>
       <h2>{count}</h2>
       <button onClick={Increament}>Increament</button>
       <button onClick={Decreament}>Decreament</button>
    </div>
  )
}

export default Counter2;