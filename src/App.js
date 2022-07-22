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
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState("black");
    const [lineOpacity, setLineOpacity] = useState(0.1);

    const [borrador, setBorrador]= useState(false);
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
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );
        setIsDrawing(true);
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

    return (
        <>
            <div className="draw-area">
                <Menu
                    setLineColor={setLineColor}
                    setLineWidth={setLineWidth}
                    setLineOpacity={setLineOpacity}
                    borrador={borrador}
                />
            </div>
            <div style={{ width: "98%", /* height: "100%" */ border: "1px blue solid", margin: "10px", display: "flex", flexDirection: "column" }}>
                <canvas
                    id="myCanvas"
                    onMouseDown={startDrawing}
                    onMouseUp={endDrawing}
                    onMouseMove={draw}
                    ref={canvasRef}
                    width={`1280px`}
                    height={`720px`}
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
