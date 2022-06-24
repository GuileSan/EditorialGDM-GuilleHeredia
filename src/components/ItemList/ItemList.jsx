import React from 'react'
import Item from "../Item/Item"
import "./ItemList.css"
export default function ItemList({productList}) {
  return (
    <div className="itemList">
        {
            productList.map((item) =>(
                <Item key ={item.id} id ={item.id} title= {item.title} price= 
                {item.price} pictureURL= {item.pictureURL}/>)
            )
        }
    </div>
  )
}
