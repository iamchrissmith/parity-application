import React from 'react';
import hasAttribute from './AttributeIcons';

const makeList = (items) => {
  return items.map( (item, i) => {
    return <li key={i}>{hasAttribute(true)} {item}</li>;
  })
}

const MoreInfo = (props) => {
  const otherList = makeList(props.other); 
  return (
    <section id="more-info">
      <div className="full">
        <h2>More about us</h2>
        <ul>
          {otherList}
          <li>{hasAttribute(props.misc.codingretreats)} Coding Retreats</li>
          <li>{hasAttribute(props.misc.teamevents)} Team Events</li>
          <li>{hasAttribute(props.misc.healthcare)} Healthcare</li>
          <li>{hasAttribute(props.misc.mobilephone)} Mobile Phone</li>
          <li>{hasAttribute(props.misc.kitchen)} Kitchen</li>
          <li>{hasAttribute(props.misc.canteen)} Canteen</li>
          <li><u>Training</u>: {props.misc.training}</li>
          <li><u>FOSS Philosophy</u>: <br/>{props.misc.fossphilosophy.split(/(?=[A-Z])/).join(" ")}</li>
          <li><u>Conferences</u>: <ul className="list">{makeList(props.misc.conferences)}</ul></li>
          <li><u>Free Stuff</u>: <ul className="list">{makeList(props.misc.freestuff)}</ul></li>
        </ul>
      </div>
    </section>
  )
}

export default MoreInfo;