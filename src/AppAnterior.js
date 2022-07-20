// import React, { useState, useEffect, useRef } from 'react';
// //import MapsReactjs from './Components/Amcharts/MapsReact';
// import Amcharts from './Components/Amcharts/Amcharts';

// import Paint from './Components/Amcharts/canvas/Paint';

// const App = () => {

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <h1> Hola como estas</h1>
//       <canvas ref={canvasRef} id="myCanvas" width="800px" height="500px" style={{ border: "1px blue solid" }}>
//       </canvas>
//       {/*   <Amcharts/> */}
//       {/* <Paint canvasRef={canvasRef}/> */}
//     </div>
//     //<MapsReactjs/>
//   );
// }

//export default App;

import React from 'react';
import ReactPaint from 'react-paint';

const props = {
  style: {
    background: 'tomato',
    /* Arbitrary css styles */
  },
  brushCol: '#ffffff',
  lineWidth: 10,
  className: 'react-paint',
  height: 500,
  width: 500,
  onDraw: () => { console.log('i have drawn!'); },
};

const App = () => {
  return (
    <ReactPaint {...props} />

  );

};

export default App;
