import React, { useState, createContext, useEffect } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'

export const DashboardContext = createContext()

const DashboardContextProvider = ({ children }) => {
  let injectedProvider = false

  if (typeof window.ethereum !== 'undefined') {
    injectedProvider = true
    console.log(window.ethereum)
  }

  const isMetaMask = injectedProvider ? window.ethereum.isMetaMask : false

  const [hasProvider, setHasProvider] = useState(null)
  const initialState = { accounts: [] }
  const [wallet, setWallet] = useState(initialState)
  const [loading, setLoading] = useState(true)

  //updateWallet function that sets your new wallet state when you connect.
  const updateWallet = async (accounts) => {
    setWallet({ accounts })
    setLoading(false)
  }
  console.log(wallet)

  //convert the object into an array
  const address = Object.keys(wallet).map((key) => wallet[key])
  console.log(address[0][0])


  useEffect(() => {
    const refreshAccounts = (accounts) => {
      if (accounts.length > 0) {
        updateWallet(accounts)
      } else {
        setWallet(initialState)
      }
    }

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      console.log(provider)
      setHasProvider(Boolean(provider)) // transform provider to true or false

      if (provider) {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        })
        refreshAccounts(accounts)
        window.ethereum.on('accountsChanged', refreshAccounts)
      }
    }

    getProvider()
    return () => {
      window.ethereum?.removeListener('accountsChanged', refreshAccounts)
    }
  }, [])

  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    updateWallet(accounts)
  }

  return (
    <DashboardContext.Provider
      value={{
        isMetaMask,
        injectedProvider,
        hasProvider,
        wallet,
        loading,
        address,
        setLoading,
        handleConnect,
        setWallet,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export default DashboardContextProvider
