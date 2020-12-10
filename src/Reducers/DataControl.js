import {createSlice}  from "@reduxjs/toolkit";
import {fetchApi} from "../Api/Api";

const initialState ={
    fetchApi
}

const DataSlice = createSlice({
    name:"data",
    initialState,
    reducer:{}
})

export default DataSlice.reducer;