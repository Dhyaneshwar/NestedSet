import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  hierarchicalData: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setNestedData: (state, action) => {
      state.data = action.payload;
    },
    setHierarchicalData: (state, action) => {
      state.hierarchicalData = action.payload;
    },
    clearNestedData: (state) => {
      state.data = [];
    },
    clearHierarchicalData: (state) => {
      state.hierarchicalData = [];
    },
  },
});

export const {
  setNestedData,
  setHierarchicalData,
  clearNestedData,
  clearHierarchicalData,
} = dataSlice.actions;

export default dataSlice.reducer;
