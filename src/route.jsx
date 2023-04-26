import { Navigate, createBrowserRouter } from "react-router-dom";
import LayoutMain from "./Layout/LayoutMain";
import Homepage from "./Components/Homepage/Homepage";
import HomepageMiddle from "./Components/Homepage/HomepageMiddle";
import News from "./Components/News/News";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import About from "./Components/About/About";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutMain></LayoutMain>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>,
                children: [
                    {
                        path: '/',
                        element: <HomepageMiddle></HomepageMiddle>,
                    }
                ]
            },
            {
                path: '/',
                element: <Homepage></Homepage>,
                children: [
                    {
                        path: '/category/:id',
                        element: <HomepageMiddle></HomepageMiddle>,
                    }
                ]
            },
            {
                path: '/home',
                element: <Homepage></Homepage>,
                children: [
                    {
                        path: '/home',
                        element: <HomepageMiddle></HomepageMiddle>,
                    }
                ]
            },
            {
                path: 'news/:id',
                element: <News></News>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    }
])