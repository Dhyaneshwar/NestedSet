import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function CustomTable({
  rowData,
  columnData,
  height = "78%",
  setSelectedRows = () => {},
  overflow = true,
}) {
  const handleSelectionChange = (selectedRowIds) => {
    setSelectedRows(selectedRowIds);
  };
  const overflowWidth = overflow ? "1400px" : "100%";
  const overflowValue = overflow ? "auto" : "inherit";
  return (
    <Box
      mt="0.5rem"
      p="0 0.5rem"
      sx={{
        height,
        width: "100%",
        overflowX: overflowValue,
        overflowY: "auto",
        "& .MuiDataGrid-root": {
          color: "#d1d3da",
          border: "none",
          fontSize: "1.2rem",
        },
        "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer":
          {
            display: "none",
          },
      }}
    >
      <Box width={overflowWidth}>
        <DataGrid
          columnHeaderHeight={25}
          rowHeight={35}
          hideFooter={true}
          checkboxSelection
          rows={rowData || []}
          columns={columnData}
          onRowSelectionModelChange={handleSelectionChange}
        />
      </Box>
    </Box>
  );
}

export default CustomTable;
