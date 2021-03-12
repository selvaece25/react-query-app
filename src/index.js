import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import store from "./store";
import App from "./App";

import * as themes from "./theme/schema.json";
import { setToLocalStorage } from "./utils/storage";

const Index = () => {
  console.log(themes.default);
  setToLocalStorage("all-themes", themes.default);
  return <App />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Index />,
      <Toaster />
    </Provider>
  </React.StrictMode>,
  rootElement
);
