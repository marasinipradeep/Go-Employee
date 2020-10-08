import React, { useState, useEffect } from 'react'
import Adminheader from "../../AdminHeader"
import { Grid, Switch } from '@material-ui/core';
import API from "../../Utils/API"
import { SAVE_EMPLOYEE_DETAILS, UPDATE_EMPLOYEE_ISONLINE } from "../../Utils/Actions"
import { useEmployeeContext } from "../../Utils/EmployeeContext"
import Cards from "../../Cards/cards"

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "50px"
    },
}));

const EmployeeDashboard = () => {

    const classes = useStyles();

    const [checked, setChecked] = useState(false);
    const [state, dispatch] = useEmployeeContext();

    const handleToggle = () => {
        console.log(checked)
        setChecked((prev) => !prev);
        console.log(checked)
        const details = {
            id: state.id,
            isOnline: !checked
        }
        API.setEmployeeOnline(details).then((employee) => {
            console.log(employee)
            dispatch({
                type: UPDATE_EMPLOYEE_ISONLINE,
                isOnline: employee.data.isOnline
            })

        })

    };

    const id = localStorage.getItem("id")
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
      
            <div className={classes.root}>
                <Grid container alignItems="center" direction="column" >
                    <Adminheader />
                    <h3>Go online</h3>
                    <Switch onChange={handleToggle} />
                    <Cards />
                </Grid>
            </div>
    )
}

export default EmployeeDashboard;
