import React, { useReducer } from 'react';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const initialState = {
    items: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.items.map(item => (
          <li key={Date.now()}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>
      <button onClick={() => addToCart({ id: 1, name: 'Product 1', price: 10 })}>Add Product 1</button>
      <button onClick={() => addToCart({ id: 2, name: 'Product 2', price: 20 })}>Add Product 2</button>
    </div>
  );
};

export default ShoppingCart;
