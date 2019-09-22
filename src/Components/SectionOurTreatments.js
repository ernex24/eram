import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import ContactUs from './ContactUs';
import OurValues from './OurValues';
import { NavLink } from 'react-router-dom';

class SectionOurTreatments extends Component {
  
    render() {
        let home = this.props.data ? this.props.data : '';
        let title = this.props.title ? this.props.title : '' ;
        let treatments = this.props.treatments ? this.props.treatments : '';
        let image  = this.props.images.image_1 ? this.props.images.image_1 : '';
        console.log(this.props)
        return (
<React.Fragment>

            <div className="category-picture" style={{backgroundImage:`url(${image})`}} >
                <div className="category-title">{title}</div>
            </div>

            <div className="category-container">

                {  Object.values(treatments).map((key, index) => {
                    
                 return <NavLink key={index} to={`/treatment/treat/${key.link}`}>
                            <div className="treatment-container" style={{backgroundImage: `url(${key.image_1})`}}>
                                <div className="treatment_title">{key.title}</div>
                                <div className="treatment_description">{key.description}</div>
                            </div>
                        </NavLink>
                })
                }

            </div>
            <OurValues data={home}/>
            <ContactUs data={home}/>
            <Footer data={home}/>
            </React.Fragment>
         );
    }
}

export default SectionOurTreatments;