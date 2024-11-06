import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/New",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Popular",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Trending",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Categories",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
