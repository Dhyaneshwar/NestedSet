import React from "react";
import TreeChart from "../utils/CustomTree";
import { selectHierarchicalData } from "../redux/dataSelectors";
import { connect } from "react-redux";

function VisualisePage({ hierarchicalData }) {
  return (
    <div className="flex w-full flex-col justify-center">
      <TreeChart data={hierarchicalData} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  hierarchicalData: selectHierarchicalData(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VisualisePage);
