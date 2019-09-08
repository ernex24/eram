import React, { Component } from 'react';

class AboutUs extends Component {

    render() { 
        return (   <div id="aboutUs" class="AboutUs">
        <div class="zahra-eram" data-aos="fade-up" data-aos-duration="2000">
            <div class="zahra-text-area">
                <div class="zahra-text-area_container">
                    <h1>Eram Dental Health Clinic</h1>
                    <br />
                    <h2>
                        <span id="zahra_text"></span>
                    </h2>
                    <img src="assets/images/signature.png" />
                    <div class="caption-signaure">
                        Zahra Eram
                        <br /> CEO
                    </div>
                </div>
            </div>
            <div class="zahra-picture"></div>
        </div>
    </div>  );
    }
}
 
export default AboutUs;