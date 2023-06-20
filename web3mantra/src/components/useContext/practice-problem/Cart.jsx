import React from 'react'
import { createContext } from 'react';
import { useContext } from 'react';
const Cart = () => {
    const context = useContext(createContext);
  return (
    <div>
        Cart component
        <p>Name : {context.name}</p>
        <p>Age : {context.age}</p>
    </div>

  )
}

export default Cart;