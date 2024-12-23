// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    nestedSet: dataReducer,
  },
});

export default store;
