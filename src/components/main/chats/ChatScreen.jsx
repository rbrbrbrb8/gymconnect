import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ChatScreenBar from './ChatScreenBar';
import ChatScreenTypeBar from './ChatScreenTypeBar';

function ChatScreen() {

  return (
    <div className='chat-screen'>
      <Grid container direction='column' className='testingthis'>
        <Grid item xs={1}>
          <ChatScreenBar />
        </Grid>
        <Grid item xs={10}>

        </Grid>
        <Grid item xs={1}>
          <ChatScreenTypeBar />
        </Grid>
      </Grid>

    </div>
  );
}

export default ChatScreen;