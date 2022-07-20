import { useEffect, useRef, useState } from "react";
import Menu from "./Components/Menu";
import Amcharts from './Components/Amcharts/Amcharts';

import "./App.css";

function App() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState("black");
    const [lineOpacity, setLineOpacity] = useState(0.1);

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
        const canvasElement = document.getElementsByTagName("canvas");
        const lengthCanvas = canvasElement.length;
        console.log("lengthCanvas", lengthCanvas);
        console.log("lengthCanvas canvasElement", canvasElement);

        for (let index = 0; index < canvasElement.length; index++) {
            const element = canvasElement[index];
            console.log("index ========>", index)
            console.log("elemenet =============>",element)
            
        }
   
    },[])



    return (
        <>
            {/* <div className="App">
                <div className="draw-area">
                    <Menu
                        setLineColor={setLineColor}
                        setLineWidth={setLineWidth}
                        setLineOpacity={setLineOpacity}
                    />
                </div>
            </div> */}
            <div className="draw-area">
                <Menu
                    setLineColor={setLineColor}
                    setLineWidth={setLineWidth}
                    setLineOpacity={setLineOpacity}
                />
            </div>
            {/* <div>
                <canvas
                    onMouseDown={startDrawing}
                    onMouseUp={endDrawing}
                    onMouseMove={draw}
                    ref={canvasRef}
                    width={`1280px`}
                    height={`720px`}
                />
            </div> */}
            <div style={{ width: "100%", height: "100%" }}>
                <canvas
                    onMouseDown={startDrawing}
                    onMouseUp={endDrawing}
                    onMouseMove={draw}
                    ref={canvasRef}
                    width={`1280px`}
                    height={`720px`}
                />
                <Amcharts />
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
