// 負責 render
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* 用 BrowserRouter 包住 */}
    <BrowserRouter>
      {/* App 元件內為整個頁面，包含共同區塊 Nav, Footer */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
