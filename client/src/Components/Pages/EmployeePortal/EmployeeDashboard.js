import React, { useState, useEffect, useRef } from 'react'
import Adminheader from "../../AdminHeader"
import TextField from '@material-ui/core/TextField';
import { MenuItem, Button, Switch } from '@material-ui/core';
import API from "../../Utils/API"
import { SAVE_EMPLOYEE_DETAILS, UPDATE_EMPLOYEE_ISONLINE } from "../../Utils/Actions"
import { useEmployeeContext } from "../../Utils/EmployeeContext"


//Import from material components
import Buttons from "../../../Material-Components/Buttons";
import Input from "../../../Material-Components/Inputs";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Cards from "../../Cards/cards"

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




const EmployeeDashboard = () => {
    const classes = useStyles();

    const nameRef = useRef();
    const typeRef = useRef();
    const jobTitleRef = useRef();
    const experienceRef = useRef();
    const contactNumberRef = useRef();
    const descriptionRef = useRef();
    const skillsRef = useRef();

    const [checked, setChecked] = useState(false);
    const [state, dispatch] = useEmployeeContext();

    const handleToggle = () => {
        console.log(checked)
        setChecked((prev) => !prev);
        console.log(checked)
        const details = {
            id: state.id,
            isOnline: !checked
        }
        API.setEmployeeOnline(details).then((employee) => {
            console.log(employee)
            dispatch({
                type: UPDATE_EMPLOYEE_ISONLINE,
                isOnline: employee.data.isOnline
            })

        })

    };

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

    function loadEmployee() {
        API.getEmployeeDetails(state.id).then((employeeDetails) => {
            dispatch({
                type: SAVE_EMPLOYEE_DETAILS,
                employee: employeeDetails.data
            })
        })
    }


    useEffect(
        loadEmployee, []
    );


    return (
        <>
            <Adminheader />
           
            <div className={classes.root}>

                <Grid container alignItems="center" direction="column">
                <Cards />
                    <form>
                        <h2>Enter Your Details:</h2>
                        <h3>Go online</h3>
                        <Switch onChange={handleToggle} />

                        <Input
                            label="Enter your full name"
                            inputRef={nameRef} />

                        {/* <TextField
                                fullWidth
                                label="Enter Your Name"
                                id="name"
                                name="name"
                                helperText="Enter Your Name"
                                margin="normal"
                                inputRef={nameRef}
                                required
                            /> */}

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

                        {/* <TextField
                                fullWidth
                                label="Enter Your Job Title"
                                id="jobTitle"
                                helperText="Enter Your Job Title"
                                margin="normal"
                                inputRef={jobTitleRef}
                                required
                            /> */}

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

                        {/* <TextField
                            fullWidth
                            label="Enter Your Contact Number"
                            id="contactNumber"
                            helperText="Enter your Contact Number"
                            margin="normal"
                            inputRef={contactNumberRef}
                            required
                        /> */}


                        <Input
                            label="Write Brief Description"
                            inputRef={descriptionRef}
                            multiline={true} />

                        {/* <TextField
                            fullWidth
                            multiline
                            label="Enter Your Description"
                            id="description"
                            helperText="Enter your Description"
                            margin="normal"
                            inputRef={descriptionRef}
                            required
                        /> */}

                        <Input
                            label="Email"
                            inputRef={skillsRef} />

                        {/* <TextField
                            fullWidth
                            multiline
                            label="Enter Your Skills"
                            id="skills"
                            helperText="Enter your Skills"
                            margin="normal"
                            inputRef={skillsRef}
                            required
                        /> */}
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

export default EmployeeDashboard;
