import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
const themeContext = createContext('light')
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <themeContext.Provider value='light'>
      <App/>
    </themeContext.Provider>
  </React.StrictMode>
);
