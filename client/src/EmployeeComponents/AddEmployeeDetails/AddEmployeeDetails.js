import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from "react-router-dom"


//Import from material UI core
import Grid from '@material-ui/core/Grid';
import { MenuItem, Typography } from '@material-ui/core';

//Import from MaterialUiComponents
import Buttons from "../../MaterialUiComponents/Buttons";
import Input from "../../MaterialUiComponents/Inputs";

//Import from Utils
import { useEmployeeContext } from "../../Utils/EmployeeContext"
import { SAVE_EMPLOYEE_DETAILS } from "../../Utils/Actions"
import API from "../../Utils/API";

//Import from PureComponents
import ErrorNotice from '../../PureComponents/ErrorNotice/ErrorNotice';
import checkLocalStorage from "../../PureComponents/CheckLocalStorage/checkLocalStorage"

//Import from EmployeeComponents
import Adminheader from "../EmployeeDashboardHeader/EmployeeDashboardHeader"

//import login styles from login
import useStyles from "./AddEmployeeDetailsStyle"


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
    const history = useHistory();
    const nameRef = useRef();
    const typeRef = useRef();
    const jobTitleRef = useRef();
    const experienceRef = useRef();
    const contactNumberRef = useRef();
    const descriptionRef = useRef();
    const skillsRef = useRef();
    const imageRef = useRef();

    const clearInputs = () => {
        nameRef.current.value = "";
        typeRef.current.value = "";
        jobTitleRef.current.value = "";
        experienceRef.current.value = "";
        contactNumberRef.current.value = "";
        descriptionRef.current.value = "";
        skillsRef.current.value = "";
        imageRef.current.value = "";
    }


    const [state, dispatch] = useEmployeeContext();
    const [error, setError] = useState();
    const [image, setImage] = useState();

    const submit = async (e) => {
        e.preventDefault();
        checkLocalStorage().then(async employeeRes => {
            //While sending form data ordering is important send all data first and append image at last
            const fd = new FormData();
            fd.append('id', employeeRes.data.id)
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

                clearInputs();
                setError(employeeDetails.data.msg)
                dispatch({
                    type: SAVE_EMPLOYEE_DETAILS,
                    employee: employeeDetails.data
                })
            }
            catch (err) {
                //&& operator to set the error message.Executes when both sides true before and after and operator
                err.response.data.msg && setError(err.response.data.msg)
            }
        })
    }

    useEffect(() => {
        checkLocalStorage().then(async employeeRes => {

            if (employeeRes === undefined) {
                history.push("/login")
            }
            else {
                API.getEmployeeDetails(employeeRes.data.id).then((employeeDetails) => {
                    dispatch({
                        type: SAVE_EMPLOYEE_DETAILS,
                        employee: employeeDetails.data
                    })
                })

            }
        })
    }, [])

    return (
        <>
            <Adminheader />

            <div className={classes.root}>

                <Grid container spacing={6}>

                    <Grid item sm={12} md={6} className={classes.detailForm}>

                        <form >
                            <h2>Enter Your Details:</h2>
                            {error && (<ErrorNotice message={error} clearError={() => setError(undefined)} />)}

                            <Input
                            color="secondary"
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
                                type="number"
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
                    <Grid item sm={12} md={6} className={classes.messageBox}>
                        <Typography variant="h6" className={classes.messageBoxText}>* Guidlines to use:-<br/> -Please try to fill all the information correctly.<br/>-Write down short desctiption about yourself minimum 3-5 lines.<br/>-You can change your profession and details anytime.<br/>-Make sure you have uploaded right image so that job provider can see your face.<br/>-Review your summary page and click on goOnline.<br/>-When you are done please logout properly by selecting Logout button.<br/>-You can change image anytime without filling other data as well and vice versa.<br/>If any issues and question feel free to message me at marasinipradeep@gmail.com</Typography>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
