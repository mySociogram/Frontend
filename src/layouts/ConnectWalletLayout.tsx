import React, { useContext } from 'react'
import '../style/ConnectWallet.css'
import { Outlet } from 'react-router'
import { Link, useLocation } from 'react-router-dom'
import { DashboardContext } from '../contexts/DashboardContext'
import { ConnectWalletContext } from '../contexts/ConnectWalletContext'

const ConnectWalletLayout = () => {
  const { isConnected } = useContext(ConnectWalletContext)
  const location = useLocation()
  // const { key } = useContext(DashboardContext)

  return (
    <section className='connectWallet-Layout'>
      <>
        {isConnected ? (
          window.location.replace('/dashboard/home')
        ) : (
          <section className='p-4 p-md-5'>
            <header className='text-uppercase'>
              <p>logo</p>
            </header>
            <main className='main-wallet mt-4 p-2 p-md-5'>
              <article className='text-center art-wallet'>
                <h3>Socialmesh</h3>
                <p>Everything is about empowering communities to serve you </p>
              </article>
              <Outlet />
            </main>
          </section>
        )}
      </>
    </section>
  )
}

export default ConnectWalletLayout
