import React from 'react'
import data from '../../myData.json';
import { Doughnut } from 'react-chartjs-2'
import './circleChart.css'
import { Chart as chartjs, ArcElement, Tooltip, Legend, plugins } from 'chart.js'

chartjs.register(ArcElement, Tooltip, Legend);

export default function CircleChart() {
    
  const cloudAccountsData = {
    lables: ['Connected', 'Not Connected'],
    datasets: [
      {
        label:'Cloud Account',
        data: [data[0].Connected, data[0]['Not Connected']],
        backgroundColor: [ '#e1ebff','#5578ff'],
        borderColor: [ '#e1ebff','#5578ff'],
        borderWidth: 1,
      },
    ],
  };

  return (  
    <div className='circle-chart-container'>
      <div>
        <Doughnut data={cloudAccountsData}    className='circle-chart' />
      </div>
      <div className='circle-chart-text'>
        <p>Connected({data[0].Connected})</p>
        <p>Not Connected ({data[0]['Not Connected'] })</p>
      </div>
    </div>
  )
}