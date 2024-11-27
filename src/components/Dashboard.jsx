import { useState } from "react";
import { contactModalCommonColumns } from "../const/tableData";
import { useFetch } from "../customHooks/useFetch";
import CustomTable from "../utils/CustomTable";
import { Modal } from "@mui/material";
import ModalContainer from "../utils/ModalContainer";
import { createNestedSet, filterData } from "../utils/transformer";

function DashboardPage() {
  const { data, loading, error } = useFetch("https://api.mocki.io/v2/7brybvwl");
  const [rowData, setRowData] = useState(null);

  const handleModalClose = () => {
    setRowData(null);
  };

  if (loading) {
    return <h1>Data is loading</h1>;
  }

  if (error) {
    return <h1>Error while loading</h1>;
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
      <CustomTable
        rowData={data}
        columnData={contactModalCommonColumns}
        setSelectedRow={setRowData}
      />
    </>
  );
}

export default DashboardPage;
