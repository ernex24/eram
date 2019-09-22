import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import ContactUs from './ContactUs';
import OurValues from './OurValues';
import { NavLink } from 'react-router-dom';

class SingleTreatment extends Component {
  
    render() {
        let title = this.props.title ? this.props.title : '' ;
        let description = this.props.description ? this.props.description : '' ;
        let image  = this.props.image_1 ? this.props.image_1 : '';
        console.log(this.props)
        
        function setDescription() {
            return {__html: description};
          }
        return (
            <React.Fragment>

            <div className="category-picture" style={{backgroundImage:`url(${image})`}} >
                <div className="category-title">{title}</div>
            </div>

            <div className="category-container">
            <div className="textContentTitle">{title}</div>
            <div className="textContent" dangerouslySetInnerHTML={setDescription()}></div>
            </div>

            <OurValues/>
            <ContactUs/>
            <Footer/>
            </React.Fragment>
         );
    }
}

export default SingleTreatment;