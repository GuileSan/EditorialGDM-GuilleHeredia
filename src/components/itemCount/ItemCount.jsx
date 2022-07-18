import React, { useState} from 'react'
import Button from '@mui/material/Button';
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
            <Button variant="contained" onClick ={() => restar()}>-</Button>
             <div className="cantidad">{count}</div>
            <Button variant="contained" onClick ={() => sumar()}>+</Button>
            <Button variant="contained" onClick ={() => onAdd(count)}>Add to Cart</Button>
        </div>
      
    </div>
  )
}
