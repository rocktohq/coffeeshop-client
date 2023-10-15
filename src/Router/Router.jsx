import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import ErrorPage from './../pages/ErrorPage/ErrorPage';
import Home from "../pages/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import ViewCoffee from "../pages/ViewCoffee/ViewCoffee";
import Dashboard from "../pages/Dashboard/Dashboard";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SIgnUp/SIgnUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://coffeeshop-server.vercel.app/coffee")
      },
      {
        path: "/coffee/:id",
        element: <ViewCoffee></ViewCoffee>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
            loader: () => fetch("https://coffeeshop-server.vercel.app/coffee")
          },
          {
            path: "/dashboard/addCoffee",
            element: <AddCoffee></AddCoffee>
          },
          {
            path: "/dashboard/updateCoffee/:id",
            element: <UpdateCoffee></UpdateCoffee>,
            loader: ({ params }) => fetch(`https://coffeeshop-server.vercel.app/coffee/${params.id}`)
          }
        ]
      }
    ]
  }
])

export default router
