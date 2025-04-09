import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomaPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  
import DarkModeToggle from "./components/DarkModeToggle";

import { Container, CssBaseline, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette:{
    mode: 'dark',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <DarkModeToggle />

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
