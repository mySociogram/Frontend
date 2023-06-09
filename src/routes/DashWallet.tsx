import React from 'react'
import data from '../data.json'
import '../style/DashboardWallet.css'
import { BsArrowUpRight } from 'react-icons/bs'
import Graph from '../components/Graph'
import DashHeader from '../components/DashHeader'
import DashTokens from '../components/DashTokens'

const DashWallet = () => {
  return (
    <section className='dashboard-wallet p-lg-5'>
      <DashHeader />
      <main className='mt-lg-4 d-flex dash-firstMain'>
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
        <section className='ms-lg-3'>
          <article className='dash-firstArrt p-lg-3'>
            <section className='d-flex dash-section'>
              <p>Total Portfolio</p>
            </section>
            <div className='text-center dash-largText'>
              <p>$0.00</p>
            </div>
          </article>
          <article className='mt-lg-3 p-lg-3 dashArticlee'>
            <header className='dash-headerr'>Assets</header>
            <main className='text-center mt-lg-5 dash-textt'>
              <p>No tokens found in this wallet</p>
            </main>
          </article>
        </section>
      </main>
      <DashTokens />
      <main className='mt-lg-5'>
        <section className='d-flex transac-sec'>
          <h6>Transaction History</h6>
          <div className='viewAll-buttn text-center p-lg-1 mt-lg-1'>
            <p>View all</p>
          </div>
        </section>
        <article className='dashWal-table mt-lg-3 p-lg-3'>
          <header className='d-flex dash-textt'>
            <p>Txn Hash</p>
            <p>Method</p>
            <p>Age</p>
            <p>From</p>
            <p>To</p>
            <p>Quantity</p>
            <p>Status</p>
          </header>
          <hr />
          <main className='text-center footerText'>
            <p>No recent transactions</p>
          </main>
        </article>
      </main>
    </section>
  )
}

export default DashWallet
