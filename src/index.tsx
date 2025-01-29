import {StrictMode} from "react";
import App from "./components/app/App";
import {Provider} from "react-redux";
import {store} from "./store";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
