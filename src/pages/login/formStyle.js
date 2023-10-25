export const loginBoxStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  height: "calc(100vh - 60px)",
  background: "#FBE0DC",
};

export const goBackBtnStyle = {
  position: "absolute",
  top: "30px",
  left: "30px",
  "&:hover": {
    background: "#FF868E",
  },
};

export const loginFormStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  padding: "20px 30px",
  width: "300px",
  height: "300px",
  background: "white",
  borderRadius: "10px",
  boxShadow:
    "rgba(255, 134, 142, 0.8) 0px 2px 4px, rgba(255, 134, 142, 0.6) 0px 7px 13px -3px, rgba(255, 134, 142, 0.6) 0px -3px 0px inset",
};

export const loginBtnStyle = {
  fontSize: "18px",
  width: "250px",
  transition: "0.3s",
  "&:hover": {
    background: "#ff9ca3",
    scale: "1.1",
    transition: "0.3s",
  },
};
