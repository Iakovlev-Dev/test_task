import {TStore} from "../../types/type-store";
import {NameSpace} from "../../const";

export const selectShape = (state: TStore) => state[NameSpace.Data].shape
