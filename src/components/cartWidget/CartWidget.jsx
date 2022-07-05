import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import React from 'react'

export default function CartWidget({cantidad}) {
  return  <div>
    <AddShoppingCartIcon/>
            {cantidad}
          </div>
  
}
