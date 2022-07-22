import React, { useEffect, useState, Component, useLayoutEffect, useRef } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
//import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
//import { am5geodata_continentsLow, } from "@amcharts/amcharts5/geodata";
import am5geodata_continentsLow from "@amcharts/amcharts5-geodata/continentsLow";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import Country from "./Country";


// const MapaMundial = () => {
//   try {
//     // am5.ready(function () {

//     // Create root element
//     // https://www.amcharts.com/docs/v5/getting-started/#Root_element
//     var root = am5.Root.new("chartdiv");

//     console.log("========root ===========>", root);

//     // Set themes
//     // https://www.amcharts.com/docs/v5/concepts/themes/
//     root.setThemes([
//       am5themes_Animated.new(root)
//     ]);


//     // Create the map chart
//     // https://www.amcharts.com/docs/v5/charts/map-chart/
//     const chart = root.container.children.push(
//       am5map.MapChart.new(root, {
//         panX: "rotateX",
//         panY: "rotateY",
//         projection: am5map.geoOrthographic(),
//         paddingBottom: 20,
//         paddingTop: 20,
//         paddingLeft: 20,
//         paddingRight: 20,
//         id: "idChart"
//       }));

//     console.log("********chart ********", chart)
//     // Create main polygon series for countries
//     // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
//     var polygonSeries = chart.series.push(
//       am5map.MapPolygonSeries.new(root, {
//         geoJSON: am5geodata_continentsLow,
//         // exclude: ["antarctica"]
//       })
//     );

//     polygonSeries.mapPolygons.template.setAll({
//       tooltipText: "{name}",
//       toggleKey: "active",
//       templateFied: "settings",
//       interactive: true
//     });

//     polygonSeries.mapPolygons.template.states.create("hover", {
//       //fill: root.interfaceColors.get("primaryButtonHover")
//       fill: am5.color(0x677935),
//     });


//     chart.events.on("click", function(ev) {

//       console.log("========> ev.point ========>",ev );
//       chart.zoomToDataItem(ev.target.dataItem);
//       chart.hide();
//       //countrySeries.show();
//       //homeButton.show();
//       //console.log(chart.invert(ev.point))
//     });


//     var colors = am5.ColorSet.new(root, {});

//     /*  */

//     polygonSeries.data.setAll([{
//       id: "europe",
//       settings: {
//         fill: colors.next(),
//         fillPattern: am5.LinePattern.new(root, {
//           color: am5.color(0xffffff),
//           rotation: 45,
//           strokeWidth: 1
//         })
//       }
//     }, {
//       id: "asia",
//       settings: {
//         fill: colors.next(),
//         fillPattern: am5.RectanglePattern.new(root, {
//           color: am5.color(0xffffff),
//           checkered: true
//         })
//       }
//     }, {
//       id: "africa",
//       settings: {
//         fill: colors.next(),
//         fillPattern: am5.CirclePattern.new(root, {
//           color: am5.color(0xffffff),
//           checkered: true
//         })
//       }
//     }, {
//       id: "northAmerica",
//       settings: {
//         fill: colors.next(),
//         fillPattern: am5.CirclePattern.new(root, {
//           color: am5.color(0xffffff)
//         })
//       }
//     }, {
//       id: "southAmerica",
//       settings: {
//         fill: colors.next(),
//         fillPattern: am5.LinePattern.new(root, {
//           color: am5.color(0xffffff),
//           rotation: 90,
//           strokeWidth: 2
//         })
//       }
//     }, {
//       id: "oceania",
//       settings: {
//         fill: colors.next(),
//         fillPattern: am5.LinePattern.new(root, {
//           color: am5.color(0xffffff),
//         })
//       }
//     }])
//     /*  */


//     // Create series for background fill
//     //https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
//     var backgroundSeries = chart.series.push(
//       am5map.MapPolygonSeries.new(root, {}));
//     backgroundSeries.mapPolygons.template.setAll({
//       fill: root.interfaceColors.get("alternativeBackground"),
//       fillOpacity: 0.1,
//       strokeOpacity: 0
//     });

//     backgroundSeries.data.push({
//       geometry: am5map.getGeoRectangle(90, 180, -90, -180)
//     });


//     // Create graticule series
//     // https://www.amcharts.com/docs/v5/charts/map-chart/graticule-series/
//     var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(root, {}));
//     graticuleSeries.mapLines.template.setAll({ strokeOpacity: 0.1, stroke: root.interfaceColors.get("alternativeBackground") })



//     // Set up zooming in on clicked continent
//     // polygonSeries.mapPolygons.template.events.on("click", function (ev) {
//     //   polygonSeries.zoomToDataItem(ev.target.dataItem);
//     //   //polygonSeries.hide();
//     //   //countrySeries.show();
//     //   //homeButton.show();
//     // });


//     // Rotate animation
//     chart.animate({
//       key: "rotationX",
//       from: 0,
//       to: 360,
//       duration: 30000,
//       loops: Infinity
//     });

//     chart.appear(1000, 100);

//   } catch (error) {
//     console.log(error);
//   }
// }


const MapaMundial = () => {
  try {
    var root = am5.Root.new("chartdiv");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);


    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    // var chart = root.container.children.push(am5map.MapChart.new(root, {
    //   panX: "rotateX",
    //   projection: am5map.geoNaturalEarth1()
    // }));

        // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/


    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "rotateY",
        projection: am5map.geoOrthographic(),
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
      }));
      console.log("roottttttttt===>", chart);

    // Create polygon series for continents
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var continentSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_continentsLow,
      exclude: ["antarctica"]
    }));

    continentSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true
    });

    continentSeries.mapPolygons.template.states.create("hover", {
      fill: root.interfaceColors.get("primaryButtonActive")
    });

    // Set up zooming in on clicked continent
    continentSeries.mapPolygons.template.events.on("click", function (ev) {
      continentSeries.zoomToDataItem(ev.target.dataItem);
      continentSeries.hide();
      countrySeries.show();
      homeButton.show();
    });


    // Create polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var countrySeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: ["AQ"],
      visible: false
    }));

    countrySeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true
    });

    countrySeries.mapPolygons.template.states.create("hover", {
      fill: root.interfaceColors.get("primaryButtonActive")
    });

    countrySeries.mapPolygons.template.events.on("click", (ev)=> {
      console.log("click en el pais ", ev);
      root.dispose();
      const codigoCountry ="xz6Z";
      Country(codigoCountry);
    });

    // Add a button to go back to continents view
    var homeButton = chart.children.push(
      am5.Button.new(root, {
      paddingTop: 10,
      paddingBottom: 10,
      x: am5.percent(100),
      centerX: am5.percent(100),
      opacity: 0,
      interactiveChildren: false,
      icon: am5.Graphics.new(root, {
        svgPath: "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8",
        fill: am5.color(0xffffff)
      })
    }));

    homeButton.events.on("click", function () {
      chart.goHome();
      continentSeries.show();
      countrySeries.hide();
      homeButton.hide();
    })


    // Create series for background fill
    //https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    var backgroundSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {}));
    backgroundSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0.1,
      strokeOpacity: 0
    });

    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180)
    });


    // Create graticule series
    // https://www.amcharts.com/docs/v5/charts/map-chart/graticule-series/
    var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(root, {}));
    graticuleSeries.mapLines.template.setAll({ strokeOpacity: 0.1, stroke: root.interfaceColors.get("alternativeBackground") })


    // Rotate animation
    chart.animate({
      key: "rotationX",
      from: 0,
      to: 360,
      duration: 30000,
      loops: Infinity
    });


    } catch (error) {
      console.log(error)
    }

}


const Amcharts = ({

  }) => {



    setTimeout(() => {
      try {
        MapaMundial();
        
        //detectarClick();
      } catch (error) {
        console.log(error);
      }
    }, 0)

    // setTimeout(() => {
    //   var root = am5.Root.new("chartdiv");

    //   // Set themes
    //   root.setThemes([
    //     am5themes_Animated.new(root)
    //   ]);

    //   var chart = root.container.children.push(
    //     am5map.MapChart.new(root, {
    //       panX: "rotateX",
    //       projection: am5map.geoNaturalEarth1()
    //     })
    //   );

    //   // Create polygon series
    //   var polygonSeries = chart.series.push(
    //     am5map.MapPolygonSeries.new(root, {
    //       geoJSON: am5geodata_continentsLow,
    //       exclude: ["antarctica"]
    //     })
    //   );

    //   polygonSeries.mapPolygons.template.setAll({
    //     tooltipText: "{name}",
    //     interactive: true,
    //     templateField: "settings"
    //   });

    //   polygonSeries.mapPolygons.template.states.create("hover", {
    //     fill: am5.color(0x677935)
    //   });

    //   var colors = am5.ColorSet.new(root, {});

    //   polygonSeries.data.setAll([{
    //     id: "europe",
    //     settings: {
    //       fill: colors.next(),
    //       fillPattern: am5.LinePattern.new(root, {
    //         color: am5.color(0xffffff),
    //         rotation: 45,
    //         strokeWidth: 1
    //       })
    //     }
    //   }, {
    //     id: "asia",
    //     settings: {
    //       fill: colors.next(),
    //       fillPattern: am5.RectanglePattern.new(root, {
    //         color: am5.color(0xffffff),
    //         checkered: true
    //       })
    //     }
    //   }, {
    //     id: "africa",
    //     settings: {
    //       fill: colors.next(),
    //       fillPattern: am5.CirclePattern.new(root, {
    //         color: am5.color(0xffffff),
    //         checkered: true
    //       })
    //     }
    //   }, {
    //     id: "northAmerica",
    //     settings: {
    //       fill: colors.next(),
    //       fillPattern: am5.CirclePattern.new(root, {
    //         color: am5.color(0xffffff)
    //       })
    //     }
    //   }, {
    //     id: "southAmerica",
    //     settings: {
    //       fill: colors.next(),
    //       fillPattern: am5.LinePattern.new(root, {
    //         color: am5.color(0xffffff),
    //         rotation: 90,
    //         strokeWidth: 2
    //       })
    //     }
    //   }, {
    //     id: "oceania",
    //     settings: {
    //       fill: colors.next(),
    //       fillPattern: am5.LinePattern.new(root, {
    //         color: am5.color(0xffffff),
    //       })
    //     }
    //   }])
    // }

    // )

    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px", border: '1px red solid' }}>

      </div>
    );
  }


  Amcharts.propTypes = {

  };





  export default Amcharts;