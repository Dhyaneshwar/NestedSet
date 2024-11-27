export const dataTransformer = (data) => {
  return data.map((item) => {
    const key = Object.keys(item)[0];
    const data = item[key];
    return {
      id: data.id,
      left: data.lft,
      right: data.rgt,
      type: data.type,
      depth: item.depth,
    };
  });
};

export const filterData = (sid, data) => {
  const selectedRow = data.find(({ id }) => id === sid);
  const { id, left, right, type, depth } = selectedRow;
  return `Node with id - ${id} and type - ${type} begin at ${left} and end at ${right}`;
};

export const createNestedSet = (flatData) => {
  const sortedData = flatData
    .filter((node) => node.left < node.right)
    .sort((a, b) => a.left - b.left);

  const buildTree = (nodes) => {
    const stack = [];
    const root = [];

    nodes.forEach((node) => {
      const item = { ...node, children: [] };

      if (stack.length === 0) {
        root.push(item);
        stack.push(item);
        return;
      }

      while (stack.length > 0 && stack[stack.length - 1].right < item.left) {
        stack.pop();
      }

      if (stack.length > 0) {
        stack[stack.length - 1].children.push(item);
      } else {
        root.push(item);
      }

      stack.push(item);
    });

    return root;
  };

  return buildTree(sortedData);
};
