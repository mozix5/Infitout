import React from "react";
import * as d3 from "d3";

const BarChart = () => {
  const data = [
    { label: "Bar1", start: 0, end: 20 },
    { label: "Bar2", start: 1, end: 19 },
    { label: "Bar3", start: 2, end: 18 },
    { label: "Bar4", start: 3, end: 17 },
    { label: "Bar5", start: 4, end: 16 },
    { label: "Bar6", start: 5, end: 15 },
    { label: "Bar7", start: 6, end: 14 },
    { label: "Bar8", start: 7, end: 13 },
    { label: "Bar9", start: 8, end: 12 },
    { label: "Bar10", start: 7, end: 13 },
    { label: "Bar11", start: 6, end: 14 },
    { label: "Bar12", start: 5, end: 15 },
    { label: "Bar13", start: 4, end: 16 },
    { label: "Bar14", start: 3, end: 17 },
    { label: "Bar15", start: 2, end: 18 },
    { label: "Bar16", start: 1, end: 19 },
    { label: "Bar17", start: 0, end: 20 },
  ];

  const svgRef = React.useRef();

  React.useEffect(() => {
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 20, bottom: 30, left: 20 };
    const width = 400 - margin.left - margin.right;
    const height = 130 - margin.top - margin.bottom;

    const xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.label))
      .padding(0.7);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.end)])
      .range([height, 0]);

    const colorScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range(["#EB1D54", "#3CBB00"]);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.label))
      .attr("y", (d) => yScale(d.end))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => yScale(d.start) - yScale(d.end))
      .attr("fill", (d, i) => colorScale(i))
      .attr("rx", 2)
      .attr("ry", 2);

    const radius = 10;
    const centerX = xScale("Bar8") + xScale.bandwidth() / 2;
    const centerY = yScale(data[8].start) - radius;
    const ringWidth = 6;

    const gradient = g
      .append("defs")
      .append("linearGradient")
      .attr("id", "pointer-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "100%");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "rgb(90, 209, 243)");

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "rgb(254, 135, 245)");

    g.append("circle")
      .attr("cx", centerX)
      .attr("cy", centerY)
      .attr("r", radius)
      .attr("fill", "white")
      .attr("stroke", "url(#pointer-gradient)")
      .attr("stroke-width", ringWidth);
  }, []);

  return <svg ref={svgRef} width="400" height="130"></svg>;
};

export default BarChart;
