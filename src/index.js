  import React from "react";
  import ReactDOM from "react-dom/client";
  import "./index.css";
  import App from "./App";
  import reportWebVitals from "./reportWebVitals";
  import { createStore } from "redux";
  import rootReducer from "../src/Component/Redux/index";
  import { Provider } from "react-redux";

  const root = ReactDOM.createRoot(document.getElementById("root"));
  const reduxData = createStore(rootReducer);
  root.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
    <Provider store={reduxData}>
      <App />
    </Provider>
  );

  reportWebVitals();
