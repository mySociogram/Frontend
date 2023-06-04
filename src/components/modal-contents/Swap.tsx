import React from 'react'
import { IoMdClose } from 'react-icons/io'
import '../../style/Swap.css'

const Swap = ({ closeSelf, modalContentRef }) => {
  return (
    <section className='p-4 sec-rec' ref={modalContentRef}>
      <main className='rec-main p-3 p-lg-4'>
        <div className='exit-icon'>
          <IoMdClose onClick={closeSelf} />
        </div>
        <article className='mt-4'>
          <h4 className='heading-text'>Receive</h4>
          <hr className='mt-4' />
        </article>
        <section className='mt-5 text-center justify-content-center'>
          <img src={qrcode} alt='qr code' className='qrcode' />
          <p className='mt-4'>Your Address</p>
          <div className='d-flex divAdd mb-3 mb-lg-4'>
            
            <small className='smallAdd-text'>
              0x388c818ca8b9251b393131c08a736a67ccb19297
            </small>
            <img src={copy} alt='copy' className='ms-2 copy-icon' />
          </div>
        </section>
      </main>
    </section>
  )
}

export default Swap
