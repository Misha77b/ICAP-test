import React from "react";
import PropTypes from "prop-types";
import { Tooltip, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const UserTip = ({ handleOpen }) => {
  return (
    <Tooltip title="Tap me for help">
      <IconButton
        onClick={handleOpen}
        sx={{
          position: "absolute",
          top: "5px",
          right: "5px",
          color: "#FF868E",
        }}
      >
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );
};

export default UserTip;

UserTip.propTypes = {
  handleClose: PropTypes.func,
};
