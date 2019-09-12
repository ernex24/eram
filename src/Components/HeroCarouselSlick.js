import React, { Component } from 'react';
import Slider from "react-slick";


class HeroCarousel extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          movies: []
        }
      }

      componentDidMount(){
          
          
        const playPromise = this.refs.vidRef.play();;
        if (playPromise !== null){
            playPromise.catch(() => { this.refs.vidRef.play(); })
        }
console.log('cargo');
      }

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
            autoplaySpeed: 3000
        };
        return (
            <React.Fragment>
                <div id="maintitle" className="main_title" data-aos="fade-up" data-aos-duration="3000"><p>We create the perfect smile</p></div>

                <div id="#home" className="hero-background">
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
                                <source id="videoSource" src="assets/images/video.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <div>
                        <div id="picture2" className="flexslider-hero-picture2">
                            <img src="assets/images/image1.jpeg" />
                        </div>
                    </div>
                    <div>
                        <div id="picture2" className="flexslider-hero-picture2">
                            <img src="assets/images/image2.jpeg" />
                        </div>
                    </div>
                    <div>
                        <div id="picture2" className="flexslider-hero-picture3">
                            <img src="assets/images/image3.jpeg" />
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