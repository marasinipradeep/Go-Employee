import React, { useEffect,useState } from 'react';
import { useHistory } from "react-router-dom";

//import from material ui
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';

//Importing Utils
import { useEmployeeContext } from "../../Utils/EmployeeContext"
import { SAVE_EMPLOYEE_DETAILS } from "../../Utils/Actions"
import API from "../../Utils/API"

//Import from PureComponents
import checkLocalStorage from "../../PureComponents/CheckLocalStorage/checkLocalStorage"

//import login styles from login
import useStyles from "./EmployeeSummaryCardStyle"


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
                      <Typography color="primary" variant="h5">Name:</Typography>
                      <Typography color="secondary" variant="h6">{state.currentEmployee.name}</Typography>
                      
                 </CardContent>

                <CardContent>
                        <Typography color="primary" variant="h5">Work Type:</Typography>
                        <Typography color="secondary" variant="h6"> {state.currentEmployee.workType}</Typography>
                </CardContent>
                <CardContent>
                    
                        <Typography color="primary" variant="h5">Job Title:</Typography>
                        <Typography color="secondary" variant="h6">  {state.currentEmployee.jobTitle}</Typography>
                </CardContent>
                <CardContent>
                    
                        <Typography color="primary" variant="h5">Experience:</Typography>
                        <Typography color="secondary" variant="h6">{state.currentEmployee.experience}</Typography>
                        
                </CardContent>

                <CardContent>
                        <Typography color="primary" variant="h5"> Contact Number:</Typography>
                        <Typography color="secondary" variant="h6">{state.currentEmployee.contactNumber}</Typography>
                        
                </CardContent>

                <CardContent>
                        <Typography color="primary" variant="h5"> Description:</Typography>
                        <Typography color="secondary" variant="h6">{state.currentEmployee.description}</Typography>
                        
                </CardContent>

                <CardContent>
                        <Typography color="primary" variant="h5"> Skills:</Typography>
                        <Typography color="secondary" variant="h6">{state.currentEmployee.skills}</Typography>
                       
                </CardContent>
            </Card>
        </div>
    );
}