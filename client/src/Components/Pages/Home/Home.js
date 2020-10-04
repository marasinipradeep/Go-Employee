import React from "react";
import { Link } from 'react-router-dom';

import Hero from '../../Pure-Components/Hero/Hero';
import Banner from '../../Banner/Banner';
import AboutUs from '../../AboutUs/AboutUs';
import Services from '../../Services/Services';



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

        </>
    )
}
