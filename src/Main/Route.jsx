import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Regester from "../components/Regester";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/register',
                element: <Regester></Regester>
            }
        ]
    }
])