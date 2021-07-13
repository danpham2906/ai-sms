/* eslint-disable */
import { useD3 } from './useD3';
import React from 'react';
import * as d3 from 'd3';

function PieChart({ data, width, height }) {

  const parser = d3.timeParse("%Y-%m-%d");
  for (var i in data) {
    data[i].date = parser(data[i].date);
    // console.log(data[i].date)
  }

  const ref = useD3(
    (svg) => {
      const margin = { top: 20, right: 30, bottom: 30, left: 50 };

      const pie = d3.pie()
        .padAngle(0.005)
        .sort(null)
        .value(d => d.value);

      const height = Math.min(width, 400);

      const radius = Math.min(width, height) / 2;
      const arc = d3.arc()
        .innerRadius(radius * 0.67)
        .outerRadius(radius - 1);

      const colorScale = d3.scaleOrdinal().range(["#C8C7C8", "CornflowerBlue", "#C8C7C8"]);

      const color = colorScale;

      // const color = d3.scaleOrdinal()
      //   .domain(data.map(d => d.date))
      //   .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());

      const arcs = pie(data);

      svg.append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`)
        .selectAll("path")
        .data(arcs)
        .join("path")
        .attr("fill", d => color(d.data.date))
        .attr("d", arc)
        .append("title")
        .text(d => `${d.data.date}: ${d.data.value.toLocaleString()}`);

      // svg.append("g")
      //   .attr("font-family", "sans-serif")
      //   .attr("font-size", 12)
      //   .attr("text-anchor", "middle")
      //   .attr("transform", `translate(${width/2},${height/2})`)
      //   .selectAll("text")
      //   .data(arcs)
      //   .join("text")
      //   .attr("transform", d => `translate(${arc.centroid(d)})`)
      //   // .call(text => text.append("tspan")
      //     // .attr("y", "-0.4em")
      //     // .attr("font-weight", "bold")
      //     // .text(d => d.data.date))
      //   .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
      //     .attr("x", 0)
      //     .attr("y", "0.7em")
      //     .attr("fill-opacity", 0.7)
      //     .text(d => d.data.value.toLocaleString()));
    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: height,
        width: '100%',
        // position: 'absolute',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%,-50%)',
        // margin: "10px 5px 10px 5px",
        // marginLeft: "0px",
      }}
    >
      {/* <g transform="translate(250,250)"></g> */}
      {/* <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" /> */}
    </svg>
  );
}

export default PieChart;