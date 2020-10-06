import React, { useEffect } from 'react';
import defaultBcg from '../images/employee.jpg';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import { useEmployeeContext } from '../Utils/EmployeeContext';
import StyledHero from '../Pure-Components/StyledHero/StyledHero';

import { CONNECTED_EMPLOYEE } from "../Utils/Actions"

function SingleEmployee(props) {

    const [employeeState, dispatch] = useEmployeeContext();
   // const employee = props.match.params.id;
    useEffect(() => {

        dispatch({
            type: CONNECTED_EMPLOYEE,
            id: props.match.params.id
        })

    }, [])


    console.log(props)
    console.log(employeeState)

    // if (!employee) {
    //     return <div className="error">
    //         <h3>no such employee could be found...</h3>
    //         <Link to='/employee' className="btn-primary">
    //             back to employee
    //             </Link>
    //     </div>
    // }
   
    return (
        <>
            {employeeState.connectedEmployee.length ? (
                <div>
                    {employeeState.connectedEmployee.map(employee => (
                 
                 <div>
                   <StyledHero img={"" ||
                        defaultBcg}>
                        <Banner title={`${employee.name}room`}>
                            <Link to='/employee' className="btn-primary">
                                    back to employees
                         </Link>
                        </Banner>
                    </StyledHero>
                    <section className="single-room">
                        <div className="single-room-images">
                            <img src="" alt="" />
                        </div>
                        <div className="single-room-info">
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
                    <section className="room-extras">
                        <h6>Skills</h6>
                        {/* <ul className = "extras">
                        {skills.map((item,index)=>{
                            return <li  key = {index}>{item}</li>
                        })}
                    </ul> */}
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
