import Home from "../pages/Home"
import Login from "../pages/Login"
import Students from "../pages/Students"
import StudentDetail from "../pages/StudentDetail"
import Courses from "../pages/Courses"
import ClassList from "../pages/ClassList"
import Members from "../pages/Members"
import Grades from "../pages/Grades"
import AddCourse from "../pages/AddCourse"
import AddStudent from "../pages/AddStudent"
import AddClass from "../pages/AddClass"
import AddGrade from "../pages/AddGrade"

export const PulicRoutes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/students',
        element: <Students />
    },
    {
        path: '/students/detail',
        element: <StudentDetail />
    },
    {
        path: '/courses',
        element: <Courses />
    },
    {
        path: '/courses/classlist',
        element: <ClassList />
    },
    {
        path: '/courses/classlist/members',
        element: <Members />
    },
    
    {
        path: '/courses/classlist/members/grades',
        element: <Grades />
    },
    {
        path: '/courses/addcourse',
        element: <AddCourse />
    },
    {
        path: '/students/addstudent',
        element: <AddStudent />
    },
    {
        path: '/courses/classlist/addclass',
        element: <AddClass />
    },
    {
        path: '/courses/classlist/members/grade',
        element: <AddGrade />
    }


]
export const PrivateRoutes = [
    // for private function
    
]