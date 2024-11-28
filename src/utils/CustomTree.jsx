import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const TreeChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 900;
    const height = 800;

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(50,50)");

    const treeLayout = d3.tree().size([height - 100, width - 200]);

    try {
      const root = d3.hierarchy(data);

      treeLayout(root);

      svg
        .selectAll(".link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", "#ccc")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .linkVertical()
            .x((d) => d.x)
            .y((d) => d.y),
        );

      const node = svg
        .selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", (d) => `translate(${d.x},${d.y})`);

      node
        .append("circle")
        .attr("r", 5)
        .attr("fill", "steelblue")
        .attr("stroke", "black")
        .attr("stroke-width", 1.5);

      node
        .append("text")
        .attr("dx", 10)
        .attr("dy", 3)
        .text(
          (d) =>
            `${d.data.id} - ${d.data.type} (${d.data.left} : ${d.data.right}) `,
        )
        .attr("font-size", "12px")
        .attr("fill", "black");
    } catch (error) {
      console.error("Error creating hierarchy:", error);
    }

    return () => {
      d3.select(svgRef.current).selectAll("*").remove();
    };
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default TreeChart;
