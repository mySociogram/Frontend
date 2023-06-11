import React, { useContext } from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { BsArrowDownLeft } from 'react-icons/bs'
import { IoMdAdd } from 'react-icons/io'
import { IoIosSwap } from 'react-icons/io'

const DashHeader = () => {
  return (
    <header className='d-flex dash-header'>
      <article className='dash-titleIntro'>
        <h3>Hi Blitz!</h3>
        <p>Nothing to see here.</p>
        {/* <p>
          Your <span>Portfolio</span> has gone up <span>5%</span> since your
          last visit.
        </p> */}
      </article>
      <article className='d-flex'>
        <div>
          <div className='dashWallet-icons text-center mt-lg-3'>
            <AiOutlineArrowUp className='mt-lg-2' />
          </div>
          <p className='dash-textt text-center'>Send</p>
        </div>
        <div>
          <div className='dashWallet-icons text-center ms-lg-4 mt-lg-3'>
            <AiOutlineArrowDown className='mt-lg-2' />
          </div>
          <p className='ms-lg-4 dash-textt text-center'>Receive</p>
        </div>
        <div>
          <div className='dashWallet-icons text-center ms-lg-4 mt-lg-3'>
            <IoIosSwap className='mt-lg-2' />
          </div>
          <p className='ms-lg-4 dash-textt text-center'>Swap</p>
        </div>
        <div>
          <div className='dashWallet-icons text-center ms-lg-4 mt-lg-3'>
            <IoMdAdd className='mt-lg-2' />
          </div>
          <p className='ms-lg-4 dash-textt text-center'>Buy</p>
        </div>
        <div>
          <div className='dashWallet-icons text-center ms-lg-4 mt-lg-3'>
            <BsArrowDownLeft className='mt-lg-2' />
          </div>
          <p className='ms-lg-4 dash-textt text-center'>Loan</p>
        </div>
      </article>
    </header>
  )
}

export default DashHeader
