import { useEffect, useState } from "react";
import { contactModalCommonColumns } from "../const/tableData";
import { useFetch } from "../customHooks/useFetch";
import CustomTable from "../utils/CustomTable";
import { Modal } from "@mui/material";
import ModalContainer from "../utils/ModalContainer";
import {
  createNestedSet,
  filterData,
  findNodeDetails,
} from "../utils/transformer";
import { setHierarchicalData, setNestedData } from "../redux/dataSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Title from "./Title";
import CustomModal from "../utils/CustomModal";

function DashboardPage() {
  const {
    data = null,
    loading,
    error,
  } = useFetch("https://api.mocki.io/v2/7brybvwl");
  const [rowData, setRowData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) return;
    dispatch(setNestedData(data));

    const hierarchicalData = createNestedSet(data);
    dispatch(setHierarchicalData(hierarchicalData));
  }, [data]);

  const handleModalClose = () => {
    setRowData(null);
  };

  if (loading) {
    return (
      <h1 className="flex h-screen w-screen items-center justify-center text-3xl">
        Data is loading
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="flex h-screen w-screen items-center justify-center text-3xl">
        Error while loading
      </h1>
    );
  }

  const hierarchicalData = createNestedSet(data);

  return (
    <div className="my-10">
      <Title />
      {rowData && (
        <CustomModal
          rowData={rowData}
          data={filterData(rowData, data)}
          detailedData={findNodeDetails(rowData, hierarchicalData)}
          handleModalClose={handleModalClose}
        />
      )}
      <div className="flex flex-col items-center justify-center">
        <CustomTable
          rowData={data}
          columnData={contactModalCommonColumns}
          setSelectedRow={setRowData}
        />
      </div>
      <div className="mt-10 text-center text-lg font-semibold text-blue-500">
        <Link to="/visualise">Click Here To Visualize the Data</Link>
      </div>
    </div>
  );
}

export default DashboardPage;
