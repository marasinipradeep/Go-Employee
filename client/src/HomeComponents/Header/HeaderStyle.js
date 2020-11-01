
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    menuButton: {
      //  marginRight: theme.spacing(1),

    },
    appBar: {
        backgroundColor: "rgb(219, 70, 70)"
    },
    logo:{
        margin:"10px",
        marginLeft:"50px",
       width:"100px",
       maxHeight:"auto",
       transform:"scale(2)"
    }

}));

export default useStyles;