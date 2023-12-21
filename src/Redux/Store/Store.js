import { configureStore } from "@reduxjs/toolkit";
import adddataReducer  from "../../pages/dashboard/users/Fuatures/UserSlice";
import addlocaleReducer  from "../../language/LocalSlice";
const Store = configureStore({
  reducer:{
    addUsers : adddataReducer,
    locale : addlocaleReducer,
  }
})

export default Store;