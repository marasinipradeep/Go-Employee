import React from 'react'
import './InfoBar.css'
import onlineIcon from '../../Images/icons/onlineIcon.png'
import closeIcon from '../../Images/icons/closeIcon.png'
import Button from '@material-ui/core/Button';

export default function InfoBar({ room,setOpen }) {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online image"></img>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                {/* <a href="/"><img src={closeIcon} alt="close image"></img></a> */}
                <Button onClick={() => setOpen(false)}>X</Button>
            </div>
        </div>
    )
}
