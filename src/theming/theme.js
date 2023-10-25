import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {},
  typography: {},
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontFamily: "Jost",
          background: "#FF868E",
          color: "white",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            borderRadius: 20,
            fontFamily: "Jost",
            color: "black",
            fontWeight: "400",
            fontSize: "16px",
          },
          "& .MuiInputLabel-root": {
            color: "#FF868E",
            "&.Mui-focused": {
              color: "red",
            },
          },
          "& .MuiInputBase-input": {
            background: "#FFF",
            padding: "15px 20px 15px 20px",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#FF868E",
            },
            "& label": {
              color: "#FF868E",
            },
            "&:hover fieldset": {
              borderColor: "#FF868E",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF868E",
            },
            "& .MuiSelect-select": {
              padding: "8px 10px",
              color: "#8C8C8C",
              fontWeight: "400",
              fontSize: "16px",
            },
          },
        },
      },
    },
  },
});
