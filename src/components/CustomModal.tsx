import React, { useEffect, useLayoutEffect, useRef } from "react";
import { modalEaseInAndOut } from "../../helpers/gsapAnimations";
import "../style/CustomModal.css";

const CustomModal = ({ children, isOpen, btnRef, setModalVisibility }) => {
  const modalRef = useRef<any>(null);

  useLayoutEffect(() => {
    modalEaseInAndOut(modalRef, isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (btnRef.current.contains(event.target)) {
        return;
      } else if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalVisibility();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div className={`${isOpen ? `modal-visible` : `modal-hidden`}`}>
      <div className="modal-wrapper">
        <div ref={modalRef} className={`modal-content`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
