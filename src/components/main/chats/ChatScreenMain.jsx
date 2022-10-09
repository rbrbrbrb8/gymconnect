import React, { useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import DailyMessages from './DailyMessages';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const ScrollBottom = ({ scrollToBottom, scrollRef, children }) => {

  const trigger = useScrollTrigger({ target: scrollRef,threshold:0 })


  return (
    <Fade in={!trigger}>
      <Box
        onClick={scrollToBottom}
        role="presentation"
        sx={{ position: 'absolute', bottom: 80, right: 30 }}
      >
        {children}
      </Box>
    </Fade>
  );
}


function ChatScreenMain() {
  const [scroller, setScroller] = useState(undefined);
  const scrollToBottom = () => {
    const anchor = document.querySelector('#bottom-anchor');
    if (anchor) {
      console.log('yesssssss')
      anchor.scrollIntoView({ behavior: 'auto', block: 'center' })
    }
  };
  scrollToBottom()
  return (
    <div className='chat-screen-main-container'>
      <div className='daily-messages-container'>
        <div className='daily-messages-content' ref={scrollerRef => {
          if (scrollerRef) {
            setScroller(scrollerRef);
          }
        }}>
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'16.12.2022'} />
          <DailyMessages date={'17.12.2022'} />
          <DailyMessages date={'18.12.2022'} />
          <DailyMessages date={'19.12.2022'} />
          <DailyMessages date={'20.12.2022'} />
          <DailyMessages date={'21.12.2022'} />
          <DailyMessages date={'22.12.2022'} />
          <DailyMessages date={'23.12.2022'} />
          <DailyMessages date={'24.12.2022'} />
          <DailyMessages date={'25.12.2022'} />
          <DailyMessages date={'26.12.2022'} />
          <DailyMessages date={'27.12.2022'} />
          <DailyMessages date={'28.12.2022'} />
          <DailyMessages date={'29.12.2022'} />
          <DailyMessages date={'30.12.2022'} />
          <DailyMessages date={'31.12.2022'} />
          <DailyMessages date={'01.01.2023'} />
          <ScrollBottom scrollToBottom={scrollToBottom} scrollRef={scroller}>
            <Fab size="small" aria-label="scroll back to Bottom">
              <KeyboardArrowDownIcon />
            </Fab>
          </ScrollBottom>
          <div id='bottom-anchor' />
        </div>
      </div>
    </div>
  );
}

export default ChatScreenMain;