import React, { useState, useEffect } from 'react'
import Adminheader from "../../AdminHeader"
import { Grid, Switch } from '@material-ui/core';
import API from "../../Utils/API"
import { SAVE_EMPLOYEE_DETAILS, UPDATE_EMPLOYEE_ISONLINE } from "../../Utils/Actions"
import { useEmployeeContext } from "../../Utils/EmployeeContext"
import Cards from "../../Cards/cards"

import { makeStyles } from '@material-ui/core/styles';

const id = localStorage.getItem("id")

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "50px"
    },
}));

const EmployeeDashboard = () => {

    const classes = useStyles();
    const [state, dispatch] = useEmployeeContext();
    const [checked, setChecked] = useState(state.currentEmployee.isOnline);

    //Hanlde and set online and offline for employee
    const handleToggle = (event) => {
         setChecked((prev) => !prev);
        const details = {
           id: id,
           isOnline:!checked
        }
        API.setEmployeeOnline(details).then((employee) => {
            dispatch({
                type: UPDATE_EMPLOYEE_ISONLINE,
                isOnline: employee.data.isOnline
            })
        })
    };

   
  //Loads and sets employee details
    function loadEmployee() {
        API.getEmployeeDetails(id).then((employeeDetails) => {
            console.log(employeeDetails.data.isOnline)
            setChecked(employeeDetails.data.isOnline)
            dispatch({
                type: SAVE_EMPLOYEE_DETAILS,
                employee: employeeDetails.data
            })
        })
    }

    useEffect(
        loadEmployee, [id,checked]
    );


    return (
            <div className={classes.root}>
                <Grid container alignItems="center" direction="column" >
                    <Adminheader />
                    <h3>Go online</h3>
                    <Switch checked={checked} onChange={handleToggle} />
                    <Cards />
                </Grid>
            </div>
    )
}

export default EmployeeDashboard;
