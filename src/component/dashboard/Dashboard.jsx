// import React from 'react'
// import './dashboard.css';
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import SyncIcon from '@mui/icons-material/Sync';
// import { HorizontalRule } from '@mui/icons-material';
// import DonutChart from '../donutChart/DonutChart';
// // import Test from '../circleChart/Test';
// import CircleChart from '../circleChart/CircleChart';
// import ImageRisk from '../severityBarChart/ImageRisk';
// import ImageSecurity from '../severityBarChart/ImageSecurity';

// export default function Dashboard() {
//   return (
//       <div className='container'>
//           <div className='halfcirclecontainer'>
//           <div className="halfcircle">X</div>
//           </div>
//           <br />
//         <div className="container-content">
//               <div className="upperContent">
//               <div className='content-heading'>
//                <h2>CNAPP Dashboard</h2>
//               </div>
//               <div className='buttons'>
//                   <button className='btn'><p className='addWidget'>Add Widget  +</p></button>
//                   <button className='btn'><SyncIcon fontSize='medium' className='syncIcon'/></button>
//                   <button className='btn'><MoreVertIcon fontSize='medium' className='morevert' /></button>
//                   <button className='btn'> <AccessTimeFilledIcon fontSize="medium" sx={{ color: "#262787"}}/> <p className='accesstime'> <HorizontalRule sx={{color:"#262787",transform:"rotate(90deg)"}} /> Last 2 days</p></button>
//               </div>
//               </div>
//         </div>
//         <div className="lower-content">
//           <h4>CSMP Executive Dashboard</h4>
//           <div className="csmp-content">
//            <div className="content">
//               <div className="cloud-content">
//                  <h5>Cloud Account</h5>
//                  <div>
//                    <CircleChart/>
//                  </div>
//               </div>
//            </div>
//           <div className="content">
//              <div className="CARA">
//                 <h5>Cloud Account Risk Assessment</h5>
//                 <div>
//                   <DonutChart/>
//                 </div>
//              </div>
//           </div>
//           <div className="content">
//               <div className="add-Widget">
//                  <button className='content-btn'> + Add Widget</button>
//               </div>
//           </div>
//          </div>
//          <h4>CWPP Dashboard</h4>
//           <div className="csmp-content">
//             <div className="content">
//                <div className="cloud-content">
//                     <h5>Top 5 Namespace Specific Alerts</h5>
//                     <div className='bar'>
//                         <img src="/images/bar-chart.png" alt="error" className='barchart' />
//                         <br />
//                         <p>No Graph data available!</p>
//                      </div>
//                </div>
//             </div>
//             <div className="content">
//                   <div className="CARA">
//                      <h5>Workload Alerts</h5>
//                      <div className='bar'>
//                      <img src="/images/bar-chart.png" alt="error" className='barchart'/>
//                      <br />
//                      <p>No Graph data available!</p>
//                   </div>
//               </div>
//            </div>
//            <div className="content">
//                <div className="add-Widget">
//                   <button className='content-btn'> + Add Widget</button>
//                </div>
//            </div>
//            </div>
//            <h4>Registry Scan</h4>
//           <div className="csmp-content">
//            <div className="content">
//               <div className="cloud-content">
//                  <h5>Imgage Risk Assessment</h5>
//                  <div>
//                    <ImageRisk/>
//                  </div>
//               </div>
//            </div>
//           <div className="content">
//              <div className="CARA">
//                 <h5>Image Security Issues</h5>
//                 <div>
//                   <ImageSecurity/>
//                 </div>
//              </div>
//           </div>
//           <div className="content">
//               <div className="add-Widget">
//                  <button className='content-btn'> + Add Widget</button>
//               </div>
//           </div>
//          </div>
//         </div>
//     </div>
//   )
// }

// import React, { useState } from 'react';
// import './dashboard.css';
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import SyncIcon from '@mui/icons-material/Sync';
// import { HorizontalRule } from '@mui/icons-material';
// import DonutChart from '../donutChart/DonutChart';
// import CircleChart from '../circleChart/CircleChart';
// import ImageRisk from '../severityBarChart/ImageRisk';
// import ImageSecurity from '../severityBarChart/ImageSecurity';
// import AddWidgetPopUp from './AddWidgetPopUp';

// export default function Dashboard() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [widgets, setWidgets] = useState([]);

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   const addWidget = (newWidgets) => {
//     setWidgets([...widgets, ...newWidgets]);
//   };

//   return (
//     <div className='container'>
//       <div className='halfcirclecontainer'>
//         <div className="halfcircle">X</div>
//       </div>
//       <br />
//       <div className="container-content">
//         <div className="upperContent">
//           <div className='content-heading'>
//             <h2>CNAPP Dashboard</h2>
//           </div>
//           <div className='buttons'>
//             <button className='btn' onClick={togglePopup}>
//               <p className='addWidget'>Add Widget  +</p>
//             </button>
//             <button className='btn'>
//               <SyncIcon fontSize='medium' className='syncIcon'/>
//             </button>
//             <button className='btn'>
//               <MoreVertIcon fontSize='medium' className='morevert' />
//             </button>
//             <button className='btn'>
//               <AccessTimeFilledIcon fontSize="medium" sx={{ color: "#262787"}}/>
//               <p className='accesstime'>
//                 <HorizontalRule sx={{color:"#262787", transform:"rotate(90deg)"}} /> Last 2 days
//               </p>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="lower-content">
//         <h4>CSMP Executive Dashboard</h4>
//         <div className="csmp-content">
//           <div className="content">
//             <div className="cloud-content">
//               <h5>Cloud Account</h5>
//               <div>
//                 <CircleChart/>
//               </div>
//             </div>
//           </div>
//           <div className="content">
//             <div className="CARA">
//               <h5>Cloud Account Risk Assessment</h5>
//               <div>
//                 <DonutChart/>
//               </div>
//             </div>
//           </div>
//           <div className="content">
//             <div className="add-Widget">
//               <button className='content-btn' onClick={togglePopup}> + Add Widget</button>
//             </div>
//           </div>
//         </div>
//         <h4>CWPP Dashboard</h4>
//         <div className="csmp-content">
//           <div className="content">
//             <div className="cloud-content">
//               <h5>Top 5 Namespace Specific Alerts</h5>
//               <div className='bar'>
//                 <img src="/images/bar-chart.png" alt="error" className='barchart' />
//                 <br />
//                 <p>No Graph data available!</p>
//               </div>
//             </div>
//           </div>
//           <div className="content">
//             <div className="CARA">
//               <h5>Workload Alerts</h5>
//               <div className='bar'>
//                 <img src="/images/bar-chart.png" alt="error" className='barchart'/>
//                 <br />
//                 <p>No Graph data available!</p>
//               </div>
//             </div>
//           </div>
//           <div className="content">
//             <div className="add-Widget">
//               <button className='content-btn' onClick={togglePopup}> + Add Widget</button>
//             </div>
//           </div>
//         </div>
//         <h4>Registry Scan</h4>
//         <div className="csmp-content">
//           <div className="content">
//             <div className="cloud-content">
//               <h5>Image Risk Assessment</h5>
//               <div>
//                 <ImageRisk/>
//               </div>
//             </div>
//           </div>
//           <div className="content">
//             <div className="CARA">
//               <h5>Image Security Issues</h5>
//               <div>
//                 <ImageSecurity/>
//               </div>
//             </div>
//           </div>
//           <div className="content">
//             <div className="add-Widget">
//               <button className='content-btn' onClick={togglePopup}> + Add Widget</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Render the Add Widget Popup */}
//       {showPopup && <AddWidgetPopUp closePopup={togglePopup} addWidget={addWidget} />}
//     </div>
//   );
// }

import React, { useState } from 'react';
import './dashboard.css';  
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'; 
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SyncIcon from '@mui/icons-material/Sync';
import { HorizontalRule } from '@mui/icons-material';
import DonutChart from '../donutChart/DonutChart';
import CircleChart from '../circleChart/CircleChart';
import ImageRisk from '../severityBarChart/ImageRisk';
import ImageSecurity from '../severityBarChart/ImageSecurity';
import AddWidgetPopUp from './AddWidgetPopUp';

export default function Dashboard() {
  const [showPopup, setShowPopup] = useState(false);
  const [widgets, setWidgets] = useState([]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const addWidget = (newWidgets) => {
    console.log('New Widgets:', newWidgets); // Debugging line

    // Create widget components based on the widget names
    const newWidgetComponents = newWidgets.map((widget, index) => {
      switch (widget) {
        case 'cloud account':
          return <CircleChart key={`cloud-account-${index}`} />;
        case 'cloud account risk assessment':
          return <DonutChart key={`cloud-account-risk-${index}`} />;
        case 'image risk assessment':
          return <ImageRisk key={`image-risk-${index}`} />;
        case 'image security issues':
          return <ImageSecurity key={`image-security-${index}`} />;
        default:
          return null;
      }
    });

    // Add new widgets to the state
    setWidgets([...widgets, ...newWidgetComponents]);
  };

  return (
    <div className='container'>
      <div className='halfcirclecontainer'>
        <div className="halfcircle">X</div>
      </div>
      <br />
      <div className="container-content">
        <div className="upperContent">
          <div className='content-heading'>
            <h2>CNAPP Dashboard</h2>
          </div>  
          <div className='buttons'>
            <button className='btn' onClick={togglePopup}>
              <p className='addWidget'>Add Widget  +</p>
            </button>
            <button className='btn'>
              <SyncIcon fontSize='medium' className='syncIcon'/>
            </button>
            <button className='btn'>
              <MoreVertIcon fontSize='medium' className='morevert' />
            </button>
            <button className='btn'>
              <AccessTimeFilledIcon fontSize="medium" sx={{ color: "#262787"}}/> 
              <p className='accesstime'> 
                <HorizontalRule sx={{color:"#262787", transform:"rotate(90deg)"}} /> Last 2 days
              </p>
            </button>
          </div>  
        </div>
      </div>
      <div className="lower-content">
        <h4>CSMP Executive Dashboard</h4>
        <div className="csmp-content">
          <div className="content">
            <div className="cloud-content">
              <h5>Cloud Account</h5>
              <div>
                <CircleChart/>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="CARA">
              <h5>Cloud Account Risk Assessment</h5>
              <div>
                <DonutChart/>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="add-Widget">
              <button className='content-btn' onClick={togglePopup}> + Add Widget</button>
            </div>
          </div>
        </div>
        <div className="widget-container">
          {/* Render the added widgets */}
          {widgets.map((WidgetComponent, index) => (
            <div className="widget" key={index}>
              {WidgetComponent}
            </div>
          ))}
        </div>
        <h4>CWPP Dashboard</h4>
        <div className="csmp-content">
          <div className="content">
            <div className="cloud-content">
              <h5>Top 5 Namespace Specific Alerts</h5>
              <div className='bar'>
                <img src="/images/bar-chart.png" alt="error" className='barchart' />
                <br />
                <p>No Graph data available!</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="CARA">
              <h5>Workload Alerts</h5>
              <div className='bar'>
                <img src="/images/bar-chart.png" alt="error" className='barchart'/>
                <br />
                <p>No Graph data available!</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="add-Widget">
              <button className='content-btn' onClick={togglePopup}> + Add Widget</button>
            </div>
          </div>
        </div>
        <h4>Registry Scan</h4>
        <div className="csmp-content">
          <div className="content">
            <div className="cloud-content">
              <h5>Image Risk Assessment</h5>
              <div>
                <ImageRisk/>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="CARA">
              <h5>Image Security Issues</h5>
              <div>
                <ImageSecurity/>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="add-Widget">
              <button className='content-btn' onClick={togglePopup}> + Add Widget</button>
            </div>
          </div>
        </div>  
      </div>
      {/* Render the Add Widget Popup */}
      {showPopup && <AddWidgetPopUp closePopup={togglePopup} addWidget={addWidget} />}
    </div>
  );
}

