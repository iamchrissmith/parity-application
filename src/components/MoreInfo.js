import React, {Component} from 'react';
import hasAttribute from './AttributeIcons';


class MoreInfo extends Component {
  makeList(items) {
    return items.map( (item, i) => {
      return <li key={i}>{hasAttribute(true)} {item}</li>;
    })
  }
  render(props){
    const otherList = this.makeList(this.props.other); 
    return (
      <section id="more-info">
        <div className="full">
          <h2>More about us</h2>
          <ul>
            {otherList}
            <li>{hasAttribute(this.props.misc.codingretreats)} Coding Retreats</li>
            <li>{hasAttribute(this.props.misc.teamevents)} Team Events</li>
            <li>{hasAttribute(this.props.misc.healthcare)} Healthcare</li>
            <li>{hasAttribute(this.props.misc.mobilephone)} Mobile Phone</li>
            <li>{hasAttribute(this.props.misc.kitchen)} Kitchen</li>
            <li>{hasAttribute(this.props.misc.canteen)} Canteen</li>
            <li><u>Training</u>: {this.props.misc.training}</li>
            <li><u>FOSS Philosophy</u>: <br/>{this.props.misc.fossphilosophy.split(/(?=[A-Z])/).join(" ")}</li>
            <li><u>Conferences</u>: <ul className="list">{this.makeList(this.props.misc.conferences)}</ul></li>
            <li><u>Free Stuff</u>: <ul className="list">{this.makeList(this.props.misc.freestuff)}</ul></li>
          </ul>
        </div>
      </section>
    )
  }
}

export default MoreInfo;