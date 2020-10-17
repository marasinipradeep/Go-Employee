import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "600px",
        marginBottom: "100px"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

}));
export default useStyles;