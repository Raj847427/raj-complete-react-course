import { configureStore } from "@reduxjs/toolkit";
import pslice from "./Privacy";
import slice from "./Counter";
const counterStore = configureStore({
  reducer: {
    counter: slice.reducer,
    privacy: pslice.reducer,
  },
});

export default counterStore;
