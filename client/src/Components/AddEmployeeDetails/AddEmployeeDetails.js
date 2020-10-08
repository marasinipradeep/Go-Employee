import React,{ useState, useEffect, useRef } from 'react'
import Adminheader from "../AdminHeader"

//Import from material components
import Buttons from "../../Material-Components/Buttons";
import Input from "../../Material-Components/Inputs";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useEmployeeContext } from "../Utils/EmployeeContext"


import TextField from '@material-ui/core/TextField';
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
        marginBottom:"50px"
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


export default function AddEmployeeDetails() {

    const classes = useStyles();

    const nameRef = useRef();
    const typeRef = useRef();
    const jobTitleRef = useRef();
    const experienceRef = useRef();
    const contactNumberRef = useRef();
    const descriptionRef = useRef();
    const skillsRef = useRef();

    const [state, dispatch] = useEmployeeContext();


    const submit = async (e) => {
        e.preventDefault();
        const id = state.id

        try {
            const details = {
                id,
                name: nameRef.current.value,
                workType: typeRef.current.value,
                jobTitle: jobTitleRef.current.value,
                experience: experienceRef.current.value,
                contactNumber: contactNumberRef.current.value,
                description: descriptionRef.current.value,
                skills: skillsRef.current.value
            }
            console.log(details)
            const employeeDetails = await API.saveEmployeeDetails(details);


        }
        catch (err) {
            console.log(err)

        }
    }
    return (
        <>
            <Adminheader />
           
            <div className={classes.root}>

                <Grid container alignItems="center" direction="column">
              
                    <form>
                        <h2>Enter Your Details:</h2>
                       

                        <Input
                            label="Enter your full name"
                            inputRef={nameRef} />

                      
                        {/* profession type */}

                        <TextField
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
                        </TextField>

                        {/* job titile*/}

                        <Input
                            label="Enter your job title"
                            inputRef={jobTitleRef} />

                       

                        {/* Experience  */}

                        <TextField
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
                        </TextField>

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
