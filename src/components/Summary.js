import React, { Component } from 'react';
import logo from '../resources/logo.png';


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
      </div>
      <div className="left">
        <p>Employment Type: {this.props.essentials.employment}</p>
        <p>Start Date: {this.props.essentials.startdate}</p>
        <p>
          
          {currencySymbols[this.props.essentials.salary.currency]}
          {this.props.essentials.salary.amount} / {this.props.essentials.salary.interval}  
          {this.stockOptions(this.props.essentials.salary.stockoptions)}</p>
      </div>
      <div className="right">
        <p>Locations: {this.props.essentials.locations}</p>
        <p>Industry: {this.props.essentials.industry}</p>
        <p>Company Size: {this.props.essentials.companysize}</p>
        <p>Team Size: {this.props.essentials.teamsize.min} - {this.props.essentials.teamsize.max}</p>
      </div>
    </section>
    );
  }
}

export default Summary;