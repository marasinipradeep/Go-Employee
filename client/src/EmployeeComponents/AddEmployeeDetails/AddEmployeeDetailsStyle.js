import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: "40px",
        marginRight: "40px"
    },
    buttonMargin: {
        marginTop: "50px",
        marginBottom: "50px"
    }
}));

export default useStyles;