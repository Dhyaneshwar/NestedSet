import { Box } from "@mui/material";
import { styled } from "@mui/system";

const ModalContainer = styled(Box)(({ wd, ht }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: wd || "50%",
  height: ht || "60%",
  backgroundColor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  padding: 4,
  overflowY: "auto",
  borderRadius: "10px",
  fontSize: "20px",
  padding: "25px",
}));

export default ModalContainer;
