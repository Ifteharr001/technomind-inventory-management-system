import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import CreateStore from "../Pages/CreateStore/CreateStore";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'create-store',
          element: <CreateStore></CreateStore>
        }
    ]
  },
]);