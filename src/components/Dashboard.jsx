import { useEffect, useState } from "react";
import { contactModalCommonColumns } from "../const/tableData";
import { useFetch } from "../customHooks/useFetch";
import CustomTable from "../utils/CustomTable";
import { Modal } from "@mui/material";
import ModalContainer from "../utils/ModalContainer";
import { createNestedSet, filterData } from "../utils/transformer";
import { setHierarchicalData, setNestedData } from "../redux/dataSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Title from "./Title";

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

  return (
    <div className="my-10">
      <Title />
      {rowData && (
        <Modal open={rowData} onClose={handleModalClose}>
          <ModalContainer>
            <h1 className="mb-5 text-center text-2xl font-bold text-blue-600">
              Details about the Selected Row
            </h1>
            <p>{filterData(rowData, data)}</p>
          </ModalContainer>
        </Modal>
      )}
      <div className="flex flex-col items-center justify-center">
        <CustomTable
          rowData={data}
          columnData={contactModalCommonColumns}
          setSelectedRow={setRowData}
        />
        <Link to="/visualise">Click Here To Visualize the Data</Link>
      </div>
    </div>
  );
}

export default DashboardPage;
