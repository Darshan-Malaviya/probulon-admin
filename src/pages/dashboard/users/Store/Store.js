import { configureStore } from "@reduxjs/toolkit";
import adddataReducer  from "../Fuatures/UserSlice";
// import clientsReducer from "../../users/Store"
 const Store = configureStore({
  reducer:{
    addUsers : adddataReducer,
    // addClient: clientsReducer
  }
})

export default Store;