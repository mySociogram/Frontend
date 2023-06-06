import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import '../style/NavBar.css'

const DashboardLayout = () => {
  return (
    <div className='dash-layout'>
      <NavBar />
      <section className='d-flex mt-lg-2'>
        <SideBar />
        <Outlet />
      </section>
    </div>
  )
}

export default DashboardLayout
