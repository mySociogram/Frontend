import React from "react";
import "../../../style/SendingFlow.css";
import "../../../style/CustomModal.css";
import close_icon from "../../../assets/close.png";

const TransactionDetails = ({ closeSelf }) => {
  return (
    <main className="sf_card">
      <section className="sf-section">
        <section className="sf_card-header">
          <div className="sf-close_icon">
            <img onClick={closeSelf} src={close_icon} alt="close-icon" />
          </div>
          <div className="sf_steps-wrapper">
            <article className="sf_step">
              <div className="sf_step-eclipse">1</div>
              <p>Transaction Details</p>
            </article>
            <article>
              <div className="sf_step-eclipse">2</div>
              <p>Transaction Summary</p>
            </article>
          </div>
        </section>
        <section className="td-section modal-scrollbar">
          <p>Send</p>
          <form className="details_input">
            <label className="sf-label" htmlFor="receiver">
              Receiver
            </label>
            <input className="sf-input" type="text" name="receiver" />
            <label className="sf-label" htmlFor="amount">
              Amount
            </label>
            <input className="sf-input" type="text" name="amount" />
            <label className="sf-label" htmlFor="fee">
              Fee
            </label>
            <input className="sf-input" type="text" name="fee" />

            <button className="sf_btn">SEND</button>
          </form>
        </section>
      </section>
    </main>
  );
};

export default TransactionDetails;
