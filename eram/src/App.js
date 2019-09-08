import React, { Component } from 'react';

import './App.css';
import MainMenu from './Components/MainMenu';
import HeroCarousel from './Components/HeroCarousel';
import BannerAd from './Components/BannerAd';
import OurTreatments from './Components/OurTreatments';
import AboutUs from './Components/AboutUs';
import OurValues from './Components/OurValues';
import TheClinic from './Components/TheClinic';
import TheTeam from './Components/TheTeam';
import Message from './Components/Message';
import Testimonials from './Components/Testimonials';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';


class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    let dataURL = "https://ernesto-perez.com/wp-json/wp/v2/posts/1562";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res.acf
        })
        console.log(res.acf)
      })
      
  }

  render() {
  return (
    <div className="container-web ">
    <MainMenu/>
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
    </div>
  );
}
}

export default App;
