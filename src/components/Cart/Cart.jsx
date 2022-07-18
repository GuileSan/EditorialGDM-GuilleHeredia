import { Button, List } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartProvider'

export default function Cart() {
    const {cart, removeItem} = useContext(CartContext)


  return (
    <div>
        {cart.length ?
            <>
                <ul>
                    {cart.length && cart.map(item =>
                    <div>
                    <li key= {item.id}>{item.title} count: {item.quantity} total: {item.total}</li>
                    <Button onClick={()=> removeItem(item.id)}>Eliminar</Button>
                    </div>
                    )}
                </ul>
                <span>${cart.reduce((prev, acc)=> prev + acc.total, 0)}.00</span>
            </>
            :
            <>
                <h1>No hay nada en el carrito</h1>
                <Button><Link to="/">Home</Link></Button>
            </>
        }
    </div>
  )
}
