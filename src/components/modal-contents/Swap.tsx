import React from 'react'
import { IoMdClose } from 'react-icons/io'
import '../../style/Swap.css'
import swap from '../../assets/swap.png'

const Swap = ({ closeSelf, modalContentRef }) => {
  return (
    <section className='p-4 sec-swap' ref={modalContentRef}>
      <main className='swap-firstMain p-3 p-lg-4'>
        <div className='exit-icon'>
          <IoMdClose onClick={closeSelf} />
        </div>
        <article className='mt-4'>
          <h4 className='heading-text'>Swap</h4>
          <hr className='mt-4' />
        </article>
        <article className='mt-4'>
          <section className='swap-firstSection d-flex'>
            <p>You send</p>
            <div className='d-flex'>
              <p>Available:</p>
              <p className='ms-1'>0.00</p>
            </div>
          </section>
          <article className='mt-1 d-flex swap-firstArticle p-2'>
            <p className=''>0.00</p>
            {/* dropdown code */}
            <div className='dropdown'>
              <button
                className='btn dropdown-toggle swap-buttn1'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                DNC
              </button>
              <ul className='dropdown-menu swap-ul'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <main className='mt-3'>
            <div className='swap-divImage text-center'>
              <img src={swap} alt='swap image' />
            </div>
          </main>
          <section className='swap-firstSection d-flex mt-4'>
            <p>You receive</p>
            <div className='d-flex'>
              <p>Available:</p>
              <p className='ms-1'>0.00</p>
            </div>
          </section>
          <article className='mt-1 d-flex swap-firstArticle p-2'>
            <p className=''>0.00</p>
            {/* dropdown code */}
            <div className='dropdown'>
              <button
                className='btn dropdown-toggle swap-buttn1'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                DNC
              </button>
              <ul className='dropdown-menu swap-ul'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <main className='swap-secondMain mt-4'>
            <article className='d-flex swap-secondArt'>
              <p>Exchange rate</p>
              <img src={swap} alt='swap image' className='swapImg' />
            </article>
            <article className='d-flex swap-secondArt'>
              <p>Slippage</p>
              <p>1%</p>
            </article>
          </main>
          <section>
            <button className='swap-button'>SWAP</button>
          </section>
        </article>
      </main>
    </section>
  )
}

export default Swap
