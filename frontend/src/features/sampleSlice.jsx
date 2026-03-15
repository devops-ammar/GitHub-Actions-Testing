import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessage = createAsyncThunk(
  "sample/fetchMessage",
  async () => {
    const res = await axios.get("http://backend:5000/api/hello");
    console.log("Fetched message:", res);
    return res.data.message;
  },
);

const sampleSlice = createSlice({
  name: "sample",
  initialState: { message: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});

export default sampleSlice.reducer;
