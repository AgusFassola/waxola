import React from "react";
import ProductCard from "../components/ProductCard";

const ShowPage: React.FC = () => {
    const products = [
        { id:"1", name:"Pega 500g", price:18000 },
        { id:"2", name:"Pega 250g", price:9900 },
    ];
    
    return(
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Tienda</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default ShowPage;