import React, { useState, useRef} from 'react'
import { useHistory } from "react-router-dom";

//import from material ui
import {InputAdornment} from "@material-ui/core"
import {AccountCircle,LockRounded} from "@material-ui/icons"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//imports from utils
import { useEmployeeContext } from "../../Utils/EmployeeContext"
import { EMPLOYEE_LOGIN} from "../../Utils/Actions"
import API from "../../Utils/API"

//import from PureComponents
import ErrorNotice from '../../PureComponents/ErrorNotice/ErrorNotice';

//Import from material components
import Buttons from "../../MaterialUiComponents/Buttons";
import Input from "../../MaterialUiComponents/Inputs";


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



export default function Login() {

    const classes = useStyles();
    const [error, setError] = useState();
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [state, dispatch] = useEmployeeContext();

    const clearInputs=()=> {
        emailRef.current.value ="";
        passwordRef.current.value="";
    }

    //on submit clicked
    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginEmployee =
            {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }

            if (!loginEmployee.email || !loginEmployee.password) {
                console.log("No email and password")
                return
            }

           // we get response back with token
            const loginRes = await API.employeeLogin(loginEmployee);
            dispatch({
                type: EMPLOYEE_LOGIN,
                token: loginRes.data.token,
                id: loginRes.data.employee.id,
                email: loginRes.data.employee.email
            });

            //clearing form inputs
            clearInputs();
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/login/employee/dashboard")
        } catch (err) {
            //&& operator to set the error message.Executes when both sides true before and after and operator
            err.response.data.msg && setError(err.response.data.msg)
        }
    };
    return (
        <div className={classes.root}>
            <Grid container alignItems="center" direction="column">
                <form>
                    <h2>Login</h2>
                    {error && (<ErrorNotice message={error} clearError={() => setError(undefined)} />)}
                    <Input label="Email" inputRef={emailRef} autoFocus={true}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}/>
                    <Input label="Password" inputRef={passwordRef} type="password"
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockRounded />
                          </InputAdornment>
                        ),
                      }}/>
                    <Buttons className={classes.buttonMargin} color="secondary" onClick={submit}>Submit</Buttons>
                </form>
            </Grid>
        </div>
    )
}