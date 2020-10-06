import React, { useEffect } from 'react';
import defaultBcg from '../../images/employee.jpg';
import Banner from '../../Banner/Banner';
import { Link } from 'react-router-dom';
import { useEmployeeContext } from '../../Utils/EmployeeContext';
import StyledHero from '../../Pure-Components/StyledHero/StyledHero';

import { CONNECTED_EMPLOYEE } from "../../Utils/Actions";
import  "./SingleEmployee.css"

function SingleEmployee(props) {

    const [employeeState, dispatch] = useEmployeeContext();
    useEffect(() => {
        dispatch({
            type: CONNECTED_EMPLOYEE,
            id: props.match.params.id
        })

    }, [])
    return (
        <>
            {employeeState.connectedEmployee.length ? (
                <div>
                    {employeeState.connectedEmployee.map(employee => (
                 
                 <div>
                   <StyledHero img={"" ||
                        defaultBcg}>
                        <Banner title={`${employee.name} room`}>
                            <Link to='/employee' className="btn-primary">
                                    back to employees
                         </Link>
                        </Banner>
                    </StyledHero>
                    <section className="single-employee">
                        <div className="single-employee-images">
                            <img src="" alt="" />
                        </div>
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
                        <ul className = "extras">
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
