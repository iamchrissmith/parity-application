import React from 'react';
import hasAttribute from './AttributeIcons';

const MoreInfo = (props) => {
  const otherList = props.other.map( (item, i) => {
    return <li key={i}>{item}</li>;
  })
  return (
    <section id="more-info">
      <div className="full">
        <h2>More about us</h2>
        <ul>
          {otherList}
          <li>Training: {props.misc.training}</li>
          <li>FOSS Philosophy: <br/>{props.misc.fossphilosophy.split(/(?=[A-Z])/).join(" ")}</li>
          <li>Coding Retreats {hasAttribute(props.misc.codingretreats)}</li>
          <li>Team Events {hasAttribute(props.misc.teamevents)}</li>
          <li>Healthcare {hasAttribute(props.misc.healthcare)}</li>
          <li>Mobile Phone {hasAttribute(props.misc.mobilephone)}</li>
          <li>Kitchen {hasAttribute(props.misc.kitchen)}</li>
          <li>Canteen {hasAttribute(props.misc.canteen)}</li>
          <li>Conferences: <br/>{props.misc.conferences.join(' / ')}</li>
          <li>Free Stuff: <br/>{props.misc.freestuff.join(', ')}</li>
        </ul>
      </div>
    </section>
  )
}

export default MoreInfo;