import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout';
import Homepage from './Components/Homepage/Homepage';
import AuthContext from './AuthContext/AuthContext';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      },
      {
        path: '/home',
        element: <Homepage></Homepage>
      },
      {
        path: '/signin',
        element: <Signin></Signin>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  </React.StrictMode>,
)
