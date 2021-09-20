/* eslint-disable */
import { useD3 } from './useD3';
import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

function LineChart({ dataCSV, range, width, height, color }) {
  const [data, setData] = useState([]);
  const margin = { top: 20, right: 30, bottom: 30, left: 50 };

  var x, y, xAxis, yAxis, lineChart;
  useEffect(() => {
    d3.csv(dataCSV).then((d) => {
      var parser = d3.timeParse("%m/%d/%Y %H:%M:%S");
      for (var i in d) {
        d[i].human_readable = parser(d[i].human_readable);
        d[i].bpm = Math.round(d[i].bpm);
      }
      setData(d);
    });
    return () => undefined;
  }, []);

  var x = d3.scaleUtc()
    .domain(d3.extent(data, d => d.human_readable))
    .range([margin.left, width - margin.right]);

  var y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.bpm)]).nice()
    .range([height - margin.bottom, margin.top]);

  var xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 50).tickSizeOuter(0));

  var yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
      .attr("x", 3)
      .attr("text-anchor", "start")
      .attr("font-weight", "bold")
      .text(data.y));

  var lineChart = d3.line()
    .defined(d => !isNaN(d.bpm))
    .x(d => x(d.human_readable))
    .y(d => y(d.bpm));

  const ref = useD3(
    (svg) => {
      let lineChartID = "lineChart" + color;

      svg.append("g")
        .attr("id", lineChartID + "Xaxis")
        .call(xAxis);

      svg.append("g")
        .attr("id", lineChartID + "Yaxis")
        .call(yAxis);

      var clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width - margin.left - margin.right)
        .attr("height", height - margin.top - margin.bottom)
        .attr("x", margin.left)
        .attr("y", margin.top);

      svg
        .append("path")
        .attr("clip-path", "url(#clip)")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("id", lineChartID + "path")
        .attr("d", lineChart);


    },
    dataCSV
  );

  useEffect(() => {
    const lineChart = d3.line()
      .defined(d => !isNaN(d.bpm))
      .x(d => x(d.human_readable))
      .y(d => y(d.bpm));

    let dataUsed;
    if (!range) {
      dataUsed = data;
    } else if (!range.length) {
      dataUsed = data;
    } else {
      const [x1, x2] = range;
      let xMin = x.range()[0];
      let xMax = x.range()[1];
      let xLength = xMax - xMin;
      var dataFilter = data.filter((d) => x1 <= ((x(d.human_readable) - xMin) / xLength * 100) && ((x(d.human_readable) - xMin) / xLength * 100) < x2);

      dataUsed = dataFilter;

      x.domain(d3.extent(dataUsed, d => d.human_readable));

      y.domain([0, d3.max(dataUsed, d => d.bpm)]).nice();
    }

    let lineChartID;
    if (color == "LightCoral") {
      lineChartID = "lineChartLightCoral";
    } else if (color == "Turquoise") {
      lineChartID = "lineChartTurquoise";
    }

    let svg = d3.select("#" + lineChartID);
    svg.selectAll("g").remove();

    d3.select("#" + lineChartID + "Xaxis")
      .transition()
      .duration(1000)
      .call(d3.axisBottom().scale(x));

    d3.select("#" + lineChartID + "Yaxis")
      .transition()
      .duration(1000)
      .call(d3.axisLeft(y));

    d3.select("#" + lineChartID + "path")
      .datum(data)
      .transition()
      .duration(1000)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr('class', 'line')
      .attr("d", lineChart);
  });

  return (
    <svg
      ref={ref}
      style={{
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
    </svg>
  );
}

export default LineChart;