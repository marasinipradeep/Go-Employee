import { makeStyles } from '@material-ui/core/styles';

//Using custom CSS
const useStyles = makeStyles((theme) => ({
    root: {
      position: "static",
      bottom: 0,
      width:"100%",
      backgroundColor: "#0000FE"
    },
   socialLink: {
    color: "white"
  }

  }))

  export default useStyles;