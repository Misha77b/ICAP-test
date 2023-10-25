import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tableDataInfo: {},
  tableDataResults: [],
  loader: true,
};

export const fetchTableData = createAsyncThunk(
  "tableData/fetchData",
  async () => {
    //   async ({ params }) => {
    const response = await fetch(
      `https://technical-task-api.icapgroupgmbh.com/api/table/?format=json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => {
        console.warn(err);
      });
    return response;
  }
);

export const tableDataSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTableData.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchTableData.fulfilled, (state, action) => {
      state.tableDataInfo = action.payload;
      state.tableDataResults = action.payload.results;
      state.loader = false;
    });
  },
});

export default tableDataSlice.reducer;
