import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ItemCount from '../itemCount/ItemCount';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.h5,
  padding: theme.spacing(1),
  margin:theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const ItemCounter = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.h4,
    padding: theme.spacing(1),
    margin:theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const ItemText = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.h4,
    padding: theme.spacing(1),
    margin:theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



export default function ItemDetail({itemProducto}) {
 
    function onAdd(count) {
        alert("Agregaste " + count + " " + itemProducto.title)
      }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className ="Imagen">
            <img src={itemProducto.pictureURL} alt={itemProducto.title}/>
          </div>
        </Grid>
        <Grid item xs={6} className="infoProd">
            <Item>{itemProducto.title}</Item>
            <ItemCounter>$ {itemProducto.price}</ItemCounter>
            <ItemCounter className="divCount"><ItemCount stock= {itemProducto.stock} initial={1} onAdd={onAdd} articulo={itemProducto}/></ItemCounter>
            <ItemText>Stock disponible: {itemProducto.stock}</ItemText>

        </Grid>
      </Grid>
    </Box>
  );
}



