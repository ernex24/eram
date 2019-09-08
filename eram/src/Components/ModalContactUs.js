import React from 'react';

import './Modal.css';

const ModalContactUs = (props) => {
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
                                <img className="close" src="assets/images/close.svg" onClick={props.close} />
                                <div className="address-group-container">
                                    <div className="icon">
                                        <img src="assets/images/poi.svg" />
                                    </div>
                                    <ul className="address-list">
                                        <li className="address-street">Bleichwerg 33</li>
                                        <li className="address-country">8002 Zurich Switzerland</li>
                                    </ul>
                                </div>
                                <div className="address-group-container">
                                    <div className="icon">
                                        <img src="assets/images/clock.svg" />
                                    </div>
                                    <ul className="address-list">
                                        <li className="address-monToFry">
                                            <span>Monday to Friday:</span> 8:00 - 20:00
                        </li>
                                        <li className="address-saturday">
                                            <span>Saturday:</span> 8:00 - 20:00
                        </li>
                                    </ul>
                                </div>
                                <div className="address-group-container">
                                    <div className="icon">
                                        <img src="assets/images/old-typical-phone.svg" />
                                    </div>
                                    <div className="address-telephone">+41/222 21 11</div>
                                </div>
                                <div className="address-group-container">
                                    <div className="icon">
                                        <img src="assets/images/email-filled-closed-envelope.svg" />
                                    </div>
                                    <div className="address-telephone">info@eram-dh.com</div>
                                </div>
                                <div className="address-group-container">
                                    <img className="icon-instagram" src="assets/images/instagram.svg" />
                                    <img className="icon-facebook" src="assets/images/facebook-button.svg" />
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