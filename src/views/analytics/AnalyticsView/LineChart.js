/* eslint-disable */
import { useD3 } from './useD3';
import React, { useEffect } from 'react';
import * as d3 from 'd3';

function LineChart({ data, range, width, height, color }) {
  // const svg = d3.create("svg")
  //     .attr("viewBox", [0, 0, width, height]);

  const margin = {top: 20, right: 30, bottom: 30, left: 50};
  // const height = 500;

  const parser = d3.timeParse("%Y-%m-%d");
  for (var i in data) {
    data[i].date = parser(data[i].date);
    // console.log(data[i].date)
  }

  const ref = useD3(
    (svg) => {
      // console.log("Inside ref useD3");
      // svg.select('#container')
      //     .append('svg')
      //     .attr('width', width + margin.left + margin.right)
      //     .attr('height', height + margin.top + margin.bottom)
      //     .append('g')
      //     .attr('transform', `translate(${margin.left},${margin.top})`);

      const lineChart = d3.line()
        .defined(d => !isNaN(d.value))
        .x(d => x(d.date))
        .y(d => y(d.value));

      const x = d3.scaleUtc()
        .domain(d3.extent(data, d => d.date))
        .range([margin.left, width - margin.right]);
      // console.log(d3.extent(data, d => d.date));

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);

      const xAxis = g => g
        // .attr('class', 'x-axis')
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(width / 50).tickSizeOuter(0));

      const yAxis = g => g
        // .attr('class', 'y-axis')
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove())
        .call(g => g.select(".tick:last-of-type text").clone()
            .attr("x", 3)
            .attr("text-anchor", "start")
            .attr("font-weight", "bold")
            .text(data.y));

      svg.append("g")
          .call(xAxis);

      svg.append("g")
          .call(yAxis);

      // svg.append("path")
      //     .datum(data)
      //     .attr("fill", "none")
      //     .attr("stroke", color)
      //     .attr("stroke-width", 1.5)
      //     .attr("stroke-linejoin", "round")
      //     .attr("stroke-linecap", "round")
      //     .attr('class', 'line') 
      //     .attr("d", lineChart);

      if (color == "LightCoral") {
        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", color)
          .attr("stroke-width", 1.5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr('class', 'line') 
          .attr("d", lineChart)
          .attr("id", "lineLightCoral");
      } else if (color == "Turquoise") {
        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", color)
          .attr("stroke-width", 1.5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr('class', 'line') 
          .attr("d", lineChart)
          .attr("id", "lineTurquoise");
      }
    },
    [data.length]
  );

  useEffect(() => {
    // console.log("LineChart.js | range = " + JSON.stringify(range));

    let line;
    if (color == "LightCoral") {
      // console.log("Color case 1: LightCoral");
      line = d3.selectAll("path#lineLightCoral");
    } else if (color == "Turquoise") {
      // console.log("Color case 2: Turquoise");
      line = d3.selectAll("path#lineTurquoise");
    } else {
      // console.log("Color case 3: NoColor");
      line = d3.selectAll("path");
    }

    const x = d3.scaleUtc()
        .domain(d3.extent(data, d => d.date))
        .range([margin.left, width - margin.right]);
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);
    const lineChart = d3.line()
        .defined(d => !isNaN(d.value))
        .x(d => x(d.date))
        .y(d => y(d.value));
    
    // console.log("data[data.length-1]: " + JSON.stringify(data[data.length-1]));
    // console.log("x range: " + x.range());

    if (!range) {
      // console.log("case 1 | " + range);
      line.datum(data)
        .style("fill", "none")
        .attr("d", lineChart)
        .style("stroke", color);
    } else if (!range.length) {
      // console.log("case 2 | " + range);
      line.datum(data)
        .style("fill", "none")
        .attr("d", lineChart)
        .style("stroke", color);
    } else {
      // console.log("case 3 | " + range);
      const [x1, x2] = range;
      let xMin = x.range()[0];
      let xMax = x.range()[1];
      let xLength = xMax - xMin;

      // console.log("xMin: " + xMin);
      // console.log("xMax: " + xMax);
      // console.log("xLength: " + xLength);
      // console.log("LineChart.js | Begin printing data");
      // data.map((d) => {
      //   if (x1 <= ((x(d.date) - xMin) / xLength * 100) && ((x(d.date) - xMin) / xLength * 100) < x2) {
      //     console.log("value: " + d.date + " | x: " + x(d.date));
      //   }
      // });

      let dataFilter = data.filter((d) => x1 <= ((x(d.date) - xMin) / xLength * 100) && ((x(d.date) - xMin) / xLength * 100) < x2);
      // let dataFilterSub1 = data.filter((d) => x1 > ((x(d.date) - xMin) / xLength * 100));
      // let dataFilterSub2 = data.filter((d) => ((x(d.date) - xMin) / xLength * 100) >= x2);

      line.remove();

      if (color == "LightCoral") {
        d3.select(ref.current)
          .append("path")
          .datum(dataFilter)
          .attr("fill", "none")
          .attr("stroke", color)
          .attr("stroke-width", 1.5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr('class', 'line') 
          .attr("d", lineChart)
          .attr("id", "lineLightCoral");
      } else if (color == "Turquoise") {
        d3.select(ref.current)
          .append("path")
          .datum(dataFilter)
          .attr("fill", "none")
          .attr("stroke", color)
          .attr("stroke-width", 1.5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr('class', 'line') 
          .attr("d", lineChart)
          .attr("id", "lineTurquoise");
      }

      // d3.select(ref.current)
      //   .append("path")
      //   .datum(dataFilterSub1)
      //   .attr("fill", "none")
      //   .attr("stroke", "gray")
      //   .attr("stroke-width", 1.5)
      //   .attr("stroke-linejoin", "round")
      //   .attr("stroke-linecap", "round")
      //   .attr('class', 'line') 
      //   .attr("d", lineChart)
      //   .attr("id", "lineLightCoral");

      // d3.select(ref.current)
      //   .append("path")
      //   .datum(dataFilterSub2)
      //   .attr("fill", "none")
      //   .attr("stroke", "gray")
      //   .attr("stroke-width", 1.5)
      //   .attr("stroke-linejoin", "round")
      //   .attr("stroke-linecap", "round")
      //   .attr('class', 'line') 
      //   .attr("d", lineChart)
      //   .attr("id", "lineLightCoral");
    }
  });

  return (
    <svg
      ref={ref}
      style={{
        // height: 150,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      {/* <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" /> */}
    </svg>
  );
}

export default LineChart;