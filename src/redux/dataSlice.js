import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transformedData: [], // Initial state for the transformed data
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setTransformedData: (state, action) => {
      state.transformedData = action.payload;
    },
    clearTransformedData: (state) => {
      state.transformedData = [];
    },
  },
});

export const { setTransformedData, clearTransformedData } = dataSlice.actions;

export default dataSlice.reducer;
