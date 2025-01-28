import {TShape} from "../../types/types";
import {createSlice} from "@reduxjs/toolkit";
import {NameSpace} from "../../const";

type TInitialState = {
    shape: TShape
}

const initialState = {
    shape: 'circle'
}

export const dataProcess = createSlice({
    name: NameSpace.Data,
    initialState,
    reducers: {}
})
