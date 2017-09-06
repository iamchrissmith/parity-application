import React, { Component } from 'react';
import CountUp from 'react-countup';
import ReactTooltip from 'react-tooltip';
import {Doughnut} from 'react-chartjs-2';

const generateData = (profile) => {
  return {
    labels: Object.keys(profile),
    datasets:[{
      data: Object.values(profile),
      backgroundColor: [
        'rgba(255,190,104,0.5)',
        'rgba(255,252,123,0.5)',
        'rgba(185,255,181,0.5)'
      ],
      hoverBackgroundColor: [
        'rgba(255,190,104,1)',
        'rgba(255,252,123,1)',
        'rgba(185,255,181,1)'
      ]
    }]
  };
};


class Details extends Component {
  render(props) {
    return (
      <section id="details">
        <div className="left">
          <h2>Specs</h2>
          <ul>
            <li><u>Workload</u>:&nbsp;
              <CountUp
                start={0}
                end={this.props.specs.workload * 100}
                duration={3}
                decimals={0}
                useEasing={true}
                suffix={"%"}
                redraw={true}
              />
            </li>
            <li><a data-tip data-for="minutes-hours">
                  Work week:&nbsp;
                  <CountUp
                    start={0}
                    end={this.props.specs.workweek}
                    duration={3}
                    useGrouping={true}
                    separator=","
                    decimals={0}
                    useEasing={true}
                    suffix={" seconds"}
                    redraw={true}
                  />
                </a>
                <ReactTooltip id="minutes-hours" place="left" type="dark" effect="solid">
                  {this.props.specs.workweek / 60} Minutes<br/>
                  or <br/>
                  {this.props.specs.workweek / 60 / 60} Hours
                </ReactTooltip>
            </li>
            <li><u>Holidays</u>: <CountUp
                start={0}
                end={this.props.specs.holidays}
                duration={3}
                useEasing={true}
                redraw={true}
              />
            </li>
            <li><u>Core work hours</u>: {this.props.specs.corehours.from} - {this.props.specs.corehours.to}</li>
            <li><u>Travel</u>: {this.props.specs.travel}</li>
            <li><u>Remote</u>: {this.props.specs.remote}</li>
            <li><u>Relocation Package</u>: {this.props.specs.relocationpackage}</li>
          </ul>
          <h2>Equipment</h2>
          <ul>
            <li>{this.props.equipment.operatingsystem.join(" / ")}</li>
            <li>{this.props.equipment.computer}</li>
            <li><u>Monitors</u>: {this.props.equipment.monitors}</li>
          </ul>
        </div>
        <div className="right">
          <div id="chart">
            <Doughnut 
              width={200}
              height={200}
              ref="chart" 
              data={generateData(this.props.profile)} 
              options={{
                // legend:{display:false},
                title:{
                  display:true, 
                  text: "Work Profile"
                }
              }}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default Details;