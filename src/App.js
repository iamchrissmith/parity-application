import React, { Component } from 'react';
import './App.css';
import job from './resources/javascript_advert';
import Summary from './components/Summary';
import Methodology from './components/Methodology';
import Details from './components/Details';
import Requirements from './components/Requirements';
import MoreInfo from './components/MoreInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Summary headline={job.headline} essentials={job.essentials} />
        <Methodology />
        <Details />
        <Requirements />
        <MoreInfo />
      </div>
    );
  }
}

export default App;
