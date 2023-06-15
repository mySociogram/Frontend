import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import DashboardLayout from './layouts/DashboardLayout'
import ConnectWalletLayout from './layouts/ConnectWalletLayout'
import ConnectWalletHome from './routes/ConnectWalletHome'
import DashboardHome from './routes/DashboardHome'
import Home from './routes/Home'
import ConnectWallet from './routes/ConnectWallet'
import './style/Home.css'
import ModalTest from './routes/ModalTest'
import DashboardWallet from './routes/DashboardWallet'
import Community from './routes/Community'
import DashWallet from './routes/DashWallet'


const router = createBrowserRouter([
  {
    path: '/',
    element: <ConnectWalletLayout />,
    children: [
      {
        path: '/',
        element: <ConnectWalletHome />,
      },
      {
        path: '/connectWallet',
        element: <ConnectWallet />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard/home',
        element: <Home />,
      },
      {
        path: '/dashboard/community',
        element: <Community />,
      },
      {
        path: '/dashboard/dashboardWallet',
        element: <DashboardWallet />,
      },
      {
        path: '/dashboard/dashWallet',
        element: <DashWallet />,
      },
    ],
  },
  {
    path: '/ModalTest',
    element: <ModalTest />,
  },
])

export const App = () => <RouterProvider router={router} />
