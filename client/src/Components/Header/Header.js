import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar,CssBaseline, useScrollTrigger, Fab, Zoom, IconButton, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardArrowUp, Home, Description } from '@material-ui/icons';
import {useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
       

    },
    menuButton: {
        marginRight: theme.spacing(1),

    },
    appBar: {
        backgroundColor: "rgb(219, 70, 70)"
    }

}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function Navbar(props) {
    const classes = useStyles();
    //useHistory hook let us navigate through the browser
    let history = useHistory();
    return (
        <React.Fragment>
            <CssBaseline />
        
                <AppBar >
                    <Toolbar >
                        <Grid container justify="space-between">
                            <Grid item xs={12} sm={4} md={5}>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => history.push("/")}>
                                    <Home />HOME
          </IconButton>
                            </Grid>
                            <Grid item xs={12} sm={4} md={5}>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => history.push("/employee")}>
                                    <Description />FIND EEMPLOYEES
          </IconButton>
                            </Grid>
                            <Grid item xs={12} sm={2} md={1}>
                                <Button color="inherit" onClick={() => history.push("/login")}>Login</Button>
                            </Grid>
                            <Grid item xs={12} sm={2} md={1}>
                                <Button color="inherit" onClick={() => history.push("/register")}>Register</Button>
                            </Grid>
                           
                        </Grid>
                    </Toolbar>
                </AppBar>
          
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}