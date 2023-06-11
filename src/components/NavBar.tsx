import React, { useContext } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import avatar from '../assets/avatar.png'
import '../style/NavBar.css'
import { DashboardContext } from '../contexts/DashboardContext'

const NavBar = () => {
  const { wallet } = useContext(DashboardContext)

  return (
    <header className='p-lg-5 nav-header d-flex'>
      <div>
        <h3>Sociogram</h3>
      </div>
      <main className='d-flex nav-firstMain'>
        <section className='nav-firstSection'>
          <BiSearchAlt2 />
          <input
            type='search'
            placeholder='Search for people, communities, tokens, messages etc'
          />
        </section>
        <section className='nav-secondsec ms-lg-5'>
          <img src={avatar} alt='avatar' />
          {/* <p className=''>0xhDc2sj...w5e</p> */}
          {wallet.accounts.length > 0 && <div>{wallet.accounts[0]}</div>}
          <RiArrowDropDownLine className='nav-arrow ' />
        </section>
      </main>
    </header>
  )
}

export default NavBar
