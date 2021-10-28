import React, { useState, useRef } from 'react'
import ParticlesBg from "particles-bg";

//import from material ui
import { InputAdornment, MenuItem, Typography } from "@material-ui/core"
import { AccountCircle, LockRounded } from "@material-ui/icons"
//import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


//import from utils
import API from "../../Utils/API"

//import from PureComponents
import ErrorNotice from '../../PureComponents/ErrorNotice/ErrorNotice';

//Import from material components
import Buttons from "../../MaterialUiComponents/Buttons";
import Input from "../../MaterialUiComponents/Inputs";

//import login styles from login
import useStyles from "./RegisterStyle"



const workerType = [
  {
    value: 'Farm',
    label: 'Farm-Worker',
  },
  {
    value: 'Restaurant',
    label: 'Restaurant-Worker',
  },
  {
    value: 'Cleaning',
    label: 'Cleaners',
  }
];

export default function Register() {

  const classes = useStyles();
  const [error, setError] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const professionTypeRef = useRef();

  const clearInputs = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  }
  //onSubmit clicked
  const submit = async (e) => {
    e.preventDefault();
    try {
      const newEmployee = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        passwordCheck: confirmPasswordRef.current.value,
        professionType: professionTypeRef.current.value
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
            }} />
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
            }} />

          <Input
            fullWidth
            id="workType"
            select
            label="Select Your Profession"
            helperText="Please select your profession"
            inputRef={professionTypeRef}
            required
          >
            {workerType.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </Input>


          <Buttons className={classes.buttonMargin}
            color="secondary"
            onClick={submit}
          >
            Submit
          </Buttons>
        </form>
      </Grid>

      {/* <ParticlesBg type="polygon" bg={true} /> */}
    </div>
  )
}
