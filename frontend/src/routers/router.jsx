import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import OrderPage from "../pages/orders/OrderPage";
import SingleBook from "../components/SingleBook";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBooks from "../pages/dashboard/editBook/UpdateBook";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/about",
          element: <h2>about</h2>
        },
        {
            path: "/login",
            element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
            path: "/cart",
            element: <Cart/>
        },
        {
          path: "/checkout",
          element: <PrivateRoute> <Checkout/> </PrivateRoute>
        },
        {
          path: "/orders",
          element: <OrderPage />
        },
        {
          path: "/books/:id",
          element: <SingleBook/>
        },
      ]
    },
    {
      path: "/admin",
      element: <AdminLogin/>
    },
    {
      path: "/dashboard",
      element: <AdminRoute> <DashboardLayout/> </AdminRoute>,
      children: [
        {
          path:"",
          element: <AdminRoute> <Dashboard/> </AdminRoute>
        },
        {
          path:"add-new-book",
          element: <AdminRoute> <AddBook/> </AdminRoute>
        },
        {
          path:"edit-book/:id",
          element: <AdminRoute> <UpdateBooks/> </AdminRoute>
        },
        {
          path:"manage-book",
          element: <AdminRoute> <ManageBooks/> </AdminRoute>
        },
      ]
    }
  ]);

  export default router;