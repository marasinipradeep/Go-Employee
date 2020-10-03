import React, { useState } from 'react'
import Adminheader from "../../AdminHeader"


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Grid, Button, Switch } from '@material-ui/core';


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

    const [name, setName] = useState();
    const [worker, setWorker] = useState();
    const [jobTitle, setjJobTitle] = useState();
    const [experience, setExperience] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [description, setDesctiption] = useState();
    const [skills, setSkills] = useState([])

    const [checked, setChecked] = React.useState(['online']);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        console.log(currentIndex)
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    const submit = async (e) => {
        e.preventDefault();
        const details = { name, worker, jobTitle, experience, contactNumber, description, skills }
        console.log("inside submit details")
        console.log(details)
    }
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
                                checked={checked.indexOf('online') !== -1}
                            />
                        </Grid>

                        <Grid item xs={12}  >
                            <TextField
                                fullWidth
                                label="Enter Your Name"
                                id="name"
                                defaultValue=""
                                helperText="Enter Your Name"
                                margin="normal"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>

                        {/* profession type */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="workerType"
                                select
                                label="Select Your Profession"
                                helperText="Please select your profession"
                                onChange={(e) => setWorker(e.target.value)}
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
                                defaultValue=""
                                helperText="Enter Your Job Title"
                                margin="normal"
                                onChange={(e) => setjJobTitle(e.target.value)}
                            />
                        </Grid>

                        {/* Experience  */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="experience"
                                select
                                label="Select Your Experience"
                                helperText="Please Select Your Years of Experience"
                                onChange={(e) => setExperience(e.target.value)}
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
                                defaultValue=""
                                helperText="Enter your Contact Number"
                                margin="normal"
                                onChange={(e) => setContactNumber(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}  >
                            <TextField
                                fullWidth
                                multiline
                                label="Enter Your Description"
                                id="description"
                                defaultValue=""
                                helperText="Enter your Description"
                                margin="normal"
                                onChange={(e) => setDesctiption(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}  >
                            <TextField
                                fullWidth
                                multiline
                                label="Enter Your Skills"
                                id="skills"
                                defaultValue=""
                                helperText="Enter your Skills"
                                margin="normal"
                                onChange={(e) => setSkills(e.target.value)}
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
