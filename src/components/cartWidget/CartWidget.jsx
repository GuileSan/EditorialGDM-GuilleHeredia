import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { MyCartContext } from '../../Context/CartContext'

export default function CartWidget() {
  const {cantCart} = useContext(MyCartContext);
  const [cantCartWidget, setCantCartWidget] = useState(0);
  useEffect(() =>{
    setCantCartWidget(cantCart)
  }, [cantCart])
  return  <div>
    <AddShoppingCartIcon/>
            <div><p> {cantCartWidget} </p></div>
          </div>
  
}
