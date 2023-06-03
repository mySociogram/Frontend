import React, { ChangeEvent, useState } from "react";
import "../../style/SendFlow.css";
import "../../style/CustomModal.css";
import close_icon from "../../assets/close.png";

const SendFlow = ({ closeSelf, modalContentRef }) => {
  interface SendFormState {
    [key: string]: string;
  }

  const [step, setStep] = useState<Number>(1);

  const [sendForm, setSendForm] = useState<SendFormState>({
    receiver: "",
    amount: "",
    fee: "",
  });

  function sanitizeInputValue(input: string): string {
    // Remove any non-numeric characters using regex
    const sanitizedValue = input.replace(/[^0-9]/g, "");
    return sanitizedValue;
  }

  const handleSendFormInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSendForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSanitizedInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSendForm((prevState) => ({
      ...prevState,
      [name]: sanitizeInputValue(value),
    }));
  };

  return (
    <main className="modal-content-center">
      <main ref={modalContentRef} className="sf_card">
        <section className="sf-section">
          <section className="sf_card-header">
            <div className="sf-close_icon">
              <img onClick={closeSelf} src={close_icon} alt="close-icon" />
            </div>
            <div className="sf_steps-wrapper">
              <article
                onClick={() => setStep(1)}
                className={`"sf_step " ${step === 1 ? "active" : ""}`}
              >
                <div className="sf_step-eclipse">1</div>
                <p>Transaction Details</p>
              </article>
              <article
                onClick={() => setStep(2)}
                className={`"sf_step " ${step === 2 ? "active" : ""}`}
              >
                <div className="sf_step-eclipse">2</div>
                <p>Transaction Summary</p>
              </article>
            </div>
          </section>
          {step === 1 && (
            <section className="td-section">
              <p>Send</p>
              <form className="details_input" onSubmit={() => setStep(2)}>
                <label className="sf-label" htmlFor="receiver">
                  Receiver
                </label>
                <input
                  required
                  className="sf-input"
                  type="text"
                  name="receiver"
                  placeholder="0xhDc2sjrr8890jhbdnk870w5e"
                  value={sendForm.receiver}
                  onChange={handleSendFormInput}
                />
                <label className="sf-label" htmlFor="amount">
                  Amount
                </label>
                <input
                  required
                  className="sf-input"
                  type="text"
                  name="amount"
                  placeholder="0.00"
                  value={sendForm.amount}
                  onChange={handleSanitizedInput}
                />
                <label className="sf-label" htmlFor="fee">
                  Fee
                </label>
                <input
                  required
                  className="sf-input"
                  type="text"
                  name="fee"
                  placeholder="0.00"
                  value={sendForm.fee}
                  onChange={handleSanitizedInput}
                />

                <button type="submit" className="sf_btn sf_btn-pry">
                  SEND
                </button>
              </form>
            </section>
          )}
          {step === 2 && (
            <>
              <section className="ts-section">
                <p>Send</p>
                <div>
                  <div className="ts_data-flex">
                    <p>Asset</p>
                    <p>DNC(Design Token)</p>
                  </div>
                  <div className="ts_data-flex">
                    <p>From</p>
                    <p>0xhDc2sjrr8890jhbdnk870w5e</p>
                  </div>
                  <div className="ts_data-flex">
                    <p>To</p>
                    <p>{sendForm.receiver || "N/A"}</p>
                  </div>
                </div>
              </section>
              <section className="ts-section">
                <div>
                  <div className="ts_data-flex">
                    <p>Network Fee</p>
                    <p>{sendForm.fee || 0.0}</p>
                  </div>
                  <div className="ts_data-flex">
                    <p>Total Sending Amount</p>
                    <p>
                      {Number(sendForm.fee) + Number(sendForm.amount) || 0.0}
                    </p>
                  </div>
                </div>
                <button className="sf_btn sf_btn-pry ts-btn">Confirm</button>
                <button className="sf_btn sf_btn-sec ts-btn">Cancel</button>
              </section>
            </>
          )}
        </section>
      </main>
    </main>
  );
};

export default SendFlow;
