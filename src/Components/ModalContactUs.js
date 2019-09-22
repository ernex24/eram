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