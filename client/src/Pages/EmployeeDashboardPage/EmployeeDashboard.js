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
import EmployeeSummaryCard from "../../EmployeeComponents/EmployeeSummaryCard/EmployeeSummaryCard"
import Adminheader from "../../EmployeeComponents/EmployeeDashboardHeader/EmployeeDashboardHeader"


//import from chatComponent
import Chat from "../../ChatComponents/Chat/Chat"

//import from PureComponents
import checkLocalStorage from "../../PureComponents/CheckLocalStorage/checkLocalStorage"

const useStyles = makeStyles((theme) => ({
    root: { marginLeft: "20px" },
}));

const EmployeeDashboard = () => {

    const classes = useStyles();
    const [state, dispatch] = useEmployeeContext();
    const [checked, setChecked] = useState(state.currentEmployee.isOnline);
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
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
            if (employeeRes === undefined) {
                return history.push("/login")
            }
            API.getEmployeeDetails(employeeRes.data.id).then((employeeDetails) => {
               console.log(employeeDetails.data.name)
                console.log(employeeDetails.data._id)
                setName(employeeDetails.data.name)
                setRoom(employeeDetails.data._id)

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
            <Adminheader />
            <Grid item xs container direction="row" >
                <Grid item sm={12}>
                    <h3>Go online</h3>
                    <Switch checked={checked} onChange={handleToggle} />
                    <br />
                    <br />
                </Grid>

                <Grid item xs={12} md={6} >
                    <EmployeeSummaryCard />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Chat name={name} room={room} />
                </Grid>
            </Grid>

        </div>
    )
}

export default EmployeeDashboard;
