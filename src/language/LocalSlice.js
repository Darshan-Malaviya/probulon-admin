import { createSlice } from "@reduxjs/toolkit";
import en from "./en.json"
const initialState = {
  locale: en,
};
export const addlocaleSlice = createSlice({
  name: "addlocale",
  initialState,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = addlocaleSlice.actions;
export default addlocaleSlice.reducer;
