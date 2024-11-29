const renderTreeNodes = (node, x, y, level, positions, lines) => {
  const posX = x;
  const posY = y;
  positions.push({ id: node.id, name: node.type, x: posX, y: posY });

  if (node.children && node.children.length > 0) {
    // Display vertically
    const horizontalSpacing = 200;
    const verticalSpacing = 100;
    const childXStart =
      posX - (node.children.length - 1) * horizontalSpacing * 0.5;

    node.children.forEach((child, index) => {
      const childX = childXStart + index * horizontalSpacing;
      const childY = posY + verticalSpacing;

      lines.push({ startX: posX, startY: posY, endX: childX, endY: childY });
      renderTreeNodes(child, childX, childY, level + 1, positions, lines);
    });

    // Display horizontally
    // const horizontalSpacing = 150;
    // const verticalSpacing = 150;
    // const childYStart =
    //   posY - (node.children.length - 1) * verticalSpacing * 0.5;

    // node.children.forEach((child, index) => {
    //   const childX = posX + horizontalSpacing;
    //   const childY = childYStart + index * verticalSpacing;

    //   lines.push({
    //     startX: posX + 4,
    //     startY: posY,
    //     endX: childX,
    //     endY: childY,
    //   });
    //   renderTreeNodes(child, childX, childY, level + 1, positions, lines);
    // });
  }
};

const TreeGraph = ({ treeData, setSelectedRow }) => {
  const positions = [];
  const lines = [];

  // Display vertically
  renderTreeNodes(treeData, 750, 35, 0, positions, lines);

  // Display horizontally
  // renderTreeNodes(treeData, 250, 350, 0, positions, lines);

  return (
    <svg width="100%" height="655px">
      {lines.map((line, index) => (
        <line
          key={index}
          x1={line.startX}
          y1={line.startY}
          x2={line.endX}
          y2={line.endY}
          stroke="black"
          strokeWidth={2}
        />
      ))}

      {positions.map((node) => (
        <g
          className="cursor-pointer"
          key={node.id}
          onClick={() => setSelectedRow(node.id)}
        >
          <circle cx={node.x} cy={node.y} r={20} fill="#ff6347" />
          <text
            x={node.x}
            y={node.y}
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="white"
            fontSize="17"
          >
            {node.id}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default TreeGraph;
