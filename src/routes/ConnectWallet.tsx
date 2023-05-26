import React from 'react'
import '../style/ConnectWallet.css'
import info from '../assets/info.png'
import meta from '../assets/meta.png'
import fantom from '../assets/fantom.png'
import trust from '../assets/trust.png'
import coin from '../assets/coin.png'
import { BiSearchAlt2 } from 'react-icons/bi'

const ConnectWallet = () => {
  return (
    <section className='p-4 p-md-5'>
      <header className='text-uppercase'>logo</header>
      <main className='main-wallet mt-4 p-2 p-md-5'>
        <article className='text-center art-wallet'>
          <h3>Sociogram</h3>
          <p>Everything is about empowering communities to serve you </p>
        </article>
        <article className='art-pad'>
          <section className='text-center p-3 sec-wallt mt-4'>
            <article className='select-wallet d-flex mt-lg-5'>
              <p>Select your preffered wallet</p>
              <img src={info} alt='info icon' className='info-icon ms-2 mt-1' />
            </article>
            <section>
              <article className='d-flex select-wallet mt-lg-3'>
                <img src={meta} alt='metamask icon' className='tok-icon' />
                <p className='ms-2'>MetaMask Wallet</p>
              </article>
              <article className='d-flex select-wallet'>
                <img
                  src={fantom}
                  alt='fantom icon'
                  className='tok-icon fantom-icon'
                />
                <p className='ms-2'>Fantom Wallet</p>
              </article>
              <article className='d-flex select-wallet'>
                <img
                  src={trust}
                  alt='trustwallet icon'
                  className='tok-icon trust-icon'
                />
                <p className='ms-2'>Trust Wallet</p>
              </article>
              <article className='d-flex select-wallet'>
                <img
                  src={coin}
                  alt='coin icon'
                  className='tok-icon coin-icon'
                />
                <p className='ms-2'>Coinbase Wallet</p>
              </article>
            </section>
            <article className='select-wallet mt-4'>
              <p>Your preferred wallet not listed?</p>
              <article className='p-4'>
                <div className='div-wallt d-flex text-center'>
                  <BiSearchAlt2 className='search-icon' />
                  <p className='mt-2 ms-1'>Search for preferred wallet</p>
                </div>
              </article>
            </article>
          </section>
        </article>
      </main>
    </section>
  )
}

export default ConnectWallet
