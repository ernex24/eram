import React, { Component } from 'react';

class BannerAd extends Component {
    
    render() {

        const home = this.props.data.home ? this.props.data.home : '';
        const advertising = home.advertising ? home.advertising : ''
        console.log(advertising)
    
        return (
        <div className="banner-ad1" style={{backgroundImage:`url(${advertising.advertising_image})`}}>
            <div className="ad-wrapper">
                <div className="ad-section-title">Eram Special Offers</div>
                <div className="ad-list-wrapper" data-aos="fade-up" data-aos-duration="1000">
                    <ul className="ad-description">
                        <li id="advertising_title">{advertising.advertising_title}</li>
                        <li id="advertising_price" className="ad-price">{advertising.advertising_price}</li>
                    </ul>
                    <ul className="ad-copy">
                        <li id="advertising_description">
                        {advertising.advertising_description}
                        </li>
                    </ul>
                </div>
            </div>
        </div>);
    }
}

export default BannerAd;