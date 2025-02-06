import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "./layout/Layout.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/news" element={<App />} />
        <Route path="/archived-news" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
