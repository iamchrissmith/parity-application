import React from 'react';
import { CheckIcon } from './Icons';
import './Methodology-styles.css';


const hasMethodology = (prop, props) => {
  if (prop) {
    return CheckIcon(props);
  }
}

const Methodology = (props) => {
  return (
    <section id="methodology">
      <h2 className="full">Methodology</h2>
      <div className="full">
        <ul>
          <li>Code Reviews {hasMethodology(props.methodology.codereviews)}</li>
          <li>Prototyping {hasMethodology(props.methodology.prototyping)}</li>
          <li>Pair Programming {hasMethodology(props.methodology.pairprogramming)}</li>
          <li>Fail Fast {hasMethodology(props.methodology.failfast)}</li>
          <li>Unit Tests {hasMethodology(props.methodology.unittests)}</li>
          <li>Integration Tests {hasMethodology(props.methodology.integrationtests)}</li>
          <li>Build Server: {props.methodology.buildserver}</li>
          <li>Static Code Analysis: {props.methodology.staticcodeanalysis}</li>
          <li>Version Control: {props.methodology.versioncontrol}</li>
          <li>Issue Tracker: {props.methodology.issuetracker}</li>
          <li>Knowledge Repo: {props.methodology.knowledgerepo}</li>
          <li>Standups {hasMethodology(props.methodology.standups)}</li>
          <li>QA Protocol {hasMethodology(props.methodology.qaprotocol)}</li>
          <li>Agile Management: {props.methodology.agilemanagement}</li>
          <li>Freedom Over Tools {hasMethodology(props.methodology.freedomovertools)}</li>
          <li>One Command Build {hasMethodology(props.methodology.onecommandbuild)}</li>
          <li>Quick Start {hasMethodology(props.methodology.quickstart)}</li>
          <li>Commit on Day One {hasMethodology(props.methodology.commitondayone)}</li>
        </ul>
      </div>
    </section>
  )
}

export default Methodology;