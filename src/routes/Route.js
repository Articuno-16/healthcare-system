import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Department from "../pages/Department"
import Blog from "../pages/Blog"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Account from "../pages/Account"
import Schedule from "../pages/Schedule"
// import Create from "../pages/create"

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
        path: '/login',
        element: Login
    },
    {
        path: '/register',
        element: Register
    },
    {
        path: '/account',
        element: Account
    },
    {
        path: '/schedule',
        element: Schedule
    }
// {
//     path: '/create',
//     element: Create
// }
]

export const PrivateRoutes = [
    // for private function
    {
        path: '/account',
        element: Account
    },
    {
        path: '/schedule',
        element: Schedule
    }
]