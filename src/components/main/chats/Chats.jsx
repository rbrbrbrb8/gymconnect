import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PeopleList from './PeopleList';
import ChatScreen from './ChatScreen';
import '../../../css/chats.css'
import Pusher from 'pusher-js';
import axios from '../../../main/axiosClient';

function Chats() {
  const [messages, setMessages] = useState({});

  const emailSorter = (email1, email2) => {
    const email1Lower = email1.toLowerCase(), email2Lower = email2.toLowerCase();
    if (email1Lower < email2Lower) //sort string ascending
      return -1;
    if (email1Lower > email2Lower)
      return 1;
    return 0; //default return value (no sorting)
  }

  const generateRoomNames = (email, friends) => {
    return friends.map(friend => {
      const roomName = [email, friend.email].sort(emailSorter).join('-');
      return roomName;
    })
  }
  const handleInsertedMessage = (msg) => {
    messages[msg.room][msg.date].push(msg);
    setMessages({ ...messages });
  }

  useEffect(() => {
    axios.get('/chats/messages/initial').then(res => {
      console.log(res.data);
      setMessages(res.data);
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('ce66e5fa38c1f6d6235d', { cluster: 'eu' });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', data => {
      // alert(JSON.stringify(data));
      handleInsertedMessage(data);
    })

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  const preparePeopleList = messages => {
    //need to get user email and friends from local storage, generate room names and take the last message from each room
    //this can be passed to PeopleList component
  }

  console.log(messages);

  return (
    <Grid container direction='row' className='chats-container'>
      <Grid item xs={2} className='chats-grid-item'>
        <PeopleList />
      </Grid>
      <Grid item flexGrow={1} className='chats-grid-item'>
        <ChatScreen />
      </Grid>
    </Grid>
  );
}

export default Chats;