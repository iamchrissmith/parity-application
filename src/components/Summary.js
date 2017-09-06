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
      return " (+ stock options)";
    }
  }
  
  render(props) {

    return (
      <section id="summary">
      <div className="full">
        <p><img src={logo} className="App-logo" alt="Parity Logo" width="187" height="150"/></p>
        <h1>{this.props.headline}</h1>
        <ul>
          <li><u>Employment Type</u>: {this.props.essentials.employment}</li>
          <li>
            <u>Start Date</u>:&nbsp; 
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
              useGrouping={true}
              separator={","}
              decimals={0}
              useEasing={true}
              prefix={currencySymbols[this.props.essentials.salary.currency]}
              suffix={" / " + this.props.essentials.salary.interval}
              redraw={true}
            />
            {this.stockOptions(this.props.essentials.salary.stockoptions)}</li>
          <li><u>Industry</u>: {this.props.essentials.industry}</li>
          <li><u>Company Size</u>: {this.props.essentials.companysize.split(/(?=[A-Z])/).join(" ")}</li>
          <li><u>Team Size</u>: {this.props.essentials.teamsize.min} - {this.props.essentials.teamsize.max}</li>
        </ul>
      </div>
    </section>
    );
  }
}

export default Summary;