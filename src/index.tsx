import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import App from "./components/app/App";
import {Provider} from "react-redux";
import {store} from "./store";
import React from "react";


// @ts-ignore
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>

    </StrictMode>
)
