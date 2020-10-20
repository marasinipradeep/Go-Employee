import React from 'react';
import { Link } from 'react-router-dom';


//import from Images
import defaultImage from '../../Images/blankprofile.png'

//import from findemployee css
import './FindEmployee.css'

function FindEmployee({ employee }) { //This is coming from attribute inside EmployeeList
    const { name, _id, images, jobTitle } = employee;
    return (
        <article className="employee" >
            <div className="img-container">
                <img src={`/${images}` || defaultImage} alt="single employee" />
                <div className="job-title"> <h2>{jobTitle}</h2> </div>
                <Link to={`/employees/${_id}`} className="btn-primary  employee-link">Connect</Link>
            </div>
            <p className="employee-info">{name}</p>
        </article>
    );
}

export default FindEmployee;
