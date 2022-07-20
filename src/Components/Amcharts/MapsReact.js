import React from "react";
//import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

//import "./styles.css";

const MapsReactjs = () => (
  <div>
    <ComposableMap>
      <Geographies geography="./features/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  </div>
);

export default MapsReactjs;



/* version 4 */
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// am4core.useTheme(am4themes_animated);



//import am5geodata_worldLow from "@amcharts/amcharts5/geodata/worldLow"; 
//am5geodata_worldLow

// <style>
// #chartdiv {
//   width: 100%;
//   height: 500px;
// }
// </style>


// <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
// <script src="https://cdn.amcharts.com/lib/5/map.js"></script>
// <script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"></script>
// <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>




// const Amcharts = () => {
//     useEffect(() => {
//        // am5.ready(function () {

//             // Create root and chart
//             var root = am5.Root.new("chartdiv");
//             // var chart = root.container.children.push(
//             //      am5map.MapChart.new(root, {
//             //         panX: "rotateX",
//             //         panY: "none",
//             //         projection: am5map.geoNaturalEarth1()
//             //     })
//             // );
//            const rootX =  am5map.MapChart.new(root, {
//                 panX: "rotateX",
//                 panY: "none",
//                 projection: am5map.geoNaturalEarth1()
//             })
//             // Set themes
//             root.setThemes([
//                 am5themes_Animated.new(root)
//             ]);

//             // Create polygon series
//             var polygonSeries = chart.series.push(
//                 am5map.MapPolygonSeries.new(root, {
//                     //geoJSON: am5geodata_worldLow
//                 })
//             );

//             var graticuleSeries = chart.series.insertIndex(
//                 0, am5map.GraticuleSeries.new(root, {})
//             );

//             graticuleSeries.mapLines.template.setAll({
//                 stroke: am5.color(0x000000),
//                 strokeOpacity: 0.1
//             });

//             var backgroundSeries = chart.series.unshift(
//                 am5map.MapPolygonSeries.new(root, {})
//             );

//             backgroundSeries.mapPolygons.template.setAll({
//                 fill: am5.color(0xedf7fa),
//                 stroke: am5.color(0xedf7fa),
//             });

//             backgroundSeries.data.push({
//                 geometry: am5map.getGeoRectangle(90, 180, -90, -180)
//             });

//             // Add projection buttons
//             var buttons = chart.children.push(am5.Container.new(root, {
//                 x: am5.p50,
//                 centerX: am5.p50,
//                 y: am5.p100,
//                 dy: -10,
//                 centerY: am5.p100,
//                 layout: root.horizontalLayout,
//                 paddingTop: 5,
//                 paddingRight: 8,
//                 paddingBottom: 5,
//                 paddingLeft: 8,
//                 background: am5.RoundedRectangle.new(root, {
//                     fill: am5.color(0xffffff),
//                     fillOpacity: 0.3
//                 })
//             }));

//             function createButton(text, projection) {
//                 var button = buttons.children.push(am5.Button.new(root, {
//                     paddingTop: 0,
//                     paddingRight: 0,
//                     paddingBottom: 0,
//                     paddingLeft: 0,
//                     marginLeft: 5,
//                     marginRight: 5,
//                     label: am5.Label.new(root, {
//                         text: text,
//                     })
//                 }));

//                 button.events.on("click", function () {
//                     chart.set("projection", projection);
//                 });
//             }

//             createButton("geoEqualEarth", am5map.geoEqualEarth());
//             createButton("geoEquirectangular", am5map.geoEquirectangular());
//             createButton("geoMercator", am5map.geoMercator());
//             createButton("geoNaturalEarth1", am5map.geoNaturalEarth1());
//             createButton("geoOrthographic", am5map.geoOrthographic());

// //        }); // end am5.ready()

//     }) 



//     // const [root, setRoot] = useState(null);
//     // useEffect(() => {
//     //     const root = am5.Root.new("chartdiv");
//     //     return;
//     //     //setRoot(root);
//     // });

//     return (
//         <div style={{ width: '100%', height: '100%', border: '1px red solid' }}>
//             <h1>Implementacion de Mapa</h1>
//             <div id="chartdiv" style={{ width: "100%", height: "500px" }}>
//             </div>
//         </div>
//     );

// }