import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ERROR_TEXT } from "@/constants/errorMessage";

import { App } from "./App";

import "./index.css";

const root = document.getElementById("root")!;

createRoot(root).render(
  <ErrorBoundary fallback={<p className="error">{ERROR_TEXT}</p>}>
    <BrowserRouter>
      <App />
      <ToastContainer position="bottom-right" />
    </BrowserRouter>
  </ErrorBoundary>,
);
