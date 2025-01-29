import {Shapes} from "../../const";
import {TShapeString} from "../../types/types";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../types/type-store";
import {selectShape} from "../../store/data-process/selectors";
import {setShape} from "../../store/data-process/data-process";

export default function ButtonsTypeShape() {
  const dispatch = useAppDispatch();

  const handleClick = (item: TShapeString) => {
    dispatch(setShape(item));
  };

  const currentShape = useAppSelector(selectShape);
  return (
    <fieldset>
      <legend>Тип фигуры</legend>
      {Object.keys(Shapes).map((shape) => (
        <div className="buttons-group" key={shape}>
          <label className="custom-label">
            <input className="button"
              type="radio"
              onChange={() => handleClick(shape as TShapeString)}
              checked={currentShape === shape}
              name={shape}/>
            <span className="custom-radio__label">{Shapes[shape]}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
