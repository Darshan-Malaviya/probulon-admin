import { configureStore } from "@reduxjs/toolkit";
import adddataReduser  from "../Fuatures/UserSlice";
export const Store = configureStore({
  reduser:{
    addUsers : adddataReduser
  }
})