import { useEffect, useState } from "react";
import { contactModalCommonColumns } from "../const/tableData";
import { useFetch } from "../customHooks/useFetch";
import CustomTable from "../utils/CustomTable";
import { Modal } from "@mui/material";
import ModalContainer from "../utils/ModalContainer";
import { createNestedSet, filterData } from "../utils/transformer";
import { setHierarchicalData, setNestedData } from "../redux/dataSlice";
import { useDispatch } from "react-redux";

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
    <>
      {rowData && (
        <Modal open={rowData} onClose={handleModalClose}>
          <ModalContainer>
            <h1>{filterData(rowData, data)}</h1>
          </ModalContainer>
        </Modal>
      )}
      <div className="flex h-screen w-screen items-center justify-center">
        <CustomTable
          rowData={data}
          columnData={contactModalCommonColumns}
          setSelectedRow={setRowData}
        />
      </div>
    </>
  );
}

export default DashboardPage;
