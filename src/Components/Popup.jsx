import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Paper } from "@mui/material";
import Logo from "./Logo.svg";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "70%",
  width: "40%",
  padding: "10px 10px 10px",
  textAlign: "center",
};

export default function Popup() {
  const [open, setOpen] = React.useState(true);
  
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal style={{outline:'none'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style} style={{outline:'none'}}>
          <Typography
            id="sort-Visualser"
            style={{ color: "#3F3D56" }}
            variant="h4"
            component="h2"
            sx={{ mt: 5 }}
          >
            Welcome to Sort Algothims Visualiser
          </Typography>
          <Typography
            id="modal-modal-description"
            style={{ color: "#3F3D56" }}
            variant="body1" gutterBottom
            sx={{ mt: 5 }}
          >
            A Sorting Algorithm is used to rearrange a given array or list
            elements according to a comparison operator on the elements. The
            comparison operator is used to decide the new order of element in
            the respective data structure.
          </Typography>
          <div
            className="Paris"
            style={{ position: "absolute", left: "8%", bottom: "-14px" }}
          >
            <img src={Logo} width="500px" alt="Paris" height="150px"></img>
          </div>
        </Paper>
      </Modal>
    </div>
  );
}
