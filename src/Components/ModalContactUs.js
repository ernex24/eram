import React from 'react';

import './Modal.css';
import AppointmentWidget from './appointmentWidget';

const ModalContactUs = (props) => {

        console.log(props)
     
    return (
        <React.Fragment>
            <div>
                <div className="modal-wrapper "
                onClick={props.close}
                    style={{
                        transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>
                    <div className="modal-contact" >
                    <img alt="eram-dental" className="close_schedule" src="/assets/images/close.svg" onClick={props.close}/>
                    <AppointmentWidget />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ModalContactUs;