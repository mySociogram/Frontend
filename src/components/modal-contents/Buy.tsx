import React from 'react'
import '../../style/Buy.css'
import { IoMdClose } from 'react-icons/io'
import ramp from '../../assets/ramp.png'
import { BsArrowRight } from 'react-icons/bs'

const Buy = ({ closeSelf, modalContentRef }) => {
  return (
    <section className='sec-buy p-4'>
      <main className='main-buy p-3 p-lg-4' ref={modalContentRef}>
        <div className='exit-icon'>
          <IoMdClose onClick={closeSelf} />
        </div>
        <article className='mt-4'>
          <h4 className='heading-text'>Buy</h4>
          <hr className='mt-4' />
        </article>
        <section className='mt-4 mt-lg-5'>
          <p className='buy-textt'>Providers</p>
          <main className='d-flex main-prov'>
            <article className='d-flex'>
              <img src={ramp} alt='' className='ramp' />
              <p className='ms-2 mt-1 ramp-text'>Ramp</p>
            </article>
            <article>
              <BsArrowRight className='mt-2 mt-lg-2 arr-right' />
            </article>
          </main>
        </section>
        <section className='mt-3'>
          <p className='buy-textt'>Exchanges</p>
          <p className='com-text'>Coming soon!</p>
        </section>
        <section className='mt-4'>
          <p className='buy-textt'>Bridges</p>
          <p className='com-text mb-5'>Coming soon!</p>
        </section>
      </main>
    </section>
  )
}

export default Buy
