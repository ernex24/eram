import React, { Component } from 'react';

class Message extends Component {
    render() {
        const home = this.props.data.home ? this.props.data.home : '';
        const message_clicnic= home.message_clicnic ? home.message_clicnic : '';
        console.log(message_clicnic)
        function setDescription() {
            return {__html: message_clicnic};
          }
        return (
            <div className="clinic-message">
                <video className="clinic-message_video" src="assets/images/clinic.mp4" loop muted autoPlay type="video/mp4">
                </video>
                <p data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={setDescription()}></p>
            </div>
        );
    }
}

export default Message;