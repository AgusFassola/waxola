import React from 'react';
import { AppBar, Toolbar, Typography, Badge, IconButton, Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const Navbar: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items.length);

  return (
    <AppBar position='static' sx={{ background:'linear-gradient(to right, #2563EB, #4F46E5)' }}>
        <Toolbar sx={{ justifyContent:'space-between' }}>
            <Typography variant='h6' component={Link} to="/" sx={{ textDecoration: 'none', color:'white' }}>
                Waxola Shop
            </Typography>
            <Box sx={{ display:'flex', gap:2 }}>
                <Button component={Link} to="/shop" color='inherit'>
                    Tienda
                </Button>
                <IconButton component={Link} to="/cart" color='inherit'>
                    <Badge badgeContent={cartItems} color='error'>
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton>
            </Box>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;

