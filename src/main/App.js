import React, { useEffect } from 'react';
import Navbar from '../components/main/Navbar';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../themes/mainTheme';
import '../css/shared.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Chats from '../components/main/chats/Chats';
import axios from './axiosClient';

function App() {
  useEffect(() => {
    axios.get('/user/initial').then(res => {
      window.localStorage.setItem('userInfo',JSON.stringify(res.data));
    })
  })
  return (
    <ThemeProvider theme={theme}>
      <div className='app-container'>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <div>home siuuuuuuuu</div>
          </Route>
          <Route path='/chats'>
            <Chats />
          </Route>
          <Route path='/myprofile'>
            <div>myprofile siuuuuuuuu</div>
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;