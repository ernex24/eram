import React, { Component } from 'react';

class BannerAd extends Component {
    
    render() {
    
        const ad = this.props.data.home ? this.props.data.home : '';
        console.log(ad)
        return (<div className="banner-ad1">
            <div className="ad-wrapper">
                <div className="ad-section-title">Eram Special Offers</div>
                <div className="ad-list-wrapper" data-aos="fade-up" data-aos-duration="1000">
                    <ul className="ad-description">
                        <li id="advertising_title">{ad.advertising_title}</li>
                        <li id="advertising_price" className="ad-price">{ad.advertising_price}-</li>
                    </ul>
                    <ul className="ad-copy">
                        <li id="advertising_description">
                        {ad.advertising_description}
                        </li>
                    </ul>
                </div>
            </div>
        </div>);
    }
}

export default BannerAd;