import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NameSpace} from "../../const";
import {TShapeString} from "../../types/types";

type TInitialState = {
  shape: TShapeString,
  size: number,
  color: string
}

const initialState: TInitialState = {
  shape: 'rect',
  size: 50,
  color: 'red'
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
    }
  }
});

export const {setShape, setSize, setColor} = dataProcess.actions;
