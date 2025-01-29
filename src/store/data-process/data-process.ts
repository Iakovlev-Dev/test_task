import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NameSpace} from "../../const";
import {TCircleShape, TShapeString} from "../../types/types";

type TInitialState = {
  shape: TShapeString,
  size: number,
  color: string,
  shapes: TCircleShape[],
}

const initialState: TInitialState = {
  shape: 'rect',
  size: 50,
  color: 'red',
  shapes: []
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
    },
    setColor( state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    setShapesState(state, action: PayloadAction<TCircleShape[]>) {
      state.shapes = action.payload;
    }
  }
});

export const {setShape, setSize, setColor, setShapesState} = dataProcess.actions;
