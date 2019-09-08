import React, { Component } from 'react';

class Message extends Component {
    state = {}
    render() {
        return (
            <div className="clinic-message">
                <video className="clinic-message_video" src="assets/images/clinic.mp4" loop muted autoPlay type="video/mp4">
                </video>
                <p data-aos="fade-up" data-aos-duration="1000">We have the best doctors in Switzerland and we work with the best Swiss technology</p>
            </div>
        );
    }
}

export default Message;