import React, { useState, useRef } from 'react'
import { useHistory } from "react-router-dom";
import { useEmployeeContext } from "../Utils/EmployeeContext"
import { EMPLOYEE_LOGIN, EMPLOYEE_REGISTER } from "../Utils/Actions"
import ErrorNotice from '../misc/ErrorNotice';

import API from "../Utils/API"
import {InputAdornment} from "@material-ui/core"
import {AccountCircle,LockRounded} from "@material-ui/icons"

//Import from material components
import Buttons from "../../Material-Components/Buttons";
import Input from "../../Material-Components/Inputs";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: "100px",
        marginLeft: "40px"
    },
    buttonMargin: {
        marginTop: "50px"
    }
}));

export default function Register() {

    const classes = useStyles();
    const [error, setError] = useState();
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { state, dispatch } = useEmployeeContext();


    //onSubmit clicked
    const submit = async (e) => {
        e.preventDefault();
        try {
            const newEmployee = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
                passwordCheck: confirmPasswordRef.current.value
            }
            const newRegisteredEmployee = await API.registerEmployee(newEmployee);
            setError(newRegisteredEmployee.data.msg)

            // console.log("newRegisteredEmployee")
            // console.log(newRegisteredEmployee.data.email)
            // console.log(newRegisteredEmployee.data.password)

            // const newLoginDetails = {
            //     email: newRegisteredEmployee.data.email,
            //     password: newRegisteredEmployee.data.password
            // }

            // //we get response back with token
            // const loginRes = await API.employeeLogin(newLoginDetails);

            // //Setting employee data after getting back from response
            // dispatch({
            //     type: EMPLOYEE_LOGIN,
            //     token: loginRes.data.token,
            //     id: loginRes.data.employee.id,
            //     email: loginRes.data.employee.email
            // });

            // localStorage.setItem("auth-token", loginRes.data.token);
            // history.push("/employee/details")


        } catch (err) {
            //&& operator to set the error message.Executes when both sides true before and after and operator
            err.response.data.msg && setError(err.response.data.msg)

        }
    };
    return (
        <div className={classes.root}>

            <Grid container alignItems="center" direction="column">

                <form>
                    <h2>Register</h2>
                    {error && (<ErrorNotice message={error} clearError={() => setError(undefined)} />)}

                    {/* Input Email */}

                    <Input
                        label="Email"
                        inputRef={emailRef} 
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}/>


                    {/* Input Password */}
                    <Input
                        label="Password"
                        inputRef={passwordRef}
                        type="password"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LockRounded />
                              </InputAdornment>
                            ),
                          }} />

                    {/* Confirm Password */}
                    <Input
                        label="Confirm Password"
                        inputRef={confirmPasswordRef}
                        type="password" 
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LockRounded />
                              </InputAdornment>
                            ),
                          }}/>

                    <Buttons className={classes.buttonMargin}
                        color="secondary"
                        onClick={submit}
                    >
                        Submit
                        </Buttons>
                </form>
            </Grid>
        </div>
    )
}
