import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  loader: false,
};

export const fetchAuth = createAsyncThunk("auth", async (userData) => {
  const response = await fetch(
    `https://technical-task-api.icapgroupgmbh.com/api/login/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  )
    .then((res) => {
      if (res.status !== 200) {
        alert("Wrong login or password, try again");
        return;
      } else {
        res.json();
        localStorage.setItem("auth", true);
        alert("Log in success");
      }
    })
    .catch((err) => {
      console.warn(err);
    });
  return response;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.isAuth = true;
      state.loader = false;
    });
  },
});

export default authSlice.reducer;
