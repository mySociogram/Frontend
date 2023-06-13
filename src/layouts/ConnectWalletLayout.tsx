import React, { useContext } from 'react'
import '../style/ConnectWallet.css'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { DashboardContext } from '../contexts/DashboardContext'

const ConnectWalletLayout = () => {
  const { key } = useContext(DashboardContext)

  return (
    <>
      {key === true ? (
        window.location.replace('http://localhost:5173/dashboard/home')
      ) : (
        <section className='p-4 p-md-5'>
          <header className='text-uppercase'>
            <Link to=''>logo</Link>
          </header>
          <main className='main-wallet mt-4 p-2 p-md-5'>
            <article className='text-center art-wallet'>
              <h3>Sociogram</h3>
              <p>Everything is about empowering communities to serve you </p>
            </article>
            <Outlet />
          </main>
        </section>
      )}
    </>
  )
}

export default ConnectWalletLayout
