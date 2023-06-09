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
              <div className='d-flex'>
                <BsArrowUpRight className='arrow-upRight' />
                <p className='ms-lg-1'>5%</p>
              </div>
            </section>
            <div className='text-center dash-largText'>
              <p>$199.30</p>
            </div>
          </article>
          <article className='mt-lg-3 p-lg-3 dashArticlee'>
            <header className='dash-headerr'>Assets</header>
            <main>
              <article className='d-flex mt-lg-2 dash-dnc'>
                <p className='dash-textt dnc-text'>DNC</p>
                <p className='dash-textt dnc-textTwo'>50,000.00</p>
              </article>
              <div className='text-end dnc-cash'>
                <p>$190.30</p>
              </div>
              <hr className='dash-hr' />
              <article className='d-flex dash-dnc'>
                <p className='dash-textt usdt'>USDT</p>
                <p className='dash-textt dnc-textTwo'>9.00</p>
              </article>
              <div>
                <p className='text-end dnc-cash'>$9.00</p>
              </div>
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
          <main>
            {data.map((item, key) => {
              return (
                <div key={key}>
                  <section className='d-flex data-sec mt-lg-2'>
                    <p style={{ color: '#6821C3' }}>{item.txnHash}</p>
                    <div className='method-text text-center'>
                      <p className='mt-lg-1'>{item.method}</p>
                    </div>
                    <p>{item.age}</p>
                    <p>{item.from}</p>
                    <p>{item.to}</p>
                    <p>{item.quantity}</p>
                    <div
                      className='text-center status-text'
                      style={{
                        color:
                          item.status === 'Success'
                            ? '#6821C3'
                            : item.status === 'Pending'
                            ? '#C29E21'
                            : item.status === 'Failed'
                            ? '#DD2828'
                            : 'black',
                        background:
                          item.status === 'Success'
                            ? '#F7F0FF'
                            : item.status === 'Pending'
                            ? '#FFF9F0'
                            : item.status === 'Failed'
                            ? '#FFF0F0'
                            : 'grey',
                      }}
                    >
                      <p className='mt-lg-1'>{item.status}</p>
                    </div>
                  </section>
                </div>
              )
            })}
          </main>
        </article>
      </main>
    </section>
  )
}

export default DashWallet
