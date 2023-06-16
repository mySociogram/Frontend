import React from 'react'

function Topmarket(props) {
  return (
    <section className='d-flex market-section mt-lg-1'>
      <p>{props.lovenumber}</p>
      <article>
        <div className='d-flex top-div'>
          <img src={props.coinImg} alt='' className='marketImgs mt-lg-2' />
          <p className='mt-lg-1 ms-lg-1'>{props.name}</p>
        </div>
        <p className='topmarket-name text-center'>{props.initials}</p>
      </article>
      <p>{props.amount}</p>
      <div className='d-flex'>
        <img
          src={props.arrow}
          alt=''
          style={{ width: '14%' }}
          className='topmarket-img'
        />
        <p className='ms-lg-2'>{props.percentage}</p>
      </div>
    </section>
  )
}

export default Topmarket
