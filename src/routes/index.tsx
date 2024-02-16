import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalLayout from "src/Layouts/Global";

const router = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [
      {
        path: "/",
        lazy: () => import("src/pages/Home"),
      },
      {
        path: "/lexical",
        lazy: () => import("src/pages/LexicalAnalyzer"),
      },
      {
        path: "/regex",
        lazy: () => import("src/pages/RegularExpressions"),
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
]);

export default <RouterProvider router={router} />;
