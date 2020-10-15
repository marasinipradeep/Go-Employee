import React, { useState } from 'react'

import { FaPeopleCarry, FaLaptopCode, FaShuttleVan, FaAngular } from "react-icons/fa"

//import from PureComponents
import Title from '../../PureComponents/Title/Title';

//import from services css
import './Services.css'

function Services() {


    const [state,setState] = useState({
        services: [
            {
                icon: <FaPeopleCarry />,
                title: "find employee",
                info: 'Hey are you looking for people during busy time find out here.'

            },
            {
                icon: <FaLaptopCode />,
                title: "website development",
                info: 'Coming Soon...................'

            },
            {
                icon: <FaShuttleVan />,
                title: "IT consultant",
                info: 'Coming Soon...................'

            },
            {
                icon: <FaAngular />,
                title: "web development course",
                info: 'Coming Soon...................'

            },
        ]

    })
    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {state.services.map((item, index) => {
                    return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );

                })}
            </div>
        </section>



    );
}


export default Services
