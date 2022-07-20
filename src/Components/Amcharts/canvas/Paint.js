// import React, { useEffect, useState, useRef } from 'react';
// //import MapsReactjs from './Components/Amcharts/MapsReact';
// //import Amcharts from './Components/Amcharts/Amcharts';
// import styles from './styles.css';

// const valorPorDefecto = {
//     colorDefault: "black",
//     grosorDefault: 1
// }

// const { colorDefault, grosorDefault } = valorPorDefecto;


// const Paint = ({
//    // canvasRef
// }) => {

//    // const canvasRef = useRef(null)
//     const [color, setColor] = useState("red");
  
//     const [grosor, setGrosor] = useState(1);
  
//     const [dibujando, setDibujando] = useState(false);
  
//     const [coordenada, setCoordenadas] = useState({
//       x: 0,
//       y: 0
//     });
  
//     const dibujar = (ctx, x1, y1, x2, y2) => {
//       console.log(`dibujandoooooooooooo ================>, ${x1} === ${y1}`);
//       ctx.beginPath();
  
//       ctx.strokeStyle = color;
  
//       ctx.lineWidth = grosor;
//       ctx.moveTo(x1, y1);
//       ctx.lineTo(x2, y2);
//       ctx.stroke();
//       ctx.closePath();
  
//     }
  
//     setTimeout(() => {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');
//       const rect = canvas.getBoundingClientRect();
//       //console.log("canvas ================>", canvas)
//       canvas.addEventListener('mousedown', e => {
//         //console.log("entre aqui")
//         setCoordenadas({
//           x: e.clientX - rect.left,
//           y: e.clientY - rect.top,
//         });
//         setDibujando(true);
//       });
  
//       canvas.addEventListener("mousemove", (e) => {
  
//         if (dibujando) {
//           dibujar(ctx, coordenada.x, coordenada.y, e.clientX - rect.left, e.clientY - rect.top);
//           setCoordenadas({
//             x: e.clientX - rect.left,
//             y: e.clientY - rect.top,
//           });
//         }
//       });
  
//       canvas.addEventListener("mouseup", (e) => {
  
//         if (dibujando) {
//           //dibujar(ctx,coordenada.x, coordenada.y, e.clientX - rect.left, e.clientY - rect.top);
//           setCoordenadas({
//             x: 0,
//             y: 0,
//           });
//           setDibujando(false);
//         }
//       });
  
      
  
  
//     }, 0);
//     //return <canvas ref={canvasRef} {...props}/>
//     const defColor = (c) => {
//         setColor(c);
//     }
//     const defGrosor = (g) => {
//         setGrosor(g)
//     }


//     return (
//         <div style={{ width: "100%", height: "50px", border: "1px blue solid", display: "flex", justifyContent: "center", alignItems:"center" }}>
//          <input type="color" id="color" /* oninput={ defColor()} */ />
//             <input type="range" id="grosor" /* oninput={ defGrosor()} */ min="1" max="15" />
//         </div>
//     );
// }


// export default Paint;



// // const Paint = () => {
// //     const [color, setColor] = useState(colorDefault);

// //     const [grosor, setGrosor] = useState(grosorDefault);

// //     const [dibujando, setDibujando] = useState(false);

// //     const [coordenada, setCoordenadas] = useState({
// //         x: 0,
// //         y: 0
// //     });

// //     const canvas = document.getElementById('canvas');
// //     const ctx = canvas.getContext('2d');
// //     const rect = canvas.getBoundingClientRect();

// //     const defColor = (c) => {
// //         setColor(c);
// //     }
// //     const defGrosor = (g) => {
// //         setGrosor(g)
// //     }

// //     const dibujar = (x1, y1, x2, y2) => {
// //         ctx.beginPath();
// //     }

// //     setTimeout(() => {
// //         canvas.addEventListener('mousedown', (e) => {
// //             setCoordenadas({
// //                 x: e.clientX - rect.left,
// //                 y: e.clientY - rect.top,
// //             });
// //             setDibujando(true);
// //         });

// //         canvas.addEventListener("mousemove", (e) => {

// //             if (dibujando) {
// //                 dibujar(coordenada.x, coordenada.y, e.clientX - rect.left, e.clientY - rect.top);
// //                 setCoordenadas({
// //                     x: e.clientX - rect.left,
// //                     y: e.clientY - rect.top,
// //                 });
// //             }
// //         });

// //         canvas.addEventListener("mouseup", (e) => {

// //             if (dibujando) {
// //                 dibujar(coordenada.x, coordenada.y, e.clientX - rect.left, e.clientY - rect.top);
// //                 setCoordenadas({
// //                     x: 0,
// //                     y: 0,
// //                 });
// //                 setDibujando(false);
// //             }
// //         });



// //     }, 0)


// //     return (
// //         <div style={{ width: "100%", height: "30%", border: "1px blue solid", display: "flex", justifyContent: "center" }}>
// //             <input type="color" id="color" oninput="color(this.value)" />
// //             <input type="range" id="grosor" oninput="grosor(this.value)" min="1" max="5" />
// //         </div>
// //     );
// // }
