import React from 'react';
import hasAttribute from './AttributeIcons';

const Methodology = (props) => {
  return (
    <section id="methodology">
      <h2 className="full">Methodology</h2>
      <div className="full">
        <ul>
          <li>{hasAttribute(props.methodology.codereviews)} Code Reviews</li>
          <li>{hasAttribute(props.methodology.prototyping)} Prototyping</li>
          <li>{hasAttribute(props.methodology.pairprogramming)} Pair Programming</li>
          <li>{hasAttribute(props.methodology.failfast)} Fail Fast</li>
          <li>{hasAttribute(props.methodology.unittests)} Unit Tests</li>
          <li>{hasAttribute(props.methodology.integrationtests)} Integration Tests</li>
          <li><u>Build Server</u>: {props.methodology.buildserver}</li>
          <li><u>Static Code Analysis</u>: {props.methodology.staticcodeanalysis}</li>
          <li><u>Version Control</u>: {props.methodology.versioncontrol}</li>
          <li><u>Issue Tracker</u>: {props.methodology.issuetracker}</li>
          <li><u>Knowledge Repo</u>: {props.methodology.knowledgerepo}</li>
          <li>{hasAttribute(props.methodology.standups)} Standups</li>
          <li>{hasAttribute(props.methodology.qaprotocol)} QA Protocol</li>
          <li><u>Agile Management</u>: {props.methodology.agilemanagement}</li>
          <li>{hasAttribute(props.methodology.freedomovertools)} Freedom Over Tools</li>
          <li>{hasAttribute(props.methodology.onecommandbuild)} One Command Build</li>
          <li>{hasAttribute(props.methodology.quickstart)} Quick Start</li>
          <li>{hasAttribute(props.methodology.commitondayone)} Commit on Day One</li>
        </ul>
      </div>
    </section>
  )
}

export default Methodology;