import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import '../../css/navbar.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useHistory, useLocation } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.05),
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
  },
  marginLeft: 0,
  width: '100%',
  transition: theme.transitions.create('margin'),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
    marginRight: '80px',
    '&:focus-within': {
      marginRight: 0,
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '120px',
      '&:focus': {
        width: '200px',
      },
    },
  },
}));

function Navbar() {
  //display={{ 'xs': 'none', 'sm': 'block' }}
  const history = useHistory();
  const location = useLocation();
  const [tabValue, setTabValue] = useState(false);
  useEffect(() => {
    const currentPage = location.pathname;
    setTabValue(routeIndexes[currentPage])
  },[location])
  
  const routeIndexes = {
    '/home':0,
    '/chats':1,
    '/myprofile':2,
    '/search':false
  }
  const routeNames= ['/home','/chats','/myprofile']
  
  const handleTabChange = (event, routeIndex) => {
    // setTabValue(routeIndex);
    history.push(routeNames[routeIndex]);
  };

  const disconnect= () => {
    setTabValue(false);
  }

  const commenceSearch = e => {
    if(e.key === 'Enter') console.log('siuuuuu');
  }

  return (
    <Grid wrap='nowrap' columns={20} container direction='row' justifyContent='center' alignItems='center' className='navbar-container' >
      <Grid item container sm={7} direction='row' alignItems='center'>
        <Box component={Grid} item>
          <img src='./images/logo_ver13.png' className='navbar-logo'></img>
        </Box>
        <Box component={Grid} item className='search-container'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search people…"
              inputProps={{ 'aria-label': 'search' }}
              className='test'
              onKeyDown={commenceSearch}
            />
          </Search>
        </Box>
      </Grid>
      <Grid item container direction='row' sm={6} justifyContent='center' alignItems='center' className='routes-container'>
        <Box sx={{ width: '100%' }}>
          <Tabs value={tabValue} onChange={handleTabChange} sx={{height:'65px'}} centered>
            <Tab label="Home" sx={{height:'65px'}}/>
            <Tab label="Chats" sx={{height:'65px'}}/>
            <Tab label="My Profile" sx={{height:'65px'}}/>
          </Tabs>
        </Box>
      </Grid>
      <Grid item container sm={7} direction='row' justifyContent='flex-end'>
        <Button variant='contained' onClick={disconnect}>Disconnect</Button>
      </Grid>
    </Grid>
  );
}

export default Navbar;