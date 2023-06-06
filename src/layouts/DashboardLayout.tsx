import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import '../style/NavBar.css'

const DashboardLayout = () => {
  return (
    <div className='dash-layout'>
      <NavBar />
      {/* <Header /> */}
      <section className='d-flex mt-lg-2'>
        <SideBar />
        <Outlet />
      </section>
      {/* <Sidebar /> */}
    </div>
  )
}

export default DashboardLayout
