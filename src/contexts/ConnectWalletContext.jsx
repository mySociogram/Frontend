import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export const ConnectWalletContext = createContext()

const ConnectWalletContextProvider = ({ children }) => {
  const [data, setData] = useState()
  const { address, isConnected, account } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  const postAddress = () => {
    axios
      .post('http://localhost:3005/users', {
        walletId: address,
      })
      .then((response) => {
        setData(response.data)
        window.alert(response.data)
      })
      .catch((error) => {
        console.error('Error sending data:', error)
      })
  }
  useEffect(() => {
    postAddress()
  }, [])
  // useEffect(() => {
  //   const sendUserData = async () => {
  //     if (address) {
  //       try {
  //         const response = await axios.post('http://localhost:3005/users', {
  //           walletId: address,
  //         })
  //         setData(response.data)
  //       } catch (error) {
  //         console.error('Error sending data:', error)
  //       }
  //     }
  //   }

  //   if (address) {
  //     sendUserData()
  //   }
  // }, [address])

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
  )
}

export default ConnectWalletContextProvider
