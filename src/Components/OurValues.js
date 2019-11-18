import React, { Component } from 'react';

class OurValues extends Component {
  
    render() {
        const pro = this.props.data ? this.props.data  : '';
        const home = pro.home ? pro.home : '';
        const values = home.values ? home.values: ''

        const pageText = this.props.data.page_text ? this.props.data.page_text : '';
        const sections = pageText.sections ? pageText.sections : '';

        function setDescription3() {
            return {__html: sections.values_title};
          }
     
        return (
        <div className="our-values">

            <div className="section-title_values" data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={setDescription3()}>
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