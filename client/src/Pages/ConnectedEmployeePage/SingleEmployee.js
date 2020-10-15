import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
import PopUpButton from "../../FindEmployeeComponents/PopUpUser/UserPopUpButton"

//import from SingleEmployee css
import "./SingleEmployee.css";


function SingleEmployee(props) {

    const [employeeState, dispatch] = useEmployeeContext();
    useEffect(() => {

        API.getEmployeeDetails(props.match.params.id).then(connEmployee => {
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
                                <Banner title={`${employee.name} room`}>
                                    <Link to='/employee' className="btn-primary">
                                        back to employees
                         </Link>
                                </Banner>
                            </StyledHero>
                            
                           <PopUpButton/>
                            <section className="single-employee">
                                {/* <div className="single-employee-images">
                                    <img src="" alt="" />
                                </div> */}
                                <div className="single-employee-info">
                                    <article className="desc">
                                        <h3>details</h3>
                                        <p>{employee.description}</p>
                                    </article>
                                    <article className="info">
                                        <h3>info</h3>
                                        <h6>Name: {employee.name}</h6>
                                        <h6>Job Title : {employee.jobTitle}</h6>
                                        <h6>Experience : {employee.experience}</h6>
                                        <h6>Email : {employee.email}</h6>
                                        <h6>contact Number:{employee.contactNumber}</h6>
                                    </article>
                                </div>
                            </section>
                            <section className="employee-extras">
                                <h6>Skills</h6>
                                <ul className="extras">
                                    {/* {skills.map((item,index)=>{
                            return <li  key = {index}>{item}</li>
                        })} */}
                                    <li>{employee.skills}</li>
                                </ul>
                            </section>
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
