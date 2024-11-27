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
