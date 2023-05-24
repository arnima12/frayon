import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Cloths from "../../Pages/Products/Cloths";
import Customers from "../../Pages/Customer/Customers";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import Cart from "../../Pages/Cart/Cart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import AdminRoutes from "../AdminRoute/AdminRoute";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[{
            path:'/',
            element: <Home/>
        },
        {
            path:'/products',
            element: <Cloths/>
        },
        {
            path:'/customers',
            element: <Customers/>
        },
        {
            path:'/contact',
            element: <Contact/>
        },
        {
            path:'/login',
            element: <Login/>
        },
        {
            path:'/registration',
            element: <Registration/>
        },
        {
            path:'/cart',
            element: <Cart/>
        },
    ]
    },
    {
        path:"/dashboard",
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        children : [
            {
                path: '/dashboard',
                element:<MyOrders/>
            },
            {
                path: '/dashboard/users',
                element:<AdminRoutes><AllUsers/></AdminRoutes>
            }
        ]
    }
])
export default router;