import { configureStore } from "@reduxjs/toolkit";
import adddataReduser  from "../Fuatures/UserSlice";
import clientsReduser from "../../users/Store"
export const Store = configureStore({
  reduser:{
    addUsers : adddataReduser,
    addClient: clientsReduser
  }
})