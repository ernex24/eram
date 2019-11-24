import React, { Component } from 'react';

class BannerAd extends Component {
	render() {
        
        const home = this.props.data.home ? this.props.data.home : '';

        const pageText = this.props.data.page_text ? this.props.data.page_text : '';
        const sections = pageText.sections ? pageText.sections : '';

        const advertising = home.advertising ? home.advertising : '';
        const adNumb = advertising.ads_number ? advertising.ads_number : '';
        const adN = Number(adNumb)

        const Ad = (props) => {
            return <div className="ad-list-wrapper" data-aos="fade-up" data-aos-duration="1000" style={{ backgroundImage: `url(${props.image})` }}>
                <ul className="ad-description">
                    <li className="advertising_title">{props.title}</li>
                    <li className="advertising_description">{props.description}</li>
                    <li className="advertising_price ad-price">{props.price}</li>
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
                            image={advertising.ads_1 ? advertising.ads_1.ad_image_1 : ''}
                            />
                       </React.Fragment>
            } else if (number === 2){
                return <React.Fragment>
                            <Ad 
                                title={advertising.ads_2 ? advertising.ads_2.ad_title_1 : ''}
                                description={advertising.ads_2 ? advertising.ads_2.ad_description_1 : ''}
                                price={advertising.ads_2 ? advertising.ads_2.ad_price_1 : ''}
                                image={advertising.ads_2 ? advertising.ads_2.ad_image_1 : ''}
                            />
                            <Ad 
                                title={advertising.ads_2 ? advertising.ads_2.ad_title_2 : ''}
                                description={advertising.ads_2 ? advertising.ads_2.ad_description_2 : ''}
                                price={advertising.ads_2 ? advertising.ads_2.ad_price_2 : ''}
                                image={advertising.ads_2 ? advertising.ads_2.ad_image_2 : ''}
                            />
                </React.Fragment>
            } else if (number === 3){
                return <React.Fragment>
                            <Ad 
                                title={advertising.ads_3 ? advertising.ads_3.ad_title_1 : ''}
                                description={advertising.ads_3 ? advertising.ads_3.ad_description_1 : ''}
                                price={advertising.ads_3 ? advertising.ads_3.ad_price_1 : ''}
                                image={advertising.ads_3 ? advertising.ads_3.ad_image_1 : ''}
                            />
                            <Ad 
                                title={advertising.ads_3 ? advertising.ads_3.ad_title_2 : ''}
                                description={advertising.ads_3 ? advertising.ads_3.ad_description_2 : ''}
                                price={advertising.ads_3 ? advertising.ads_3.ad_price_2 : ''}
                                image={advertising.ads_3 ? advertising.ads_3.ad_image_2 : ''}
                            />
                            <Ad 
                                title={advertising.ads_3 ? advertising.ads_3.ad_title_3 : ''}
                                description={advertising.ads_3 ? advertising.ads_3.ad_description_3 : ''}
                                price={advertising.ads_3 ? advertising.ads_3.ad_price_3 : ''}
                                image={advertising.ads_3 ? advertising.ads_3.ad_image_3 : ''}
                            />
                    
                    
                    </React.Fragment>
            }
        }
        
		return (
			<div className="banner-ad1" style={{ backgroundImage: `url(${advertising.advertising_image})` }}>
				<div className="ad-wrapper">
					<div className="ad-section-title">{sections.advertising_title}</div>
                    <AdNumber ads={adN}/>
				</div>
			</div>
		);
	}
}

export default BannerAd;
