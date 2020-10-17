import React from 'react';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';

//import from material ui
import {useTheme } from '@material-ui/core/styles';
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';

//import from Utils
import API from "../../Utils/API"
import { useEmployeeContext } from "../../Utils/EmployeeContext"
import { LOGOUT } from "../../Utils/Actions"

//Import from material components
import Buttons from "../../MaterialUiComponents/Buttons";

//import login styles from login
import useStyles from "./EmployeeDashboardHeaderStyle"


export default function PersistentDrawerLeft() {

  //useHistory gives result in an array
  const history = useHistory();

  //When we useContext we get setvalue in so destructure the data from the UserContext which is provideded from provider

  const [state, dispatch] = useEmployeeContext()

  const logout = () => {
    const details = {
      id: state.currentEmployee._id,
      isOnline: false
    }
    API.setEmployeeOnline(details).then((employee) => {
      dispatch({ type: LOGOUT });
      localStorage.setItem("auth-token", "")
      history.push("/")
    })
  }

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Welcome {state.currentEmployee.email}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>

          <ListItem> <Buttons color="secondary" onClick={(() => history.push("/login/employee/dashboard"))}>DASHBOARD</Buttons></ListItem>
          <ListItem> <Buttons color="secondary" onClick={(() => history.push("/employee/details"))}>ADD DETAILS</Buttons></ListItem>
          <ListItem ><Buttons color="secondary" onClick={logout}>LOG OUT</Buttons></ListItem>

        </List>

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

      </main>
    </div>
  );
}