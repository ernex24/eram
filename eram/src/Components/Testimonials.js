import React, { Component } from 'react';

class Testimonials extends Component {
    state = {  }
    render() { 
        return (  
        <div id="testimonials" className="testimonial">
        <div className="flexslider2 testimonial-slider">
            <ul className="slides">
                <li>
                    <div className="testimonial-container">
                        <div className="testimonial-image testimonial-image1"></div>
                        <div className="testimonial-text-container">
                            <div className="testimonial-title">Zahra Eram</div>
                            <div className="testimonial-description">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                                ut labore et dolore magna aliquyam erat.”</div>
                            <div className="testimonial-button">See the history</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="testimonial-container">
                        <div className="testimonial-image testimonial-image2"></div>
                        <div className="testimonial-text-container">
                            <div className="testimonial-title">Riccardo Meili</div>
                            <div className="testimonial-description">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam tempor invidunt ut labore
                                et dolore magna aliquyam erat.”
                            </div>
                            <div className="testimonial-button">See the history</div>
                        </div>

                    </div>
                </li>
                <li>
                    <div className="testimonial-container">
                        <div id="" className="testimonial-image testimonial-image3"></div>
                        <div className="testimonial-text-container">
                            <div className="testimonial-title">Sarah Villar</div>
                            <div className="testimonial-description">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.”</div>
                            <div className="testimonial-button">See the history</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div className="custom-navigation">
            <a href="#" className="flex-prev">
                <img src="assets/images/back.svg"/>
            </a>

            <div className="custom-controls-container"></div>
            <a href="#" className="flex-next">
                <img src="assets/images/next.svg"/>
            </a>
        </div>
    </div>  
    );
    }
}
 
export default Testimonials;