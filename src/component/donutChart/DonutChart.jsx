import React from 'react'
import data from '../../myData.json';
import './donutChart.css';
import { Doughnut } from 'react-chartjs-2'
import { Chart as chartjs, ArcElement, Tooltip, Legend } from 'chart.js'
chartjs.register(ArcElement, Tooltip, Legend);
export default function DonutChart() {

  const cloudRiskAssessmentData = {
    labels: [],
    datasets: [
      {
        label: 'Cloud Account Risk Assessment',
        data: [
          data[1].myObj.Failed,
          data[1].myObj.Warning,
          data[1].myObj['Not Available'],
          data[1].myObj.Passed,
        ],
        backgroundColor: [
          '#b9140f',
          '#fad732',
          '#a9cac4',
          '#19a55a',
        ],
        borderColor: [
          '#b9140f',
          '#fad732',
          '#a9cac4',
          '#19a55a',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='circleChartContainer'>
      <div>
        <Doughnut data={cloudRiskAssessmentData} className='circleChart'/>
      </div>
      <div className='circleChartText'>
        <p>Failed ({data[1].myObj.Failed})</p>
        <p>Warning ({data[1].myObj.Warning})</p>
        <p>Not Available ({data[1].myObj['Not Available']})</p>
        <p>Passed ({data[1].myObj.Passed})</p>
      </div>
    </div>
  )
}
