import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { LinkedIn, GitHub, Copyright, Phone, Email, Face } from '@material-ui/icons';


//import styles from HeaserStyle
import useStyles from "./FooterStyle"
import { Grid, container } from '@material-ui/core';

function Footer() {
  //Import Hook to use styles
  const classes = useStyles()
  //Setting initial state
  // const [value, setValue] = React.useState(0);

  return (
    <>
      <BottomNavigation
        showLabels
        className={classes.root}
      >

        <BottomNavigationAction icon={<Copyright />} edge="start" className={classes.socialLink} color="inherit" aria-label="copyright" />

        {/* portfolio */}
        <BottomNavigationAction edge="start" label="Portofolio" className={classes.socialLink} color="inherit" aria-label="portfolio" icon={<Face />} onClick={() => window.open("https://pradeep-marasini.herokuapp.com/", '_blank')} />


        {/* linkdin */}
        <BottomNavigationAction className={classes.socialLink} label="LinkedIn" icon={<LinkedIn />} onClick={() => window.open("https://www.linkedin.com/in/pradeep-marasini-34b322b4/", '_blank')} />

        {/* github */}
        <BottomNavigationAction className={classes.socialLink} label="GitHub" icon={<GitHub />} onClick={() => window.open("https://github.com/marasinipradeep/", '_blank')} />
      </BottomNavigation>

    </>
  );
}
export default Footer;