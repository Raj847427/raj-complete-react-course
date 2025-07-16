import { createSlice } from "@reduxjs/toolkit";
const pslice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return (state = !state);
    },
  },
});
export const privacyAction = pslice.actions;
export default pslice;
