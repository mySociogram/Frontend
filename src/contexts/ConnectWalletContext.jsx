import React, { useState, createContext, useEffect } from 'react'
// import axios from 'axios'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export const ConnectWalletContext = createContext()

const ConnectWalletContextProvider = ({ children }) => {
  // const [data, setData] = useState()
  const [walletAddress, setWalletAddress] = useState('')
  const { address, isConnected, account } = useAccount()

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  const { disconnect } = useDisconnect()

  const postAddress = () => {
    const user = {
      walletId: walletAddress,
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }
    fetch('http://localhost:3005/users', options)
      .then((data) => {
        if (!data.ok) {
          throw Error(data.status)
        }
        return data.json()
      })
      .then((user) => {
        console.log(user)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    let walletAddress
    const addressFromStorage = localStorage.getItem('address')
    if (addressFromStorage) {
      walletAddress = JSON.parse(addressFromStorage)
      setWalletAddress(walletAddress)
    }
    postAddress()
  }, [walletAddress])

  console.log(walletAddress, 'address')

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
