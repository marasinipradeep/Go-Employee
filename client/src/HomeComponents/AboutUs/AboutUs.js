import React, { useState } from 'react';

//import from pureComponents
import Title from '../../PureComponents/Title/Title'

//import aboutUs css
import './AboutUs.css'

function AboutUs() {


    const [state, setState] = useState({
        aboutus: [
            {
                info: 'Use this app to find worker from various industries like resturant, farm and cleaning. Users can signup to become employee and find job'
            },
        ]
    })

    return (

        <section className="aboutus ">
            {/* <Title title="About" /> */}
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
