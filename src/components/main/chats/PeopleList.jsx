import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PeopleListItem from './PeopleListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function PeopleList({ list }) {

  console.log(list);
  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      {list.map((roomInfo,i) => (
        <>
          <PeopleListItem name={roomInfo.displayName} previewMsg={roomInfo.firstMessage? roomInfo.firstMessage.content:''} itemIndex={i} />
          <Divider variant='fullWidth' component="li" />
        </>
      ))}
      {/* <PeopleListItem itemIndex={0} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      <Divider variant='fullWidth' component="li" />
      <PeopleListItem itemIndex={1} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      <Divider variant="fullWidth" component="li" />
      <PeopleListItem itemIndex={2} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      <Divider variant="fullWidth" component="li" /> */}
    </List>
  );
}

export default PeopleList;