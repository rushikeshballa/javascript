import { createSlice } from "@reduxjs/toolkit";
const x={
    count:0
}
export const counterSlice= createSlice({
    name:"counter",
    initialState:x,
    reducers:{
        incerment:(state,action)=>{
            state.count+1
        },
        decerement:(state,action)=>{
            state.count-1
        },
        reset:(state,action)=>{
            state.count=0;
        }
        
    }
})
export const { incerment,decerement,reset,}= counterSlice.actions;

export default counterSlice.reducer