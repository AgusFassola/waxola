import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { decreaseItemQuantity, removeItem } from "../redux/cartSlice";
import { Typography, Box,Paper,Button,Grid, 
    Card, CardContent, Dialog, DialogTitle, DialogActions, Divider } from "@mui/material";

const CartPage = () => {
    
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const [ openDialog, setOpenDialog ] = useState(false);
    const [ itemToDelete, setItemToDelete ] = useState<string | null>(null);

    const handleDeleteClick = (id:string) => {
        setItemToDelete(id);
        setOpenDialog(true);
    };

    const handleConfirmDelete = () => {
        if(itemToDelete){
            dispatch(removeItem(itemToDelete));
            setOpenDialog(false);
            setItemToDelete(null);
        }
    };

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return(
        <Box sx={{ padding:4 }}>
            <Typography variant="h4" gutterBottom>Carrito de Compras</Typography>

            {cartItems.length === 0 ? (
                <Typography variant="body1">Tu carrito está vacío.</Typography>
            ) : (
                <>
                    <Grid container spacing={2}>
                        {cartItems.map( item => (
                            <Grid item xs={12} key={item.id}>

                                <Card sx={{ padding:2, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                                    <CardContent sx={{flexFlow:1 }}>
                                        <Typography variant="h6">{item.name}</Typography>
                                        <Typography variant="body2">Precio: ${item.price}</Typography>
                                        <Typography variant="body2">Cantidad: {item.quantity}</Typography>
                                        <Typography variant="body1">
                                            Subtotal: ${item.price * item.quantity}
                                        </Typography>   
                                    </CardContent>     
                                    <Button
                                            variant="contained" color="error"
                                            onClick={() => dispatch(decreaseItemQuantity(item.id))}
                                    >X</Button>                           
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Divider sx={{ my:4 }}/>

                    <Typography variant="h5" align="right">
                        Total: ${total}
                    </Typography>
                </>
            )}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>¿Eliminar el producto?</DialogTitle>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
                    <Button onClick={handleConfirmDelete} color="error" variant="contained">
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};
export default CartPage;