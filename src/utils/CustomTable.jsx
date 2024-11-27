import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function CustomTable({
  rowData,
  columnData,
  height = "78%",
  //   setSelectedRows = () => {},
  //   overflow = true,
}) {
  //   const handleSelectionChange = (selectedRowIds) => {
  //     setSelectedRows(selectedRowIds);
  //   };
  return (
    <Box
      mt="1.5rem"
      p="1 1.5rem"
      sx={{
        height,
        width: "100%",
        overflowY: "auto",
        "& .MuiDataGrid-root": {
          fontSize: "1.2rem",
        },
        "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer":
          {
            display: "none",
          },
      }}
    >
      <Box>
        <DataGrid
          columnHeaderHeight={25}
          rowHeight={35}
          hideFooter={true}
          checkboxSelection
          rows={rowData || []}
          columns={columnData}
          //   onRowSelectionModelChange={handleSelectionChange}
        />
      </Box>
    </Box>
  );
}

export default CustomTable;
