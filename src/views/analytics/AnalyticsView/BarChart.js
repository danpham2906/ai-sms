/* eslint-disable */
import { useD3 } from './useD3';
import * as d3 from 'd3';

function BarChart({ data, updateRange }) {
  const ref = useD3(
    (svg) => {
      const height = 150;
      const width = 1600;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.sales/1000)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`)
          .call(d3.axisBottom(x)
                  .tickValues(d3.ticks(...d3.extent(x.domain()), width / 40)
                                .filter((v) => x(v) !== undefined)
                  )
                  .tickSizeOuter(0)
          )
          .call(g => g.select(".domain").remove())
          .call(g => g.append("text")
              .attr("x", width - margin.right)
              .attr("y", -4)
              .attr("fill", "#000")
              .attr("font-weight", "bold")
              .attr("text-anchor", "end")
              .text(data.x));

      const y1Axis = (g) =>
        g.attr("transform", `translate(${margin.left},0)`)
          .style("color", "steelblue")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) => g.append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          )
          .call(g => g.select(".tick:last-of-type text").clone()
              .attr("x", 4)
              .attr("text-anchor", "start")
              .attr("font-weight", "bold")
              .text(data.y));

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);

      const bar = svg
        .select(".plot-area")
        .attr("fill", "SkyBlue")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d.year))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.sales/1000))
        .attr("height", (d) => y1(0) - y1(d.sales/1000));

      const brushEnd = (event) => {
        let value = [];

        if (!event.selection) {
          updateRange([]);
          bar.style("fill", "SkyBlue");
        } else {
          const [x1, x2] = event.selection;
          value = bar
            .style("fill", "gray")
            .filter(d => x1 <= (x(d.year)+x.bandwidth()) && x(d.year) < x2)
            .style("fill", "SkyBlue")
            .data();

          let xMin = x(x.domain()[0]);
          let xMax = x(x.domain()[data.length-1]);
          let xLength = xMax - xMin;
          let scalex1 = (x1 - xMin) / xLength * 100;
          let scalex2 = (x2 - xMin) / xLength * 100;
          updateRange([scalex1, scalex2]);

          data.map((d) => {
          });
        }

      };

      const brush = d3.brushX()
        .extent([
          [margin.left, margin.top],
          [width - margin.right, height - margin.bottom]
        ])  
        .on("end", brushEnd);

      svg.call(brush);
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

export default BarChart;