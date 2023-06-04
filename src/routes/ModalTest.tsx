import React, { useRef, useState } from 'react'
import CustomModal from '../components/CustomModal'
import SendFlow from '../components/modal-contents/SendFlow'
import Buy from '../components/modal-contents/Buy'
import Receive from '../components/modal-contents/Receive'
import Swap from '../components/modal-contents/Swap'

const ModalTest = () => {
  const [sendModal, setSendModal] = useState(false)

  const openModalBtn = useRef<HTMLButtonElement>(null)
  const modalContentRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      <button ref={openModalBtn} onClick={() => setSendModal(true)}>
        Open Send Modal
      </button>

      <CustomModal
        isOpen={sendModal}
        btnRef={openModalBtn}
        modalContentRef={modalContentRef}
        closeModal={() => setSendModal(false)}
      >
        {/* <SendFlow
          modalContentRef={modalContentRef}
          closeSelf={() => setSendModal(false)}
        /> */}
        {/* <Buy
          modalContentRef={modalContentRef}
          closeSelf={() => setSendModal(false)}
        /> */}
        {/* <Receive
          modalContentRef={modalContentRef}
          closeSelf={() => setSendModal(false)}
        /> */}
        <Swap
          modalContentRef={modalContentRef}
          closeSelf={() => setSendModal(false)}
        />
      </CustomModal>
    </div>
  )
}

export default ModalTest
