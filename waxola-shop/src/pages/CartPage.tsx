import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { removeItem } from "../redux/cartSlice";
import { Typography, Box,Paper,Button,Grid } from "@mui/material";

const CartPage: React.FC = () => {
    
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    return(
        <Box sx={{ padding:4 }}>
            <Typography variant="h4" gutterBottom>Carrito de Compras</Typography>

            {cartItems.length === 0 ? (
                <Typography variant="body1">Tu carrito está vacío.</Typography>
            ) : (
                <Grid container spacing={2}>
                    {cartItems.map( item => (
                        <Grid item xs={12} key={item.id}>
                            <Paper sx={{ padding:2, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography >${item.price}</Typography>
                                <Typography >Cantidad: {item.quantity}</Typography>
                                <Button
                                    variant="contained" color="error"
                                    onClick={() => dispatch(removeItem(item.id))}
                                >Eliminar</Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};
export default CartPage;