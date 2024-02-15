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
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
]);

export default <RouterProvider router={router} />;
