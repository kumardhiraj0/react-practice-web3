import React, { useMemo, useState } from 'react'
//it will re-calculate only when add state is changed other wise initially it will be calculate and memorize the value
const UseMemoExample = () => {
    const [add,setAdd] = useState(0);
    const [minus,setMinus] = useState(100);
    const ExpensiveValue = useMemo(()=>{
        console.log("***********");
        return add+5
    },[add])

  return (
    <div>
        UseMemoExample
       <p>Expensive - calculation : {ExpensiveValue}</p>
        <p>ADD : {add}</p>
        <button onClick={()=>{setAdd(add+1)}}>ADD</button>
        <p>Minus : {minus}</p>
        {/* when will click over minus button then useMemo will not going to execute because it will only recalculate when add state variable will chane because state add variable is using in useMemo dependency*/}
        <button onClick={()=>{setMinus(minus-1)}}>MINUS</button>

    </div>
  )
}

export default UseMemoExample;