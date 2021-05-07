/* eslint-disable */
import { useD3 } from './useD3';
import React from 'react';
import * as d3 from 'd3';

function LineChart({ data, width, height, color }) {
  const ref = useD3(
    (svg) => {
      const margin = {top: 20, right: 30, bottom: 30, left: 40};
      const yMinValue = d3.min(data, d => d.value);
      const yMaxValue = d3.max(data, d => d.value);
      const xMinValue = d3.min(data, d => d.label);
      const xMaxValue = d3.max(data, d => d.label);

      svg
        .select('#container')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
      // const tooltip = d3
      //   .select('#container')
      //   .append('div')
      //   .attr('class', 'tooltip');

      const xScale = d3
        .scaleLinear()
        .domain([xMinValue, xMaxValue])
        .range([0, width]);
      const yScale = d3
        .scaleLinear()
        .range([height, 0])
        .domain([0, yMaxValue]);
      const line = d3
        .line()
        .x(d => xScale(d.label))
        .y(d => yScale(d.value))    
        .curve(d3.curveMonotoneX);

        svg
          .append('g')
          .attr('class', 'grid')
          .attr('transform', `translate(0,${height})`)
          .call(
          d3.axisBottom(xScale)
              .tickSize(-height)
              .tickFormat(''),
          );
        svg
          .append('g')
          .attr('class', 'grid')
          .call(
              d3.axisLeft(yScale)
              .tickSize(-width)
              .tickFormat(''),
          );
        svg
          .append('g')
          .attr('class', 'x-axis')
          .attr('transform', `translate(0,${height})`)
          .call(d3.axisBottom().scale(xScale).tickSize(15));
        svg
          .append('g')
          .attr('class', 'y-axis')
          .call(d3.axisLeft(yScale));
        svg
          .append('path')
          .datum(data)
          .attr('fill', 'none')
          .attr('stroke', color)
          .attr('stroke-width', 4)
          .attr('class', 'line') 
          .attr('d', line);
    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 150,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}

export default LineChart;