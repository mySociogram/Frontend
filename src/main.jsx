import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import DashboardContextProvider from './contexts/DashboardContext.jsx'
import ConnectWalletContextProvider from './contexts/ConnectWalletContext.jsx'

import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'
import ContractContextProvider from './contexts/ContractContext.jsx'

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <WagmiConfig config={config}>
    <ConnectWalletContextProvider>
      <DashboardContextProvider>
        <ContractContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ContractContextProvider>
      </DashboardContextProvider>
    </ConnectWalletContextProvider>
  </WagmiConfig>
)
