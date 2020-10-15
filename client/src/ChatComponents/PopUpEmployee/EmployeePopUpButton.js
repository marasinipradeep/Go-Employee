import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Models from "../../PureComponents/PopUpDialogue/PopUpDialogue"

import Chat from "../Chat/Chat"

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState('pradeep');
  const [room, setRoom] = useState('findEmployee');

  
  

  return (
    <div>
    
      <Button variant="outlined" color="primary" onClick={()=>setOpen(true)}>
        Open Chat room
      </Button>

      <Models open={open} setOpen={setOpen}>
        <Chat name={name} room={room} setName={name} setRoom={room}/>
      </Models>

      
    </div>
  );
}