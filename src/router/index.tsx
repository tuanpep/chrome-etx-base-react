import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";

const router = createBrowserRouter(
  [
    {
      path: "/index.html",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ],
  {
    basename: "/",
  }
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
