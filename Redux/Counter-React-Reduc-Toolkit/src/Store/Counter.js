import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "counter",
  initialState: {
    counterVal: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.counterVal++;
    },
    Decrement: (state, action) => {
      state.counterVal--;
    },
    Add: (state, action) => {
      state.counterVal += Number(action.payload);
    },

    Subtract: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
  },
});
export const counterAction = slice.actions;
export default slice;
