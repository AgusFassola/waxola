import React from 'react'
import { Box, Typography } from '@mui/material';

const Footer:React.FC = () => {
  return (
    <Box component="footer" py={4} textAlign="center">
      <Typography variant='body2' color='textSecondary'>
        &copy; 2025 Waxola

      </Typography>
    </Box>
  );
};

export default Footer;
