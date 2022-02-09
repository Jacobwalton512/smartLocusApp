import React, { Component } from 'react'
import Chart from 'react-google-charts'
import PropTypes from 'prop-types';


const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'Energy Consumption',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class EnergyUsage extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    console.log(this.props.data);
    return (
        <Chart
          width={'700px'}
          height={'400px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={this.props.data}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
    )
  }
}

EnergyUsage.propTypes = {
    data: PropTypes.array,
}
export default EnergyUsage;