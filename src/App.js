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
    })
  }

  componentWillReceiveProps (){ 
    AOS.refresh(); 
  } 


  render() {
  return (
    <div className="container-web ">
  <MainMenu/>
  <Route exact path="/" component={Home} />
  <Route exact path="/ourtreatments" component={SectionOurTreatments} />
    </div>
  );
}
}

export default App;
