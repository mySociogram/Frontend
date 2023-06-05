import React, { useEffect, useRef } from "react";
import "../style/ConnectWallet.css";
import info from "../assets/info.png";
import meta from "../assets/meta.png";
import fantom from "../assets/fantom.png";
import trust from "../assets/trust.png";
import coin from "../assets/coin.png";
import wallet from "../assets/wallet.png";
import { Link } from "react-router-dom";
import { zoomOut } from "../../helpers/gsapAnimations";

const ConnectWalletHome = () => {
  const homePage = useRef(null)

  useEffect(() => {
    zoomOut(homePage)
  })

  return (
    <>
      <article ref={homePage} className=''>
        <section className='text-center p-3 sec-wallt mt-4'>
          <article className='select-wallet d-flex mt-lg-5'>
            <p>Login with your wallet </p>
            <img src={info} alt='info icon' className='info-icon ms-2 mt-1' />
          </article>
          <section className='select_mode'>
            <Link to='/ConnectWallet' className='select_mode-card mt-lg-3'>
              <div className='cw-icons-display'>
                <img src={meta} alt='metamask icon' className='' />
                <img src={fantom} alt='fantom icon' className='' />
                <img src={trust} alt='trustwallet icon' className='' />
                <img src={coin} alt='coin icon' className='' />
              </div>
              <p className='ms-2'>Connect Wallet</p>
            </Link>
            <div className='select_mode-card'>
              <img src={wallet} alt='fantom icon' className='' />
              <p className='ms-2'>Get Wallet</p>
            </div>
          </section>
        </section>
      </article>
    </>
  )
}

export default ConnectWalletHome
