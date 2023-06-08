import React from 'react'
import '../style/DashboardWallet.css'
import swap from '../assets/swap.png'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { BsArrowDownLeft, BsArrowUpRight } from 'react-icons/bs'
import { IoMdAdd } from 'react-icons/io'
import { IoIosSwap } from 'react-icons/io'
import Graph from '../components/Graph'

const DashboardWallet = () => {
  return (
    <section className='dashboard-wallet p-lg-5'>
      <header className='d-flex dash-header'>
        <article className='dash-titleIntro'>
          <h3>Hi Blitz!</h3>
          <p>
            Your <span>Portfolio</span> has gone up <span>5%</span> since your
            last visit.
          </p>
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
              {/* <img src={swap} alt='swap image' className='mt-lg-2' /> */}
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
      <main className='mt-lg-4 border border-danger d-flex'>
        <section className='dash-graph p-lg-3'>
          <div className='d-flex dash-divTwo mt-lg-3'>
            <p className='mt-lg-2'>Portfolio History</p>
            {/* dropdown section here */}
            <div className='dropdown dash-dropDown mt-lg-1'>
              <button
                className='btn dropdown-toggle dashWallet-buttn'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                30 Days
              </button>
              <ul className='dropdown-menu dashWallet-ul mt-lg-1'>
                <li>
                  <a className='dropdown-item' href='#'>
                    9 Days
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    60 Days
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    90 Days
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Graph />
        </section>
        <section>
          <article className='border border-danger'>
            <section className='d-flex'>
              <p>Total Portfolio</p>
              <div>
                <BsArrowUpRight />
                <p>5%</p>
              </div>
            </section>
            <div>
              <p>$199.30</p>
            </div>
          </article>
          <article className='border border-info'>
            <header>Assets</header>
            <main>
              <article>
                <p>DNC</p>
                <p>50,000.00</p>
              </article>
              <div>
                <p>$190.30</p>
              </div>
              <hr />
              <article>
                <p>USDT</p>
                <p>9.00</p>
              </article>
              <div>
                <p>$9.00</p>
              </div>
            </main>
          </article>
        </section>
      </main>
    </section>
  )
}

export default DashboardWallet
