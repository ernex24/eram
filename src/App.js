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
    this.state = {
      movies: []
    }
  }

  componentWillReceiveProps (){ 
    AOS.refresh(); 
  } 

  componentDidMount() {
    let dataURL = "https://ernesto-perez.com/wp-json/wp/v2/posts/1562";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res.acf
        })
        console.log(res.acf)
      })
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
