import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import Chris from '../resources/Chris.js';

class Requirements extends Component {
  convertLevels(levels) {
    const levelNumbers = {
      "None": 0,
      "Familiar": 1, 
      "Good": 2, 
      "Expert": 3
    };
    
    return levels.map( level => {
      return levelNumbers[level];
    })
  }

  generateLineData(rawData, subject){
    const flatData = Object.keys(rawData).reduce((result, k)=> {
      if (typeof rawData[k] !== "object") {
        result[k] = rawData[k];
      }
      return result;
    }, {});
    const dataValues = this.convertLevels(Object.values(flatData));
    return {
      labels: Object.keys(flatData),
      datasets:[
        {
          label: 'Required',
          fill: false,
          backgroundColor: 'rgba(255,190,104,0.4)',
          borderColor: 'rgba(255,190,104,1)',
          pointBorderColor: 'rgba(255,190,104,1)',
          data:dataValues
        },
        {
          label: 'My Skills',
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          pointBorderColor: 'rgba(75,192,192,1)',
          data:Chris[subject]
        }
      ]
    };
  };

  render(props) {
    return (
      <section id="requirements">
        <div className="full">
          <Line
            ref="chart"
            data={this.generateLineData(this.props.technologies, 'technologies')}
            options={{
              scales: {
                yAxes:[{ticks: {min: 0, max: 3.5}}],
                xAxes:[{ticks: {autoSkip:false}}]
              },
              title:{
                display:true,
                text:"Technologies"
              }
            }}
          />
        </div>
        <div className="row">
          <div className="one-third">
            <Line
              ref="chart"
              data={this.generateLineData(this.props.technologies.oneoftesting, 'testing')}
              options={{
                scales: {
                  yAxes:[{ticks: {min: 0, max: 3.5}}]
                },
                title:{
                  display:true,
                  text:"Testing"
                }
              }}
            />
          </div>
          <div className="one-third">
            <Line
              ref="chart"
              data={this.generateLineData(this.props.technologies.oneofframeworks, 'frameworks')}
              options={{
                scales: {
                  yAxes:[{ticks: {min: 0, max: 3.5}}]
                },
                title:{
                  display:true,
                  text:"Frameworks"
                }
              }}
            />
          </div>
          <div className="one-third">
            <Line
              ref="chart"
              data={this.generateLineData(this.props.technologies.oneoflanguages, 'languages')}
              options={{
                scales: {
                  yAxes:[{ticks: {min: 0, max: 3.5}}]
                },
                title:{
                  display:true,
                  text:"Languages"
                }
              }}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default Requirements;