import React from 'react';
import { Link } from 'react-router-dom';


//import from Images
import defaultImage from '../../Images/blankProfile.jpeg'

//import from findemployee css
import './FindEmployee.css'

function FindEmployee({ employee }) { //This is coming from attribute inside EmployeeList
    const { name, _id, images, jobTitle, email, workType } = employee;
    console.log(`inside find employee images are `)
    console.log(images)

    const newName = email.split('@')[0];

    if(images === undefined){
        return (
            <article className="employee" >
            <div className="img-container">
                <img src={defaultImage} alt="image" />
                <div className="job-title"> <h2>{workType}</h2> </div>
                <Link to={`/employees/${_id}`} className="btn-primary  employee-link">Connect</Link>
            </div>
            <p className="employee-info">{newName}</p>
        </article>
        )
    }
  
    return (
        <article className="employee" >
            <div className="img-container">
                <img src={`/${images}`} alt="image"/>
                <div className="job-title"> <h2>{workType}</h2> </div>
                <Link to={`/employees/${_id}`} className="btn-primary  employee-link">Connect</Link>
            </div>
            <p className="employee-info">{newName}</p>
        </article>
    );
}

export default FindEmployee;
