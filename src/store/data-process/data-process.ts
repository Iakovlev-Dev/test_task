import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NameSpace} from "../../const";
import {TShapeString} from "../../types/types";

type TInitialState = {
  shape: TShapeString,
  size: number
}

const initialState: TInitialState = {
  shape: 'rect',
  size: 50
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setShape( state, action: PayloadAction<TShapeString>) {
      state.shape = action.payload;
    },
    setSize( state, action: PayloadAction<number> ) {
      state.size = action.payload;
    }
  }
});

export const {setShape, setSize} = dataProcess.actions;
