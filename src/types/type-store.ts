import {store} from "../store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export type TStore = ReturnType<typeof store.getState>

export type TAppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TStore> = useSelector;
