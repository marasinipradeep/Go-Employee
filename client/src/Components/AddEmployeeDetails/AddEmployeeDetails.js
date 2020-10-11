import React, { useState, useEffect, useRef } from 'react'
import Adminheader from "../AdminHeader"

//Import from material components
import Buttons from "../../Material-Components/Buttons";
import Input from "../../Material-Components/Inputs";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useEmployeeContext } from "../Utils/EmployeeContext"
import { SAVE_EMPLOYEE_DETAILS, UPDATE_EMPLOYEE_ISONLINE } from "../Utils/Actions"
import ErrorNotice from '../misc/ErrorNotice';
import { MenuItem, Button, Switch } from '@material-ui/core';
import API from "../Utils/API"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: "40px",
        marginRight: "40px"
    },
    buttonMargin: {
        marginTop: "50px",
        marginBottom: "50px"
    }
}));


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

const experiences = ["less then 1 year", "1 year", "2 year", "3 year", "4 year", "5+ year"];
const id = localStorage.getItem("id")

export default function AddEmployeeDetails() {

    const classes = useStyles();

    const nameRef = useRef();
    const typeRef = useRef();
    const jobTitleRef = useRef();
    const experienceRef = useRef();
    const contactNumberRef = useRef();
    const descriptionRef = useRef();
    const skillsRef = useRef();
    const imageRef = useRef();

    const { state, dispatch } = useEmployeeContext();
    const [error, setError] = useState();
    const [image, setImage] = useState();

    const submit = async (e) => {
        e.preventDefault();

        //While sending form data ordering is important send all data first and append image at last
        const fd = new FormData();
        fd.append('id', id)
        fd.append('name', nameRef.current.value)
        fd.append('workType', typeRef.current.value)
        fd.append('jobTitle', jobTitleRef.current.value)
        fd.append('experience', experienceRef.current.value)
        fd.append('contactNumber', contactNumberRef.current.value)
        fd.append('description', descriptionRef.current.value)
        fd.append('skills', skillsRef.current.value)
        fd.append('image', image);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        try {
            const employeeDetails = await API.saveEmployeeDetails(fd, config);
            console.log("Employee Details")
            console.log(employeeDetails)
            dispatch({
                type: SAVE_EMPLOYEE_DETAILS,
                employee: employeeDetails.data
            })

        }
        catch (err) {
            console.log(err)
            //&& operator to set the error message.Executes when both sides true before and after and operator
            err.response.data.msg && setError(err.response.data.msg)

        }
    }
    return (
        <>
            <Adminheader />

            <div className={classes.root}>

                <Grid container alignItems="center" direction="column">

                    <form>
                        <h2>Enter Your Details:</h2>
                        {error && (<ErrorNotice message={error} clearError={() => setError(undefined)} />)}

                        <Input

                            label="Enter your full name"
                            inputRef={nameRef} />

                        {/* profession type */}

                        <Input
                            fullWidth
                            id="workType"
                            select
                            label="Select Your Profession"
                            helperText="Please select your profession"
                            inputRef={typeRef}
                            required

                        >
                            {workerType.map((option) => (
                                <MenuItem key={option.value} value={option.label}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Input>

                        {/* job titile*/}

                        <Input
                            label="Enter your job title"
                            inputRef={jobTitleRef} />



                        {/* Experience  */}

                        <Input
                            fullWidth
                            id="experience"
                            select
                            label="Select Your Experience"
                            helperText="Please Select Your Years of Experience"
                            inputRef={experienceRef}
                            required
                        >
                            {experiences.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Input>

                        <Input
                            label="Enter your Contact Number"
                            inputRef={contactNumberRef} />


                        <Input
                            label="Write Brief Description"
                            inputRef={descriptionRef}
                            multiline={true} />


                        <Input
                            label="Add Skills"
                            inputRef={skillsRef} />

                        <Input
                            type="file"
                            label="Add Image"
                            inputRef={imageRef}
                            onChange={(e) => setImage(e.target.files[0])} />


                        <Buttons
                            className={classes.buttonMargin}
                            onClick={submit} variant="contained" color="secondary" value="Submit">
                            Submit
                            </Buttons>
                    </form>
                </Grid>
            </div>
        </>
    )
}
