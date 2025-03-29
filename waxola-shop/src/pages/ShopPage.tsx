import React from "react";
import ProductCard from "../components/ProductCard";

const ShowPage: React.FC = () => {
    return(
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Tienda</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ProductCard id="1" name="Pega 500g" price={18000} />
                <ProductCard id="2" name="Pega 250g" price={9900}/>
            </div>
        </div>
    );
};
export default ShowPage;