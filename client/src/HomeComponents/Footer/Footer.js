import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { LinkedIn, GitHub, Copyright } from '@material-ui/icons';


//import styles from HeaserStyle
import useStyles from "./FooterStyle"

// //Using custom CSS
// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: "static",
//     bottom: 0,
//     width: "100%",
//     backgroundColor: "#0000FE"
//   },
//   font: {
//     color: "white",
//     fontWeight: "bold"
//   }
// }))

function Footer() {
  //Import Hook to use styles
  const classes = useStyles()
  //Setting initial state
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => { setValue(newValue); }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction className={classes.font} label="Copyright" icon={<Copyright />} />
        <BottomNavigationAction className={classes.font} label="LinkedIn" icon={<LinkedIn />} onClick={() => window.open("https://www.linkedin.com/in/pradeep-marasini-34b322b4/", '_blank')} />
        <BottomNavigationAction className={classes.font} label="GitHub" icon={<GitHub />} onClick={() => window.open("https://github.com/marasinipradeep/", '_blank')} />
      </BottomNavigation>
    </div>
  );
}


export default Footer;