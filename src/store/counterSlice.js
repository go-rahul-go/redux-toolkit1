import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:JSON.parse(localStorage.getItem("counter")) || {count:0,theme:"dark"},
    reducers:{
        increase(state,action)
        {
            state.count+=1;
            localStorage.setItem("counter",JSON.stringify(state))
        },
        decrease(state,action)
        {
            if(!state.count<=0)
            {
                state.count-=1;
                localStorage.setItem("counter",JSON.stringify(state))
            }
              

        },
        changeTheme(state,action)
        {
            state.theme=action.payload;
            localStorage.setItem("counter",JSON.stringify(state))
        }
    }
})

export const {increase,decrease,changeTheme}=counterSlice.actions;

export default counterSlice.reducer;