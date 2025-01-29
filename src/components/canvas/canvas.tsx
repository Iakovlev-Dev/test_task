import {useRef} from "react";
import Konva from "konva";
import {Layer, Stage} from "react-konva";
import {TCircleShape} from "../../types/types";
import {KonvaEventObject} from "konva/lib/Node";
import {useAppDispatch, useAppSelector} from "../../types/type-store";
import {selectColor, selectShape, selectShapes, selectSize} from "../../store/data-process/selectors";
import {renderShapes} from "../../utils";
import {setShapesState} from "../../store/data-process/data-process";

export default function Canvas () {
  const dispatch = useAppDispatch();

  const stageRef = useRef<Konva.Stage>(null);
  const currentShape = useAppSelector(selectShape);
  const currentSize = useAppSelector(selectSize);
  const currentColor = useAppSelector(selectColor);
  const shapes = useAppSelector(selectShapes);

  const handleWheel = (evt: KonvaEventObject<WheelEvent>) => {
    evt.evt.preventDefault();
    const scaleBy = 1.1;
    const stage = stageRef.current;

    if(!stage) return;

    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();

    if(!pointer) return;

    const direction = evt.evt.deltaY > 0 ? -1 : 1;
    const newScale = direction > 0 ? oldScale * scaleBy: oldScale / scaleBy;

    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    const newPosition = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };

    stage.scale({x: newScale, y: newScale});
    stage.position(newPosition);
    stage.batchDraw();
  };

  const handleAddCircle = () => {
    const stage = stageRef.current;
    if (!stage) return;

    const pointerPosition = stage.getPointerPosition();
    if(!pointerPosition) return;

    const stageScale = stage.scaleX();
    const stagePosition = stage.position();

    const correctedX = (pointerPosition.x - stagePosition.x) / stageScale;
    const correctedY = (pointerPosition.y - stagePosition.y) / stageScale;

    const newShape: TCircleShape = {
      id: `circle_${shapes.length + 1}`,
      type: currentShape,
      x: correctedX,
      y: correctedY,
      size: +currentSize,
      color: currentColor
    };

    dispatch(setShapesState([...shapes, newShape]));
  };

  const handleDragMove = (evt:  KonvaEventObject<DragEvent>, id: string) => {
    const {x, y} = evt.target.position();

    const newShapesArray = [...shapes].map((shape)=> (
      shape.id === id ? {...shape, x, y} : shape
    ));

    dispatch(setShapesState(newShapesArray));
  };

  return (
    <div className="canvas">
      <Stage
        ref={stageRef}
        width={800}
        height={600}
        draggable
        onWheel={handleWheel}
        onClick={handleAddCircle}
        className="stage"
      >
        <Layer classname="layer">
          {renderShapes(shapes, handleDragMove)}
        </Layer>
      </Stage>
    </div>
  );
}
