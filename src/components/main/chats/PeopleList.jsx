import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PeopleListItem from './PeopleListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function PeopleList() {
  const [selectedIndex, setSelectedIndex] = useState(false);
  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      <PeopleListItem itemIndex={0} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      <Divider variant='fullWidth' component="li" />
      <PeopleListItem itemIndex={1} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      <Divider variant="fullWidth" component="li" />
      <PeopleListItem itemIndex={2} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      <Divider variant="fullWidth" component="li" />
    </List>
  );
}

export default PeopleList;