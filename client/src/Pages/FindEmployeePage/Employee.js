import React from 'react'
import { Link } from 'react-router-dom'

//import from pureComponents
import Hero from '../../PureComponents/Hero/Hero';
import Banner from '../../PureComponents/Banner/Banner';

//import from FindEmployeeComponents
import EmployeeContainer from '../../FindEmployeeComponents/EmployeeContainer/EmployeeContainer'


const Employees = () => {
    return (
        <>
            <Hero hero="employeeHero">
                <Banner title="our staff members">
                    <Link to='/' className="btn-primary">return home</Link>
                </Banner>
            </Hero>
            <EmployeeContainer />
        </>
    );

}

export default Employees;
