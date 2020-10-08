import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import "./Chat.css";

let socket;


export default function Chat({ location }) {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io("http://localhost:8080");
        setName(name);
        setRoom(room);
        console.log(socket)


    },["http://localhost:8080",location.search])


    return (
       <>
       </>

    )
}
