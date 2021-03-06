import React, { Component } from 'react';

import 'semantic-ui-css/semantic.css';
import './App.css';

import job from './resources/javascript_advert';
import Summary from './components/Summary';
import Map from './components/Map';
import Methodology from './components/Methodology';
import Details from './components/Details';
import Requirements from './components/Requirements';
import MoreInfo from './components/MoreInfo';

class App extends Component {
  componentDidMount() {
    document.title = "Chris Smith - Parity.io Application";
  }
  render() {
    return (
      <div className="App">
        <Summary headline={job.headline} essentials={job.essentials} />
        <Map />
        <Methodology methodology={job.methodology} />
        <Details specs={job.specs} profile={job.profile} equipment={job.equipment}/>
        <Requirements technologies={job.technologies}/>
        <MoreInfo other={job.other} misc={job.misc} />
      </div>
    );
  }
}

export default App;
