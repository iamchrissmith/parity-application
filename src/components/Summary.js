import React, { Component } from 'react';
import logo from '../resources/logo.png';
import CountUp from 'react-countup';
import {IntlProvider, FormattedDate} from 'react-intl';


const currencySymbols = {
  "USD": "$",
  "EUR": "€",
  "GBP": "£"
}

class Summary extends Component {
  
  stockOptions(status) {
    if (status) {
      return " (+ Stock Options)";
    }
  }
  
  render(props) {

    return (
      <section id="summary">
      <div className="full">
        <p><img src={logo} className="App-logo" alt="Parity Logo" width="187" height="150"/></p>
        <h1>{this.props.headline}</h1>
        <ul>
          <li>Employment Type: {this.props.essentials.employment}</li>
          <li>
            Start Date:&nbsp; 
            <IntlProvider locale="en">
              <FormattedDate 
                value={this.props.essentials.startdate} 
                day="numeric"
                month="long"
                year="numeric"
              />
            </IntlProvider>
          </li>
          <li>  
            <CountUp
              start={0}
              end={this.props.essentials.salary.amount}
              duration={3}
              separator={","}
              decimals={0}
              useEasing={true}
              prefix={currencySymbols[this.props.essentials.salary.currency]}
              suffix={" / " + this.props.essentials.salary.interval}
              redraw={true}
            />
            {this.stockOptions(this.props.essentials.salary.stockoptions)}</li>
          <li>Industry: {this.props.essentials.industry}</li>
          <li>Company Size: {this.props.essentials.companysize.split(/(?=[A-Z])/).join(" ")}</li>
          <li>Team Size: {this.props.essentials.teamsize.min} - {this.props.essentials.teamsize.max}</li>
        </ul>
      </div>
    </section>
    );
  }
}

export default Summary;