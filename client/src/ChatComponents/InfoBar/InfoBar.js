import React from 'react'
import './InfoBar.css'
import onlineIcon from '../../Images/icons/onlineIcon.png'
import Button from '@material-ui/core/Button';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

export default function InfoBar({ room,setOpen }) {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online image"></img>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <Button onClick={() => setOpen(false)}><CloseRoundedIcon/></Button>
            </div>
        </div>
    )
}
