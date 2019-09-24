import React, { Component } from 'react';
import Slider from 'react-slick';

class Testimonials extends Component {

   
	render() {

        const next = () => {
            this.slider.slickNext();
        }
        const previous =() => {
            this.slider.slickPrev();
        }


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
			<div id="testimonials" className="testimonial">
				<div className="flexslider2 testimonial-slider">
					<Slider ref={c => (this.slider = c)} {...settings}>
						<div>
							<div className="testimonial-container">
								<div className="testimonial-image testimonial-image1" />
								<div className="testimonial-text-container">
									<div className="testimonial-title">Zahra Eram</div>
									<div className="testimonial-description">
										“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
										tempor invidunt ut labore et dolore magna aliquyam erat.”
									</div>
									<div className="testimonial-button">See the history</div>
								</div>
							</div>
						</div>

						<div>
							<div className="testimonial-container">
								<div className="testimonial-image testimonial-image2" />
								<div className="testimonial-text-container">
									<div className="testimonial-title">Riccardo Meili</div>
									<div className="testimonial-description">
										“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam tempor
										invidunt ut labore et dolore magna aliquyam erat.”
									</div>
									<div className="testimonial-button">See the history</div>
								</div>
							</div>
						</div>

						<div>
							<div className="testimonial-container">
								<div id="" className="testimonial-image testimonial-image3" />
								<div className="testimonial-text-container">
									<div className="testimonial-title">Sarah Villar</div>
									<div className="testimonial-description">
										“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
										tempor.”
									</div>
									<div className="testimonial-button">See the history</div>
								</div>
							</div>
						</div>
					</Slider>

					<div className="custom-navigation">
						<span href="#" className="flex-prev" onClick={previous}>
							<img src="assets/images/back.svg" />
						</span>
						<div className="custom-controls-container" />
						<span href="#" className="flex-next" onClick={next}>
							<img src="assets/images/next.svg" />
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Testimonials;
