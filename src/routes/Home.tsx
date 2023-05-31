import React, { useEffect, useRef, useState } from "react";
import "../style/ConnectWallet.css";
import info from "../assets/info.png";
import meta from "../assets/meta.png";
import fantom from "../assets/fantom.png";
import trust from "../assets/trust.png";
import coin from "../assets/coin.png";
import wallet from "../assets/wallet.png";
import AuthLayout from "../layouts/LandingPageLayout";
import { Link } from "react-router-dom";
import { zoomOut } from "../../helpers/gsapAnimations";
import CustomModal from "../components/CustomModal";
import TransactionDetails from "../components/modal-contents/sending-flow/TransactionDetails";

const Home = () => {
  const homePage = useRef(null);
  const [modalVisibility, setModalVisibility] = useState(true)

  useEffect(() => {
    zoomOut(homePage);
  });

  return (
    <>
      <article ref={homePage} className="art-pad">
        <section className="text-center p-3 sec-wallt mt-4">
          <article className="select-wallet d-flex mt-lg-5">
            <p>Login with your wallet </p>
            <img src={info} alt="info icon" className="info-icon ms-2 mt-1" />
          </article>
          <section className="select_mode">
            <Link to="/ConnectWallet" className="select_mode-card mt-lg-3">
              <div className="cw-icons-display">
                <img src={meta} alt="metamask icon" className="" />
                <img src={fantom} alt="fantom icon" className="" />
                <img src={trust} alt="trustwallet icon" className="" />
                <img src={coin} alt="coin icon" className="" />
              </div>
              <p className="ms-2">Connect Wallet</p>
            </Link>
            <div className="select_mode-card">
              <img src={wallet} alt="fantom icon" className="" />
              <p className="ms-2">Get Wallet</p>
            </div>
          </section>
        </section>
      </article>

      <CustomModal isOpen={modalVisibility} setModalVisibility={setModalVisibility} btnRef={""}>
        <TransactionDetails closeSelf={() => setModalVisibility(false)} />
      </CustomModal>
    </>
  );
};

export default Home;
