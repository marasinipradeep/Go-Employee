import React, { useState, useEffect } from 'react'
import { useHistory, Link } from "react-router-dom"

//import from material ui
import { Grid, Switch } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//import from Utils
import API from "../../Utils/API"
import { SAVE_EMPLOYEE_DETAILS, UPDATE_EMPLOYEE_ISONLINE } from "../../Utils/Actions"
import { useEmployeeContext } from "../../Utils/EmployeeContext"

//import from EmployeeComponents
import Cards from "../../EmployeeComponents/EmployeeSummaryCard/EmployeeSummaryCard"
import Adminheader from "../../EmployeeComponents/EmployeeDashboardHeader/EmployeeDashboardHeader"

//import from chatComponents
import EmployeePopUpButton from "../../ChatComponents/PopUpEmployee/EmployeePopUpButton"

//import from PureComponents
import checkLocalStorage from "../../PureComponents/CheckLocalStorage/checkLocalStorage"

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "50px"
    },
}));

const EmployeeDashboard = () => {

    const classes = useStyles();
    const [state, dispatch] = useEmployeeContext();
    const [checked, setChecked] = useState(state.currentEmployee.isOnline);

    const history = useHistory();

    //Hanlde and set online and offline for employee
    const handleToggle = (event) => {
        setChecked((prev) => !prev);
        const details = {
            id: state.currentEmployee._id,
            isOnline: !checked
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

        checkLocalStorage().then(employeeRes => {
            console.log("employeeDetails.data.isOnline")
            console.log(employeeRes)
            if (employeeRes === undefined) {
                return history.push("/login")
            }
            API.getEmployeeDetails(employeeRes.data.id).then((employeeDetails) => {

                setChecked(employeeDetails.data.isOnline)
                dispatch({
                    type: SAVE_EMPLOYEE_DETAILS,
                    employee: employeeDetails.data
                })
            })

        })
    }

    useEffect(
        loadEmployee, [checked]
    );


    return (
        <div className={classes.root}>
            <Grid container alignItems="center" direction="column" >
                <Adminheader />
                <h3>Go online</h3>
                <Switch checked={checked} onChange={handleToggle} />
               
           <EmployeePopUpButton/>
                <Cards />
            </Grid>
        </div>
    )
}

export default EmployeeDashboard;
