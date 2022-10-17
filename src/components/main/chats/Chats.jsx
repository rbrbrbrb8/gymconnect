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
  const [peopleList, setPeopleList] = useState([])

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

  const calculateTimeInSeconds = time => {
    const [HH, MM] = time.split(':');
    return Number(HH) * 60 * 60 + Number(MM) * 60;
  }

  const preparePeopleList = messages => {
    //need to get user email and friends from local storage, generate room names and take the last message from each room
    //this can be passed to PeopleList component
    const userObj = JSON.parse(window.localStorage.getItem('userInfo'));
    const roomNames = generateRoomNames(userObj.email, userObj.friends);
    return userObj.friends.map((friend, i) => {
      const toReturn = {
        displayName: friend.displayName,
        roomName: roomNames[i]
      };
      if (Object.keys(messages).length === 0) return toReturn; //if there are no messages
      if (!messages[roomNames[i]]) return toReturn;            //or there arent any messages in a specific room
      const latestMessageDate = Object.keys(messages[roomNames[i]]).sort((date1, date2) => Number(date2) - Number(date1))[0];
      toReturn.firstMessage = messages[roomNames[i]][latestMessageDate].sort((message1, message2) => message2.timeSeconds - message1.timeSeconds)[0];
      return toReturn;
    })
  }

  const handleInsertedMessage = (msg) => {
    messages[msg.room][msg.date].push(msg);
    setMessages({ ...messages });
  }

  useEffect(() => {
    axios.get('/chats/messages/initial').then(res => {
      console.log('messages')
      console.log(res.data);
      setMessages(res.data);
      setPeopleList(preparePeopleList(res.data))
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



  // console.log(messages);

  return (
    <Grid container direction='row' className='chats-container'>
      <Grid item xs={2} className='chats-grid-item'>
        <PeopleList list={peopleList} />
      </Grid>
      <Grid item flexGrow={1} className='chats-grid-item'>
        <ChatScreen />
      </Grid>
    </Grid>
  );
}

export default Chats;