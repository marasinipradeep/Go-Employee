import React, { useState } from 'react';

//import from pureComponents
import Title from '../../PureComponents/Title/Title'

//import aboutUs css
import './AboutUs.css'

function AboutUs() {


    const [state, setState] = useState({
        aboutus: [
            {
                info: 'Go Employee helps to establish a connection between industry owner and job seeker.It only allows to find industry workers from Farm, Restaurant and Cleaning.This application allows to find employees on fast track.As this is just initial launch of application.This application is targeted only for South Australia and free to use with in 30 km from the CBD.If there is any issues and feedback please contact me at marasinipradeep@gmail.com or dial phone number 0420719901.'
            },
        ]
    })

    return (
        <section className="aboutus ">
            <Title title="About Us" />
            <div className="aboutus-center">
                {state.aboutus.map((item, index) => {
                    return (
                        <article key={index} className="service">
                            <p>{item.info}</p>
                        </article>
                    );

                })}
            </div>
        </section>



    );

}

export default AboutUs
