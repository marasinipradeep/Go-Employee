import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

//import from material ui
import { AppBar, Toolbar, CssBaseline, useScrollTrigger, Fab, Zoom, IconButton, Button, Grid,Avatar } from '@material-ui/core';
import { KeyboardArrowUp, Home, Description } from '@material-ui/icons';

//import styles from HeaserStyle
import useStyles from "./HeaderStyle"


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
                      <Link to="/">  <img  alt="Logo" src={process.env.PUBLIC_URL + '/logoOne.png'} className={classes.logo}/></Link>
                            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => history.push("/")}>
                                <Home />HOME
          </IconButton> */}
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