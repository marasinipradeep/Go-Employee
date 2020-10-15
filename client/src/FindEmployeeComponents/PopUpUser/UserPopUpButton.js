import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

//import from PureComponent
import PopUpDialogue from "../../PureComponents/PopUpDialogue/PopUpDialogue"

//import from chatComponent
import Chat from "../../ChatComponents/Chat/Chat"

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState('pradeep');
  const [room, setRoom] = useState('findEmployee');

  return (
    <div>
    
      <Button variant="outlined" color="primary" onClick={()=>setOpen(true)}>
        Open Chat room
      </Button>

      <PopUpDialogue open={open} setOpen={setOpen} name={name}>
        <Chat name="Guest" room={room} setName={name} setRoom={room}/>
      </PopUpDialogue>

      
    </div>
  );
}