/* eslint-disable */
import { useD3 } from './useD3';
import React from 'react';
import * as d3 from 'd3';

function LineChart({ data, width, height, color, tickLength }) {
  // const svg = d3.create("svg")
  //     .attr("viewBox", [0, 0, width, height]);

  const parser = d3.timeParse("%Y-%m-%d");
  for (var i in data) {
    data[i].date = parser(data[i].date);
    // console.log(data[i].date)
  }

  const ref = useD3(
    (svg) => {
      const margin = {top: 20, right: 30, bottom: 30, left: 50};
      // const height = 500;

      // svg.select('#container')
      //     .append('svg')
      //     .attr('width', width + margin.left + margin.right)
      //     .attr('height', height + margin.top + margin.bottom)
      //     .append('g')
      //     .attr('transform', `translate(${margin.left},${margin.top})`);

      const line = d3.line()
        .defined(d => !isNaN(d.value))
        .x(d => x(d.date))
        .y(d => y(d.value));

      const x = d3.scaleUtc()
        .domain(d3.extent(data, d => d.date))
        .range([margin.left, width - margin.right]);
      // console.log(d3.extent(data, d => d.date));
      // console.log(width);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);

      const xAxis = g => g
        // .attr('class', 'x-axis')
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(width / tickLength).tickSizeOuter(0));

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

      svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", color)
          .attr("stroke-width", 1.5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr('class', 'line') 
          .attr("d", line);
    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: height,
        width: "100%",
        // marginRight: "0px",
        // marginLeft: "0px",
      }}
    >
      {/* <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" /> */}
    </svg>
  );
}

export default LineChart;