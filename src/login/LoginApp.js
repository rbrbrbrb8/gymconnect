import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginForm from '../components/login/LoginForm';
import '../css/login.css';
import '../css/shared.css';
import SideDecor from '../components/login/SideDecor';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../themes/mainTheme';

function LoginApp() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container className='login-page-container'>
        <Grid item sm={4} xs={12}>
          <LoginForm />
        </Grid>
        <Box component={Grid} item sm={8} className='side-decor' display={{'xs':'none','sm':'block'}}>
        <SideDecor />
        </Box>
        {/* <Grid item xs={8} className='side-decor'>
          
        </Grid> */}
      </Grid>
    </ThemeProvider>
  );
}

export default LoginApp;