import React, { useState, useRef } from 'react'

//import from material ui
import {InputAdornment} from "@material-ui/core"
import {AccountCircle,LockRounded} from "@material-ui/icons"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


//import from utils
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

export default function Register() {

    const classes = useStyles();
    const [error, setError] = useState();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const clearInputs=()=> {
        emailRef.current.value ="";
        passwordRef.current.value="";
        confirmPasswordRef.current.value="";
    }
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
            clearInputs()
            setError(newRegisteredEmployee.data.msg)
            

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
