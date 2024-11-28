import React from "react";
import { selectData, selectHierarchicalData } from "../redux/dataSelectors";
import { connect } from "react-redux";

function VisualisePage({ data, hierarchicalData }) {
  return <div>hi</div>;
}

const mapStateToProps = (state) => ({
  data: selectData(state),
  hierarchicalData: selectHierarchicalData(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VisualisePage);
