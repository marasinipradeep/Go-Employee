import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import image from "../../Components/images/employee.jpeg"

import { useEmployeeContext } from "../Utils/EmployeeContext"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "500px",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
   
}));

export default function Cards() {
    const classes = useStyles();

    const [state, dispatch] = useEmployeeContext();
    

    return (
        <Card className={classes.root}>
            <CardHeader
                title="Your Summary"
                subheader=""
            />
            <CardMedia
                className={classes.media}
                image={image}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="h5" color="primary" component="p">
                    Name:{state.currentEmployee.name}
                 </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="h5" color="primary" component="p">
                    Work Type:{state.currentEmployee.workType}
                 </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="h5" color="primary" component="p">
                    Job Title:{state.currentEmployee.jobTitle}
                 </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="h5" color="primary" component="p">
                    Experience:{state.currentEmployee.experience}
                 </Typography>
            </CardContent>

            <CardContent>
                <Typography variant="h5" color="primary" component="p">
                    Contact Number:{state.currentEmployee.contactNumber}
                 </Typography>
            </CardContent>

            <CardContent>
                <Typography variant="h5" color="primary" component="p">
                    Description:{state.currentEmployee.description}
                 </Typography>
            </CardContent>

            <CardContent>
                <Typography variant="h5" color="primary" component="p">
                    Skills:{state.currentEmployee.skills}
                 </Typography>
            </CardContent>


        </Card>
    );
}