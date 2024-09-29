import { configureStore } from "@reduxjs/toolkit";
import productReducer  from "./slices/ProductSlice";
import actionReducer from "./slices/ActionsSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    actions: actionReducer,
  },
});