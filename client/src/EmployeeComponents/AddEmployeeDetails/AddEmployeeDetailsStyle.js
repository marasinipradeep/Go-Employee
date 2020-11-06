import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: "40px",
        marginRight: "40px"
    },
    detailForm:{
        backgroundColor:"orange",
        borderRadius:"50px",
        fontSize:"20px"
    },
    buttonMargin: {
        marginTop: "50px",
        marginBottom: "50px"
    },
    messageBox:{
        backgroundColor:"grey",
        marginBottom:"20px",
        borderRadius:"50px"
    },

    messageBoxText:{
        color:"white"
    }




}));

export default useStyles;