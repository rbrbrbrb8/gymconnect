import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PeopleList from './PeopleList';
import ChatScreen from './ChatScreen';
import '../../../css/chats.css'

function Chats() {

  return (
    <Grid container direction='row' className='chats-container'>
      <Grid item xs={2} className='chats-grid-item'>
        <PeopleList />
      </Grid>
      <Grid item flexGrow={1} className='chats-grid-item'>
        <ChatScreen />
      </Grid>
    </Grid>
  );
}

export default Chats;