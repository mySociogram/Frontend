import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export const ConnectWalletContext = createContext();

const ConnectWalletContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [walletAddress, setWalletAddress] = useState("");
  const { address, isConnected, account } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  useEffect(() => {
    let walletAddress;
    const addressFromStorage = localStorage.getItem("address");
    if (addressFromStorage) {
      walletAddress = JSON.parse(addressFromStorage);
      setWalletAddress(walletAddress);
    }
    postAddress();
  }, [walletAddress]);

  console.log(walletAddress, "address");

  const postAddress = () => {
    if (!walletAddress) {
      return;
    }
    const user = {
      walletId: walletAddress,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    fetch("http://localhost:3005/users", options)
      .then((data) => {
        if (!data.ok) {
          throw Error(data.status);
        }
        return data.json();
      })
      .then((user) => {
        document.cookie = user.token;
        console.log(user);
      })
      .catch((e) => {
        // window.alert(e);
        console.log(e);
      });
  };
  // const postAddress = async () => {
  //   await axios
  //     .post('http://localhost:3005/users', {
  //       walletId: address,
  //     })
  //     .then((response) => {
  //       setData(response.data)
  //       window.alert(response.data)
  //     })
  //     .catch((error) => {
  //       console.error('Error sending data:', error)
  //     })
  // }

  return (
    <ConnectWalletContext.Provider
      value={{
        address,
        isConnected,
        account,
        connect,
        disconnect,
        postAddress,
      }}
    >
      {children}
    </ConnectWalletContext.Provider>
  );
};

export default ConnectWalletContextProvider;
