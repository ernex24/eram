import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import ContactUs from './ContactUs';
import OurValues from './OurValues';

class SectionOurTreatments extends Component {
    state = {}
    render() {
        return (
<React.Fragment>
            <div className="category-picture">
                <div className="category-title">Eram smile design</div>
            </div>

            <div className="category-container">

                <div className="treatment-container">
                    <div className="treatment_title">Teeth Whitening</div>
                    <div className="treatment_description">Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet ipsum sit dolor amet ipsum sit dolor amet</div>
                </div>

                <div className="treatment-container">
                    <div className="treatment_title">Invisaling</div>
                    <div className="treatment_description">Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet ipsum sit dolor amet ipsum sit dolor amet</div>
                </div>

                <div className="treatment-container">
                    <div className="treatment_title">Orthodontic Treatment</div>
                    <div className="treatment_description">Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet ipsum sit dolor amet ipsum sit dolor amet</div>
                </div>

                <div className="treatment-container">
                    <div className="treatment_title">Smile Makeover</div>
                    <div className="treatment_description">Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet ipsum sit dolor amet ipsum sit dolor amet</div>
                </div>

                <div className="treatment-container">
                    <div className="treatment_title">Veneers</div>
                    <div className="treatment_description">Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet ipsum sit dolor amet ipsum sit dolor amet</div>
                </div>

                <div className="treatment-container">
                    <div className="treatment_title">White Fillings</div>
                    <div className="treatment_description">Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet ipsum sit dolor amet ipsum sit dolor amet</div>
                </div>

            </div>
            <OurValues/>
            <ContactUs/>
            <Footer/>
            </React.Fragment>
         );
    }
}

export default SectionOurTreatments;