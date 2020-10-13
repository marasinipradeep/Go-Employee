import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

//import from material ui
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';


//Importing Utils
import { useEmployeeContext } from "../../Utils/EmployeeContext"
import { SAVE_EMPLOYEE_DETAILS } from "../../Utils/Actions"
import API from "../../Utils/API"

//Import from PureComponents
import checkLocalStorage from "../../PureComponents/CheckLocalStorage/checkLocalStorage"

//const id = localStorage.getItem("id")
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

export default function Cards() {
    const classes = useStyles();
    const history = useHistory();

    const [state, dispatch] = useEmployeeContext();
    function loadEmployee() {

        checkLocalStorage().then(async employeeRes => {
            if (employeeRes === undefined) {
              return  history.push("/login")
            }
            API.getEmployeeDetails(employeeRes.data.id).then((employeeDetails) => {
                dispatch({
                    type: SAVE_EMPLOYEE_DETAILS,
                    employee: employeeDetails.data
                })
            })

        })
    }

    useEffect(
        loadEmployee,[]
    );

    //Material UI DOCS for CARDS https://material-ui.com/components/cards/
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    title="Your Summary"
                    subheader={state.currentEmployee.workType}
                />

                <CardMedia
                    className={classes.media}
                    image={`/${state.currentEmployee.images}`}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="h6" color="primary">
                        <Typography color="secondary" variant="h5">Name:</Typography>
                        {state.currentEmployee.name}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="h6" color="primary" >
                        <Typography color="secondary" variant="h5">Work Type:</Typography>
                        {state.currentEmployee.workType}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="h6" color="primary" >
                        <Typography color="secondary" variant="h5">Job Title:</Typography>
                        {state.currentEmployee.jobTitle}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="h6" color="primary">
                        <Typography color="secondary" variant="h5">Experience:</Typography>
                        {state.currentEmployee.experience}
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography variant="h6" color="primary" >
                        <Typography color="secondary" variant="h5"> Contact Number:</Typography>
                        {state.currentEmployee.contactNumber}
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography variant="h6" color="primary" component="details">
                        <Typography color="secondary" variant="h5"> Description:</Typography>
                        {state.currentEmployee.description}
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography variant="h6" color="primary" >
                        <Typography color="secondary" variant="h5"> Skills:</Typography>
                        {state.currentEmployee.skills}
                    </Typography>
                </CardContent>


            </Card>
        </div>
    );
}