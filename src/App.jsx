import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import DashboardLayout from './layouts/DashboardLayout'
// import LandingPageLayout from './layouts/LandingPageLayout'
import ConnectWalletLayout from './layouts/ConnectWalletLayout'
import ConnectWalletHome from './routes/ConnectWalletHome'
import Home from './routes/Home'
import ConnectWallet from './routes/ConnectWallet'
import './style/Home.css'
import ModalTest from './routes/ModalTest'
import DashboardWallet from './routes/DashboardWallet'

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <ConnectWalletLayout />,
  //   children: [
  //     {
  //       path: '/',
  //       element: <ConnectWalletHome />,
  //     },
  //     {
  //       path: '/ConnectWallet',
  //       element: <ConnectWallet />,
  //     },
  //   ],
  // },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/dashboardWallet',
        element: <DashboardWallet />,
      },
    ],
  },
  {
    path: '/ModalTest',
    element: <ModalTest />,
  },
])

export const App = () => <RouterProvider router={router} />
