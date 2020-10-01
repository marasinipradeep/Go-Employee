import React, { Component } from 'react'
import { FaPeopleCarry, FaLaptopCode, FaShuttleVan, FaAngular } from "react-icons/fa"
import Title from '../Title/Title';
import './Services.css'

class Services extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: [
                {
                    icon: <FaPeopleCarry />,
                    title: "find employee",
                    info: 'Hey are you looking for people during busy time find out here.' 

                },
                {
                    icon: <FaLaptopCode />,
                    title: "website development",
                    info: 'Do you own a business and looking for website development contact us.'

                },
                {
                    icon: <FaShuttleVan />,
                    title: "IT consultant",
                    info: 'We are the expert in IT and Engineering we are here to help you out in your journey.'

                },
                {
                    icon: <FaAngular />,
                    title: "web development course",
                    info: 'Get enrolled in latest web development course.'

                },
            ]

        }
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return(
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
}

export default Services
