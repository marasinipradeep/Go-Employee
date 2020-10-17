
import { makeStyles } from '@material-ui/core/styles';

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

export default useStyles;