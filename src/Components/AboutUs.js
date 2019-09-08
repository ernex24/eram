import React, { Component } from 'react';

class AboutUs extends Component {

    render() { 
        return (   <div id="aboutUs" className="AboutUs">
        <div className="zahra-eram" data-aos="fade-up" data-aos-duration="2000">
            <div className="zahra-text-area">
                <div className="zahra-text-area_container">
                    <h1>Eram Dental Health Clinic</h1>
                    <br />
                    <h2>
                        <span id="zahra_text"></span>
                    </h2>
                    <img src="assets/images/signature.png" />
                    <div className="caption-signaure">
                        Zahra Eram
                        <br /> CEO
                    </div>
                </div>
            </div>
            <div className="zahra-picture"></div>
        </div>
    </div>  );
    }
}
 
export default AboutUs;