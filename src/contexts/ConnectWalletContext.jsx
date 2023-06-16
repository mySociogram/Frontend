import React, { useState, createContext, useEffect } from 'react'

export const ConnectWalletContext = createContext()

const ConnectWalletContextProvider = ({ children }) => {
  return (
    <ConnectWalletContext.Provider value={{}}>
      {children}
    </ConnectWalletContext.Provider>
  )
}

export default ConnectWalletContextProvider
