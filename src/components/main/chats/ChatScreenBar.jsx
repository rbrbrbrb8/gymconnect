import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
function ChatScreenBar() {

  return (
    <div className='chat-screen-bar-container'>
      <AppBar position='sticky'>
        <Toolbar>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt='Roy Brezner' src='/images/berez.jpg' />
            </ListItemAvatar>
            <ListItemText primary='Roy Brezner' secondary={'Online'} />
          </ListItem>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ChatScreenBar;