import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className='flex justify-between p-4 bg-gray-800 text-white'>
            <Link to="/" className='mr-4'>Inicio</Link>
            <Link to="/shop" className='mr-4'>Tienda</Link>
            <Link to="/checkout">Checkout</Link>
    </nav>
  );
};

export default Navbar;

