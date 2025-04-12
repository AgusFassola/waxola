import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

const products=[
    {id:"1", name:"Pega Invierno 500g", price:18000},
    {id:"2", name:"Pega Invierno 250g", price:9900},
    {id:"3", name:"WaxClean QuitaPega 120ml", price:3500},
    {id:"4", name:"WaxClean QuitaPega 60ml", price:2900},
];

const HomePage = () => {
    return(
        <Grid container spacing={4}>
            {products.map((prod) => (
                <Grid item xs={12} sm={6} md={4} key={prod.id}>
                    <ProductCard product={prod} />
                </Grid>
            ))}
        </Grid>
    );
};
export default HomePage;