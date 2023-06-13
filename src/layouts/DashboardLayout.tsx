import React, { Fragment, useContext } from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import '../style/NavBar.css'
import '../style/DashboardLayout.css'
import { DashboardContext } from '../contexts/DashboardContext'

const DashboardLayout = () => {
  const { loading } = useContext(DashboardContext)

  return (
    <div className='dash-layout'>
      {loading === false && (
        <Fragment>
          <NavBar />
          <section className='dashboard_layout'>
            <main className='dashboard_layout-sidebar'>
              <SideBar />
            </main>
            <main className='dashboard_layout-content'>
              <Outlet />
            </main>
          </section>
        </Fragment>
      )}
    </div>
  )
}

export default DashboardLayout
