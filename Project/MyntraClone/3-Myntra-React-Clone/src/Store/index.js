import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemsSlice";
import fetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./BagSlice";

const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchstatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});
export default store;
