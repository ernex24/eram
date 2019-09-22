
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import HeroCarousel from './HeroCarouselSlick';
import BannerAd from './BannerAd';
import OurTreatments from './OurTreatments';
import AboutUs from './AboutUs';
import OurValues from './OurValues';
import TheClinic from './TheClinic';
import TheTeam from './TheTeam';
import Message from './Message';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import Footer from './Footer';

class Home extends Component {


    render() { 
        const home = this.props.data
        console.log(home)
        return (
            <React.Fragment>
            <HeroCarousel data={home}/>
            <BannerAd data={home}/>
            <OurTreatments data={home}/>
            <AboutUs data={home}/>
            <OurValues data={home}/>
            <TheClinic data={home}/>
            <TheTeam data={home}/>
            <Message data={home}/>
            <Testimonials data={home}/>
            <ContactUs data={home}/> 
            <Footer data={home}/>
            </React.Fragment>
          );
    }
}
 
export default Home ;