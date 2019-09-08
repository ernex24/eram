import React, { Component } from 'react';

class BannerAd extends Component {
    
    render() {
        return (<div className="banner-ad1">
            <div className="ad-wrapper">
                <div className="ad-section-title">Eram Special Offers</div>
                <div className="ad-list-wrapper" data-aos="fade-up" data-aos-duration="1000">
                    <ul className="ad-description">
                        <li id="advertising_title">Dental bleaching</li>
                        <li id="advertising_price" className="ad-price">400.-</li>
                    </ul>
                    <ul className="ad-copy">
                        <li id="advertising_description">
                        The best dental bleaching in town
                        </li>
                    </ul>
                </div>
            </div>
        </div>);
    }
}

export default BannerAd;