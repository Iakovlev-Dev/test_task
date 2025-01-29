import React, {useState} from "react";
import {setSize} from "../../store/data-process/data-process";
import {useAppDispatch, useAppSelector} from "../../types/type-store";
import {selectSize} from "../../store/data-process/selectors";
import ButtonsTypeShape from "../buttons-type-shape/buttons-type-shape";


export default function Buttons () {
  const dispatch = useAppDispatch();

  const currentSize = useAppSelector(selectSize);

  const [inputSize, setInputSize] = useState<string>(currentSize.toString());

  const handleChangeSize = (evt: React.ChangeEvent<HTMLInputElement>) => {
    let {value} = evt.currentTarget;
    setInputSize(value === '' ? '': value);
  };

  const handleClickApply = () => {
    if (inputSize != null) {
      dispatch(setSize(Number(inputSize)));
    }
  };

  return (
    <div className="buttons">
      <ButtonsTypeShape />
      <fieldset>
        <legend>Размер</legend>
        <div className="buttons-group">
          <label className="custom-label">
            <input className="button"
              type="number"
              name="size"
              placeholder={'30'}
              value={+inputSize === 0 ? '': inputSize}
              onChange={(evt) => handleChangeSize(evt)}
            />
            <button
              className="custom-radio__label"
              onClick={handleClickApply}
            >Применить</button>
          </label>
        </div>

      </fieldset>
    </div>
  );
}
