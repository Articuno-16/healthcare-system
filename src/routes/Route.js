import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Department from "../pages/Department"
import Blog from "../pages/Blog"
import Login from "../pages/Login"
import Doctors from "../pages/Doctors"
import Register from "../pages/Register"
import Pages from "../pages/Pages"
import Create from "../pages/Create"

export const PulicRoutes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/contact',
        element: Contact
    },
    {
        path: '/department',
        element: Department
    },
    {
        path: '/blog',
        element: Blog
    },
    {
        path: '/doctors',
        element: Doctors
    },
    {
        path: '/pages',
        element: Pages
    },
    {
        path: '/login',
        element: Login
    },
    {
        path: '/register',
        element: Register
    },
{
    path: '/create',
    element: Create
}
]

export const PrivateRoutes = [
    // for private function
]