import { createSelector } from "@reduxjs/toolkit";

export const selectData = (state) => state.nestedSet.data;

export const selectHierarchicalData = (state) =>
  state.nestedSet.hierarchicalData;
