import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const[itemProducto, setItemProducto] = useState({});

    let {idItem} = useParams();

    useEffect( () =>{
        let promesaDetail = new Promise((resolve, rej) =>{
            setTimeout( ()=>{
                fetch("http://localhost:3000/Data.json")
                .then((response) =>  response.json())
                .then((data)=>{
                    resolve(data);
                    console.log(data);
                })
            }, 2000)
        });

        promesaDetail.then((resultado)=>{
            let aux = resultado.find((elemento)=> elemento.id == idItem)
            setItemProducto(aux);
        })
        .catch((error)=> {
            setError(true);
        })
        .finally(()=>{
            setLoading(false);
        })
    }, [idItem])



  return (
    <>
        {loading && "Cargando..."}
        {error && "Disculpe, hubo un error con el host"}
        {itemProducto && <ItemDetail itemProducto={itemProducto}/>}
    </>
  )
}
