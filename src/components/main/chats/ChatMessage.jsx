import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ChatMessage({ sender, content }) {

  return (
    <div className='message-margin-anchor'>
      <Paper elevation={1} className={'message ' + (sender === 'me' && 'message-me')}>
        <Typography>{content}</Typography>
      </Paper>
    </div>
  );
}

export default ChatMessage;