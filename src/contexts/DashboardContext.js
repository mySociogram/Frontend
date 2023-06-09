// storeContext contains our data from data.json
import React, { useState, createContext, useEffect, useContext } from 'react'

export const DashboardContext = createContext()

const DashboardContextProvider = ({ children }) => {
  const [key, setKey] = useState(true)
  // the array of data to hold the json data provided, data here as an array is empty.

  return (
    <DashboardContext.Provider
      value={{
        key,
        setKey,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export default DashboardContextProvider
