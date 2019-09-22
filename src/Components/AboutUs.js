import React, { Component } from 'react';

class AboutUs extends Component {

    render() { 
        const home = this.props.data.home ? this.props.data.home : '';
        const zahra_text = home.zahra_text ? home.zahra_text: ''
        console.log(zahra_text)
        function setDescription() {
            return {__html: zahra_text};
          }
        return (   <div id="aboutUs" className="AboutUs">
        <div className="zahra-eram" data-aos="fade-up" data-aos-duration="2000">
            <div className="zahra-text-area">
                <div className="zahra-text-area_container">
                    <h1>Eram Dental Health Clinic</h1>
                    <br />
                    <h2>
                        <span id="zahra_text" dangerouslySetInnerHTML={setDescription()}></span>
                    </h2>
                    <img src="/assets/images/signature.png" />
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