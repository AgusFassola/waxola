import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
//import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

type ProductCardProps = {
    product:{
        id:string;
        name: string;
        price:number;
    }
};

const ProductCard = ({ product }: ProductCardProps) => {
    const dispatch = useDispatch();
    
  return (
    <Card sx={{ backgroundColor:'background.paper', boxShadow:3, padding:2 }}>
      <CardContent>
          <Typography variant='h6'>{product.name}</Typography>
          <Typography color='text.secondary'>${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button 
              variant='contained' color='primary' sx={{ marginTop:2 }} 
              onClick={() => dispatch(addItem({ ...product, quantity:1 }))}
            >Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
