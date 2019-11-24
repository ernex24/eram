import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


class Footer extends Component {
    render() { 
        const pro = this.props.data ? this.props.data  : '';
        const home = pro.home ? pro.home : '';
        const address = home.address ? home.address : '';
        
        const pageText = this.props.data.page_text ? this.props.data.page_text : '';
        const menuItems = pageText.menu_items ? pageText.menu_items : '';

        return ( 
        <div className="footer">
        <div className="menu-container">
        <NavLink exact to="/">
            <img alt="eram-dental" src="/assets/images/logo.svg"/>
            </NavLink>
            <div className="footer-menu">
                <ul className="footer-menu-list">
                    <li>
                        
                    <NavLink exact to="/">{menuItems.menu_1}</NavLink>
                    </li>
                    <li>
                    <Link exact={true.toString()} to="/#ourTreatments">{menuItems.menu_2}</Link>
                    </li>
                    <li>
                    <Link exact={true.toString()} to="/#aboutUs">{menuItems.menu_3}</Link>
                    </li>
                    <li>
                    <Link exact={true.toString()} to="/#theclinic">{menuItems.menu_4}</Link>
                    </li>
                    <li>
                    <Link exact={true.toString()} to="/#testimonials">{menuItems.menu_5}</Link>
                    </li>
                    <li>
                    <Link exact={true.toString()} to="/#contact">{menuItems.menu_6}</Link>
                    </li>
                </ul>
            </div>

            <div className="treatments-container">
                <hr/>
                <div className="footer-treatments">

                    <img alt="eram-dental" src="/assets/images/eramSimileDesign.svg"/>
                    <img alt="eram-dental" src="/assets/images/eramImplants.svg"/>
                    <img alt="eram-dental" src="/assets/images/eramKids.svg"/>
                    <img alt="eram-dental" src="/assets/images/eramHygiene.svg"/>
                    <img alt="eram-dental" src="/assets/images/eramCare.svg"/>
                    <img alt="eram-dental" src="/assets/images/eramOrthodontics.svg"/>

                </div>
                <hr/>
            </div>

            <div className="footer-phone">
                <img alt="eram-dental" src="/assets/images/old-typical-phone.svg"/>
                <div className="footer-phone-number">{address.phone}</div>
                <img alt="eram-dental" src="/assets/images/poi.svg"/>
                <div className="footer-phone-number">{address.address ? address.address.street : ''} {address.address ? address.address.city : ''}</div>
                <img alt="eram-dental" src="/assets/images/clock.svg"/>
                <div className="footer-phone-number"> Monday to Friday: {address.address ? address.opening_time.mon_to_fri : ''} Saturday: {address.address ? address.opening_time.saturday : ''} </div>
                <img alt="eram-dental" src="/assets/images/email-filled-closed-envelope.svg"/>
                <div className="footer-phone-number">{address.mail}</div>
                <img alt="eram-dental" src="/assets/images/instagram.svg"/>
                <img alt="eram-dental" src="/assets/images/facebook-button.svg"/>
            </div>

            <div className="logos-container autoplay" data-slick='{"slidesToShow": 4, "slidesToScroll": 1}'>
                <img alt="eram-dental" src="/assets/images/logo-partner1.png"/>
                <img alt="eram-dental" src="/assets/images/logo-partner2.png"/>
                <img alt="eram-dental" src="/assets/images/logo-partner3.png"/>
                <img alt="eram-dental" src="/assets/images/logo-partner4.png"/>
                <img alt="eram-dental" src="/assets/images/logo-partner5.png"/>
            </div>
            <div className="copyrigth-rybon">® All rigths reserved Eram Health Dental Clinic 2019</div>
        </div>
    </div>
    );
    }
}
 
export default Footer;