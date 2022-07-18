import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartProvider'
export default function CartWidget() {
  const {cart} = useContext(CartContext);
  return  <div>
            <Link to={'/cart'}><AddShoppingCartIcon/></Link>
            {!!cart.length &&
              <span>{cart.reduce((prev, acc)=> prev + acc.quantity, 0)}</span>
            }
          </div>
  
}
