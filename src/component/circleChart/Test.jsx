import React from 'react';
import {  Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import data from '../../myData.json';  

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Test() {
  const cloudAccountsData = {
    lables: ['Connected', 'Not Connected'],
    datasets: [
      {
        label: 'Cloud Accounts',
        data: [data[0].Connected, data[0]['Not Connected']],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const cloudRiskAssessmentData = {
    labels: ['Failed', 'Warning', 'Not Available', 'Passed'],
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
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (  
    <div >
      <div>
        <h3>Cloud Accounts</h3>
        <Doughnut data={cloudAccountsData} />
      </div>
      <div>
        <h3>Cloud Account Risk Assessment</h3>
        <Doughnut data={cloudRiskAssessmentData}/>
      </div>
    </div>
  )
}
