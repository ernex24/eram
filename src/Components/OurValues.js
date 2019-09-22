import React, { Component } from 'react';

class OurValues extends Component {
  
    render() {
        const pro = this.props.data ? this.props.data  : '';
        const home = pro.home ? pro.home : '';
        const values = home.values ? home.values: ''
        console.log(this.props.data)
     
        return (
        <div className="our-values">
            <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
                <p>Why do patients<br/><span>trust us?</span></p>
            </div>
            <div className="values-lists">

                <div className="value-list" data-aos="fade-up" data-aos-duration="1000">
                    <div className="value-list_title">{values.values1_title}</div>
                    <div className="value-list_sub-title">{values.values1_subtitle}</div>
                    <div className="value-list_text">{values.values1_content}</div>
                </div>

                <div className="value-list" data-aos="fade-up" data-aos-duration="1000">
                    <div className="value-list_title">{values.values2_title}</div>
                    <div className="value-list_sub-title">{values.values2_subtitle}</div>
                    <div className="value-list_text">{values.values2_content}</div>
                </div>
              

                <div className="value-list" data-aos="fade-up" data-aos-duration="1000">
                    <div className="value-list_title">{values.values3_title}</div>
                    <div className="value-list_sub-title">{values.values3_subtitle}</div>
                    <div className="value-list_text">{values.values3_content}</div>
                </div>
    
                
            </div>
        </div>
        );
    }
}

export default OurValues;