import React from "react";
import TreeChart from "../utils/CustomTree";
import { selectHierarchicalData } from "../redux/dataSelectors";
import { connect } from "react-redux";
import PackChart from "../utils/CustomPack";

function VisualisePage({ hierarchicalData }) {
  return (
    <div className="flex w-full items-center justify-center">
      <TreeChart data={hierarchicalData} />
      <PackChart data={hierarchicalData} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  hierarchicalData: selectHierarchicalData(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VisualisePage);
