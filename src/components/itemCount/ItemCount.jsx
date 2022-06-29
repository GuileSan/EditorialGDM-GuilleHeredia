import React, { useState} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./ItemCount.css";

export default function ItemCount ({initial, stock, onAdd}) {

    const [count, setCount] = useState(initial);

    function restar() {
        if(count != 1){
            setCount(count -1);
        }
    }
    function sumar() {
        if (count != stock) {
            setCount(count + 1);
        }
    }

  return (
    <div className="counter">
        
        <div className="botones">
            <div><Button variant="contained" onClick ={() => restar()}>-</Button></div>
             <div className="cantidad">{count}</div>
            <div><Button variant="contained" onClick ={() => sumar()}>+</Button></div>
            <div><Button variant="contained" onClick ={() => onAdd(count)}>Add to Cart</Button></div>
        </div>
      
    </div>
  )
}
