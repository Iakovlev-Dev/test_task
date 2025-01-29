import {Colors} from "../../const";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../types/type-store";
import {selectColor} from "../../store/data-process/selectors";
import {setColor} from "../../store/data-process/data-process";

export default function ButtonsColor() {
  const dispatch = useAppDispatch();
  const currentColor = useAppSelector(selectColor);
  const handleChangeColor = (color: string) => {
    dispatch(setColor(color));
  };

  return (
    <fieldset>
      <legend>Тип фигуры</legend>
      {Object.keys(Colors).map((color) => (
        <div className="buttons-group" key={color}>
          <label className="custom-label">
            <input className="button"
              type="radio"
              onChange={() => handleChangeColor(color)}
              checked={currentColor === color}
              name={color}
            />
            <span className="custom-radio__label">{Colors[color]}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
