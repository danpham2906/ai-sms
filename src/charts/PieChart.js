/* eslint-disable */
import { useD3 } from './useD3';
import React from 'react';
import * as d3 from 'd3';

function PieChart({ data, width, height }) {

  const parser = d3.timeParse("%Y-%m-%d");
  for (var i in data) {
    data[i].date = parser(data[i].date);
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

      const colorScale = d3.scaleOrdinal().range(["CornflowerBlue", "#C8C7C8", "#C8C7C8"]);

      const color = colorScale;

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

    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: height,
        width: '100%',
      }}
    >
    </svg>
  );
}

export default PieChart;