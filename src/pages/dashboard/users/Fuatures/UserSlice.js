import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userdata:[]
};
export const adddataSlice = createSlice({
    name:"addUsers",
    initialState,
    reducers:{
        adddata : (state,action) => {
              state.userdata = action.payload
        }
    }
})

export const {adddata} = adddataSlice.actions;
export default adddataSlice.reducer;


