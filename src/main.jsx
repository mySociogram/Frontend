import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import DashboardContextProvider from './contexts/DashboardContext.jsx'
import ConnectWalletContextProvider from './contexts/ConnectWalletContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConnectWalletContextProvider>
    <DashboardContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DashboardContextProvider>
  </ConnectWalletContextProvider>
)
