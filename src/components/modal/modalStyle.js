export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "400px",
  background: "white",
  borderRadius: "10px",
  border: "none",
  boxShadow:
    "rgba(255, 134, 142, 0.8) 0px 2px 4px, rgba(255, 134, 142, 0.6) 0px 7px 13px -3px, rgba(255, 134, 142, 0.6) 0px -3px 0px inset",
};

export const modalContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
  gap: "25px",
};

export const closeBtnStyle = {
  position: "absolute",
  right: "10px",
  top: "10px",
  "&:hover": {
    background: "#FF868E",
    color: "white",
  },
};
