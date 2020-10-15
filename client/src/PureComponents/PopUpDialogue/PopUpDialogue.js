import React from 'react'
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core"
import DialogContentText from '@material-ui/core/DialogContentText';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';


//Chats dependent components
import InfoBar from '../../ChatComponents/InfoBar/InfoBar';


function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

export default function PopUpDialogue(props) {
    const { children, open, setOpen, name } = props
    return (
            <Dialog
                open={open}
                onClose={open}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    <InfoBar room={name} setOpen={setOpen} />
                    {/* <DialogActions>
                <Button autoFocus onClick={() => setOpen(false)} color="primary">
                    x
                 </Button>

            </DialogActions> */}

                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>

            </Dialog>
    )
}
