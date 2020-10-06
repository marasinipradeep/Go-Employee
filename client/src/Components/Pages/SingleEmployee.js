import React, { Component ,useContext,useState} from 'react';
import defaultBcg from '../images/employee.jpg';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import { useEmployeeContext } from '../Utils/EmployeeContext';
import StyledHero from '../Pure-Components/StyledHero/StyledHero';

//import Context from "../../context"


function SingleEmployee (props) {
   
        const [state,setState] = useState({
            slug: props.match.params.slug,
            defaultBcg
        });
    

   const context = useEmployeeContext() ;

        const { getEmployee } = context;
        const employee = getEmployee(state.slug);
        if (!employee) {
            return <div className="error">
                <h3>no such employee could be found...</h3>
                <Link to='/employee' className="btn-primary">
                    back to employee
                </Link>
            </div>
        }
        const {
            name,
            description,
            experience,
            jobTitle,
            email,
            contactNumber,
            skills,
            images } = employee;

        const [mainImg, ...defaultImg] = images;
        return (
            <>
                <StyledHero img={mainImg ||
                    this.state.defaultBcg}>
                    <Banner title={`${name}room`}>
                        <Link to='/employee' className="btn-primary">
                            back to employees
                </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt=
                                {name} />;
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>Name: {name}</h6>
                            <h6>Job Title : {jobTitle}</h6>
                            <h6>Experience : {experience}</h6>
                            <h6>Email : {email}</h6>
                    <h6>contact Number:{contactNumber}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Skills</h6>
                    <ul className = "extras">
                        {skills.map((item,index)=>{
                            return <li  key = {index}>{item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    
}

export default SingleEmployee
