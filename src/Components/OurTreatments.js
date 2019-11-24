import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AppointmentWidget from './appointmentWidget';
class OurTreatments extends Component {
	render() {
		const pageText = this.props.data.page_text ? this.props.data.page_text : '';
		const sections = pageText.sections ? pageText.sections : '';

        function setDescription() {
            return {__html: sections.our_treatments};
          }

		return (
			<div id="ourTreatments" className="OurTreatments">
				<div className="container_menu-grid">
				
					<div className="section-title" data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={setDescription()}>
						
					</div>
					<div className="menu-grid">
						<div className="item item1" data-aos="fade-right" data-aos-duration="1000">
							<div className="category-logo">
								<img alt="eram-dental" src="assets/images/eramSimileDesign.svg" />
							</div>

							<NavLink to={`/treatment/smile_design`}>
								<div className="category-smileDesign" />
							</NavLink>
						</div>
						<div className="item item2" data-aos="fade-up" data-aos-duration="1000">
							<div className="category-logo">
								<img alt="eram-dental" src="assets/images/eramImplants.svg" />
							</div>

							<Link to={`/treatment/implants`}>
								<div className="category-implants" />
							</Link>
						</div>
						<div className="item item3" data-aos="fade-left" data-aos-duration="1000">
							<div className="category-logo">
								<img alt="eram-dental" src="assets/images/eramHygiene.svg" />
							</div>

							<Link to={`/treatment/dental_hygiene`}>
								<div className="category-hygiene" />
							</Link>
						</div>
						<div className="item item4" data-aos="fade-up" data-aos-duration="1500">
							<div className="category-logo">
								<img alt="eram-dental" src="assets/images/eramKids.svg" />
							</div>

							<Link to={`/treatment/kids`}>
								<div className="category-kids" />
							</Link>
						</div>
						<div className="item item5" data-aos="fade-left" data-aos-duration="1000">
							<div className="category-logo">
								<img alt="eram-dental" src="assets/images/eramOrthodontics.svg" />
							</div>

							<Link to={`/treatment/orthodontics`}>
								<div className="category-orthodontics" />
							</Link>
						</div>
						<div className="item item6" data-aos="fade-left" data-aos-duration="1500">
							<div className="category-logo">
								<img alt="eram-dental" src="assets/images/eramCare.svg" />
							</div>

							<Link to={`/treatment/dental_care`}>
								<div className="category-care" />
							</Link>
						</div>
						<div className="item item7" data-aos="fade-right" data-aos-duration="1000">
							<div className="category-logo">
								<img alt="eram-dental" src="assets/images/eramOralSurgery.svg" />
							</div>

							<Link to={`/treatment/oral_surgery`}>
								<div className="category-aesthetics" />
							</Link>
						</div>
						<div className="item category-contact-form" data-aos="fade-left" data-aos-duration="1000">
							{/* <form className="category-contact-form_container">
                                <div className="sectionTitle">
                                    <p>Make an appointment</p>
                                </div>
                                <div className="form-element-group">
                                    <div className="form-element">
                                        <label>Please Choose:</label>
                                        <select name="cars">
                                            <option value="volvo">Option 1</option>
                                            <option value="saab">Option 2</option>
                                            <option value="fiat">Option 3</option>
                                        </select>
                                    </div>
                                    <div className="form-element">
                                        <label>Name:</label>
                                        <input type="text" name="name" placeholder="What is your name?" />
                                    </div>
                                </div>

                                <div className="form-element-group">
                                    <div className="form-element">
                                        <label>Email:</label>
                                        <input type="text" name="email" placeholder="What is your email" />
                                    </div>
                                    <div className="form-element">
                                        <label>Telephone number:</label>
                                        <input type="text" name="phone" placeholder="What is your your phone number" />
                                    </div>
                                </div>

                                <div className="form-element">
                                    <label>Message:</label>
                                    <textarea rows="4" cols="50" placeholder="Write here your message" name="message"></textarea>
                                </div>
                                <div className="form-element">
                                    <button>Send</button>
                                </div>
                            </form> */}
							<AppointmentWidget />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default OurTreatments;
