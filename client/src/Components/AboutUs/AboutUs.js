import React, { useState } from 'react'
import Title from '../Pure-Components/Title/Title'
import './AboutUs.css'

function AboutUs () {
  

        const [state,setState] = useState({
            aboutus: [
                {
                    info: 'Go Employee is a medium to establish to connection between ob provider and job seeker mainly  for small business like restaurant, cleaning and agricultures.As small industries have lack of budget for human resource system they always find difficulties connecting with right employees.So this application helps to find right employee for right businesses.Whenever the peson who is looking employee they can always look in this page and find the right fit person for their business.' 
                },
            ]
        })
  
        return (
            <section className="aboutus ">
                <Title title="About Us" />
                <div className="aboutus-center">
                    {state.aboutus.map((item,index) => {
                        return(
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
