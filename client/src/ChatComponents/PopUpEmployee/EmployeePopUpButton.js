import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


//import from PureComponent
import Models from "../../PureComponents/PopUpDialogue/PopUpDialogue"

//import from ChatComponent
import Chat from "../Chat/Chat"

//import from FindEmployeeComponent
import  "../../FindEmployeeComponents/PopUpUser/UserPopUp.css"

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState('pradeep');
  const [room, setRoom] = useState('findEmployee');

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={()=>setOpen(true)}>
      <span className="blinking">Open Chat room</span> 
      </Button>

      <Models open={open} setOpen={setOpen}>
        <Chat name={name} room={room} setName={name} setRoom={room}/>
      </Models>
    </div>
  );
}