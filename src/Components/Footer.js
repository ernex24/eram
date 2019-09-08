import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="footer">
        <div className="menu-container">
            <img src="assets/images/logo.svg"/>
            <div className="footer-menu">
                <ul className="footer-menu-list">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#ourTreatments">Our treatments</a>
                    </li>
                    <li>
                        <a href="#aboutUs">About us</a>
                    </li>
                    <li>
                        <a href="#theclinic">The Clinic</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                </ul>
            </div>

            <div className="treatments-container">
                <hr/>
                <div className="footer-treatments">

                    <img src="assets/images/eramSimileDesign.svg"/>
                    <img src="assets/images/eramImplants.svg"/>
                    <img src="assets/images/eramKids.svg"/>
                    <img src="assets/images/eramHygiene.svg"/>
                    <img src="assets/images/eramCare.svg"/>
                    <img src="assets/images/eramOrthodontics.svg"/>

                </div>
                <hr/>
            </div>

            <div className="footer-phone">
                <img src="assets/images/old-typical-phone.svg"/>
                <div className="footer-phone-number">+41442222111</div>
                <img src="assets/images/poi.svg"/>
                <div className="footer-phone-number">Bleicherweg 33, 8002 Zurich</div>
                <img src="assets/images/clock.svg"/>
                <div className="footer-phone-number"> Monday to Friday 8:00 - 20:00 Saturday: 8:00 - 20:00 </div>
                <img src="assets/images/email-filled-closed-envelope.svg"/>
                <div className="footer-phone-number">info@eram-dh.com</div>
                <img src="assets/images/instagram.svg"/>
                <img src="assets/images/facebook-button.svg"/>
            </div>

            <div className="logos-container autoplay" data-slick='{"slidesToShow": 4, "slidesToScroll": 1}'>
                <img src="assets/images/logo-partner1.png"/>
                <img src="assets/images/logo-partner2.png"/>
                <img src="assets/images/logo-partner3.png"/>
                <img src="assets/images/logo-partner4.png"/>
                <img src="assets/images/logo-partner5.png"/>
            </div>
            <div className="copyrigth-rybon">® All rigths reserved Eram Health Dental Clinic 2019</div>
        </div>
    </div>
    );
    }
}
 
export default Footer;