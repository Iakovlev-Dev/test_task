import {combineReducers} from "@reduxjs/toolkit";
import {NameSpace} from "../const";
import {dataProcess} from "./data-process/data-process";

export const rootReducer = combineReducers({
    [NameSpace.Data]: dataProcess.reducer
})
