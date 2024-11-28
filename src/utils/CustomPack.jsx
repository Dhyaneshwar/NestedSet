import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import chroma from "chroma-js";

const PackChart = ({ data }) => {
  const generateColors = (numColors) => {
    return chroma.scale(["#fafa6e", "#096979"]).mode("lch").colors(numColors);
  };

  const colors = generateColors(7);
  const svgRef = useRef();

  useEffect(() => {
    const width = 400;
    const height = 400;

    const root = d3
      .hierarchy(data)
      .sum((d) => (d.children && d.children.length > 0 ? 0 : d.right - d.left))
      .sort((a, b) => (b.depth || 0) - (a.depth || 0));

    const pack = d3.pack().size([width, height]).padding(50);
    const nodes = pack(root);

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`);

    svg.selectAll("*").remove();

    const nodeGroup = svg
      .selectAll("g")
      .data(nodes.descendants())
      .join("g")
      .attr("transform", (d) => `translate(${d.x}, ${d.y})`);

    nodeGroup
      .append("circle")
      .attr("r", (d) => d.r)
      .attr("fill", (d) => colors[d.depth])
      .attr("stroke", "black")
      .attr("stroke-width", 1)
      .style("opacity", 0.8);

    nodeGroup
      .append("text")
      .attr("dy", (d) => -d.r + 12)
      .attr("text-anchor", "middle")
      .text((d) => `${d.data.id} - ${d.data.type}`)
      .style("font-size", (d) => `${Math.min(d.r / 3, 10)}px`)
      .style("fill", "black")
      .style("pointer-events", "none");
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default PackChart;
