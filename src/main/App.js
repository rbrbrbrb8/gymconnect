import React from 'react';
import Navbar from '../components/main/Navbar';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../themes/mainTheme';
import '../css/shared.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar></Navbar>
        we in boyyyyyyyyyy
      </div>
    </ThemeProvider>
  );
}

export default App;