import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import { persistor, store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      <ToastContainer />
    {/* </PersistGate> */}
  </Provider>
);
