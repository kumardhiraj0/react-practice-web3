import React from 'react'
import propTypes from "prop-types";
const ChildComponent = (props) => {
  return (
    <div>
        <h2>Child component</h2>
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>DOB : {props.DOB}</p>
    </div>
  )
}
//with the help of props-types we can define types of data
ChildComponent.propTypes = {
    name:propTypes.string,
    age:propTypes.number,
    DOB : propTypes.string
}

//if we dont get any props data then by default this props data will show
ChildComponent.defaultProps = {
    name:"Dhiraj BY default",
    age:23,
    DOB : "21/01/2000"
}

export default ChildComponent