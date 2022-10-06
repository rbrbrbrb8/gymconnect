import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import ChatMessage from './ChatMessage';

function DailyMessages({ date, messages }) {
  //message : {sender:'me'|'other',content:'string'}
  return (
    <Grid container direction='column'>
      <Grid item textAlign='center'>
        <Chip label={date} />
      </Grid>
      {/* {messages.map(message => (
        <Grid item textAlign={message.sender ==='me' ? 'left' : 'right'}>
          <ChatMessage sender={message.sender} content={message.content} />
        </Grid>
      ))} */}
    </Grid>
  );
}

export default DailyMessages;