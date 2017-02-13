import React, { Component, PropTypes } from 'react';
import ReactHighcharts from 'react-highcharts';

export default class ViewChart extends Component {
  getChartData() {
    const { xAxis, yAxis } = this.props.chartData;
    return {
      chart: {
        type: 'area',
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, '#2a2a2b'],
            [1, '#3e3e40']
          ]
        },
        style: {
           fontFamily: "'Unica One', sans-serif"
        },
        plotBorderColor: '#606063'
      },
      colors: ['#90ee7e', '#2b908f', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
         '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
      title: {
        text: '最近七天关闭的工单',
        style: {
          color: '#E0E0E3',
          textTransform: 'uppercase',
          fontSize: '12px'
        }
      },
      xAxis: {
        categories: xAxis,
        // gridLineWidth: 1,
        allowDecimals: false,
        gridLineColor: '#707073',
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        labels: {
          style: {
            color: '#E0E0E3'
          },
          formatter() {
            return this.value; // clean, unformatted number for year
          }
        },
        title: {
          style: {
            color: '#A0A0A3'
          }
        }
      },
      yAxis: {
        gridLineColor: '#707073',
        allowDecimals: false,
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
          text: '',
        },
        labels: {
          formatter() {
            return this.value;
          },
          style: {
             color: '#E0E0E3'
          }
        }
      },
      tooltip: {
        formatter() {
          return `${this.x} 日对话数量为 ${this.y}`;
        },
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
          color: '#F0F0F0'
        }
      },
      legend: {
        enabled: false,
      },
      credits: {
         enabled: false
      },
      labels: {
        style: {
          color: '#707073'
        }
      },
      series: [{
        data: yAxis
      }]
    };
  }
  render() {
    const config = this.getChartData();
    return (<ReactHighcharts style={{ height: 250, maxWidth: 440 }} config={config} />);
  }
}

ViewChart.propTypes = {
  chartData: PropTypes.object.isRequired
};
