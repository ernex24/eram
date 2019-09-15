import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import MainMenu from './Components/MainMenu';
import SectionOurTreatments from './Components/SectionOurTreatments';

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
    let dataURL = "https://ernesto-perez.com/wp-json/wp/v2/posts/1562";
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

    let index = 0;
    // Object.values(treatments).map((item, index) => {console.log(item)});
    
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
      title={key.section_title}
      images={key.section_carousel}
      treatments={key.treatments}
      />} />
    
    })
  }

    </div>
  );
}
}

export default App;
