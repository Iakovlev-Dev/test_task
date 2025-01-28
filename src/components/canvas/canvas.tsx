import {useRef, useState} from "react";
import Konva from "konva";
import {Circle, Layer, Stage} from "react-konva";
import React from "react";
import {TCircleShape} from "../../types/types";
import {KonvaEventObject} from "konva/lib/Node";

export default function Canvas () {
    const stageRef = useRef<Konva.Stage>(null)

    const [circles, setCircles] = useState<TCircleShape[]>([])


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

        const newCircle: TCircleShape = {
            id: `circle_${circles.length + 1}`,
            x: pointerPosition.x,
            y: pointerPosition.y,
            radius: 30,
            color: "black"
        }

        setCircles([...circles, newCircle])
    }

    const handleDragMove = (evt:  KonvaEventObject<DragEvent>, id: string) => {
        const {x, y} = evt.target.position();

        setCircles((prevCircles) =>
            prevCircles.map((circle) =>
                circle.id === id ? { ...circle, x, y} : circle
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
                {circles.map((circle) => (
                    <Circle
                    key={circle.id}
                    x={circle.x}
                    y={circle.y}
                    radius={circle.radius}
                    fill={circle.color}
                    draggable
                    onDragMove={(evt) => handleDragMove(evt, circle.id)}
                    />
                ))}
            </Layer>
        </Stage>
    )
}
