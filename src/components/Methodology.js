import React, {Component} from 'react';
import hasAttribute from './AttributeIcons';

class Methodology extends Component {
  render(props){
    return (
      <section id="methodology">
        <h2 className="full">Methodology</h2>
        <div className="full">
          <ul>
            <li>{hasAttribute(this.props.methodology.codereviews)} Code Reviews</li>
            <li>{hasAttribute(this.props.methodology.prototyping)} Prototyping</li>
            <li>{hasAttribute(this.props.methodology.pairprogramming)} Pair Programming</li>
            <li>{hasAttribute(this.props.methodology.failfast)} Fail Fast</li>
            <li>{hasAttribute(this.props.methodology.unittests)} Unit Tests</li>
            <li>{hasAttribute(this.props.methodology.integrationtests)} Integration Tests</li>
            <li><u>Build Server</u>: {this.props.methodology.buildserver}</li>
            <li><u>Static Code Analysis</u>: {this.props.methodology.staticcodeanalysis}</li>
            <li><u>Version Control</u>: {this.props.methodology.versioncontrol}</li>
            <li><u>Issue Tracker</u>: {this.props.methodology.issuetracker}</li>
            <li><u>Knowledge Repo</u>: {this.props.methodology.knowledgerepo}</li>
            <li>{hasAttribute(this.props.methodology.standups)} Standups</li>
            <li>{hasAttribute(this.props.methodology.qaprotocol)} QA Protocol</li>
            <li><u>Agile Management</u>: {this.props.methodology.agilemanagement}</li>
            <li>{hasAttribute(this.props.methodology.freedomovertools)} Freedom Over Tools</li>
            <li>{hasAttribute(this.props.methodology.onecommandbuild)} One Command Build</li>
            <li>{hasAttribute(this.props.methodology.quickstart)} Quick Start</li>
            <li>{hasAttribute(this.props.methodology.commitondayone)} Commit on Day One</li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Methodology;