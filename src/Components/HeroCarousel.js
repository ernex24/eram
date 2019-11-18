import React, { Component } from 'react';

class HeroCarousel extends Component {

    componentDidMount() {
    
      }

    render() {
        return (
            <React.Fragment>
                <div id="maintitle" className="main_title" data-aos="fade-up" data-aos-duration="3000"></div>
                <div id="home" className="hero-background">
                    <div className="flexslider">
                        <ul className="slides">
                            <li>
                                <div className="fullscreen-bg">
                                    <video id="mainVideo" loop muted autoPlay className="fullscreen-bg__video" type="video/mp4">
                                    </video>
                                </div>
                            </li>
                            <li>
                                <div id="picture1" className="flexslider-hero-picture1"></div>
                            </li>
                            <li>
                                <div id="picture2" className="flexslider-hero-picture2"></div>
                            </li>
                            <li>
                                <div id="picture3" className="flexslider-hero-picture3"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="eram-finantial">
                        <img src="assets/images/eram-finantial.png" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HeroCarousel;