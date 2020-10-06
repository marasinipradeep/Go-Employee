import React from 'react'
import {Link} from 'react-router-dom'

import Hero from '../Pure-Components/Hero/Hero';
import Banner from '../Banner/Banner';
import EmployeeContainer from '../EmployeeContainer/EmployeeContainer'

//import '../Hero/Hero.css'

const Employees = () => {
    return (
    <>
    <Hero hero="employeeHero">
        <Banner title ="our staff members">
        <Link to='/'className="btn-primary">
            return home
        </Link>
        </Banner>
    </Hero>
    <EmployeeContainer/>
    </>
    );
    
}

export default Employees;
