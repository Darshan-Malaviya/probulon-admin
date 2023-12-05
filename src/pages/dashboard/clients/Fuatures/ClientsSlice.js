import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clientsdata:[]
};
export const clientsSlice = createSlice({
    name:"addClient",
    initialState,
    reducers:{
        adddata : (state,action) => {
              state.clientsdata += action.payload
        }
    }
})

export const {adddata} = clientsSlice.actions;
export default clientsSlice.reducer;


