import React from 'react'
import cartContext from './Create-cart-context'
import Items from './Items'
import Cart from './Cart'
import { useState } from 'react'
const CartProvider = () => {
    const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{cart : cart, updateCart:setCart}}>
        <Cart/>
        <Items/>
    </cartContext.Provider>
  )
}

export default CartProvider;