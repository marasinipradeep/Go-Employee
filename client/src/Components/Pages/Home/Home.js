import React from 'react'
import { Link } from 'react-router-dom';
import Header from "../../Header/Header"
import Hero from "../../Hero/Hero"
import Banner from "../../Banner/Banner"

export default function Home() {
    return (
        <div>
            <Header />
            <Hero>
                <Banner title="Connect to employees" subtitle="Hire Trusted And Skilled Employee">
                    <Link to="/employee" className="btn-primary">
                        Find Employee
        </Link>
                </Banner>
            </Hero>

        </div>
    )
}
