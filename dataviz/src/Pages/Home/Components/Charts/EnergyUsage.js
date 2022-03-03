import React, { Component } from 'react'
import Chart from 'react-google-charts'
import PropTypes from 'prop-types';


const LineChartOptions = {
  hAxis: {
    title: 'Month',
  },
  vAxis: {
    title: 'Energy Usage',
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
    return (
        <Chart
          width={'1000'}
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