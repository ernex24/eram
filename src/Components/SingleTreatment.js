import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import ContactUs from './ContactUs';
import OurValues from './OurValues';
import { NavLink } from 'react-router-dom';

class SingleTreatment extends Component {
  
    render() {
        let home = this.props.data ? this.props.data : '';
        let title = this.props.title ? this.props.title : '' ;
        let description = this.props.description ? this.props.description : '' ;
        let image  = this.props.image_1 ? this.props.image_1 : '';
        let menu  = this.props.menu ? this.props.menu : ''
        
        function setDescription() {
            return {__html: description};
          }
        return (
            <React.Fragment>

            <div className="category-picture" style={{backgroundImage:`url(${image})`}} >
                <div className="category-title">{title}</div>
            </div>

            <div className="category-container-treatment">
            <div className="wraperContent">
                <div className="textContentTitle">{title}</div>
                <div className="textContent" dangerouslySetInnerHTML={setDescription()}></div>
            </div>

            <div className="lateralMenu">
                <ul>
                {  Object.values(menu).map((key, index) => {
                    return <NavLink key={index} to={`/treatment/treat/${key.link}`}>
                                   <li>{key.title}</li>
                           </NavLink>
                   })
                   }
                </ul>
            </div>
 
            </div>


            <OurValues data={home}/>
            <ContactUs data={home}/>
            <Footer data={home}/>
            </React.Fragment>
         );
    }
}

export default SingleTreatment;