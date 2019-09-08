import React, { Component } from 'react';
import Slider from "react-slick";


class HeroCarousel extends Component {

    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            adaptiveWidth: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 10000,
            cssEase: "linear",
            pauseOnHover: true
        };
        return (
            <React.Fragment>
                <Slider {...settings}>
                    <div>
                        <div>
                            <video
                                id="mainVideo"
                                src="https://ernesto-perez.com/wp-content/uploads/2019/08/video.mp4"
                                autoPlay
                                loop
                                type="video/mp4"
                                className="fullscreen-bg__video">
                            </video>
                        </div>
                    </div>
                    <div>
                        <div id="picture2" className="flexslider-hero-picture2">
                            <img src="assets/images/eram_02.jpg" />
                        </div>
                    </div>
                    <div>
                        <div id="picture2" className="flexslider-hero-picture2">
                            <img src="assets/images/eram_04.jpg" />
                        </div>
                    </div>
                </Slider>

                <div class="eram-finantial">
                    <img src="assets/images/eram-finantial.png" />
                </div>
            </React.Fragment>
        );
    }
}

export default HeroCarousel;