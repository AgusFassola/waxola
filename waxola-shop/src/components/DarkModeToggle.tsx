import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
    );

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

  return (
    <button className='fixed buttom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded'
        onClick={()=>setDarkMode(!darkMode)}
    >
      {darkMode ? "☀ Modo Claro" : "🌙 Modo Oscuro"}
    </button>
  )
}

export default DarkModeToggle;
