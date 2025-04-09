import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const DarkModeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
    );

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

  return (
    <Fab
      color='primary' onClick={() => setDarkMode(!darkMode)}
      sx={{
        position:'fixed', bottom:16, right:16,
        backgroundColor:'#333', color:'white',
        '&:hover':{ backgroundColor:'#555' },
      }}
    >
      {darkMode ? <WbSunnyIcon/> : <DarkModeIcon />}
    </Fab>
  )
}

export default DarkModeToggle;
