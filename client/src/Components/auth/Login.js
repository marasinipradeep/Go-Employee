import React, { useState, useRef } from 'react'
import { useHistory } from "react-router-dom";
import { useEmployeeContext } from "../Utils/EmployeeContext"
import { EMPLOYEE_LOGIN } from "../Utils/Actions"
import API from "../Utils/API"

import ErrorNotice from '../misc/ErrorNotice';

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

export default function Login() {

    const classes = useStyles();
    const [error, setError] = useState();
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [state, dispatch] = useEmployeeContext();

    //on submit clicked
    const submit = async (e) => {
        e.preventDefault();
        console.log("inside submit clicked")

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

            //we get response back with token
            const loginRes = await API.employeeLogin(loginEmployee);
            dispatch({
                type: EMPLOYEE_LOGIN,
                token: loginRes.data.token,
              //  id: loginRes.data.employee.id,
                email: loginRes.data.employee.email
            });
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

                    <Input label="Email" inputRef={emailRef} />

                    <Input label="Password" inputRef={passwordRef} type="password"
                    />

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

//  <div className="container">
//     <h2 className="page">Login</h2>
//     {error && (<ErrorNotice message={error} clearError={() => setError(undefined)} />)}

//     <form className="form" onSubmit={submit}>
{/* Input Email */ }
{/* <label htmlFor="login-email">Email</label>
                    <input id="login-email" type="email" ref={emailRef} /> */}

{/* Input Password */ }
{/* <label htmlFor="login-password">Password</label>
                    <input id="login-password" type="password" ref={passwordRef} />

                    <input type="submit" onClick={submit} />
                </form >
            </div >  */}



