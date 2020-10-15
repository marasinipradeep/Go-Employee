import React from "react";
import { Link } from 'react-router-dom';

//import from pureComponents
import Hero from '../../PureComponents/Hero/Hero';
import Banner from '../../PureComponents/Banner/Banner';

//import from HomeComponents
import AboutUs from '../../HomeComponents/AboutUs/AboutUs';
import Services from '../../HomeComponents/Services/Services';
import Footer from '../../HomeComponents/Footer/Footer'



export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Connect to employees" subtitle="Hire Trusted And Skilled Employee">
                    <Link to="/employee" className="btn-primary">
                        Find Employee
        </Link>
                </Banner>
            </Hero>
            <AboutUs />
            <Services />
            <Footer/>

        </>
    )
}
