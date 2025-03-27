import React from 'react';
import { Link } from 'react-router-dom';

type NavbarProps = {
    toogleDarkMode: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toogleDarkMode }) => {
  return (
    <nav className='flex justify-between p-4 bg-gray-800 text-white'>
        <div>
            <Link to="/" className='mr-4'>Inicio</Link>
            <Link to="/shop" className='mr-4'>Tienda</Link>
            <Link to="/checkout">Checkout</Link>
        </div>
        <button onClick={toogleDarkMode} className='bg-gray-700 p-2 rounded'>
            🌙 Modo oscuro
        </button>
    </nav>
  );
};

export default Navbar;

