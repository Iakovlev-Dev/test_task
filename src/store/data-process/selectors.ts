import {TStore} from "../../types/type-store";
import {NameSpace} from "../../const";

export const selectShape = (state: TStore) => state[NameSpace.Data].shape;
export const selectSize = (state: TStore) => state[NameSpace.Data].size;
