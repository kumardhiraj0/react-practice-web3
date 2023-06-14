import React from 'react'
import ChildComponent from './ChildComponent';
const ParentComponent = () => {
    const name = "John doe";
    const age = 23;
  return (
    <div>
        <h1>parent component</h1>
        <ChildComponent
         name={name}
         age={age}
         DOB="21/01/2000"
         />

        <ChildComponent
        //  name={"Pawan"}
        //  age={30}
        //  DOB="21/01/1999"
         />
    </div>
  )
}
export default ParentComponent;
