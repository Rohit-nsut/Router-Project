import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
      <App/>
      <Toaster/>
    </BrowserRouter>

);
