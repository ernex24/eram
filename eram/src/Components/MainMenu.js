import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ModalContactUs from './ModalContactUs'

class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { isHide: false, isShowing: false };
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    hideBar = () => {
        this.prev = window.scrollY;
        if (this.prev >= 100) {
            this.setState({ isHide: true })
        } else if (this.prev <= 100) {
            this.setState({ isHide: false })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.hideBar);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.hideBar);
    }

    render() {
        let classHide = this.state.isHide ? "scroll_show" : "  ";
        return (

            <React.Fragment>
                <ModalContactUs
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                </ModalContactUs>
                <div className={"menu_scroll" + classHide}>
                    <div className="menu_scroll_logo">Eram Health Dental Clinic</div>
                    <ul className="menu_scroll_categories_items">
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <a href="#ourTreatments">Our treatments</a>
                        </li>
                        <li>
                            <a href="#aboutUs">About us</a>
                        </li>
                        <li>
                            <a href="#theclinic">The Clinic</a>
                        </li>
                        <li>
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Us</a>
                        </li>
                    </ul>
                    <div className="container-main-menu_rigth">
                        <ul className="main-menu_rigth">
                            <li>
                                <a target="_blank" href="https://de-de.facebook.com/EramDentalHealth/">
                                    <img src="assets/images/facebook.svg" />
                                </a>
                            </li>
                            <li>
                                <a target="blank" href="https://www.instagram.com/eramdental/">
                                    <img src="assets/images/iconfinder_instagram_.svg" />
                                </a>
                            </li>
                            <li>
                                <ul>
                                    <div className="pill-link-black">
                                        <a className="show-modal" href="#">Book an apointment</a>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                        <div className="main-menu-rigth_adress"> Call us +41 / 222 21 11 Bleicherweg 33, 8002 Zurich</div>
                    </div>
                </div>
                <div className="menu">
                    <div className="main-menu">
                        <div className="main-menu_left">
                            <ul className="main-menu_left_telephone">
                                <li>
                                    <ul className="main-menu_left_telephone_phones">
                                    </ul>
                                </li>
                                <li className="main-menu_left_emergency emergency">Emergency</li>
                            </ul>
                        </div>
                        <ul className=" main-menu_rigth">
                            <li>
                                <div className="pill-link-phone">
                                    <a href="#">
                                        <span id="phone">Cal for a consultation <br /> +41 / 222 22 22</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="pill-link" >
                                    <a className="show-modal" >Book an apointment </a>
                                </div>
                                <span id="address">Bleicherweg 33, 8002 Zurich</span>
                            </li>
                        </ul>
                    </div>
                    <div className="second-menu_categories" onClick={this.openModalHandler}>
                        <div className="second-menu_categories_logo">
                            <a href="#">
                                <div className="second-menu_categories_logo_pic"></div>
                            </a>
                        </div>
                        <ul className="second-menu_categories_items">
                            <li>
                                <NavLink exact to="/">Home</NavLink>
                            </li>
                            <li id="dropDown">
                                <a href="#ourTreatments">Our treatments</a>
                                <div id="drop-panel" className="dropDown-menu">
                                    <div className="dropDown-menu_wrapper">
                                        <ul className="dropDown-menu_list">
                                            <li>
                                                <NavLink exact to="/ourtreatments">
                                                    <img src="assets/images/eramSimileDesign.svg" />
                                                </NavLink>
                                            </li>
                                            <li>
                                                <a href=" ">Teeth Whitening</a>
                                            </li>
                                            <li>
                                                <a href=" ">Invisaling</a>
                                            </li>
                                            <li>
                                                <a href=" ">Orthodontic Treatment</a>
                                            </li>
                                            <li>
                                                <a href=" ">Smile Makeover</a>
                                            </li>
                                            <li>
                                                <a href=" ">Veneers</a>
                                            </li>
                                            <li>
                                                <a href=" ">White Fillings</a>
                                            </li>
                                        </ul>
                                        <ul className="dropDown-menu_list">
                                            <li>
                                                <a href=" ">
                                                    <img src="assets/images/eramCare.svg" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href=" ">Dental Implants</a>
                                            </li>
                                            <li>
                                                <a href=" ">Periodontics</a>
                                            </li>
                                            <li>
                                                <a href=" ">Tooth Extraction</a>
                                            </li>
                                            <li>
                                                <a href=" ">Single Dental Implant</a>
                                            </li>
                                            <li>
                                                <a href=" ">Implant Retained Dentures</a>
                                            </li>
                                            <li>
                                                <a href=" ">Prosthodontics</a>
                                            </li>
                                            <li>
                                                <a href=" ">Endodontics</a>
                                            </li>
                                            <li>
                                                <a href=" ">Dentist Check Up</a>
                                            </li>
                                        </ul>
                                        <ul className="dropDown-menu_list">
                                            <li>
                                                <a href=" ">
                                                    <img src="assets/images/eramaesthetics.svg" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href=" ">Anti-Aging Treatment</a>
                                            </li>
                                            <li>
                                                <a href=" ">Dermal Fillers</a>
                                            </li>
                                        </ul>
                                        <ul className="dropDown-menu_list">
                                            <li>
                                                <a href=" ">
                                                    <img src="assets/images/eramHygiene.svg" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href=" ">Dental Hygiene</a>
                                            </li>
                                        </ul>
                                        <ul className="dropDown-menu_list">
                                            <li>
                                                <a href=" ">
                                                    <img src="assets/images/eramKids.svg" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href=" ">Prophylaxe</a>
                                            </li>
                                            <li>
                                                <a href=" ">Fluoridation</a>
                                            </li>
                                            <li>
                                                <a href=" ">Sealing from the 1st Tooth</a>
                                            </li>
                                            <li>
                                                <a href=" ">Cavities</a>
                                            </li>
                                            <li>
                                                <a href=" ">Teeth grinding</a>
                                            </li>
                                            <li>
                                                <a href=" ">General Anesthesia</a>
                                            </li>
                                            <li>
                                                <a href=" ">Tooth extractions</a>
                                            </li>
                                            <li>
                                                <a href=" ">Orthodontics</a>
                                            </li>
                                            <li>
                                                <a href=" ">Sport Mouthguard</a>
                                            </li>
                                        </ul>
                                        <ul className="dropDown-menu_list">
                                            <li>
                                                <a href=" ">
                                                    <img src="assets/images/eramOrthodontics.svg" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href=" ">Invisalign</a>
                                            </li>
                                            <li>
                                                <a href=" ">Orthodontic Treatment</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#aboutUs">About us</a>
                            </li>
                            <li>
                                <a href="#theclinic">The Clinic</a>
                            </li>
                            <li>
                                <a href="#testimonials">Testimonials</a>
                            </li>
                            <li>
                                <a href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}







export default MainMenu;