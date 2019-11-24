import React, { Component } from 'react';  
import axios from "axios"; 
import AppointmentWidget from './appointmentWidget';
class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            contactName: 'Ernesto',
            contactEmail: '',
            contactMessage: '',
            mailSent: 'false',
            error: 'null'
         }
         this.handleNameChange = this.handleNameChange.bind(this)
         this.handleEmailChange = this.handleEmailChange.bind(this)
         this.handleMessageChange = this.handleMessageChange.bind(this)
         this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleNameChange(event) {
        this.setState({contactName: event.target.value});
      }

      handleEmailChange(event) {
        this.setState({contactEmail: event.target.value});
      }

      handleMessageChange(event) {
        this.setState({contactMessage: event.target.value});
      }

      handleFormSubmit(event) {
      
        event.preventDefault();
        axios({
            method: "post",
            url: 'mailer.php',
            headers: { "content-type": "application/json" },
            name: this.state.contactName,
            email: this.state.contactEmail,
            message: this.state.contactMessage
          })
            .then(result => {
              if (result.data.sent) {
                this.setState({
                  mailSent: result.data.sent
                });
                this.setState({ error: false });
              } else {
                this.setState({ error: true });
              }
            })
            .catch(error => this.setState({ error: error.message }));
        };

    render() {

        const pro = this.props.data ? this.props.data  : '';
        const home = pro.home ? pro.home : '';
        const address = home.address ? home.address : '';
        
       
        return (
            <div id="contact" className="contactUs">

                <div className="contact-form" data-aos="fade-right" data-aos-duration="1000">

               <AppointmentWidget />

                    {/* <form className="category-contact-form_container"
                    method="POST" action="#" >

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
                                <input type="text" 
                                name="name" 
                                placeholder="What is your name?"
                                value={this.state.contactName}
                                onChange={this.handleNameChange}
                                 />
                            </div>
                            
                        </div>

                        <div className="form-element-group">
                            <div className="form-element">
                                <label>Email:</label>
                                <input type="text" 
                                name="email"
                                placeholder="What is your email"
                                value={this.state.contactEmail}
                                onChange={this.handleEmailChange}
                                />
                            </div>

                            <div className="form-element">
                                <label>Telephone number:</label>
                                <input type="text" name="phone" placeholder="What is your your phone number"/>
                            </div>
                        </div>

                        <div className="form-element">
                            <label>Message:</label>
                            <textarea
                            rows="4"
                            cols="50"
                            placeholder="Write here your message"
                            name="message"
                            value={this.state.contactMessage}
                            onChange={this.handleMessageChange}></textarea>
                        </div>
                        <div className="form-element">
                            <button type = "submit" onClick={e => this.handleFormSubmit(e)} value="Submit"  >Send</button>
                        </div>
                        {this.state.mailSent && <div className="sucsess">Bien</div>}
                    {this.state.error && <div className="error">Mal</div>}
                    </form> */}

                </div>

                 <div className="address-container" data-aos="fade-left" data-aos-duration="1000">
                    <div className="address-group-container">
                        <div className="icon">
                            <img alt="eram-dental" src="/assets/images/poi.svg" />
                        </div>
                        <ul className="address-list">
                            <li className="address-street">{address.address ? address.address.street : ''}</li>
                            <li className="address-country">{address.address ? address.address.city : ''}</li>
                        </ul>
                    </div>

                    <div className="address-group-container">
                        <div className="icon">
                            <img alt="eram-dental" src="/assets/images/clock.svg" />
                        </div>
                        <ul className="address-list">
                            <li className="address-monToFry">
                                <span>Mon to Fri: </span>{address.address ? address.opening_time.mon_to_fri : ''}</li>
                            <li className="address-saturday">
                                <span>Saturday: </span>{address.address ? address.opening_time.saturday : ''}</li>
                        </ul>
                    </div>

                    <div className="address-group-container">
                        <div className="icon">
                            <img alt="eram-dental" src="/assets/images/old-typical-phone.svg" />
                        </div>
                        <div className="address-telephone">{address.phone}</div>
                    </div>
                    <div className="address-group-container">
                        <div className="icon">
                            <img alt="eram-dental" src="/assets/images/email-filled-closed-envelope.svg" />
                        </div>
                        <div className="address-telephone">{address.mail}</div>
                    </div>
                    <div className="address-group-container">
                        <img alt="eram-dental" className="icon-instagram" src="/assets/images/instagram.svg" />
                        <img alt="eram-dental" className="icon-facebook" src="/assets/images/facebook-button.svg" />
                    </div>
                   
                </div> 

            </div>
        );
    }
}

export default ContactUs;