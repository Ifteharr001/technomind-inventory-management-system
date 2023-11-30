import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import CreateStore from "../Pages/CreateStore/CreateStore";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import SalesCollection from "../Pages/Dashboard/SalesCollection/SalesCollection";
import ShopProfile from "../Pages/Dashboard/ShopProfile/ShopProfile";
import UpdateProduct from "../Pages/Dashboard/updateProduct/UpdateProduct";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile/AdminProfile";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import ManageShop from "../Pages/Dashboard/Admin/ManageShop/ManageShop";
import SaleSummary from "../Pages/Dashboard/Admin/SaleSummary/SaleSummary";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("http://localhost:5000/users"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "create-store",
        element: (
          <PrivateRoute>
            <CreateStore></CreateStore>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    loader: () => fetch("http://localhost:5000/users"),
    children: [
      {
        path: "shopProfile",
        element: <ShopProfile></ShopProfile>,
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "myProduct",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addProducts/${params.id}`),
      },
      {
        path: "salesCollection",
        element: <SalesCollection></SalesCollection>,
      },

      //admin routes
      {
        path: "adminProfile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "manageShop",
        element: <ManageShop></ManageShop>,
        loader: () => fetch("http://localhost:5000/useShop"),
      },
      {
        path: "saleSummary",
        element: <SaleSummary></SaleSummary>,
      },
    ],
  },
]);