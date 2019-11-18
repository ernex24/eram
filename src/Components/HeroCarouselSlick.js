import React, { Component } from 'react';
import Slider from "react-slick";


class HeroCarousel extends Component {

    render() {
        const home = this.props.data.home ? this.props.data.home : '';
        const slider = home.main_slider ? home.main_slider : ''
        console.log(slider)
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            adaptiveWidth: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <React.Fragment>
                <div id="maintitle" className="main_title" data-aos="fade-up" data-aos-duration="3000"><p>{ home ? home.maintitle : ''}</p></div>
                <div id="home" className="hero-background">
                <Slider {...settings}>
                    <div>
                        <div>
                            <video
                                id="mainVideo"
                                ref="vidRef"
                                autoPlay
                                loop
                                type="video/mp4"
                                className="fullscreen-bg__video">
                                <source id="videoSource" src={ slider ? slider.mainVideo : ''} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <div>
                        <div id="picture2" className="flexslider-hero-picture">
                            <img src={ slider? slider.picture1 : ''}/>
                        </div>
                    </div>
                    <div>
                        <div id="picture3" className="flexslider-hero-picture">
                            <img src={ slider ? slider.picture2 : ''}/>
                        </div>
                    </div>
                    <div>
                        <div id="picture4" className="flexslider-hero-picture">
                            <img src={ slider ? slider.picture3  : ''}/>
                        </div>
                    </div>
                </Slider>

                </div>

                <div className="eram-finantial">
                    <img src="assets/images/eram-finantial.png" />
                </div>
            </React.Fragment>
        );
    }
}

export default HeroCarousel;