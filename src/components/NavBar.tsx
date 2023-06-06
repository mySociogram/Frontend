import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import avatar from '../assets/avatar.png'

const NavBar = () => {
  return (
    <header className='p-lg-5 nav-header d-flex'>
      <div>
        <h3>Sociogram</h3>
      </div>
      <main className='d-flex nav-firstMain'>
        <section className='nav-firstSection d-flex'>
          <BiSearchAlt2 className='nav-searchIcon' />
          <p className='mt-lg-2 ms-lg-2'>
            Search for people, communities, tokens, messages etc
          </p>
        </section>
        <section className='nav-secondsec d-flex ms-lg-5'>
          <img src={avatar} alt='avatar'/>
          <p className='ms-lg-2 mt-lg-2'>0xhDc2sj...w5e</p>
          <RiArrowDropDownLine className='nav-arrow ms-lg-2 mt-lg-2'/>
        </section>
      </main>
    </header>
  )
}

export default NavBar
