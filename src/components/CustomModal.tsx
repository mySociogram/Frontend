import React, { useEffect, useLayoutEffect, useRef } from "react";
import { modalEaseInAndOut } from "../../helpers/gsapAnimations";
import "../style/CustomModal.css";

const CustomModal = ({ children, isOpen, btnRef, modalContentRef, closeModal }) => {

  useLayoutEffect(() => {
    modalEaseInAndOut(modalContentRef, isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (btnRef.current && btnRef.current.contains(event.target)) {
        return;
      } else if (!modalContentRef.current?.contains(event.target)) {
        closeModal();
        console.log("yee")
      }      
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalContentRef]);

  return (
    <div className={`${isOpen ? `modal-visible` : `modal-hidden`}`}>
      <div className="modal-wrapper">
        <div className={`modal-content`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
