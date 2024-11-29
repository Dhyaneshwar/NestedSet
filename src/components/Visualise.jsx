import React, { useState } from "react";
import { selectData, selectHierarchicalData } from "../redux/dataSelectors";
import { connect } from "react-redux";
import TreeGraph from "./TreeGraph";
import Title from "./Title";
import { filterData, findNodeDetails } from "../utils/transformer";
import CustomModal from "../utils/CustomModal";
import { Link } from "react-router-dom";

function VisualisePage({ data, hierarchicalData }) {
  const [rowData, setRowData] = useState(null);
  const handleModalClose = () => {
    setRowData(null);
  };

  return (
    <>
      <Title />
      {rowData && (
        <CustomModal
          rowData={rowData}
          data={filterData(rowData, data)}
          detailedData={findNodeDetails(rowData, hierarchicalData)}
          handleModalClose={handleModalClose}
        />
      )}
      <TreeGraph treeData={hierarchicalData} setSelectedRow={setRowData} />
      <div className="mt-10 text-center text-lg font-semibold text-blue-500">
        <Link to="/dashboard">Click Here To View the Table</Link>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  data: selectData(state),
  hierarchicalData: selectHierarchicalData(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VisualisePage);
