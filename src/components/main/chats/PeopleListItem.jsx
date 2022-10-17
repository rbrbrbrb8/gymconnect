import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { actions } from '../../../redux/slices/chatSlice';

function PeopleListItem({ itemIndex,name,previewMsg }) {
  const selectedIndex = useSelector(state => state.chat.selectedPeopleIndex);
  const dispatch = useDispatch();
  const handleListItemClick = itemIndex => {
    dispatch(actions.selected(itemIndex));
  }
  return (
    <ListItemButton alignItems='flex-start' selected={selectedIndex === itemIndex} onClick={(e) => handleListItemClick(itemIndex)}>
      <ListItemAvatar>
        <Avatar alt={name}  />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={previewMsg}
        className='person-preview'
      />
    </ListItemButton>
  );
}

export default PeopleListItem;