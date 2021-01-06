import React from "react";
import { Link } from 'react-router-dom';

//import from pureComponents
import Hero from '../../PureComponents/Hero/Hero';
import Banner from '../../PureComponents/Banner/Banner';

//import from HomeComponents
import AboutUs from '../../HomeComponents/AboutUs/AboutUs';
import Services from '../../HomeComponents/Services/Services';
import Footer from '../../HomeComponents/Footer/Footer'

//import from material ui
import { Grid } from "@material-ui/core"



export default function Home() {
    return (
        <Grid container >
            <Grid item sm={12} >
                <Hero>
                    <Banner title="Connect to employees" subtitle="Find Trusted And Skilled Employees">
                        <Link to="/employee" className="btn-primary">
                            <span className="blinking">Find Employee</span>
                        </Link>
                    </Banner>
                 
                </Hero>
            </Grid>
          
            
            <Grid item sm={12}>
                <AboutUs />
            </Grid>
            {/* <Grid item sm={12}>
                <Services />
            </Grid> */}
            <Grid item sm={12}>
                <Footer />
            </Grid>
           
        </Grid>
    )
}
