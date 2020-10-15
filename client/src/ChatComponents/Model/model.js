import React from 'react'
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core"
import DialogContentText from '@material-ui/core/DialogContentText';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

//Chats dependent components
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages'

function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

export default function model(props) {
    const {children, open, setOpen } = props
    return (
        <Dialog
            open={open}
            onClose={open}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Subscribe
        </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>

            <DialogActions>
          <Button autoFocus onClick={()=>setOpen(false)} color="primary">
            Exit
          </Button>
         
        </DialogActions>

        </Dialog>
    )
}
