import {createSlice}  from "@reduxjs/toolkit";
import {fetchApi} from "../Api/Api";

const initialState ={
    fetchApi,
    width: undefined,
    height: undefined,
}

export const DataSlice = createSlice({
    name:"data",
    initialState,
    reducer:{}
})


export default DataSlice.reducer;