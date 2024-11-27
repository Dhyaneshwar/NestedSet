import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function CustomTable({
  rowData,
  columnData,
  height = "78%",
  setSelectedRow = () => {},
}) {
  const handleSelectionChange = ([selectedRowId]) => {
    setSelectedRow(selectedRowId);
  };
  return (
    <Box
      mt="1.5rem"
      p="1 1.5rem"
      sx={{
        height,
        width: "50%",
        marginX: "auto",
        "& .MuiDataGrid-root": {
          fontSize: "1.2rem",
        },
      }}
    >
      <Box>
        <DataGrid
          columnHeaderHeight={25}
          rowHeight={35}
          hideFooter={true}
          rows={rowData || []}
          columns={columnData}
          onRowSelectionModelChange={handleSelectionChange}
        />
      </Box>
    </Box>
  );
}

export default CustomTable;
