// src/components/severityBarChart/ImageRisk.jsx

import React from 'react';
import data from '../../myData.json';
import './imageSecurity.css';

const ImageRisk = () => {
  const imageRiskData = data.find(item => item.Name === 'Image Security Issues');
  const { Critical, High, Medium, Low } = imageRiskData.myObj;

  const total = Critical + High + Medium + Low;

  const criticalWidth = (Critical / total) * 100;
  const highWidth = (High / total) * 100;
  const mediumWidth = (Medium / total) * 100;
  const lowWidth = (Low / total) * 100;

  return (
    <>
      <div className='heading'>
              <h4>{ total}</h4>
        <p>Total Images</p>     
      </div>
      <div className="progress-bar-container"> 
        <div className="progress-bar-segment critical" style={{ width: `${criticalWidth}%` }} />
        <div className="progress-bar-segment high" style={{ width: `${highWidth}%` }} />
        <div className="progress-bar-segment medium" style={{ width: `${mediumWidth}%` }} />
        <div className="progress-bar-segment low" style={{ width: `${lowWidth}%` }} />     
      </div>
      <div className="legend">
        <div className="legend-item">
          <span className="legend-color critical"></span>
          <span>Critical ({Critical})</span>
        </div>
        <div className="legend-item">
          <span className="legend-color high"></span>
          <span>High ({High})</span>
        </div>
        <div className="legend-item">
          <span className="legend-color medium"></span>
          <span>Medium ({Medium})</span>
        </div>
        <div className="legend-item">
          <span className="legend-color low"></span>
          <span>Low ({Low})</span>
        </div>
      </div>
    </>
  );
};

export default ImageRisk;