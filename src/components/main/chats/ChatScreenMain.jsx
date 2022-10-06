import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DailyMessages from './DailyMessages';

function ChatScreenMain() {

  return (
    <div className='chat-screen-main-container'>
      <div className='daily-messages-container'>
        <DailyMessages date={'20.12.2022'} />
      </div>
    </div>
  );
}

export default ChatScreenMain;