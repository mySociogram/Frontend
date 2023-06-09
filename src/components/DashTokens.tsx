import React from 'react'
import swap from '../assets/swap.png'
import availableToken from '../assets/availableToken.png'
import stakedToken from '../assets/stakedToken.png'

const DashTokens = () => {
  return (
    <section className='mt-lg-4 dashWal-sec'>
      <article className='p-lg-3'>
        <div className='d-flex'>
          <img src={availableToken} alt='' className='tokenImgs' />
          <p className='ms-lg-3 dash-textt'>Available Tokens</p>
        </div>
        <div>
          <p className='token-price'>$0.00</p>
        </div>
      </article>
      <article className='p-lg-3'>
        <div className='d-flex'>
          <img src={swap} alt='' className='tokenImgs' />
          <p className='ms-lg-3 dash-textt'>Loaned Tokens</p>
        </div>
        <div>
          <p className='token-price'>$0.00</p>
        </div>
      </article>
      <article className='p-lg-3'>
        <div className='d-flex'>
          <img src={stakedToken} alt='' className='tokenImgs' />
          <p className='ms-lg-3 dash-textt'>Staked Tokens</p>
        </div>
        <div>
          <p className='token-price'>$0.00</p>
        </div>
      </article>
    </section>
  )
}

export default DashTokens