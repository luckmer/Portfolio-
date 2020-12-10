import {combineReducers} from "redux";
import DataSlice from "./DataControl";

const Index = combineReducers({
    data:DataSlice
});
export default  Index
