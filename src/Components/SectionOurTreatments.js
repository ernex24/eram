import React, { Component } from 'react';
import Footer from './Footer';
import ContactUs from './ContactUs';
import OurValues from './OurValues';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";

class SectionOurTreatments extends Component {

    render() {

        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            adaptiveWidth: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 2000
        };

        let home = this.props.data ? this.props.data : '';
        let title = this.props.title ? this.props.title : '';
        let treatments = this.props.treatments ? this.props.treatments : '';
        let image1 = this.props.images.image_1 ? this.props.images.image_1 : '';
        let image2 = this.props.images.image_2 ? this.props.images.image_2 : '';
        let image3 = this.props.images.image_3 ? this.props.images.image_3 : '';
        console.log(this.props)
        return (
            <React.Fragment>
                {/* <div className="category-picture" style={{ backgroundImage: `url(${image})` }} >
                        <div className="category-title">{title}</div>
                    </div> */}
                <div className="wrapper-category-title">
                    <div className="category-title">{title}</div>
                </div>
                <div className="sectionCoruselTreat">

                    <Slider {...settings}>
                        <div>
                            <div>
                                <img alt="eram-dental" src={image1} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img alt="eram-dental" src={image2} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img alt="eram-dental" src={image3} />
                            </div>
                        </div>
                    </Slider>
                </div>



                <div className="category-container">

                    {Object.values(treatments).map((key, index) => {
                        const html = key.description
                        function stripHtml(html)
                        {
                           var tmp = document.createElement("DIV");
                           tmp.innerHTML = html;
                           return tmp.innerText;
                        }

                        return <NavLink key={index} to={`/treatment/treat/${key.link}`}>
                            <div className="treatment-container" style={{ backgroundImage: `url(${key.image_1})` }}>
                                <div className="treatment_title">{key.title}</div>
                                <div className="treatment_description">{stripHtml(html)}</div>
                            </div>
                        </NavLink>
                    })
                    }

                </div>
                <OurValues data={home} />
                <ContactUs data={home} />
                <Footer data={home} />
            </React.Fragment>
        );
    }
}

export default SectionOurTreatments;