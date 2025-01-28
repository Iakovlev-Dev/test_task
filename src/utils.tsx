import {Circle, Rect, RegularPolygon} from "react-konva";
import React from "react";
import {TCircleShape} from "./types/types";
import {KonvaEventObject} from "konva/lib/Node";

export const renderShapes = (shapes: TCircleShape[], handleDrag: (evt:KonvaEventObject<DragEvent>, id: string)=> void ) =>
    shapes.map((shape) => {
        switch (shape.type) {
            case 'rect':
                return (
                    <Rect
                        key={shape.id}
                        x={shape.x}
                        y={shape.y}
                        width={shape.size}
                        height={shape.size}
                        fill={shape.color}
                        draggable
                        onDragMove={(evt) => handleDrag(evt,shape.id)}
                    />
                );
            case 'circle':
                return (
                    <Circle
                        key={shape.id}
                        x={shape.x}
                        y={shape.y}
                        radius={shape.size / 2}
                        fill={shape.color}
                        draggable
                        onDragMove={(evt) => handleDrag(evt,shape.id)}
                    />
                );
            case 'triangle':
                return (
                    <RegularPolygon
                        key={shape.id}
                        x={shape.x}
                        y={shape.y}
                        sides={3}
                        radius={shape.size / 2}
                        fill={shape.color}
                        draggable
                        onDragMove={(evt) => handleDrag(evt,shape.id)}
                    />
                );
            default:
                return null; } });
