import React, { Component } from 'react';

class BannerAd extends Component {
	render() {
		const home = this.props.data.home ? this.props.data.home : '';
        const advertising = home.advertising ? home.advertising : '';
        const adNumb = advertising.ads_number ? advertising.ads_number : '';
        const adN = Number(adNumb)
        const num = 3;

        const Ad = (props) => {
            return <div className="ad-list-wrapper" data-aos="fade-up" data-aos-duration="1000">
                <ul className="ad-description">
                    <li id="advertising_title">{props.title}</li>
                    <li id="advertising_price" className="ad-price">{props.price}</li>
                </ul>
                <ul className="ad-copy">
                    <li id="advertising_description">{props.description}</li>
                </ul>
            </div>
        }

        const AdNumber = (props) => {
            const number = props.ads
            if (number === 1 || number === 0){
                return <React.Fragment>
                        <Ad 
                            title={advertising.ads_1 ? advertising.ads_1.ad_title_1 : ''}
                            description={advertising.ads_1 ? advertising.ads_1.ad_description_1 : ''}
                            price={advertising.ads_1 ? advertising.ads_1.ad_price_1 : ''}
                            />
                       </React.Fragment>
            } else if (number === 2){
                return <React.Fragment>
                            <Ad 
                                title={advertising.ads_2 ? advertising.ads_2.ad_title_1 : ''}
                                description={advertising.ads_2 ? advertising.ads_2.ad_description_1 : ''}
                                price={advertising.ads_2 ? advertising.ads_2.ad_price_1 : ''}
                            />
                            <Ad 
                                title={advertising.ads_2 ? advertising.ads_2.ad_title_2 : ''}
                                description={advertising.ads_2 ? advertising.ads_2.ad_description_2 : ''}
                                price={advertising.ads_2 ? advertising.ads_2.ad_price_2 : ''}
                            />
                </React.Fragment>
            } else if (number === 3){
                return <React.Fragment>
                            <Ad 
                                title={advertising.ads_3 ? advertising.ads_3.ad_title_1 : ''}
                                description={advertising.ads_3 ? advertising.ads_3.ad_description_1 : ''}
                                price={advertising.ads_3 ? advertising.ads_3.ad_price_1 : ''}
                            />
                            <Ad 
                                title={advertising.ads_3 ? advertising.ads_3.ad_title_2 : ''}
                                description={advertising.ads_3 ? advertising.ads_3.ad_description_2 : ''}
                                price={advertising.ads_3 ? advertising.ads_3.ad_price_2 : ''}
                            />
                            <Ad 
                                title={advertising.ads_3 ? advertising.ads_3.ad_title_3 : ''}
                                description={advertising.ads_3 ? advertising.ads_3.ad_description_3 : ''}
                                price={advertising.ads_3 ? advertising.ads_3.ad_price_3 : ''}
                            />
                    
                    
                    </React.Fragment>
            }
        }
        
		return (
			<div className="banner-ad1" style={{ backgroundImage: `url(${advertising.advertising_image})` }}>
				<div className="ad-wrapper">
					<div className="ad-section-title">Eram Special Offers</div>
                    <AdNumber ads={adN}/>
				</div>
			</div>
		);
	}
}

export default BannerAd;
