import React from "react";
import {setShape} from "../../store/data-process/data-process";
import {Shapes} from "../../const";
import {useAppDispatch, useAppSelector} from "../../types/type-store";
import {selectShape} from "../../store/data-process/selectors";

export default function Buttons () {
  const dispatch = useAppDispatch();
  const handleClick = (item: string) => {
    dispatch(setShape(item));
  };
  const currentShape = useAppSelector(selectShape);

  return (
    <div className="buttons">
      <fieldset>
        <legend>Тип фигуры</legend>
        {Object.keys(Shapes).map((shape) => (
          <label key={shape}>
            <input className="button"
              type="radio"
              onChange={() => handleClick(shape)}
              checked={currentShape === shape}
              name={shape}/>
            <span className="custom-radio__label">{Shapes[shape]}</span>
          </label>
        ))}
      </fieldset>
    </div>
  );
}
