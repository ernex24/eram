import React, { Component } from 'react';

class TheTeam extends Component {
    render() { 
        const home = this.props.data.home ? this.props.data.home : '';
        const team_description = home.team_description ? home.team_description : '';

        const pageText = this.props.data.page_text ? this.props.data.page_text : '';
        const sections = pageText.sections ? pageText.sections : '';

        function setDescription() {
            return {__html: team_description};
          }
          function setDescription2() {
            return {__html: sections.team_title};
          }
        return (  <div id="theTeam" className="theTeam">
        <div className="section-title" data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={setDescription2()}>
     
        </div>
        <div className="section-picture"></div>
        <div className="section-description">
            <div className="section-description_title" data-aos="fade-up" data-aos-duration="1000">{sections.team_subtitle}</div>
            <div id="team_description" className="section-description_text" data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={setDescription()}></div>
        </div>
        <div className="team-description_title" data-aos="fade-up" data-aos-duration="1000">{sections.team_1}</div>
        <div className="gallery-grid" data-aos="fade-up" data-aos-duration="1000">
            <div className="dentist-grid-galery">

            <div className="treatment-container_gallery" 
            style={{ backgroundImage: 'url(/assets/images/team-yildiz.jpg)' }}>
            <div className="treatment_title">Yildiz</div>
            <div className="treatment_description">Lorem ipsum sit amet dolor</div>
            </div>

            <div className="treatment-container_gallery" 
            style={{ backgroundImage: 'url(/assets/images/team-maestrocostas.PNG)' }}>
            <div className="treatment_title">Maestrocostas</div>
            <div className="treatment_description">Lorem ipsum sit amet dolor</div>
            </div>

        
            </div>
        </div>
        <div className="team-description_title" data-aos="fade-up" data-aos-duration="1000">{sections.team_2}</div>
        <div className="gallery-grid" data-aos="fade-up" data-aos-duration="1000">
            <div className="dentist-grid-galery">

              <div className="treatment-container_gallery" 
            style={{ backgroundImage: 'url(/assets/images/team-claudia.jpg)' }}>
            <div className="treatment_title">Claudia Jetzer</div>
            <div className="treatment_description">Lorem ipsum sit amet dolor</div>
            </div>

            <div className="treatment-container_gallery" 
            style={{ backgroundImage: 'url(/assets/images/team-ornella.jpg)' }}>
            <div className="treatment_title">Ornella Trovato</div>
            <div className="treatment_description">Lorem ipsum sit amet dolor</div>
            </div>
               
            </div>
        </div>
        <div className="team-description_title" data-aos="fade-up" data-aos-duration="1000">{sections.team_3}</div>
        <div className="gallery-grid" data-aos="fade-up" data-aos-duration="1000">
            <div className="dentist-grid-galery">

             <div className="treatment-container_gallery" 
            style={{ backgroundImage: 'url(/assets/images/team-narin.jpg)' }}>
            <div className="treatment_title">Narin</div>
            <div className="treatment_description">Lorem ipsum sit amet dolor</div>
            </div>

             <div className="treatment-container_gallery" 
            style={{ backgroundImage: 'url(/assets/images/team-cololi.jpg)' }}>
            <div className="treatment_title">Cololi</div>
            <div className="treatment_description">Lorem ipsum sit amet dolor</div>
            </div>

             <div className="treatment-container_gallery" 
            style={{ backgroundImage: 'url(/assets/images/team-coco.jpg)' }}>
            <div className="treatment_title">Cocollari</div>
            <div className="treatment_description">Lorem ipsum sit amet dolor</div>
            </div>

             <div className="treatment-container_gallery" 
            style={{ backgroundImage: 'url(/assets/images/team-sneki.jpg)' }}>
            <div className="treatment_title">Snezana</div>
            <div className="treatment_description">Lorem ipsum sit amet dolor</div>
            </div>
            
            </div>
        </div>
        <div className="team-description_title" data-aos="fade-up" data-aos-duration="1000">{sections.team_4}</div>
        <div className="gallery-grid" data-aos="fade-up" data-aos-duration="1000">
            <div className="dentist-grid-galery">

            <div className="treatment-container_gallery" 
            style={{ backgroundImage: 'url(/assets/images/team-lang.jpg)' }}>
            <div className="treatment_title">Snezana</div>
            <div className="treatment_description">Lorem ipsum sit amet dolor</div>
            </div>

            </div>
        </div>
        <div className="team-description_title" data-aos="fade-up" data-aos-duration="1000">{sections.team_5}</div>
        <div className="gallery-grid" data-aos="fade-up" data-aos-duration="1000">
            <div className="dentist-grid-galery">
          
            </div>
        </div>
        <div className="team-description_title" data-aos="fade-up" data-aos-duration="1000">{sections.team_6}</div>
        <div className="gallery-grid" data-aos="fade-up" data-aos-duration="1000">
            <div className="dentist-grid-galery" data-aos="fade-up" data-aos-duration="1000">
            <div className="treatment-container_gallery" 
            style={{ backgroundImage: 'url(/assets/images/team-sarah.jpg' }}>
            <div className="treatment_title">Sarah Villar</div>
            <div className="treatment_description">Lorem ipsum sit amet dolor</div>
            </div>
            </div>
        </div>
    </div> );
    }
}
 
export default TheTeam;