import React, { useState, createContext, useEffect } from 'react'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export const ConnectWalletContext = createContext()

const ConnectWalletContextProvider = ({ children }) => {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  console.log(address)
  return (
    <ConnectWalletContext.Provider
      value={{ address, isConnected, connect, disconnect }}
    >
      {children}
    </ConnectWalletContext.Provider>
  )
}

export default ConnectWalletContextProvider
