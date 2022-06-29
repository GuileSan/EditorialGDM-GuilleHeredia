import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../itemCount/ItemCount'


const ItemDetail = ({id, price, title, stock, pictureURL}) => {
    function onAdd(valor) {
        alert("Agregaste " + valor + " productos a tu compra")
      }
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={pictureURL}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
            <Typography variant="body2" color="text.secondary">
                {id}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {price}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
                {stock}
            </Typography>
            
        </CardContent>
      </CardActionArea>
    </Card>
        <div>
        <ItemCount initial ={1} stock ={5} onAdd ={onAdd}/>
        </div>
    </div>
  )
}
export default ItemDetail
