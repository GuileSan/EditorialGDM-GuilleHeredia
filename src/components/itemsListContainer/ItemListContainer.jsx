import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';

export default function ItemListContainer({greeting}) {
  const[productList, setProductList] = useState([]);
  const[loading, setLoading] = useState(true)
  useEffect(() => {
    let products = [
      {id: 1, title: "Naruto 04", price: 500, pictureURL: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/16519/9786075280677.jpg"},
      {id: 2, title: "Berserk 03", price: 650, pictureURL: "https://contentv2.tap-commerce.com/v2/file/43494/1172/RCI-PCABERSER03=9786075280462.jpg"},
      {id: 3, title: "Vagabond 28", price: 800, pictureURL: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/3232/9788492449491.jpg"}
    ]
    new Promise((resolve, reject) => {
        setTimeout(()=> {
          resolve(products)
        }, 2000)
    }).then((res) =>{
        setProductList(res)
        setLoading(false)
    })
  })
  
  return( 
    <>
      {greeting}
      {loading ?
      <h1>Cargando...</h1> : <ItemList productList = {productList}/>
      }
    </>        
  )
}
