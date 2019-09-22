import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import MainMenu from './Components/MainMenu';
import SectionOurTreatments from './Components/SectionOurTreatments';
import SingleTreatment from './Components/SingleTreatment';

import '../node_modules/aos/dist/aos.css'; 
import AOS from 'aos'; 

class App extends Component {

  constructor(props, context) {
    super(props, context);
    AOS.init({
      duration : 2000
    });
    this.state = {
      data: {},
      isLoading: true,
      errors: null
  };
  }

  componentWillReceiveProps (){ 
    AOS.refresh(); 
  } 

  componentDidMount() {
    this.fetchUsers();
  };

  fetchUsers(){
    let dataURL = "https://www.eram-dh.com/wp-json/wp/v2/posts/2842";
    return fetch(dataURL)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          data: data.acf,
          isLoading: false,
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));   
  }

  render() {
    
    const data = this.state.data.our_treatments ? this.state.data.our_treatments : '' ;
    const data2 = this.state.data.our_treatments ? this.state.data.our_treatments : '' ;
    const treatment1 = this.state.data.our_treatments ? this.state.data.our_treatments.treatment1.treatments : '';
    const treatment2 = this.state.data.our_treatments ? this.state.data.our_treatments.treatment2.treatments : '';
    const treatment3 = this.state.data.our_treatments ? this.state.data.our_treatments.treatment3.treatments : '';
    const treatment4 = this.state.data.our_treatments ? this.state.data.our_treatments.treatment4.treatments : '';
    const treatment5 = this.state.data.our_treatments ? this.state.data.our_treatments.treatment5.treatments : '';
    const treatment6 = this.state.data.our_treatments ? this.state.data.our_treatments.treatment6.treatments : '';
    const treatment7 = this.state.data.our_treatments ? this.state.data.our_treatments.treatment7.treatments : '';
    let index = 0;
  
   
    Object.values(treatment3).map((item, index) => {console.log(item)});
    // Object.values(data2).map((item, index) => {console.log(item.treatments.treatment_4.link)});
    // Object.values(data2).map((item, index) => {console.log(item.treatments.treatment_5.link)});
    // Object.values(data2).map((item, index) => {console.log(item.treatments.treatment_6.link)});
    // Object.values(data2).map((item, index) => {console.log(item.treatments.treatment_7.link)});
    
  return (
    <div className="container-web ">
  <MainMenu/>
  <Route exact path="/" component={() => <Home data={this.state.data}/>} />

  {
    Object.values(data).map((key, index) => {
      return <Route exact key={index} 
              path={`/treatment/${key.link}`} 
              component={ () => 
                <SectionOurTreatments
                link={key.link}
                title={key.section_title}
                images={key.section_carousel}
                treatments={key.treatments}
        />} 
      />})
  }

  {
     Object.values(treatment1).map((key, index) => { 
      return <Route exact key={index}
              path={`/treatment/treat/${key.link}`} 
              component={ () => 
                  <SingleTreatment 
                  title={key.title}
                  description={key.description}
                  image_1={key.image_1}
                  image_2={key.image_2}
                  image_3={key.image_3}
                  />} 
              />})
  }
  {
     Object.values(treatment2).map((key, index) => { 
      return <Route exact key={index}
              path={`/treatment/treat/${key.link}`} 
              component={ () => 
                  <SingleTreatment 
                  title={key.title}
                  description={key.description}
                  image_1={key.image_1}
                  image_2={key.image_2}
                  image_3={key.image_3}
                  />} 
              />})
  }
  {
     Object.values(treatment3).map((key, index) => { 
      return <Route exact key={index}
              path={`/treatment/treat/${key.link}`} 
              component={ () => 
                  <SingleTreatment 
                  title={key.title}
                  description={key.description}
                  image_1={key.image_1}
                  image_2={key.image_2}
                  image_3={key.image_3}
                  />} 
              />})
  }
  {
     Object.values(treatment4).map((key, index) => { 
      return <Route exact key={index}
              path={`/treatment/treat/${key.link}`} 
              component={ () => 
                  <SingleTreatment 
                  title={key.title}
                  description={key.description}
                  image_1={key.image_1}
                  image_2={key.image_2}
                  image_3={key.image_3}
                  />} 
              />})
  }
  {
     Object.values(treatment5).map((key, index) => { 
      return <Route exact key={index}
              path={`/treatment/treat/${key.link}`} 
              component={ () => 
                  <SingleTreatment 
                  title={key.title}
                  description={key.description}
                  image_1={key.image_1}
                  image_2={key.image_2}
                  image_3={key.image_3}
                  />} 
              />})
  }
  {
     Object.values(treatment6).map((key, index) => { 
      return <Route exact key={index}
              path={`/treatment/treat/${key.link}`} 
              component={ () => 
                  <SingleTreatment 
                  title={key.title}
                  description={key.description}
                  image_1={key.image_1}
                  image_2={key.image_2}
                  image_3={key.image_3}
                  />} 
              />})
  }
  {
     Object.values(treatment7).map((key, index) => { 
      return <Route exact key={index}
              path={`/treatment/treat/${key.link}`} 
              component={ () => 
                  <SingleTreatment 
                  title={key.title}
                  description={key.description}
                  image_1={key.image_1}
                  image_2={key.image_2}
                  image_3={key.image_3}
                  />} 
              />})
  }
  

    </div>
  );
}
}

export default App;
