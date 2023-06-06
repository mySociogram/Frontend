import React from 'react'
import '../style/SideBar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiWallet } from 'react-icons/bi'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { MdNotificationsNone } from 'react-icons/md'
import { BsGraphUp } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'

const SideBar = () => {
  const location = useLocation()
  return (
    <aside className='sidebar p-lg-5'>
      <section>
        <div className='d-flex'>
          <AiOutlineHome
            className='side-icons'
            style={{
              color: location.pathname === '/Home' ? '#6821C3' : 'black',
            }}
          />
          <Link
            to='/Home'
            className='Link-sideText ms-lg-2'
            style={{
              color: location.pathname === '/Home' ? '#6821C3' : 'black',
            }}
          >
            <p>Home</p>
          </Link>
        </div>
        <div className='d-flex mt-lg-2'>
          <BsFillPeopleFill
            className='side-icons'
            style={{
              color: location.pathname === '/Community' ? '#6821C3' : 'black',
            }}
          />
          <Link
            to='/Community'
            className='Link-sideText ms-lg-2'
            style={{
              color: location.pathname === '/Community' ? '#6821C3' : 'black',
            }}
          >
            <p>Community</p>
          </Link>
        </div>
        <div className='d-flex mt-lg-2'>
          <BiWallet
            className='side-icons'
            style={{
              color:
                location.pathname === '/DashboardWallet' ? '#6821C3' : 'black',
            }}
          />
          <Link
            to='/DashboardWallet'
            className='Link-sideText ms-lg-2'
            style={{
              color:
                location.pathname === '/DashboardWallet' ? '#6821C3' : 'black',
            }}
          >
            <p>Wallet</p>
          </Link>
        </div>
        <div className='d-flex mt-lg-2'>
          <BiMessageRoundedDetail
            className='side-icons'
            style={{
              color: location.pathname === '/Message' ? '#6821C3' : 'black',
            }}
          />
          <Link
            to='/Message'
            className='Link-sideText ms-lg-2'
            style={{
              color: location.pathname === '/Message' ? '#6821C3' : 'black',
            }}
          >
            <p>Message</p>
          </Link>
        </div>
        <div className='d-flex mt-lg-2'>
          <MdNotificationsNone
            className='side-icons'
            style={{
              color:
                location.pathname === '/Notification' ? '#6821C3' : 'black',
            }}
          />
          <Link
            to='/Notification'
            className='Link-sideText ms-lg-2'
            style={{
              color:
                location.pathname === '/Notification' ? '#6821C3' : 'black',
            }}
          >
            <p>Notification</p>
          </Link>
        </div>
        <div className='d-flex mt-lg-2'>
          <BsGraphUp
            className='side-icons'
            style={{
              color: location.pathname === '/Market' ? '#6821C3' : 'black',
            }}
          />
          <Link
            to='/Market'
            className='Link-sideText ms-lg-2'
            style={{
              color: location.pathname === '/Market' ? '#6821C3' : 'black',
            }}
          >
            <p>Market</p>
          </Link>
        </div>
      </section>
      <article></article>
    </aside>
  )
}

export default SideBar
