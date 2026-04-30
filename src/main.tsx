import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
]);

const root = document.getElementById("root")!;

createRoot(root).render(<RouterProvider router={router} />);
