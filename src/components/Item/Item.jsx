import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../itemCount/ItemCount';
export default function Item({id, price, title, pictureURL}) {
  function onAdd(valor) {
    alert("Agregaste " + valor + " productos a tu compra")
  }
  return (
    <div>
      <div>
        <Card sx={{ maxWidth: '350px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              image= {pictureURL}
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
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        <ItemCount initial ={1} stock ={5} onAdd ={onAdd}/>
      </div>
    </div>
  );
}

