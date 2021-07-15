import React, { useEffect } from 'react';
import { Chart } from 'react-google-charts';

const PieChart = (props) => {
    useEffect(() => {
      }, [props.dataSource]);

    return (    
     <Chart
        width={'800px'}
        height={'500px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={props.dataSource}
        options={{
            title: 'Currency rates',
            // Just add this option
            is3D: true,
        }}
        rootProps={{ 'data-testid': '2' }}
    />);
};

export default PieChart;