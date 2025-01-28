import {useRef} from "react";
import Konva from "konva";
import {Layer, Rect, Stage} from "react-konva";

export default function Canvas () {
    const stageRef = useRef<Konva.Stage>(null)

    const handleWheel = (e: any) => {
        e.evt.preventDefault()
        const scaleBy = 1.1;
        const stage = stageRef.current
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

    return (
        <Stage
            ref={stageRef}
            width={window.innerWidth}
            height={window.innerHeight}
            draggable
            onWheel={handleWheel}
            style={{backgroundColor: '#f4f4f4'}}
        >
            <Layer>
                <Rect
                    x={50}
                    y={50}
                    width={100}
                    height={100}
                    fill="red"
                    draggable
                />
            </Layer>
        </Stage>
    )
}
