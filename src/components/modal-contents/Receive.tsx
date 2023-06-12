import React, { useContext } from 'react'
import '../../style/Receive.css'
import { IoMdClose } from 'react-icons/io'
import qrcode from '../../assets/qrcode.png'
import copy from '../../assets/copy.png'
import { DashboardContext } from '../../contexts/DashboardContext'

const Receive = (props) => {
  const { wallet, address } = useContext(DashboardContext)
  if (!props.open) {
    return null
  }
  return (
    <section className='p-4 sec-rec modal'>
      <main className='rec-main p-3 p-lg-4'>
        <div className='exit-icon'>
          <IoMdClose onClick={props.onClose} />
        </div>
        <article className='mt-4'>
          <h4 className='heading-text'>Receive</h4>
          <hr className='mt-4' />
        </article>
        <section className='mt-5 text-center justify-content-center'>
          <img src={qrcode} alt='qr code' className='qrcode' />
          <p className='mt-4'>Your Address</p>
          <div className='d-flex divAdd mb-3 mb-lg-4'>
            {wallet.accounts.length > 0 && (
              <small className='smallAdd-text'>{address[0][0]}</small>
            )}
            <img src={copy} alt='copy' className='ms-2 copy-icon' />
          </div>
        </section>
      </main>
    </section>
  )
}

export default Receive
