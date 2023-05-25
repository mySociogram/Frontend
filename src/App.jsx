import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import DashboardLayout from './layouts/DashboardLayout'
import LandingPageLayout from './layouts/LandingPageLayout'
import Home from './routes/Home'
import DashboardHome from './routes/DashboardHome'
import './style/Home.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/Dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/DashboardHome',
        element: <DashboardHome />,
      },
    ],
  },
])

export const App = () => <RouterProvider router={router} />
