import {createBrowserRouter,} from "react-router-dom";

import Main from "../Main/Main";
import PrivateRouter from "./PrivateRouter";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import AddAToy from "../Page/AddAToy/AddAToy";
import Blog from "../Page/Blog/Blog";
import Error404 from "../Page/ErrorPage/Error404";
import AllToy from "../Page/AllToy/AllToy";
import MyToys from "../Page/MyToys/MyToys";
import ToyDetails from "../Page/ToyDetails/ToyDetails";
import UpdateDetails from "../Page/UpdateDetails/UpdateDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error404></Error404>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/allToy",
          element: <AllToy></AllToy>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/addtoy",
          element: <AddAToy></AddAToy>,
        },
        {
          path: "/addedToyDetails/:id",
          element: <PrivateRouter><ToyDetails></ToyDetails></PrivateRouter>,
          loader: ({params}) => fetch(`https://super-toy-server-neon.vercel.app/addedDetails/${params.id}`)
        },
        {
          path: "/toyDetails/:id",
          element: <PrivateRouter><ToyDetails></ToyDetails></PrivateRouter>,
          loader: ({params}) => fetch(`https://super-toy-server-neon.vercel.app/toys/${params.id}`)
        },
        {
          path: "/myToys",
          element: <PrivateRouter><MyToys></MyToys></PrivateRouter>,
        },
        {
          path: "/updateDetails/:id",
          element: <PrivateRouter><UpdateDetails></UpdateDetails></PrivateRouter>,
        },
      ]
    },
  ]);

export default router;