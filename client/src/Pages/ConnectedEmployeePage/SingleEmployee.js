import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//import from material
import { Grid } from '@material-ui/core';

//import from Images
import defaultBcg from '../../Images/employee.jpg';

//import from PureComponets
import Banner from '../../PureComponents/Banner/Banner';
import StyledHero from '../../PureComponents/StyledHero/StyledHero';

//import from Utils
import { useEmployeeContext } from '../../Utils/EmployeeContext';
import API from "../../Utils/API"
import { CONNECTED_EMPLOYEE } from "../../Utils/Actions";

//import from chatComponents
import UserPopUpButton from "../../FindEmployeeComponents/PopUpUser/UserPopUpButton"

//import from chatComponent
import Chat from "../../ChatComponents/Chat/Chat"


//import from SingleEmployee css
import "./SingleEmployee.css";



function SingleEmployee(props) {
    const [employeeState, dispatch] = useEmployeeContext();
    const [name, setName] = useState('Guest');
    const [room, setRoom] = useState("");
    useEffect(() => {

        API.getEmployeeDetails(props.match.params.id).then(connEmployee => {
            console.log(connEmployee)

            setRoom(connEmployee.data._id)
            dispatch({
                type: CONNECTED_EMPLOYEE,
                connectedEmployee: connEmployee.data
            })
        })
    }, [])
    return (
        <>
            {employeeState.connectedEmployee.length ? (
                <div>
                   
                    {employeeState.connectedEmployee.map(employee => (

                        <div key={employee._id}>
 
                            <StyledHero img={`/${employee.images}` ||
                                defaultBcg}>
                                <Banner title={`${employee.name} ${employee.workType}`}>
                                    <Link to='/employee' className="btn-primary">
                                        GO BACK
                                   </Link>
                                </Banner>
                            </StyledHero>

                            <Grid container alignItems="center" spacing={2} >
                                <Grid item xs={12} md={12}>
                                    <article className="desc">
                                        <h3>details</h3>
                                        <p>{employee.description}</p>
                                    </article>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <article className="info">
                                        <h3>info</h3>
                                        <h6>Name: {employee.name}</h6>
                                        <h6>Job Title : {employee.jobTitle}</h6>
                                        <h6>Experience : {employee.experience}</h6>
                                        <h6>Email : {employee.email}</h6>
                                        <h6>contact Number:{employee.contactNumber}</h6>
                                    </article>
                                </Grid>

                                <Grid item xs={12} md={5} >
                                {console.log(name,room)}
                                    <Chat name={name} room={room} />
                                </Grid>

                                <Grid item xs={12} md={12}>
                                    <section className="employee-extras">
                                        <h6>Skills</h6>
                                        <ul className="extras">
                                            <li>{employee.skills}</li>
                                        </ul>
                                    </section>
                                </Grid>

                              

                            </Grid>
                        </div>
                    ))}
                </div>

            ) : (
                    <div className="error">
                        <h3>no such employee could be found...</h3>
                        <Link to='/employee' className="btn-primary">
                            back to employee
                    </Link>
                    </div>
                )}

        </>
    );

}

export default SingleEmployee
