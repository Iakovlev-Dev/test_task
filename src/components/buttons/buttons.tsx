import React from "react";
import {setShape} from "../../store/data-process/data-process";
import {Shapes} from "../../const";
import {useAppDispatch} from "../../types/type-store";

export default function Buttons () {
    const dispatch = useAppDispatch()
    return (
        <div className="buttons">
            {Object.keys(Shapes).map((shape) => (
                <button className="button" onClick={() => dispatch(setShape(shape))} key={shape}>{Shapes[shape]}</button>
            ))}
        </div>
    )
}
