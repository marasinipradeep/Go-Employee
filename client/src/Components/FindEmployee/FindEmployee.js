import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../images/blankprofile.png'
import PropTtypes from 'prop-types';




import './FindEmployee.css'

function FindEmployee({ employee }) { //This is coming from attribute inside EmployeeList

  
    const { name, slug, images, jobTitle } = employee;
    console.log(images[0])

    

    return (
        

        <article className="employee">
            <div className="img-container">
                <img src={images[0] || defaultImage}
                    alt="single employee" 
               />
                <div className="price-top">
                    <h6>{jobTitle}</h6>
                </div>
                <Link to={`/employees/${slug}`}
                    className="btn-primary  employee-link">
                    Connect
                </Link>
            </div>
            <p className="employee-info">{name}</p>
        </article>
    );
}

FindEmployee.PropTtypes = {
    employee: PropTtypes.shape({
        name: PropTtypes.string.isRequired,
        slug: PropTtypes.string.isRequired,
        images: PropTtypes.arrayOf(PropTtypes.string).isRequired,
        price: PropTtypes.number.isRequired,
    })
}

export default FindEmployee;
