import {useEffect, useRef, useState} from "react";
import Konva from "konva";
import {Circle, Layer, Rect, RegularPolygon, Stage} from "react-konva";
import React from "react";
import {TCircleShape, TShape} from "../../types/types";
import {KonvaEventObject} from "konva/lib/Node";
import {useAppSelector} from "../../types/type-store";
import {selectShape} from "../../store/data-process/selectors";
import {setShape} from "../../store/data-process/data-process";
import {renderShapes} from "../../utils";

export default function Canvas () {
    const stageRef = useRef<Konva.Stage>(null)
    const currentShape = useAppSelector(selectShape)

    const [shapes, setShapes] = useState<TCircleShape[]>([])
    const [selectedShape, setSelectedShape] = useState<TShape>(currentShape)

    useEffect(() => {
        setSelectedShape(currentShape)
    }, [currentShape]);

    const handleWheel = (e: any) => {
        e.evt.preventDefault()
        const scaleBy = 1.1;
        const stage = stageRef.current
        if(!stage) return;
        const oldScale = stage.scaleX()
        const pointer = stage.getPointerPosition()

        if(!pointer) return;

        const mousePointTo = {
            x: (pointer.x - stage.x()) / oldScale,
            y: (pointer.y - stage.y()) / oldScale,
        }

        const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy

        stage.scale({x: newScale, y: newScale})

        const newPos = {
            x: pointer.x - mousePointTo.x * newScale,
            y: pointer.y - mousePointTo.y * newScale,
        }
        stage.position(newPos)
        stage.batchDraw()
    }

    const handleAddCircle = () => {
        const stage = stageRef.current
        if (!stage) return;

        const pointerPosition = stage.getPointerPosition()
        if(!pointerPosition) return;

        const newShape: TCircleShape = {
            id: `circle_${shapes.length + 1}`,
            type: selectedShape,
            x: pointerPosition.x,
            y: pointerPosition.y,
            size: 30,
            color: "black"
        }

        setShapes([...shapes, newShape])
        console.log(shapes)
    }

    const handleDragMove = (evt:  KonvaEventObject<DragEvent>, id: string) => {
        const {x, y} = evt.target.position();

        setShape((prevShapes: TCircleShape[]) =>
            prevShapes.map((shape) =>
                shape.id === id ? { ...shape, x, y} : shape
            )
        )
    }

    return (
        <Stage
            ref={stageRef}
            width={window.innerWidth}
            height={window.innerHeight}
            draggable
            onWheel={handleWheel}
            onClick={handleAddCircle}
            style={{backgroundColor: '#f4f4f4'}}
        >
            <Layer>
                {renderShapes(shapes, handleDragMove)}
            </Layer>
        </Stage>
    )
}
