import React from 'react';
import { Fab } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type Props ={
  darkMode: boolean;
  setDarkMode:(value: boolean) => void;
};

const DarkModeToggle: React.FC<Props> = ({ darkMode, setDarkMode }) => {
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
