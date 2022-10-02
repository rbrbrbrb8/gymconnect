import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function SideDecor() {

  return (
    <>
      <Grid container direction='column' justifyContent='space-between' className='side-decor-container'>
        <Grid item>
          <Typography variant='h3'>Your entire growth process. In one place</Typography>
          <Typography >Join millions of people who come to each other's aid.</Typography>
          <Typography> Because together we grow.</Typography>
        </Grid>
        <Grid xs={0} sm={6} item justifySelf='flex-end' textAlign='center' className='side-decor-img-container'>
          <img src='./images/side_decor_ver4.png' className='login-page-img side-decor-img'></img>
        </Grid>
      </Grid>
    </>
  );
}

export default SideDecor;