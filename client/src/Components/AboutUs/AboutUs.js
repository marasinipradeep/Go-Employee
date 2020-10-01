import React, { Component } from 'react'
import Title from '../Title/Title'
import './AboutUs.css'

class AboutUs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            aboutus: [
                {
                    info: 'ECS also stands for Employee Connect System.ECS is developed to solve the read world problem of \' short of staffs\' mainly in small business like restaurant, cleaning, agriculture, construction and so on.As small industries have lack of budget for human resource system they always find difficulties connecting with right employees.So our moto is to provide right employee to right business owner on real time basis.Whenever the business sends us request with employees we have 1000 of dedicated, skilled man power in differnt fields.' 
                },
            ]
        }
    }
    render() {
        return (
            <section className="aboutus ">
                <Title title="About Us" />
                <div className="aboutus-center">
                    {this.state.aboutus.map((item,index) => {
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
}

export default AboutUs
