import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({title}) => {
    const [detail, setDetail] = useState({})
    const {itemId} = useParams()

    useEffect(() =>{
        let products = [
            {id: 1, title: "Naruto 04", price: '$500', stock:5, pictureURL: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/16519/9786075280677.jpg"},
            {id: 2, title: "Berserk 03", price: '$650', stock:8, pictureURL: "https://contentv2.tap-commerce.com/v2/file/43494/1172/RCI-PCABERSER03=9786075280462.jpg"},
            {id: 3, title: "Vagabond 28", price: '$800', stock:3, pictureURL: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/3232/9788492449491.jpg"}
          ];

          new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(products)
            }, 2000)
          }).then(res => {
            const item = res.find((item) => item.id === Number(itemId))
            setDetail(item)

          })

    }, [itemId])
    




  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}
export default ItemDetailContainer