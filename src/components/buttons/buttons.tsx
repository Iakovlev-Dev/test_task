import ButtonsTypeShape from "../buttons-type-shape/buttons-type-shape";
import ButtonsSize from "../buttons-size/buttons-size";
import ButtonsColor from "../buttons-color/buttons-color";


export default function Buttons () {

  return (
    <div className="buttons">
      <ButtonsTypeShape />
      <ButtonsSize />
      <ButtonsColor />
    </div>
  );
}
