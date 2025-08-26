import { useMemo,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from "./components/Login";
import Home from "./components/Home"
import User from './components/User'
import About from './components/About'
import Sidelogin from './components/Sidelogin'
import Logout from './components/Logout'
import Calander from './components/Calander'
import RainSunGraph from './components/RainSunGraph'
import Welcome from './components/Welcome'
function App() {
  const router=createBrowserRouter([
        {
          path:"/",
          element:<Welcome />
        },
        {
          path:"/home",
          element:<><Navbar /><Home /></>
        },
        {
          path:"/Calander",
          element:<><Navbar /><Calander/></>
        },
        {
          path:"/Calander",
          element:<Calander/>
        },
        {
          path:"/Welcome",
          element:<Welcome/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/Sidelogin",
          element:<Sidelogin />
        },
        {
          path:"/RainSunGraph",
          element:<RainSunGraph />
        },
        {
          path:"/about",
          element:<><Navbar /><About/></>
        },
        {
          path:"/user/:username",
          element:<><Navbar /><User/></>
        },
        {
          path:"/Logout",
          element:<Logout/>
        }
    ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
