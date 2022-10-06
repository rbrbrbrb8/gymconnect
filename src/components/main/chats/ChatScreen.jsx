import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ChatScreenBar from './ChatScreenBar';
import ChatScreenTypeBar from './ChatScreenTypeBar';
import ChatScreenMain from './ChatScreenMain';

function ChatScreen() {

  return (
    <div className='chat-screen'>
      <ChatScreenBar />
      <ChatScreenMain />
      <ChatScreenTypeBar />
    </div>
  );
}

export default ChatScreen;