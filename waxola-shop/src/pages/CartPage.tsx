import React from "react";
import { UseDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { removeItem, updateQuantity } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { div, p } from "framer-motion/client";

const CartPage: React.FC = () => {
    /* const products = [
        { id:"1", name:"Pega 500g", price:18000 },
        { id:"2", name:"Pega 250g", price:9900 },
    ]; */
    
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    return(
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Carrito de Compras</h1>

            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <div>
                    {cartItems.map( item => (
                        <div key={item.id} className="border p-4 mb-4 rounded shadow bg-white dark:bg-gray-800">
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                            <p className="text-lg font bold">{item.price}</p>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => dispatch(updateQuantity({ id:item.id, quantity: Number(e.target.value) }))}
                                className="border p-1 w-16"
                            />
                            <button
                                className="ml-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
                                onClick={() => dispatch(removeItem(item.id))}
                            >Eliminar</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default CartPage;