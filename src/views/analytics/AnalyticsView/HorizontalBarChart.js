/* eslint-disable */
import { useD3 } from './useD3';
import { forwardRef, useImperativeHandle } from 'react';
import * as d3 from 'd3';

const HorizontalBarChart = forwardRef(({ data, subData, width, height, color }, ref) => {
  const margin = { top: 30, right: 0, bottom: 10, left: 80 };
  // const barHeight = 25;

  const chartRef = useD3(
    (svg) => {
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
        .call(d3.axisTop(x).ticks(width / 80, data.format));
        // .call(g => g.select(".domain").remove());

      const yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).tickFormat(i => data[i].name).tickSizeOuter(0));

      let barChartID;

      if (color == "Turquoise") {
        barChartID = "barChartTurquoise";
      } else if (color == "OliveDrab") {
        barChartID = "barChartOliveDrab";
      }

      svg.attr("id", barChartID)
        .append("g")
        .attr("id", "rect")
        .attr("fill", color)
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("x", x(0))
        .attr("y", (d, i) => y(i))
        .attr("width", d => x(d.value) - x(0))
        .attr("height", y.bandwidth());

      svg.append("g")
        .attr("id", "text")
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
        .attr("id", "xAxis")
        .call(xAxis);

      svg.append("g")
        .attr("id", "yAxis")
        .call(yAxis);
    },
    [data.length]
  );

  useImperativeHandle(ref, () => ({

    switchRange(isSwitched) {
      // console.log("HorizontalBarChart.js || isSwitched = " + isSwitched);

      let dataUsed;
      if (!isSwitched) {
        dataUsed = data;
      } else {
        dataUsed = subData;
      }

      let barChartID;
      if (color == "Turquoise") {
        barChartID = "#barChartTurquoise";
      } else if (color == "OliveDrab") {
        barChartID = "#barChartOliveDrab";
      }

      const x = d3.scaleLinear()
        .domain([0, d3.max(dataUsed, d => d.value)])
        .range([margin.left, width - margin.right]);

      const y = d3.scaleBand()
        .domain(d3.range(dataUsed.length))
        .rangeRound([margin.top, height - margin.bottom])
        .padding(0.1);

      const format = x.tickFormat(20, dataUsed.format);

      const xAxis = g => g
        .attr("transform", `translate(0,${margin.top})`)
        .call(d3.axisTop(x).ticks(width / 80, dataUsed.format));
        // .call(g => g.select(".domain").remove());

      const yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).tickFormat(i => dataUsed[i].name).tickSizeOuter(0));

      let svg = d3.select(barChartID);
      // svg.selectAll("g").remove();

      svg
        // .append("g")
        .selectAll("g#rect")
        .attr("fill", color)
        .selectAll("rect")
        .data(dataUsed)
        // .join("rect")
        .transition()
        .duration(1000)
        .attr("x", x(0))
        .attr("y", (d, i) => y(i))
        .attr("width", d => x(d.value) - x(0))
        .attr("height", y.bandwidth());

      svg
        // .append("g")
        .selectAll("g#text")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .selectAll("text")
        .data(dataUsed)
        // .join("text")
        .transition()
        .duration(1000)
        .attr("x", d => x(d.value))
        .attr("y", (d, i) => y(i) + y.bandwidth() / 2)
        .attr("dy", "0.35em")
        .attr("dx", -4)
        .text(d => Math.round(format(d.value)))
        .attr("fill", "white")
        .attr("text-anchor", "end")
        .call(text => text.filter(d => x(d.value) - x(0) < 20) // short bars
          .attr("dx", +4)
          .attr("fill", "black")
          .attr("text-anchor", "start"));

      svg.selectAll("g#xAxis")
        .transition()
        .duration(1000)
        .call(xAxis);

      svg.selectAll("g#yAxis")
        // .transition()
        // .duration(1000)
        .call(yAxis);
    }

  }));

  return (
    <svg
      ref={chartRef}
      style={{
        // height: 400,
        width: "100%",
        // marginRight: "0px",
        // marginLeft: "0px",
      }}
    >
    </svg>
  );
});

export default HorizontalBarChart;