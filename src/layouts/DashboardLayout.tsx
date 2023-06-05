import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default DashboardLayout
