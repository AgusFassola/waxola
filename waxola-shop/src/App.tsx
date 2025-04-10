import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  
import DarkModeToggle from "./components/DarkModeToggle";

import { Container, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette:{
      mode: darkMode ? 'dark':'light',
    },
  });
  

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>

        <Container sx={{ flexGrow: 1, py:6 }}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/checkout" element={<CheckoutPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
};

export default App;
