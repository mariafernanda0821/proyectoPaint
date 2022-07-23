import { useEffect, useRef, useState } from "react";
import Menu from "./Components/Menu";
import Amcharts from './Components/Amcharts/Amcharts';

import "./App.css";

import MapaMundial from "./images/mapaMundial.svg";
//import MapaMundial from "./images/metamask-fox.svg";
import Borrador from "./images/borrador.png";
import { isoFormat } from "d3-time-format";



function App() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const canvasRect = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(1);
    const [lineColor, setLineColor] = useState("black");
    const [lineOpacity, setLineOpacity] = useState(0.1);
    const [borrador, setBorrador] = useState(false);
    const [lapiz, setLapiz] = useState(false);
    const [cambiarImagen, setCambiarImagen] = useState(null);

    const [coordenada, setCoordenadas] = useState({
        x: 0,
        y: 0
    });
    // Initialization when the component
    // mounts for the first time
    // console.log("canvasRef canvasRef", canvasRef);
    // console.log("ctxRef ctxRef", ctxRef);
    // console.log("canvasRect canvasRect", canvasRect);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;
        canvasRect.current = rect;

    }, [lineColor, lineOpacity, lineWidth]);

    // Function for starting the drawing, para saber en donde va a empezar a dibujar es decir, punto inicial
    const startDrawing = (e) => {
        const rect = canvasRect.current;
        const ctx = ctxRef.current;
        // console.log(`startDrawing ==${e.clientX} ==> ${e.clientY} ==> ${rect.left} ==> ${rect.top}`);
        // console.log(`startDrawing resta ${e.clientX - rect.left} ==> ${e.clientY - rect.top}`);
        // console.log(` startDrawingnativeEvent.offsetX  ${e.nativeEvent.offsetX} ==> ${e.nativeEvent.offsetY}`);
        if (lapiz) {
            ctx.beginPath();

            ctx.moveTo(
                e.nativeEvent.offsetX,
                e.nativeEvent.offsetY
            );
            /* ctx.moveTo(
                Math.abs(e.clientX - rect.left),
                Math.abs(e.clientY - rect.top),
            ); */
            setIsDrawing(true);
        }
    };

    // Function for ending the drawing
    const endDrawing = () => {

        ctxRef.current.closePath();
        setIsDrawing(false);

    };


    /* esta funcion es dibujar */
    const draw = (e) => {
        if (!isDrawing) {
            return;
        }
        const rect = canvasRect.current;
        const ctx = ctxRef.current;
        //   console.log("ctx ctx ========>", ctx);
        console.log(`dar  ==${e.clientX} ==> ${e.clientY} ==> ${rect.left} ==> ${rect.top}`);
        console.log(`dar  resta ${Math.abs(e.clientX - rect.left)} ==> ${Math.abs(e.clientY - rect.top)}`);
        console.log(` dar nativeEvent.offsetX  ${e.nativeEvent.offsetX} ==> ${e.nativeEvent.offsetY}`);
        if (lapiz) {

            /* ctx.lineTo(
                Math.abs(e.clientX - rect.left),
                Math.abs(e.clientY - rect.top),
            ); */

            ctx.lineTo(
                e.nativeEvent.offsetX,
                e.nativeEvent.offsetY
            );

            ctx.stroke();

        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;
        canvasRect.current = rect;
        canvasRef.current.width = canvasRef.current.width;
        const img = new Image();

        img.src = MapaMundial;
        img.id = "imagenCanvas";
        console.log("imagen----------", img)
        img.onload = function () {
            ctxRef.current.drawImage(img, 0, 0, canvas.width, canvas.height);
        }

    }, []);


    useEffect(() => {
        if (borrador) {
            canvasRef.current.width = canvasRef.current.width;
            ctxRef.current.closePath();
            setIsDrawing(false);
        }
    }, [borrador])


    useEffect(() => {
        if (cambiarImagen) {
            //console.log("entre al useEffect", cambiarImagen);
            //const canvas = canvasRef.current;
            // const img = document.querySelector('imagenCanvas'); 
            // image = document.querySelector(nameImage)//new Image();
            const img = new Image()
            //console.log("imagenes =========>", img);
            // img.onload = start;
            // img.onerror = function () { alert(img.src + ' failed'); }
            // img.src = "someImage.png";
            img.src = cambiarImagen;

            img.onerror = function () { alert(img.src + ' failed'); }

            img.addEventListener('load', () => {
                ctxRef.current.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);

            }, false);

            // img.onload = function () {
            //     ctxRef.current.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);

            // }

            const startCargarImagen = () => {
                ctxRef.current.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);

            }
            //console.log("ctxRef ctxRef ctxRef ctxRef",ctxRef).current.drawImage();
            // img.onload( function () {

            // });
        }

        // const ctx = canvas.getContext("2d");


        // const searchImagen = document.getElementById("myImagen");
        // searchImagen.src = cambiarImagen;
        // searchImagen.onload = function () {
        //     ctx.getContext("2d").drawImage(searchImagen, 0, -200, 1280, 1000);
        // }

    }, [cambiarImagen]);


    /* useEffect(() => {
        if(borrador){
            //document.getElementById("myCanvas").style.cursor = `url(${Borrador}), default`;
            console.log("entre al if Borrador true =====>", borrador);
            S
            ctxRef.current.clearReact(0, 0, 10, 10);
        
        }
        console.log("Borrador =====>", borrador);
        return;
    }, [borrador]); */

    return (
        <>
            {
                lapiz ?
                    <h2 style={{ color: "red", fontSize: "14px" }}> Activo </h2>
                    :
                    <h2 style={{ color: "red", fontSize: "14px" }}> desastivo </h2>
            }

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
                    style={{ border: "1px red solid" }}
                >
                </canvas>
                {/* <Amcharts /> */}
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
