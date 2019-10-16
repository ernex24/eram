import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
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
        const home = this.props.data.home ? this.props.data.home : '';
        const address = home.address ? home.address : '';
        console.log(address)
        return (

            <React.Fragment>
                <ModalContactUs
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    data={home}>
                </ModalContactUs>

                <div className={"menu_scroll" + classHide}>
                         <NavLink exact to="/">
                    <div className="menu_scroll_logo">Eram Health Dental Clinic</div>
                    </NavLink>
                    <ul className="menu_scroll_categories_items">
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li id="dropDown2">
                            <Link exact to="/#ourTreatments">Our treatments</Link>
                            <div id="drop-panel" className="dropDown-menu2">
                                    <div className="dropDown-menu_wrapper">
                                        <ul className="dropDown-menu_list">
                                            <li>
                                                <NavLink exact to="/treatment/smile_design">
                                                    <img src="/assets/images/eramSimileDesign.svg" />
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
                                                <NavLink exact to="/treatment/smile_design">
                                                    <img src="/assets/images/eramCare.svg" />
                                                </NavLink>
                                            </li>
                                            <li>
                                                <a href=" ">Periodontics</a>
                                            </li>
                                            <li>
                                                <a href=" ">Endodontics</a>
                                            </li>
                                            <li>
                                                <a href=" ">Dentis Check Up</a>
                                            </li>
                                            <li>
                                                <a href=" ">Bruxism</a>
                                            </li>
                                            <li>
                                                <a href=" "> Prosthodontics</a>
                                            </li>
                                        </ul>
                                        <ul className="dropDown-menu_list">
                                            <li>
                                            <NavLink exact to="/treatment/smile_design">
                                                    <img src="/assets/images/eramOralSurgery.svg" />
                                                    </NavLink>
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
                                            <NavLink exact to="/treatment/smile_design">
                                                    <img src="/assets/images/eramHygiene.svg" />
                                                    </NavLink>
                                            </li>
                                            <li>
                                                <a href=" ">Dental Hygiene</a>
                                            </li>
                                            <li>
                                                <a href=" ">Bleaching</a>
                                            </li>
                                            <li>
                                                <a href=" ">Air Flow</a>
                                            </li>
                                            <li>
                                                <a href=" ">Periodontics</a>
                                            </li>
                                            <li>
                                                <a href=" ">Halithosis</a>
                                            </li>
                                        </ul>
                                        <ul className="dropDown-menu_list">
                                            <li>
                                            <NavLink exact to="/treatment/smile_design">
                                                    <img src="/assets/images/eramKids.svg" />
                                                    </NavLink>
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
                                            <NavLink exact to="/treatment/smile_design">
                                                    <img src="/assets/images/eramOrthodontics.svg" />
                                                    </NavLink>
                                            </li>
                                            <li>
                                                <a href=" ">Invisalign</a>
                                            </li>
                                            <li>
                                                <a href=" ">Orthodontic Treatment</a>
                                            </li>
                                        </ul>
                                        <ul className="dropDown-menu_list">
                                            <li>
                                            <NavLink exact to="/treatment/smile_design">
                                                    <img src="/assets/images/eramImplants.svg" />
                                                    </NavLink>
                                            </li>
                                            <li>
                                                <a href=" ">Dental Implants</a>
                                            </li>
                                            <li>
                                                <a href=" ">Implant Retained Dentures</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        </li>
                        <li>
                        <Link exact to="/#aboutUs">About us</Link>
                        </li>
                        <li>
                        <Link exact to="/#theclinic">The Clinic</Link>
                        </li>
                        <li>
                        <Link exact to="/#testimonials">Testimonials</Link>
                        </li>
                        <li>
                        <Link exact to="/#contact">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="container-main-menu_rigth">
                        <ul className="main-menu_rigth">
                            <li>
                                <a target="_blank" href="https://de-de.facebook.com/EramDentalHealth/">
                                    <img src="/assets/images/facebook.svg" />
                                </a>
                            </li>
                            <li>
                                <a target="blank" href="https://www.instagram.com/eramdental/">
                                    <img src="/assets/images/iconfinder_instagram_.svg" />
                                </a>
                            </li>
                            <li>
                                <ul>
                                    <div className="pill-link-black" onClick={this.openModalHandler}>
                                        <a className="show-modal" >Book an appointment</a>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                        <div className="main-menu-rigth_adress"> Call us {address.phone} {address.address ? address.address.street : ''} {address.address ? address.address.city : ''}</div>
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
                                        <span id="phone">Call for a consultation <br /> {address.phone}</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="pill-link" onClick={this.openModalHandler}  >
                                    <a className="show-modal" >Book an appointment </a>
                                </div>
                                <span id="address">{address.address ? address.address.street : ''} {address.address ? address.address.city : ''}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="second-menu_categories">
                    <NavLink exact to="/">
                        <div className="second-menu_categories_logo">
                                <div className="second-menu_categories_logo_pic"></div>
                        </div>
                        </NavLink>
                        <ul className="second-menu_categories_items">
                            <li>
                                <NavLink exact to="/">Home</NavLink>
                            </li>
                            <li id="dropDown">
                            <Link exact to="/#ourTreatments">Our treatments</Link>
                                <div id="drop-panel" className="dropDown-menu">
                                    <div className="dropDown-menu_wrapper">
                                    <ul className="dropDown-menu_list">
                                            <li>
                                                <NavLink exact to="/ourtreatments">
                                                    <img src="/assets/images/eramSimileDesign.svg" />
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
                                            <NavLink exact to="/treatment/care">
                                                    <img src="/assets/images/eramCare.svg" />
                                                    </NavLink>
                                            </li>
                                            <li>
                                                <a href=" ">Periodontics</a>
                                            </li>
                                            <li>
                                                <a href=" ">Endodontics</a>
                                            </li>
                                            <li>
                                                <a href=" ">Dentis Check Up</a>
                                            </li>
                                            <li>
                                                <a href=" ">Bruxism</a>
                                            </li>
                                            <li>
                                                <a href=" "> Prosthodontics</a>
                                            </li>
                                        </ul>
                                        <ul className="dropDown-menu_list">
                                            <li>
                                            <NavLink exact to="/treatment/facial">
                                                    <img src="/assets/images/eramOralSurgery.svg" />
                                                    </NavLink>
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
                                            <NavLink exact to="/treatment/hygiene">
                                                    <img src="/assets/images/eramHygiene.svg" />
                                                    </NavLink>
                                            </li>
                                            <li>
                                                <a href=" ">Dental Hygiene</a>
                                            </li>
                                            <li>
                                                <a href=" ">Bleaching</a>
                                            </li>
                                            <li>
                                                <a href=" ">Air Flow</a>
                                            </li>
                                            <li>
                                                <a href=" ">Periodontics</a>
                                            </li>
                                            <li>
                                                <a href=" ">Halithosis</a>
                                            </li>
                                        </ul>
                                        <ul className="dropDown-menu_list">
                                            <li>
                                            <NavLink exact to="/treatment/kids">
                                                    <img src="/assets/images/eramKids.svg" />
                                                    </NavLink>
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
                                            <NavLink exact to="/treatment/orthodontics">
                                                    <img src="/assets/images/eramOrthodontics.svg" />
                                                    </NavLink>
                                            </li>
                                            <li>
                                                <a href=" ">Invisalign</a>
                                            </li>
                                            <li>
                                                <a href=" ">Orthodontic Treatment</a>
                                            </li>
                                        </ul>
                                        <ul className="dropDown-menu_list">
                                            <li>
                                            <NavLink exact to="/treatment/implants">
                                                    <img src="/assets/images/eramImplants.svg" />
                                                    </NavLink>
                                            </li>
                                            <li>
                                                <a href=" ">Dental Implants</a>
                                            </li>
                                            <li>
                                                <a href=" ">Implant Retained Dentures</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <Link exact to="/#aboutUs">About us</Link>
                          
                            </li>
                            <li>
                            <Link exact to="/#theclinic">The Clinic</Link>
                              
                            </li>
                            <li>
                            <Link exact to="/#testimonials">Testimonials</Link>
                               
                            </li>
                            <li>
                            <Link exact to="/#contact">Contact Us</Link>
                    
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}







export default MainMenu;