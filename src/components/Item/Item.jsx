import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

import "./Item.css"
export default function Item({id, price, title, pictureURL}) {

  return (
    <div className="itemContenedor">
      <div className="tarjeta">
        <Card sx={{ maxWidth: '350px', maxHeigth: '600px'}}>
          <CardActionArea>
            <Link to={`/item/${id}`}>
            <CardMedia
              component="img"
              height="100%"
              image= {pictureURL}
              alt={title}
            />
            </Link>
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
      
    </div>
  );
}

