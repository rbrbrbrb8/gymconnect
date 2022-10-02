import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import '../../css/navbar.css';

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
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' className='navbar-container'>
      <Grid item container sm={5} direction='row' alignItems='center'>
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
            />
          </Search>
        </Box>
      </Grid>
      <Grid item container direction='row' sm={2} justifyContent='center'>
        <Box component={Grid} item container spacing={2} direction='row' className='pages-container' >
          <Box component={Grid} item>
            <Typography color='textPrimary'>Home</Typography>
          </Box>
          <Box component={Grid} item>
            <Typography color='textPrimary'>Chats</Typography>
          </Box>
          <Box component={Grid} item>
            <Typography color='textPrimary'>My Profile</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item container sm={5} direction='row' justifyContent='flex-end'>
        <Button variant='contained'>Disconnect</Button>
      </Grid>
    </Grid>
  );
}

export default Navbar;