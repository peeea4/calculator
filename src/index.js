import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "@/globalStyles";

import App from "@/App";
import AppClass from "@/AppCLass";
import NotFound from "./pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path="functional/*" element={<App />} />
                <Route path="class/*" element={<AppClass />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
