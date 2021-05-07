/* eslint-disable */
import { useD3 } from './useD3';
import React from 'react';
import * as d3 from 'd3';

function HorizontalBarChart({ data, width, height, color }) {
  const ref = useD3(
    (svg) => {
    //   const height = 400;
    //   const width = 250;
      const margin = {top: 30, right: 0, bottom: 10, left: 80};
      const barHeight = 25;

      const x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([margin.left, width - margin.right]);

      const y = d3.scaleBand()
        .domain(d3.range(data.length))
        .rangeRound([margin.top, height - margin.bottom])
        .padding(0.1);

      const format = x.tickFormat(20, data.format);

      const xAxis = g => g
        .attr("transform", `translate(0,${margin.top})`)
        .call(d3.axisTop(x).ticks(width / 80, data.format))
        .call(g => g.select(".domain").remove());

      const yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).tickFormat(i => data[i].name).tickSizeOuter(0));

      svg.append("g")
          .attr("fill", color)
        .selectAll("rect")
        .data(data)
        .join("rect")
          .attr("x", x(0))
          .attr("y", (d, i) => y(i))
          .attr("width", d => x(d.value) - x(0))
          .attr("height", y.bandwidth());
      
      svg.append("g")
          .attr("fill", "white")
          .attr("text-anchor", "end")
          .attr("font-family", "sans-serif")
          .attr("font-size", 12)
        .selectAll("text")
        .data(data)
        .join("text")
          .attr("x", d => x(d.value))
          .attr("y", (d, i) => y(i) + y.bandwidth() / 2)
          .attr("dy", "0.35em")
          .attr("dx", -4)
          .text(d => format(d.value))
        .call(text => text.filter(d => x(d.value) - x(0) < 20) // short bars
          .attr("dx", +4)
          .attr("fill", "black")
          .attr("text-anchor", "start"));

      svg.append("g")
          .call(xAxis);

      svg.append("g")
          .call(yAxis);
    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        // height: 400,
        width: "100%",
        // marginRight: "0px",
        // marginLeft: "0px",
      }}
    >
    </svg>
  );
}

export default HorizontalBarChart;