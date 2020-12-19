import {createSlice}  from "@reduxjs/toolkit";
import {fetchApi} from "../Api/Api";

const initialState ={
    fetchApi,
    ScrollOn:false,
    NavBarScroll:true,
    Projects:{
        one:false,
        two:false,
        three:false,
        four:false,

    }
}
export const DataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{
        setScroll :(state, action) =>{
            const { set }  = action.payload;
            state.ScrollOn = set;
        },
        setNavView:(state,action)=>{
            const {scroll} = action.payload;
            state.NavBarScroll = scroll
        },
    }
});


export const { setScroll,setNavView } = DataSlice.actions;
export default DataSlice.reducer;