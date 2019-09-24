import React, { Component } from 'react';
import Lightbox from 'lightbox-react';

const images = [
    '/assets/images/eram_01.jpg',
    '/assets/images/eram_02.jpg',
    '/assets/images/eram_03.jpg',
    '/assets/images/eram_04.jpg',
    '/assets/images/eram_05.jpg',
    '/assets/images/eram_06.jpg',
    '/assets/images/eram_07.jpg',
    '/assets/images/eram_08.jpg'
  ];

class TheClinic extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
      }

    render() { 
        const { photoIndex, isOpen } = this.state;

        const home = this.props.data.home ? this.props.data.home : '';
        const clinic_description = home.clinic_description ? home.clinic_description : '';
        const clinic_galery = home.clinic_galery ? home.clinic_galery : '';
        console.log(clinic_description)
        function setDescription() {
            return {__html: clinic_description};
          }
        return ( 
         <div id="theclinic" className="theClinic">
        <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
            <p>See where we<br/><span>Create smiles</span></p>
        </div>
        <div className="section-picture"></div>
        <div className="section-description">
            <div className="section-description_title" data-aos="fade-up" data-aos-duration="1000">The Clinic</div>
            <div id="clinic_description" className="section-description_text" data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={setDescription()}>
            </div>
        </div>
        <div className="gallery-grid">
            <div className="grid-galery">

                <div data-lightbox="image-1" className="gallery-item1" data-aos="fade-right" data-aos-duration="1000" style={{backgroundImage:`url(${clinic_galery.gallery_item1})`}} onClick={() => this.setState({ isOpen: true })} >
                    <a className="lightBox-gal1" href="assets/images/eram_01.jpg" data-lightbox="image-1"></a>
                </div>
                <div className="gallery-item2" data-aos="fade-up" data-aos-duration="1000" style={{backgroundImage:`url(${clinic_galery.gallery_item2})`}}  onClick={() => this.setState({ isOpen: true })}>
                    <a className="lightBox-gal2" href="assets/images/eram_01.jpg" data-lightbox="image-1"></a>
                </div>
                <div className="gallery-item3" data-aos="fade-left" data-aos-duration="1000" style={{backgroundImage:`url(${clinic_galery.gallery_item3})`}}  onClick={() => this.setState({ isOpen: true })}>
                    <a className="lightBox-gal3" href="assets/images/eram_01.jpg" data-lightbox="image-1"></a>
                </div>
                <div className="gallery-item4" data-aos="fade-up" data-aos-duration="1000" style={{backgroundImage:`url(${clinic_galery.gallery_item4})`}}  onClick={() => this.setState({ isOpen: true })}>
                    <a className="lightBox-gal4" href="assets/images/eram_01.jpg" data-lightbox="image-1"></a>
                </div>
                <div className="gallery-item5" data-aos="fade-up" data-aos-duration="1000" style={{backgroundImage:`url(${clinic_galery.gallery_item5})`}}  onClick={() => this.setState({ isOpen: true })}>
                    <a className="lightBox-gal5" href="assets/images/eram_01.jpg" data-lightbox="image-1"></a>
                </div>
                <div className="gallery-item6" data-aos="fade-right" data-aos-duration="1000" style={{backgroundImage:`url(${clinic_galery.gallery_item6})`}}  onClick={() => this.setState({ isOpen: true })}>
                    <a className="lightBox-gal6" href="assets/images/eram_01.jpg" data-lightbox="image-1"></a>
                </div>
                <div className="gallery-item7" data-aos="fade-up" data-aos-duration="1000" style={{backgroundImage:`url(${clinic_galery.gallery_item7})`}}  onClick={() => this.setState({ isOpen: true })}>
                    <a className="lightBox-gal7" href="assets/images/eram_01.jpg" data-lightbox="image-1"></a>
                </div>
                <div className="gallery-item8" data-aos="fade-left" data-aos-duration="1000" style={{backgroundImage:`url(${clinic_galery.gallery_item8})`}}  onClick={() => this.setState({ isOpen: true })}>
                    <a className="lightBox-gal8" href="assets/images/eram_01.jpg" data-lightbox="image-1"></a>
                </div>
            </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
    </div> 
    );
    }
}
 
export default TheClinic;