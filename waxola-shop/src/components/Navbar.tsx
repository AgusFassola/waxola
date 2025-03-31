import React from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const Navbar: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <nav className='bg-blue-500 p-4 text-white flex justify.between'>
        <Link to="/" className='font-bold text-lg'>Waxola Shop</Link>
        <div>
            <Link to="/shop" className='mr-4'>Tienda</Link>
            <Link to="/cart" className='relative'>
                Carrito ({ cartItems.length })
            </Link>
        </div>
    </nav>
  );
};

export default Navbar;

