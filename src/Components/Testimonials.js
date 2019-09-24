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
		
		const home = this.props.data.home ? this.props.data.home : '';
		const testimonials = home.testimonials ? home.testimonials : '';
		const testimonial1 = testimonials.testimonial1 ? testimonials.testimonial1 : '';
		const testimonial2 = testimonials.testimonial2 ? testimonials.testimonial2 : '';
		const testimonial3 = testimonials.testimonial3 ? testimonials.testimonial3 : '';
		console.log(testimonial1.testimonial_name ? testimonial1.testimonial_name : ''  )
		

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
								<div className="testimonial-image testimonial-image1" style={{backgroundImage:`url(${testimonial1.testimonial_image ? testimonial1.testimonial_image : ''})`}} />
								<div className="testimonial-text-container">
									<div className="testimonial-title">{testimonial1.testimonial_name ? testimonial1.testimonial_name : '' }</div>
									<div className="testimonial-description">
									{testimonial1.testimonial_description ? testimonial1.testimonial_description : '' }
									</div>
									<div className="testimonial-button">See the history</div>
								</div>
							</div>
						</div>

						<div>
							<div className="testimonial-container">
								<div className="testimonial-image testimonial-image2" style={{backgroundImage:`url(${testimonial2.testimonial_image ? testimonial2.testimonial_image : ''})`}} />
								<div className="testimonial-text-container">
									<div className="testimonial-title">{testimonial2.testimonial_name ? testimonial2.testimonial_name : '' }</div>
									<div className="testimonial-description">
									{testimonial2.testimonial_description ? testimonial2.testimonial_description : '' }
									</div>
									<div className="testimonial-button">See the history</div>
								</div>
							</div>
						</div>

						<div>
							<div className="testimonial-container">
								<div id="" className="testimonial-image testimonial-image3" style={{backgroundImage:`url(${testimonial3.testimonial_image ? testimonial3.testimonial_image : ''})`}} />
								<div className="testimonial-text-container">
									<div className="testimonial-title">{testimonial3.testimonial_name ? testimonial3.testimonial_name : '' }</div>
									<div className="testimonial-description">
									{testimonial3.testimonial_description ? testimonial3.testimonial_description : '' }
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
