import React from 'react';
import hasAttribute from './AttributeIcons';

const Methodology = (props) => {
  return (
    <section id="methodology">
      <h2 className="full">Methodology</h2>
      <div className="full">
        <ul>
          <li>Code Reviews {hasAttribute(props.methodology.codereviews)}</li>
          <li>Prototyping {hasAttribute(props.methodology.prototyping)}</li>
          <li>Pair Programming {hasAttribute(props.methodology.pairprogramming)}</li>
          <li>Fail Fast {hasAttribute(props.methodology.failfast)}</li>
          <li>Unit Tests {hasAttribute(props.methodology.unittests)}</li>
          <li>Integration Tests {hasAttribute(props.methodology.integrationtests)}</li>
          <li>Build Server: {props.methodology.buildserver}</li>
          <li>Static Code Analysis: {props.methodology.staticcodeanalysis}</li>
          <li>Version Control: {props.methodology.versioncontrol}</li>
          <li>Issue Tracker: {props.methodology.issuetracker}</li>
          <li>Knowledge Repo: {props.methodology.knowledgerepo}</li>
          <li>Standups {hasAttribute(props.methodology.standups)}</li>
          <li>QA Protocol {hasAttribute(props.methodology.qaprotocol)}</li>
          <li>Agile Management: {props.methodology.agilemanagement}</li>
          <li>Freedom Over Tools {hasAttribute(props.methodology.freedomovertools)}</li>
          <li>One Command Build {hasAttribute(props.methodology.onecommandbuild)}</li>
          <li>Quick Start {hasAttribute(props.methodology.quickstart)}</li>
          <li>Commit on Day One {hasAttribute(props.methodology.commitondayone)}</li>
        </ul>
      </div>
    </section>
  )
}

export default Methodology;