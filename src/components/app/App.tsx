import React from "react";
import Canvas from "../canvas/canvas";
import Buttons from "../buttons/buttons";

export default function App ()  {
    return (
        <div className='app'>
            <h1>Тестовое задание для КРАФТТЕК</h1>
            <div className="app-container">
                <Canvas />
                <Buttons />
            </div>
        </div>
    )
};

