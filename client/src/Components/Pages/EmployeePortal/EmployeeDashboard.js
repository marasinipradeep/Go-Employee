import React, { useState, useEffect, useRef } from 'react'
import Adminheader from "../../AdminHeader"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Grid, Button, Switch } from '@material-ui/core';
import API from "../../Utils/API"
import { SAVE_EMPLOYEE_DETAILS, GET_EMPLOYEE_DETAILS } from "../../Utils/Actions"
import { useEmployeeContext } from "../../Utils/EmployeeContext"


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: "40px",
        marginRight: "40px"
    },
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

    const [online, setonline] = useState(['online']);
    const [state, dispatch] = useEmployeeContext();

    const handleToggle = (value) => () => {
        const currentIndex = online.indexOf(value);
        console.log(currentIndex)
        const newonline = [...online];

        if (currentIndex === -1) {
            newonline.push(value);
        } else {
            newonline.splice(currentIndex, 1);
        }
        setonline(newonline);
    };

    const submit = async (e) => {
        e.preventDefault();
        const id = state.id

        try {
            const details = {
                id,
                name: nameRef.current.value,
                type: typeRef.current.value,
                jobTitle: jobTitleRef.current.value,
                experience: experienceRef.current.value,
                contactNumber: contactNumberRef.current.value,
                description: descriptionRef.current.value,
            }
            console.log(details)
            const employeeDetails = await API.saveEmployeeDetails(details);

            console.log(employeeDetails)
            dispatch({
                type: SAVE_EMPLOYEE_DETAILS,
                name: employeeDetails.fields.name,
                workType: employeeDetails.fields.workType,
                jobTitle: employeeDetails.fields.jobTitle,
                experience: employeeDetails.fields.experience,
                contactNumber: employeeDetails.fields.contactNumber,
                description: employeeDetails.fields.description
            })
        }
        catch (err) {
            console.log(err)

        }
    }


    useEffect(() => {
        API.getEmployeeDetails(state.id).then((employeeDetails) => {
            console.log("after useEffect EmployeeDashboard inside response")
            console.log(employeeDetails)
            console.log(employeeDetails.data)
            dispatch({
                type: GET_EMPLOYEE_DETAILS,
                name: employeeDetails.data.fields.name,
                workType: employeeDetails.data.fields.workType,
                jobTitle: employeeDetails.data.fieldsjobTitle,
                experience: employeeDetails.data.fields.experience,
                contactNumber: employeeDetails.data.contactNumber,
                description: employeeDetails.data.description

            })
        })
    }, []);
    
    return (
        <div>
            <Adminheader />
            <form className="form" onSubmit={submit} >

                <Grid item container spacing={3}>
                    <div className={classes.root}>


                        <Grid item xs={12}>
                            <h2>Enter Your Details:</h2>
                        </Grid>

                        <Grid item xs={12}>
                            <h3>Go online</h3>
                            <Switch
                                edge="end"
                                onChange={handleToggle('online')}
                                online={online.indexOf('online') !== -1}
                            />
                        </Grid>

                        <Grid item xs={12}  >
                            <TextField
                                fullWidth
                                label="Enter Your Name"
                                id="name"
                                name="name"
                                defaultValue={state.fields.name}
                                helperText="Enter Your Name"
                                margin="normal"
                                inputRef={nameRef}
                            />
                        </Grid>

                        {/* profession type */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="workType"
                                select
                                label="Select Your Profession"
                                helperText="Please select your profession"
                                defaultValue={state.fields.workType}
                                inputRef={typeRef}
                            >
                                {workerType.map((option) => (
                                    <MenuItem key={option.value} value={option.label}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        {/* job titile*/}

                        <Grid item xs={12}  >
                            <TextField
                                fullWidth
                                label="Enter Your Job Title"
                                id="jobTitle"
                                helperText="Enter Your Job Title"
                                margin="normal"
                                defaultValue={state.fields.jobTitle}
                                inputRef={jobTitleRef}
                            />
                        </Grid>

                        {/* Experience  */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="experience"
                                select
                                label="Select Your Experience"
                                defaultValue={state.fields.experience}
                                helperText="Please Select Your Years of Experience"
                                inputRef={experienceRef}
                            >
                                {experiences.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12}  >
                            <TextField
                                fullWidth
                                label="Enter Your Contact Number"
                                id="contactNumber"
                                helperText="Enter your Contact Number"
                                margin="normal"
                                defaultValue={state.fields.contactNumber}
                                inputRef={contactNumberRef}
                            />
                        </Grid>
                        <Grid item xs={12}  >
                            <TextField
                                fullWidth
                                multiline
                                label="Enter Your Description"
                                id="description"
                                helperText="Enter your Description"
                                margin="normal"
                                defaultValue={state.fields.description}
                                inputRef={descriptionRef}
                            />
                        </Grid>

                        <Grid item xs={12}  >
                            <TextField
                                fullWidth
                                multiline
                                label="Enter Your Skills"
                                id="skills"
                                helperText="Enter your Skills"
                                margin="normal"
                                inputRef={skillsRef}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={submit} variant="contained" color="primary" value="Submit">
                                Submit
                            </Button>

                        </Grid>


                    </div>
                </Grid>
            </form>
        </div>
    )
}

export default EmployeeDashboard;
