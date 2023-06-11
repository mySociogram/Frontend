import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import DashboardContextProvider from './contexts/DashboardContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DashboardContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DashboardContextProvider>
)
