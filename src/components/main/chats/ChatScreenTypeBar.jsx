import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SendIcon from '@mui/icons-material/Send';


function ChatScreenTypeBar() {
  const TypeMessage = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%'
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      width: '100%'
    },
  }));

  return (
    <div className='chat-screen-type-bar-container'>
      <AppBar position='sticky'>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <TypeMessage sx={{marginTop:'8px',marginBottom:'8px'}}>
              <StyledInputBase
                placeholder="Enter message"
                inputProps={{ 'aria-label': 'enter message' }}
                sx={{ width: '100%',paddingBottom:0,paddingTop:0 }}
                multiline={true}
              />
            </TypeMessage>
          </Box>
          <Box>
            <IconButton
              size="large"
              aria-label="show more"
              color="inherit"
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ChatScreenTypeBar;