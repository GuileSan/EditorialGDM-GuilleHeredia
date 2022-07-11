import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext();

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    const [cantCart, setCantCart] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [condicionCartVacio, setCondicionCartVacio] = useState(true)

    const isInCart = (id) => {
        return cart.find((el) => el.id === id);
    }
    function addItem (item, quantity) {
        setCondicionCartVacio(false)
        if(isInCart(item.id)) {
            let nuevoCart = cart;
            let indexProducto = nuevoCart.findIndex(element=> element.id === item.id);
            nuevoCart[indexProducto].quantity = Number(nuevoCart[indexProducto].quantity) + Number(quantity);
            setCart(nuevoCart);
        }else{
            setCart([...cart, {...item, quantity:quantity}])
        }
        
    }
    function removeItem(itemId) {
        setCart(cart.filter((el) => el.id !== itemId))
    }
    function clear() {
        setCart([])
        setCondicionCartVacio(true)
    }
    useEffect (()=>{
        setCantCart(cart.reduce((acc, element) => acc + element.quantity, 0));
        cart.lenght===0 && setCondicionCartVacio(true);
        setPrecioTotal(cart.reduce((acc, elemento)=> acc + elemento.price*elemento.quantity, 0));
    }, [cart]);

  return (
    <>
    <CartContext.Provider value={{cantCart, cart, addItem, removeItem, clear, precioTotal}}>
        {children}
    </CartContext.Provider>
    </>
  );
}
