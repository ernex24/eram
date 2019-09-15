import React, { Component } from 'react';
import { NavLink, Link, BrowserRouter as Router, Route  } from 'react-router-dom';
import ReactDOM from "react-dom";
import SectionOurtreatments from './SectionOurTreatments';

class OurTreatments extends Component {

    render() {

    
        return (
            <div id="ourTreatments" className="OurTreatments">
                <div className="container_menu-grid">
                    <div className="section-title" data-aos="fade-up"data-aos-duration="1000">
                        <p>Our<br /><span>Treatments</span></p>
                    </div>
                    <div className="menu-grid">

                        <div className="item item1" data-aos="fade-right" data-aos-duration="1000">

                            <div className="category-logo">
                                <img src="assets/images/eramSimileDesign.svg" />
                            </div>
                            

                            <NavLink to={`/treatment/smile_design`}>
                                <div className="category-smileDesign"></div>
                            </NavLink>

                        </div>
                        <div className="item item2" data-aos="fade-up" data-aos-duration="1000">

                            <div className="category-logo">
                                <img src="assets/images/eramImplants.svg" />
                            </div>

                            <Link to={`/treatment/implants`}>
                            <div className="category-implants"></div>
                            </Link>
                        </div>
                        <div className="item item3" data-aos="fade-left" data-aos-duration="1000">

                            <div className="category-logo">
                                <img src="assets/images/eramHygiene.svg" />
                            </div>

                            <Link to={`/treatment/hygiene`}>
                            <div className="category-hygiene"></div>
                            </Link>

                        </div>
                        <div className="item item4" data-aos="fade-up" data-aos-duration="1500">
                            <div className="category-logo">
                                <img src="assets/images/eramKids.svg" />
                            </div>

                            <Link to={`/treatment/kids`}>
                            <div className="category-kids"></div>
                            </Link>

                        </div>
                        <div className="item item5" data-aos="fade-left" data-aos-duration="1000">
                            <div className="category-logo">
                                <img src="assets/images/eramOrthodontics.svg" />
                            </div>

                            <Link to={`/treatment/orthodontics`}>
                            <div className="category-orthodontics"></div>
                            </Link>

                        </div>
                        <div className="item item6" data-aos="fade-left" data-aos-duration="1500">
                            <div className="category-logo">
                                <img src="assets/images/eramSimileDesign.svg" />
                            </div>

                            <Link to={`/treatment/care`}>
                            <div className="category-care"></div>
                            </Link>

                        </div>
                        <div className="item item7" data-aos="fade-right" data-aos-duration="1000">
                            <div className="category-logo">
                                <img src="assets/images/eramSimileDesign.svg" />
                            </div>

                              <Link to={`/treatment/care`}>
                            <div className="category-aesthetics"></div>
                            </Link>

                        </div>
                        <div className="item category-contact-form" data-aos="fade-left" data-aos-duration="1000">
                            <form className="category-contact-form_container">
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
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default OurTreatments;