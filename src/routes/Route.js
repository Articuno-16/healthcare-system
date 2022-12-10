import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Department from "../pages/Department"
import Blog from "../pages/Blog"

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
    }
]

export const PrivateRoutes = [
    // for private function
]