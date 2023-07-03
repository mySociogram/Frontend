import React, { useContext, useState } from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { BsArrowDownLeft } from 'react-icons/bs'
import { IoMdAdd } from 'react-icons/io'
import { IoIosSwap } from 'react-icons/io'
import Receive from './modal-contents/Receive'
import Buy from './modal-contents/Buy'
import Swap from './modal-contents/Swap'
import SendFlow from './modal-contents/SendFlow'
import { ConnectWalletContext } from '../contexts/ConnectWalletContext'
import { DashboardContext } from '../contexts/DashboardContext'

const DashHeader = () => {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const [pop, setPop] = useState(false)
  const [popup, setPopup] = useState(false)
  // const { address } = useContext(DashboardContext)
  const { postAddress } = useContext(ConnectWalletContext)

  return (
    <header className='d-flex dash-header'>
      <article className='dash-titleIntro'>
        <h3>Hi Blitz!</h3>
        {/* <p>Nothing to see here.</p> */}
        <p>
          Your <span>Portfolio</span> has gone up <span>5%</span> since your
          last visit.
        </p>
      </article>
      <article className='d-flex'>
        <div>
          <div
            className='dashWallet-icons text-center mt-lg-3'
            onClick={() => setPopup(true)}
          >
            <AiOutlineArrowUp className='mt-lg-2' />
          </div>
          <SendFlow
            setPopup={setPopup}
            popup={popup}
            onClose={() => setPopup(false)}
          />
          <p className='dash-textt text-center'>Send</p>
        </div>
        <div>
          <div
            className='dashWallet-icons text-center ms-lg-4 mt-lg-3'
            onClick={() => setOpen(true)}
          >
            <AiOutlineArrowDown className='mt-lg-2' />
          </div>
          <Receive
            setOpen={setOpen}
            open={open}
            onClose={() => setOpen(false)}
          />
          <p className='ms-lg-4 dash-textt text-center'>Receive</p>
        </div>
        <div>
          <div
            className='dashWallet-icons text-center ms-lg-4 mt-lg-3'
            onClick={() => setShow(true)}
          >
            <IoIosSwap className='mt-lg-2' />
          </div>
          <Swap setShow={setShow} show={show} onClose={() => setShow(false)} />
          <p className='ms-lg-4 dash-textt text-center'>Swap</p>
        </div>
        <div>
          <div
            className='dashWallet-icons text-center ms-lg-4 mt-lg-3'
            onClick={() => setPop(true)}
          >
            <IoMdAdd className='mt-lg-2' />
          </div>
          <Buy setPop={setPop} pop={pop} onClose={() => setPop(false)} />
          <p className='ms-lg-4 dash-textt text-center'>Buy</p>
        </div>
        <div>
          <div
            className='dashWallet-icons text-center ms-lg-4 mt-lg-3'
            onClick={postAddress}
          >
            <BsArrowDownLeft className='mt-lg-2' />
          </div>
          <p className='ms-lg-4 dash-textt text-center'>Loan</p>
        </div>
      </article>
    </header>
  )
}

export default DashHeader
