import React from "react";
import * as d3 from "d3";

const BarChart = ({ width = 400, height = 130, title ,to}) => {
  const data =
    title == "Support & Resistance"
      ? [
          { label: "Bar1", start: 0, end: 20 },
          { label: "Bar2", start: 0, end: 20 },
          { label: "Bar3", start: 0, end: 20 },
          { label: "Bar4", start: 0, end: 20 },
          { label: "Bar5", start: 0, end: 20 },
          { label: "Bar6", start: 0, end: 20 },
          { label: "Bar7", start: 0, end: 20 },
          { label: "Bar8", start: 0, end: 20 },
          { label: "Bar9", start: 0, end: 20 },
          { label: "Bar10", start: 0, end: 20 },
          { label: "Bar11", start: 0, end: 20 },
          { label: "Bar12", start: 0, end: 20 },
          { label: "Bar13", start: 0, end: 20 },
          { label: "Bar14", start: 0, end: 20 },
          { label: "Bar15", start: 0, end: 20 },
          { label: "Bar16", start: 0, end: 20 },
          { label: "Bar17", start: 0, end: 20 },
        ]
      : [
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
  let barColor;
  switch (title.toLowerCase()) {
    case "summary":
      barColor = ["#EB1D54", "#8f97c0", "#3CBB00"];
      break;
    case "support & resistance":
      barColor = ["#0203fc", "#bcc6ff", "#0203fc"];
      break;
    case "moving averages":
      barColor = ["#ff9800", "#89997a", "#028ee7"];
      break;
    case "oscillators":
      barColor = ["#ff3e27", "#804675", "#024de7"];
      break;
    default:
      barColor = ["blue", "green", "red"];
      break;
  }
  const svgRef = React.useRef();

  React.useEffect(() => {
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 20, bottom: 30, left: 20 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
  
    const xScale = d3
      .scaleBand()
      .range([0, innerWidth])
      .domain(data.map((d) => d.label))
      .padding(0.7);
  
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.end)])
      .range([innerHeight, 0]);
  
    const colorScale = d3
      .scaleLinear()
      .domain([0, data.length / 2, data.length - 1])
      .range(barColor);
  
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
    const centerY = yScale((data[8].end + data[8].start) / 2);
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
  
    const pointer = g
      .append("circle")
      .attr("cx", xScale("Bar3") + xScale.bandwidth() / 2)
      .attr("cy", centerY)
      .attr("r", radius)
      .attr("fill", "white")
      .attr("stroke", "url(#pointer-gradient)")
      .attr("stroke-width", ringWidth);
  
    const animatePointer = () => {
      pointer
        .transition()
        .duration(1000) // duration in milliseconds
        .attr("cx", xScale(to) + xScale.bandwidth() / 2) // change the target x-coordinate
        .on("end", animatePointer); // repeat the animation
    };
  
    animatePointer();
  }, []);
  
  

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      // preserveAspectRatio="xMidYMid meet"
    ></svg>
  );
};

export default BarChart;
