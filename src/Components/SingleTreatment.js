import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import ContactUs from './ContactUs';
import OurValues from './OurValues';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import BannerAd from './BannerAd';

class SingleTreatment extends Component {
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
			autoplaySpeed: 2000
		};

		let home = this.props.data ? this.props.data : '';
		let title = this.props.title ? this.props.title : '';
		let description = this.props.description ? this.props.description : '';
		let image1 = this.props.image_1 ? this.props.image_1 : '';
		let image2 = this.props.image_2 ? this.props.image_2 : '';
		let image3 = this.props.image_3 ? this.props.image_3 : '';
		let menu = this.props.menu ? this.props.menu : '';

		function setDescription() {
			return { __html: description };
		}
		return (
			<React.Fragment>
				<div className="wrapper-category-title">
					<div className="category-title">{title}</div>
				</div>
				<div className="sectionCoruselTreat">
					<Slider {...settings}>
						<div>
							<div>
								<img src={image1} />
							</div>
						</div>
						<div>
							<div>
								<img src={image2} />
							</div>
						</div>
						<div>
							<div>
								<img src={image3} />
							</div>
						</div>
					</Slider>
				</div>

				{/* <BannerAd data={home} /> */}

				<div className="category-container-treatment">
					<div className="wraperContent">
						<div className="textContentTitle">{title}</div>
						<div className="textContent" dangerouslySetInnerHTML={setDescription()} />
					</div>

					<div className="lateralMenu">
						<ul>
							{Object.values(menu).map((key, index) => {
								return (
									<NavLink key={index} to={`/treatment/treat/${key.link}`}>
										<li>{key.title}</li>
									</NavLink>
								);
							})}
						</ul>
					</div>
				</div>

				<OurValues data={home} />
				<ContactUs data={home} />
				<Footer data={home} />
			</React.Fragment>
		);
	}
}

export default SingleTreatment;
