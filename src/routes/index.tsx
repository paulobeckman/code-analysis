import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
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
