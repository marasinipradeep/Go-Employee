import React from "react";
//import React, { useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
// import UserContext from "../../context/UserContext"

import Hero from '../../Hero/Hero';
import Banner from '../../Banner/Banner';
import AboutUs from '../../AboutUs/AboutUs';
import Services from '../../Services/Services';



export default function Home() {

    // const { userData } = useContext(UserContext)
    // console.log(userData)
    // const history = useHistory();
    // useEffect(() => {
    //     if (!userData.user) {
    //         history.push("/login");
    //     }
    // });

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
