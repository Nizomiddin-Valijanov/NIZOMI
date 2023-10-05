import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./Context/Context";
import { Provider } from "react-redux";
import Store from "./Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <DataContext>
          <App />
        </DataContext>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
