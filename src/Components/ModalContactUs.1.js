import React from 'react';

import './Modal.css';

const ModalContactUs = (props) => {

        console.log(props)
        const address = props.data.address ? props.data.address : '';
    return (
        <React.Fragment>


            <div>
                <div className="modal-wrapper"
                    style={{
                        transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>

                    <div className="modal-contact" >
                        <div className="contactUs">
                            <div className="contact-form">

                              {/* <div className="sectionTitle">
                                        <p>Make an appointment</p>
                                    </div> */}

                            <iframe class="od-widget" id="od-widget-c3d4c803456583cf0ef37dcfc54409380af79426d504d75d8cbf62264c27f077" src="about:blank" data-src="https://www.onedoc.ch/de/widget/c3d4c803456583cf0ef37dcfc54409380af79426d504d75d8cbf62264c27f077" frameborder="0"></iframe> 

                            </div>

                            <div className="address-container">
                                <img className="close" src="/assets/images/close.svg" onClick={props.close} />
                                <div className="address-group-container">
                                    <div className="icon">
                                        <img src="/assets/images/poi.svg" />
                                    </div>
                                    <ul className="address-list">
                                        <li className="address-street">{address.address ? address.address.street : ''} </li>
                                        <li className="address-country">{address.address ? address.address.city : ''}</li>
                                    </ul>
                                </div>
                                <div className="address-group-container">
                                    <div className="icon">
                                        <img src="/assets/images/clock.svg" />
                                    </div>
                                    <ul className="address-list">
                                        <li className="address-monToFry">
                                            <span>Mond to Fri:</span> {address.address ? address.opening_time.mon_to_fri : ''} 
                        </li>
                                        <li className="address-saturday">
                                            <span>Saturday:</span> {address.address ? address.opening_time.saturday : ''}
                        </li>
                                    </ul>
                                </div>
                                <div className="address-group-container">
                                    <div className="icon">
                                        <img src="/assets/images/old-typical-phone.svg" />
                                    </div>
                                    <div className="address-telephone">{address.phone}</div>
                                </div>
                                <div className="address-group-container">
                                    <div className="icon">
                                        <img src="/assets/images/email-filled-closed-envelope.svg" />
                                    </div>
                                    <div className="address-telephone">{address.mail}</div>
                                </div>
                                <div className="address-group-container">
                                    <img className="icon-instagram" src="/assets/images/instagram.svg" />
                                    <img className="icon-facebook" src="/assets/images/facebook-button.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ModalContactUs;