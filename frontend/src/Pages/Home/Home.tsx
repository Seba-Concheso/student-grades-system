import React from 'react';
import {  Box, Typography } from '@mui/material';


const Home: React.FC = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Opcional: centra los botones horizontalmente
      gap: 2, // Espacio entre los botones
      p: 2, // Padding alrededor de los botones
    }}
  >
    <Box>
      <Typography>Hola</Typography>
    </Box>
  </Box>)
};

export default Home;