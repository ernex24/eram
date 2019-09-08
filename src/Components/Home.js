
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
        return (
            <React.Fragment>
            <HeroCarousel/>
            <BannerAd/>
            <OurTreatments/>
            <AboutUs/>
            <OurValues/>
            <TheClinic/>
            <TheTeam/>
            <Message/>
            <Testimonials/>
            <ContactUs/>
            <Footer/>
            </React.Fragment>
          );
    }
}
 
export default Home ;