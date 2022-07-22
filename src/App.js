import { useEffect, useRef, useState } from "react";
import Menu from "./Components/Menu";
import Amcharts from './Components/Amcharts/Amcharts';

import "./App.css";

import MapaMundial from "./images/mapaMundial.svg";
//import MapaMundial from "./images/metamask-fox.svg";
import Borrador from "./images/borrador.png";



function App() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(1);
    const [lineColor, setLineColor] = useState("black");
    const [lineOpacity, setLineOpacity] = useState(0.1);

    const [borrador, setBorrador]= useState(false);
    const [lapiz, setLapiz]= useState(false);
    const [cambiarImagen, setCambiarImagen] = useState(null);

    // Initialization when the component
    // mounts for the first time

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;

    }, [lineColor, lineOpacity, lineWidth]);

    // Function for starting the drawing
    const startDrawing = (e) => {
        if(lapiz){
            ctxRef.current.beginPath();
            ctxRef.current.moveTo(
                e.nativeEvent.offsetX,
                e.nativeEvent.offsetY
            );
            setIsDrawing(true);
        }
        if(borrador){
            ctxRef.current.beginPath();
            ctxRef.current.moveTo(
                e.nativeEvent.offsetX,
                e.nativeEvent.offsetY
            );
            setIsDrawing(true);
        }
    };

    // Function for ending the drawing
    const endDrawing = () => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = (e) => {
        if (!isDrawing) {
            return;
        }
        ctxRef.current.lineTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );

        ctxRef.current.stroke();
    };

    useEffect(() => {
        const canvas = canvasRef.current;

        const ctx = canvas.getContext("2d");

        const img = new Image();
        img.src = MapaMundial;
        img.onload = function () {
            ctx.drawImage(img, 0, -200, 1280, 1000);

        }
    }, []);

    useEffect(() => {
        console.log("cambiarImagen cambiarImagen", ctxRef);
        const searchImagen = document.getElementById("myImagen");
        searchImagen.src = cambiarImagen;
        searchImagen.onload = function () {
            ctxRef.current.canvas.getContext("2d").drawImage(searchImagen, 0, -200, 1280, 1000);
        }

    }, [cambiarImagen]);

  
    /* useEffect(() => {
        if(borrador){
            document.getElementById("myCanvas").style.cursor = `url(${Borrador}), default`;
            console.log("entre al if Borrador true =====>", borrador);
            //ctxRef.current.clearReact(0, 0, 10, 10);
        
        }
        console.log("Borrador =====>", borrador);
        return;
    }, [borrador]);
 */
    return (
        <>
            <div className="draw-area">
                <Menu
                    setLineColor={setLineColor}
                    setLineWidth={setLineWidth}
                    setLineOpacity={setLineOpacity}
                    setBorrador={setBorrador}
                    borrador={borrador}
                    lapiz={lapiz} 
                    setLapiz={setLapiz}
                    //cambiarImagen={cambiarImagen}
                    setCambiarImagen={setCambiarImagen}
                />
            </div>
            <div style={{ width: "100%", /* height: "100%" border: "1px blue solid" */ marginTop: "20px", display: "flex", flexDirection: "column" }}>
                <canvas
                    id="myCanvas"
                    onMouseDown={startDrawing}
                    onMouseUp={endDrawing}
                    onMouseMove={draw}
                    ref={canvasRef}
                    width={`1280`}
                    height={`720`}
                />
                <Amcharts />
                {/* <img src={MapaMundial} id="myMapa" styles={{display:"none"}}/> */}
            </div>
        </>


    );
}


// const App = () => {

//     return (
//         <div style={{ width: "100%", height: "100%" }}>
//               <Amcharts/>
//             {/* <Paint canvasRef={canvasRef}/> */}
//         </div>
//         //<MapsReactjs/>
//     );
// }


export default App;
