import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const levelNumbers = {
  "None": 0,
  "Familiar": 1, 
  "Good": 2, 
  "Expert": 3
};

const chris = {
  "technologies": [
      3, //css3
      3, //html5
      3, //javascript
      3, //node
      3, //rest
      2, //jsonrpc
      2.5, //uiux
      2, //design
      1, //p2p
      2, //ethereum
      2, //blockchain
      1, //gametheory
      1, //cryptography
      2 //boardgames
    ],
    'testing': [0, 2, 0, 1],
    'frameworks': [1, 1, 1],
    'languages': [1, 0, 3, 0, 0]
};

const convertLevels = levels => {
  return levels.map( level => {
    return levelNumbers[level];
  })
}

const generateLineData = (rawData, subject) => {
  const flatData = Object.keys(rawData).reduce((result, k)=> {
    if (typeof rawData[k] !== "object") {
      result[k] = rawData[k];
    }
    return result;
  }, {});
  const dataValues = convertLevels(Object.values(flatData));
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
        label: 'Chris',
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        pointBorderColor: 'rgba(75,192,192,1)',
        data:chris[subject]
      }
    ]
  };
};

class Requirements extends Component {
  render(props) {
    return (
      <section id="requirements">
        <div className="full">
          <Line
            ref="chart"
            data={generateLineData(this.props.technologies, 'technologies')}
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
              data={generateLineData(this.props.technologies.oneoftesting, 'testing')}
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
              data={generateLineData(this.props.technologies.oneofframeworks, 'frameworks')}
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
              data={generateLineData(this.props.technologies.oneoflanguages, 'languages')}
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