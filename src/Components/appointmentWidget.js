import React, { Component } from 'react';

class AppointmentWidget extends Component {
    render() {
  
        return (
            <iframe 
            class="od-widget" id="od-widget" 
            src="about:blank" data-src="https://www.onedoc.ch/en/widget/c3d4c803456583cf0ef37dcfc54409380af79426d504d75d8cbf62264c27f077" frameborder="0">
            </iframe> 
        );
    }
}

export default AppointmentWidget;