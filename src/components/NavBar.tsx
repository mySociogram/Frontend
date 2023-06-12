import React, { Fragment, useContext, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import avatar from '../assets/avatar.png'
import '../style/NavBar.css'
import { DashboardContext } from '../contexts/DashboardContext'

const NavBar = () => {
  const { wallet, loading, address } = useContext(DashboardContext)

  const prefixLength = 6
  const suffixLength = 4
  // const prefix = address[0][0].slice(0, prefixLength)
  // const suffix = address[0][0].slice(-suffixLength)

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
          {loading === false && (
            <Fragment>
              {wallet.accounts.length > 0 && (
                <div className='text-overflow'>{`${address[0][0].slice(
                  0,
                  prefixLength
                )}...${address[0][0].slice(-suffixLength)}`}</div>
              )}
            </Fragment>
          )}
          <RiArrowDropDownLine className='nav-arrow ' />
        </section>
      </main>
    </header>
  )
}

export default NavBar
