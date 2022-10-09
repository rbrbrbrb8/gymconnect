import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
  palette: {
    primary: {
      main: '#355C7D'
    },
    text: {
      primary: '#355C7D'
    }
  },
  typography: {
    fontFamily: ['Oswald',
      'sans-serif'
    ].join(',')
  },
  paper: {
    fontFamily: ['Oswald',
      'sans-serif'
    ].join(',')
  }
});

export default theme;