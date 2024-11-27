// src/features/selectors.js
import { createSelector } from "@reduxjs/toolkit";

export const selectTransformedData = (state) => state.data.transformedData;

// Example of a memoized selector
export const selectDataByDepth = (depth) =>
  createSelector([selectTransformedData], (data) =>
    data.filter((item) => item.depth === depth),
  );
