import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  IconButton,
  Modal,
  DialogContent,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { modalStyle, modalContentStyle, closeBtnStyle } from "./modalStyle";

const MyModal = ({ open, handleClose }) => {
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogContent sx={modalStyle}>
          <IconButton onClick={handleClose} sx={closeBtnStyle}>
            <CloseIcon />
          </IconButton>
          <Box sx={modalContentStyle}>
            <Typography variant="h5">Coming for help!</Typography>
            <Box>
              <Typography variant="subtitle1">Username: testuser</Typography>
              <Typography variant="subtitle1">
                Password: testpassword123
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Modal>
    </Box>
  );
};

export default MyModal;

MyModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
