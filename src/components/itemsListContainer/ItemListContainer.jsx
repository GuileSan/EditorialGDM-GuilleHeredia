import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import { Typography } from '@mui/material';
import FilterCategory from '../FilterCategory/FilterCategory'



export default function ItemListContainer({greeting}) {
  const[error, setError] = useState(false);

   const[productList, setProductList] = useState([]);

   const[loading, setLoading] = useState(true)

   let {idCategory} = useParams()
   
  useEffect(() => {
    let products = [
      {id: 1, title: "Naruto 04", price: '$500', pictureURL: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/16519/9786075280677.jpg", category: "shonen"},
      {id: 2, title: "Berserk 03", price: '$650', pictureURL: "https://contentv2.tap-commerce.com/v2/file/43494/1172/RCI-PCABERSER03=9786075280462.jpg", category: "fantasia"},
      {id: 3, title: "Vagabond 28", price: '$800', pictureURL: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/3232/9788492449491.jpg", category: "adulto"}
    ]
    new Promise((resolve, reject) => {
        setTimeout(()=> {
          resolve(products)
        }, 2000)
    }).then((res)=>{
      idCategory?
          setProductList(res.filter((item)=> item.category === idCategory))
          :
          setProductList(res)
  }).catch((error)=>{
    setError(true);
   })
   .finally( ()=>{
    setLoading(false);
   })
  },[idCategory])

  
  return(  
    <>
      <Typography style={{color:'#000', textAlign:'center'}} variant="h3">
        {greeting}
      </Typography>
      <FilterCategory/>
      {loading ?
      <h1>Cargando...</h1> : <ItemList productList = {productList}/>
      }
    </>        
  )
}
