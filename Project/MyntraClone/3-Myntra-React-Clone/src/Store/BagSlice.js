import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      const index = state.indexOf(action.payload); //
      if (index !== -1) {
        state.splice(index, 1); // remove item at that index
      }
    },
  },
});
export const bagAction = bagSlice.actions;
export default bagSlice;
