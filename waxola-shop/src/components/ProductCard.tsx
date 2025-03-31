import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

type ProductCardProps = {
    product:{
        id:string;
        name: string;
        price:number;
    }
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();
    
  return (
    <div className='border p-4 rounded-lg shadow-md bg-ewhite dark:bg-gray-800'>
      <h2 className='text-lg font-semibold'>{product.name}</h2>
      <p className='text-gray-600 dark:text-gray-300'>{product.price}</p>
      <button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'
        onClick={() => dispatch(addItem({ ...product, quantity:1 }))}
      >Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
