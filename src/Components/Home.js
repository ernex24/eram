
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

    // constructor(props, context) {
    //     super(props, context);
    //     this.state = {
    //       data: {},
    //       isLoading: true,
    //       errors: null
    //   };
    //   }

      // componentDidMount() {
      //   this.fetchUsers();
      // };
    
      // fetchUsers(){
      //   let dataURL = "https://ernesto-perez.com/wp-json/wp/v2/posts/1562";
      //   fetch(dataURL)
      //     // We get the API response and receive data in JSON format...
      //     .then(response => response.json())
      //     // ...then we update the users state
      //     .then(data =>
      //       this.setState({
      //         data: data.acf,
      //         isLoading: false,
      //       })
      //     )
      //     // Catch any errors we hit and update the app
      //     .catch(error => this.setState({ error, isLoading: false }));   
      // }

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