import ButtonsTypeShape from "../buttons-type-shape/buttons-type-shape";
import ButtonsSize from "../buttons-size/buttons-size";
import ButtonsColor from "../buttons-color/buttons-color";
import {useDispatch} from "react-redux";
import {setShapesState} from "../../store/data-process/data-process";


export default function Buttons () {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setShapesState([]));
  };
  return (
    <div className="buttons">
      <ButtonsTypeShape />
      <ButtonsSize />
      <ButtonsColor />
      <button className="button-reset" onClick={handleClick}>Очистить холст</button>
    </div>
  );
}
