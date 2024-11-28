import React from "react";
import { selectData, selectHierarchicalData } from "../redux/dataSelectors";
import { connect } from "react-redux";
import TreeGraph from "./TreeGraph";
import Title from "./Title";

function VisualisePage({ data, hierarchicalData }) {
  return (
    <>
      <Title />
      <TreeGraph treeData={hierarchicalData} />
    </>
  );
}

const mapStateToProps = (state) => ({
  data: selectData(state),
  hierarchicalData: selectHierarchicalData(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VisualisePage);
