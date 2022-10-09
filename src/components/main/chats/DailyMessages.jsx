import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import ChatMessage from './ChatMessage';

function DailyMessages({ date, messages }) {
  //message : {sender:'me'|'other',content:'string'}
  const message3 = { sender: 'me', content: 'WE GO JIMMMMMMM!!!!!!!!!!!!!!' }
  const message2 = { sender: 'other', content: 'SIUUUUUUUUUUUU' }
  const message = { sender: 'me', content: 'YOOOOOOOOOOOOOOO' }
  const message4 = { sender: 'other', content: 'LETS GOOOOOO' }
  return (
    <Grid container direction='column'>
      <Grid item textAlign='center' className='messages-date'>
        <Chip label={date} />
      </Grid>
      <Grid item container className='all-messages' direction='column'>
        <Grid item container justifyContent={message.sender === 'me' ? 'left' : 'right'}>
          <ChatMessage sender={message.sender} content={message.content} />
        </Grid>
        <Grid item container justifyContent={message3.sender === 'me' ? 'left' : 'right'}>
          <ChatMessage sender={message3.sender} content={message3.content} />
        </Grid>
        <Grid item container justifyContent={message2.sender === 'me' ? 'left' : 'right'}>
          <ChatMessage sender={message2.sender} content={message2.content} />
        </Grid>
        <Grid item container justifyContent={message4.sender === 'me' ? 'left' : 'right'}>
          <ChatMessage sender={message4.sender} content={message4.content} />
        </Grid>
      </Grid>

      {/* {messages.map(message => (
    
      ))} */}
    </Grid>
  );
}

export default DailyMessages;