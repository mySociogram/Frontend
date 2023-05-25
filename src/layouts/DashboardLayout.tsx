import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const DashboardLayout = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Sidebar />
    </div>
  )
}

export default DashboardLayout
