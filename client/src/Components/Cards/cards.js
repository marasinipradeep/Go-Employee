import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';


import image from "../../Components/images/employee.jpeg"

//Importing Utils
import { useEmployeeContext } from "../Utils/EmployeeContext"
import { SAVE_EMPLOYEE_DETAILS } from "../Utils/Actions"
import API from "../Utils/API"

const id = localStorage.getItem("id")
const useStyles = makeStyles((theme) => ({
    root: {
        width: "600px",
        marginBottom:"100px"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

}));

export default function Cards() {
    const classes = useStyles();

    const [state, dispatch] = useEmployeeContext();

    function loadEmployee() {

        API.getEmployeeDetails(id).then((employeeDetails) => {
            dispatch({
                type: SAVE_EMPLOYEE_DETAILS,
                employee: employeeDetails.data
            })

        })

    }

    useEffect(
        loadEmployee, [id]
    );


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
                <Typography variant="h6" color="primary" component="p">
                    <Typography color="secondary" variant="h5">Name:</Typography>
                    {state.currentEmployee.name}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="h6" color="primary" component="p">
                    <Typography color="secondary" variant="h5">Work Type:</Typography>
                    {state.currentEmployee.workType}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="h6" color="primary" component="p">
                <Typography color="secondary" variant="h5">Job Title:</Typography>
                    
                    {state.currentEmployee.jobTitle}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="h6" color="primary" component="p">
                <Typography color="secondary" variant="h5">Experience:</Typography>
                    {state.currentEmployee.experience}
                </Typography>
            </CardContent>

            <CardContent>
                <Typography variant="h6" color="primary" component="p">
                <Typography color="secondary" variant="h5"> Contact Number:</Typography>
                   {state.currentEmployee.contactNumber}
                </Typography>
            </CardContent>

            <CardContent>
                <Typography variant="h6" color="primary" component="p">
                <Typography color="secondary" variant="h5"> Description:</Typography>
                    {state.currentEmployee.description}
                </Typography>
            </CardContent>

            <CardContent>
                <Typography variant="h6" color="primary" component="p">
                <Typography color="secondary" variant="h5"> Skills:</Typography>
                    {state.currentEmployee.skills}
                </Typography>
            </CardContent>


        </Card>
    );
}