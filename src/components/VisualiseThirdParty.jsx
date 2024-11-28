import React from "react";
import TreeChart from "../utils/CustomTree";
import { selectHierarchicalData } from "../redux/dataSelectors";
import { connect } from "react-redux";
import PackChart from "../utils/CustomPack";
import Title from "./Title";
import { Link } from "react-router-dom";

function VisualiseThirdParty({ hierarchicalData }) {
  return (
    <>
      <Title />
      <div className="flex w-full flex-col items-center justify-center">
        <TreeChart data={hierarchicalData} />
        <PackChart data={hierarchicalData} />
      </div>
      <div className="my-10 text-center text-lg font-semibold text-blue-500">
        <Link to="/dashboard">Click Here To View the Table</Link>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  hierarchicalData: selectHierarchicalData(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisualiseThirdParty);
