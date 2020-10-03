import React, { useState } from 'react'
import Adminheader from "../../AdminHeader"


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Grid, Button, IconButton } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        padding: "50px",
        textAlign: "center",
        width: "400"
    },
}));

const workerType = [
    {
        type: 'Farm-Worker',
        label: 'Farm-Worker',
    },
    {
        value: 'Restaurant-Worker',
        label: 'Restaurant-Worker',
    },
    {
        value: 'Cleaners',
        label: 'Cleaners',
    }
];

const experiences = [0, 1, 2, 3, 4, 5];




const EmployeeDashboard = () => {


    const classes = useStyles();

    const [worker, setWorker] = useState('');
    const [experience, setExperience] = useState('');
    const handleProfessionChange = (event) => {
        setWorker(event.target.value);
    };
    const handleExperienceChange = (event) => {

        setExperience(event.target.value)
    };
    return (
        <div>
            <Adminheader />
            <form Grid container>

                <div className={classes.root, classes.textField}>
                    <Grid sm={12}  >
                        <TextField
                            label="Enter Your Name"
                            id="fullName"
                            defaultValue=""
                            helperText="Enter your name"
                            margin="normal"
                        />
                    </Grid>
                    {/* profession type */}
                    <Grid sm={12}>
                        <TextField
                            id="workerType"
                            select
                            label="Select Your Profession"
                            value={worker}
                            onChange={handleProfessionChange}
                            helperText="Please select your profession"
                        >
                            {workerType.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    {/* job titile*/}

                    <Grid sm={12}  >
                        <TextField
                            label="Enter Your Job Title"
                            id="jobTitle"
                            defaultValue=""
                            helperText="Enter Your Job Title"
                            margin="normal"
                        />
                    </Grid>

                    {/* Experience  */}
                    <Grid sm={12}>
                        <TextField
                            id="experience"
                            select
                            label="Select Your Experience"
                            value={experience}
                            onChange={handleExperienceChange}
                            helperText="Please Select Your Years of Experience"
                        >
                            {experiences.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid sm={12}  >
                        <TextField
                            label="Enter Your Contact Number"
                            id="contactNumber"
                            defaultValue=""
                            helperText="Enter your Contact Number"
                            margin="normal"
                        />
                    </Grid>
                    <Grid sm={12}  >
                        <TextField
                            multiline
                            label="Enter Your Description"
                            id="description"
                            defaultValue=""
                            helperText="Enter your Description"
                            margin="normal"
                        />
                    </Grid>

                    <Grid sm={12}  >
                        <TextField
                            multiline
                            label="Enter Your Skills"
                            id="skills"
                            defaultValue=""
                            helperText="Enter your Skills"
                            margin="normal"
                        />
                    </Grid>

                    <IconButton>Submit</IconButton>

                </div>
            </form>
        </div>
    )
}

export default EmployeeDashboard;
