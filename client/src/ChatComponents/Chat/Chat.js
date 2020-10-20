import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

//Chats dependent components
import Input from '../Input/Input';
import Messages from '../Messages/Messages'
import InfoBar from '../../ChatComponents/InfoBar/InfoBar';

//import chat css
import "./Chat.css";

import queryString from 'query-string';


//global variable;
let socket;


export default function Chat(props) {
    const {name,room} = props

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:8080';


    //The use effect is hook that lets you perform side effects function components
    //This is equivalent to componentDisMount and componentDidUpdate
    //Have to use cleanup because we need to know when actually a users disconnect

    useEffect(() => {
        socket = io(ENDPOINT);
        //emit event from client side(can be anything (join) should be same exact string on backend as well,receive data on backend)
        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error);
              }
           
        });
        //have to finish with return this is used for unmounting

        // return () => {
        //     socket.emit('disconnect');
        //     socket.off();
        // }

    }, [ENDPOINT])


    //Second one handling the messages can use useEffect as much as you want.
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])


    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            //clear message
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
            <div className="container">
            <InfoBar room={name} />
            <Messages messages={messages}></Messages>
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

        </div>
    )
}
