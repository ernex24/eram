import React, { Component } from 'react';

class OurValues extends Component {
  
    render() {
        return (
        <div className="our-values">
            <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
                <p>Why do patients<br/><span>trust us?</span></p>
            </div>
            <div className="values-lists">
                <div className="value-list" data-aos="fade-up" data-aos-duration="1000">
                    <div className="value-list_title">Senior Clinical Doctors</div>
                    <div className="value-list_sub-title">Lorem ipsum</div>
                    <div className="value-list_text">Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet ipsum sit dolor amet ipsum sit dolor amet
                </div>
                </div>
                <div className="value-list" data-aos="fade-up" data-aos-duration="1000">
                    <div className="value-list_title">Multilingual team</div>
                    <div className="value-list_sub-title">Lorem ipsum</div>
                    <div className="value-list_text">Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet ipsum sit dolor amet ipsum sit dolor amet
                </div>
                </div>
                <div className="value-list" data-aos="fade-up" data-aos-duration="1000">
                    <div className="value-list_title">We adapt to your agenda</div>
                    <div className="value-list_sub-title">Lorem ipsum</div>
                    <div className="value-list_text">Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet ipsum sit dolor amet ipsum sit dolor amet
                </div>
                </div>
            </div>
        </div>
        );
    }
}

export default OurValues;