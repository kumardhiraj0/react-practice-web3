import React from 'react'
import {useNavigate} from "react-router-dom";
const PlaceOrder = () => {
    const navigate = useNavigate();
  return (
    <>
    <div>order place successfully</div>
    <button onClick={()=> navigate(-1)}>Go back</button>
    </>
  )
}

export default PlaceOrder;