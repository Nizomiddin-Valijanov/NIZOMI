import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./Context/Context";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContext>
        <Provider>
          <App />
        </Provider>
      </DataContext>
    </BrowserRouter>
  </React.StrictMode>
);
