import React, { createContext, useState } from 'react'


export const CartContext = createContext();

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    
    const isInCart = (id) => {
        return cart.find((el) => el.id === id);
    }
    function addItem (itemProducto, quantity) {
        if(isInCart(itemProducto.id)) {
            let nuevoCart = cart;
            let indexProducto = nuevoCart.findIndex(element=> element.id === itemProducto.id);
            nuevoCart[indexProducto]["quantity"] += quantity;
            nuevoCart[indexProducto]["total"] += itemProducto.price * quantity;
            setCart(...nuevoCart);
        }else{
            setCart([...cart, {...itemProducto, quantity: quantity, total: itemProducto.price * quantity}])
        }
        
    }
    function removeItem(id) {
        setCart(cart.filter((el) => el.id !== id))
    }
    function clear() {
        setCart([])
        
    }
    
  return (
    <>
    <CartContext.Provider value={{ cart, addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>
    </>
  );
}
