import React from "react";

const TreeNode = ({ node }) => {
  return (
    <div>
      <div>
        {"|===".repeat(node.depth)}
        {node.id}. {node.type}, [{node.left}, {node.right}]
      </div>
      {node.children && node.children.length > 0 && (
        <div style={{ marginTop: 10 }}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
