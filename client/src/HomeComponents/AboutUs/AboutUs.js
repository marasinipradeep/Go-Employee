import React, { useState } from 'react';

//import from pureComponents
import Title from '../../PureComponents/Title/Title'

//import aboutUs css
import './AboutUs.css'

function AboutUs() {


    const [state, setState] = useState({
        aboutus: [
            {
                info: 'Go Employee helps to establish a connection between industry owner and job seeker. This app will help to find industry workers from Farm, Restaurant and Cleaning.'
            },
        ]
    })

    return (
        <section className="aboutus ">
            <Title title="About" />
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
