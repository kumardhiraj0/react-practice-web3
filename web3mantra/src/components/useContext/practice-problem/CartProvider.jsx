import React from 'react'
import cartContext from './Create-cart-context'
import Items from './Items'
import Cart from './Cart'
const CartProvider = () => {
  return (
    <cartContext.Provider value={{name:"dk",age:34}}>
        <Cart/>
        <Items/>
    </cartContext.Provider>
  )
}

export default CartProvider;